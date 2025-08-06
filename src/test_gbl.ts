import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { GBL_BUILD_DIR } from "./consts.js";
import { parseSilabsGbl, validateSilabsGbl } from "./validate_silabs_gbl.js";

function testGBL(filePath: string): void {
    const buf = readFileSync(filePath);

    validateSilabsGbl(buf);
    parseSilabsGbl(buf);

    console.info(`[${filePath} Image appears to be a valid GBL.`);
}

if (process.argv[2]) {
    testGBL(process.argv[2]);
} else {
    for (const file of readdirSync(GBL_BUILD_DIR)) {
        testGBL(join(GBL_BUILD_DIR, file));
    }
}
