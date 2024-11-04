import type { ChipInfo } from './types.js';

import { readFileSync, rmSync, writeFileSync } from 'fs';
import path from 'path';
import { crc32 } from 'zlib';

import { GBL_BUILD_DIR } from './consts.js';
import { GBLTagId } from './enums.js';
import { parseSilabsGbl } from './validate_silabs_gbl.js';

export function buildAppClearGBL({ chip, flashBase, flashSize, flashPageSize, btlApplicationBase }: ChipInfo): void {
    console.group(chip);
    console.log(`Building App Clear GBL...`);

    let position = 0;
    const appSize = flashSize - (btlApplicationBase - flashBase);
    const firmware = Buffer.alloc(16 + 36 + 8 + 4 + appSize + 12, 0xff);

    firmware.writeUInt32BE(GBLTagId.HEADER, position);
    firmware.writeUInt32LE(8, (position += 4));
    firmware.write('0000000300000000', (position += 4), 'hex');
    position += 8;

    firmware.writeUInt32BE(GBLTagId.APP_INFO, position);
    firmware.writeUInt32LE(28, (position += 4));
    firmware.write('00000000000000000000000000000000000000000000000000000000', (position += 4), 'hex');
    position += 28;

    firmware.writeUInt32BE(GBLTagId.PROGRAM_DATA2, position);
    firmware.writeUInt32LE(4 + appSize, (position += 4));
    // offset
    firmware.writeUInt32LE(btlApplicationBase, (position += 4));
    position += 4;
    position += appSize;

    firmware.writeUInt32BE(GBLTagId.END, position);
    firmware.writeUInt32LE(4, (position += 4));
    position += 4;
    firmware.writeUInt32LE(crc32(firmware.subarray(0, position)), position);

    const outFilePath = path.join(GBL_BUILD_DIR, `${chip}_app_clear_${flashBase}_${flashSize}_${flashPageSize}_${btlApplicationBase}.gbl`);

    writeFileSync(outFilePath, firmware);

    try {
        parseSilabsGbl(readFileSync(outFilePath));
    } catch (error) {
        rmSync(outFilePath, { force: true });

        throw error;
    }

    console.log(`Wrote ${outFilePath}`);
    console.groupEnd();
}
