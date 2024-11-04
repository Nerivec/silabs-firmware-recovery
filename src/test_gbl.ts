import { readFileSync } from 'fs';

import { parseSilabsGbl, validateSilabsGbl } from './validate_silabs_gbl.js';

const filePath = process.argv[2];

if (filePath) {
    const buf = readFileSync(filePath);

    validateSilabsGbl(buf);
    parseSilabsGbl(buf);

    console.info(`Image appears to be a valid GBL.`);
}
