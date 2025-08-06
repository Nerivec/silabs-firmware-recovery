import { readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { crc32 } from "node:zlib";
import { GBL_BUILD_DIR, NVM3_DEFAULT_NVM_SIZE } from "./consts.js";
import { GBLTagId } from "./enums.js";
import type { ChipInfo } from "./types.js";
import { parseSilabsGbl } from "./validate_silabs_gbl.js";

export function buildNVM3ClearGBL({ chip, flashBase, flashSize, flashPageSize, btlApplicationBase, nvm3DefaultNVMSizes }: ChipInfo): void {
    for (const nvm3DefaultNVMSize of nvm3DefaultNVMSizes) {
        console.group(chip);
        console.log("Building NVM3 Clear GBL...");

        let position = 0;
        const firmware = Buffer.alloc(16 + 36 + 8 + 4 + nvm3DefaultNVMSize + 12, 0xff);

        firmware.writeUInt32BE(GBLTagId.HEADER, position);
        position += 4;
        firmware.writeUInt32LE(8, position);
        position += 4;
        firmware.write("0000000300000000", position, "hex");
        position += 8;

        firmware.writeUInt32BE(GBLTagId.APP_INFO, position);
        position += 4;
        firmware.writeUInt32LE(28, position);
        position += 4;
        firmware.write("00000000000000000000000000000000000000000000000000000000", position, "hex");
        position += 28;

        firmware.writeUInt32BE(GBLTagId.PROGRAM_DATA2, position);
        position += 4;
        firmware.writeUInt32LE(4 + nvm3DefaultNVMSize, position);
        // offset
        position += 4;
        firmware.writeUInt32LE(flashSize - NVM3_DEFAULT_NVM_SIZE + flashBase, position);
        position += 4;

        for (let i = 0; i < nvm3DefaultNVMSize / flashPageSize; i++) {
            position += flashPageSize; // all FF's
        }

        firmware.writeUInt32BE(GBLTagId.END, position);
        position += 4;
        firmware.writeUInt32LE(4, position);
        position += 4;
        firmware.writeUInt32LE(crc32(firmware.subarray(0, position)), position);

        const outFilePath = path.join(
            GBL_BUILD_DIR,
            `${chip}_nvm3_clear_${flashBase}_${flashSize}_${flashPageSize}_${btlApplicationBase}_${nvm3DefaultNVMSize}.gbl`,
        );

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
}
