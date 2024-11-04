import assert from 'assert';
import { crc32 } from 'zlib';

import { VALID_SILABS_CRC } from './consts.js';
import { GBLTagId } from './enums.js';
import { gblTagToBuffer } from './utils.js';

export function validateSilabsGbl(data: Buffer): void {
    assert(data.indexOf(gblTagToBuffer(GBLTagId.HEADER)) === 0, `Not a GBL image`);

    const gblEndTagIndex = data.indexOf(gblTagToBuffer(GBLTagId.END));

    assert(gblEndTagIndex > 16, `Not a GBL image`); // HEADER + length + 8, just because...

    const gblEnd = gblEndTagIndex + 12; // tag + length + crc32 (3*4)
    const gbl = data.subarray(0, gblEnd);

    if (data.length != gbl.length) {
        console.warn(`GBL image contains padding: ${data.subarray(gbl.length).toString('hex')}`);
    }

    // ignore padding here
    const calculatedCrc32 = crc32(gbl);

    assert(calculatedCrc32 === VALID_SILABS_CRC, `Image CRC-32 is invalid`);
}

export function parseSilabsGbl(data: Buffer): void {
    let position = 0;

    while (position + 8 <= data.length) {
        const tag = data.readUInt32BE(position);
        const len = data.readUInt32LE(position + 4);
        position += 8 + len;
        const value = data.subarray(position - len, position);

        if (value.length < len) {
            break;
        }

        console.log(`TAG: `, GBLTagId[tag] ?? tag, len);

        if (tag === GBLTagId.HEADER) {
            console.log(`  version=${value.readUInt32BE(0)} type=${value.readUInt32BE(4)}`);
        } else if (tag === GBLTagId.BOOTLOADER) {
            console.log(`  bootloaderVersion=${value.readUInt32LE(0)} address=${value.readUInt32LE(4)}`);
        } else if (
            tag === GBLTagId.PROGRAM_DATA1 ||
            tag === GBLTagId.PROGRAM_DATA2 ||
            tag === GBLTagId.PROGRAM_DATA_LZ4 ||
            tag === GBLTagId.PROGRAM_DATA_LZMA
        ) {
            console.log(`  flashStartAddress=${value.readUInt32LE(0)} (${value.subarray(0, 4).toString('hex')})`);
        }

        if (tag !== GBLTagId.END) {
            continue;
        }

        // ignore padding
        const calculatedCrc32 = crc32(data.subarray(0, position));

        assert(calculatedCrc32 === VALID_SILABS_CRC, `Image CRC-32 is invalid`);

        return;
    }

    throw new Error(`Image is truncated, not long enough to contain a valid tag`);
}
