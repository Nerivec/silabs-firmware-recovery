import { GBLTagId } from './enums.js';

export function gblTagToBuffer(tag: GBLTagId): Buffer {
    const buf = Buffer.alloc(4);

    buf.writeUInt32BE(tag);

    return buf;
}
