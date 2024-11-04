import { mkdirSync, rmSync } from 'fs';

import { buildAppClearGBL } from './build_app_clear.js';
import { buildNVM3ClearGBL } from './build_nvm3_clear.js';
import {
    CHIP_EFR32MG21A020F512IM32,
    CHIP_EFR32MG21A020F768IM32,
    CHIP_EFR32MG21A020F1024IM32,
    CHIP_EFR32MG24A020F1024IM40,
    CHIP_MGM240PA32VNN,
    CHIP_MGM240PB32VNN,
    GBL_BUILD_DIR,
} from './consts.js';

if (process.argv[2] === 'build-gbls') {
    rmSync(GBL_BUILD_DIR, { recursive: true, force: true });
    mkdirSync(GBL_BUILD_DIR, { recursive: true });

    for (const chipInfo of [
        CHIP_EFR32MG21A020F512IM32,
        CHIP_EFR32MG21A020F768IM32,
        CHIP_EFR32MG21A020F1024IM32,
        CHIP_EFR32MG24A020F1024IM40,
        CHIP_MGM240PA32VNN,
        CHIP_MGM240PB32VNN,
    ]) {
        buildNVM3ClearGBL(chipInfo);
        buildAppClearGBL(chipInfo);
    }
}
