export enum GBLTagId {
    /**
     * This must be the first tag in the file.
     * The header tag contains the version number of the GBL file specification, and flags indicating the type of GBL file – whether it is signed or encrypted.
     */
    HEADER = 0xeb17a603,
    /** This tag contains information about the application update image that is contained in this GBL file */
    APP_INFO = 0xf40a0af4,
    /** This tag contains a complete encrypted Secure Engine update image. Only applicable on Series 2 devices. */
    SE_UPGRADE = 0x5ea617eb,
    /** This tag contains a complete bootloader update image. */
    BOOTLOADER = 0xf50909f5,
    /** This tag contains information about what application data to program at a specific address into the main flash memory. */
    PROGRAM_DATA1 = 0xfe0101fe,
    PROGRAM_DATA2 = 0xfd0303fd,
    /** This tag contains LZ4 compressed information about what application data to program at a specific address into the main flash memory. */
    PROGRAM_DATA_LZ4 = 0xfd0505fd,
    /** This tag contains LZMA compressed information about what application data to program at a specific address into the main flash memory. */
    PROGRAM_DATA_LZMA = 0xfd0707fd,
    /** This tag contains metadata that the bootloader does not parse, but can be returned to the application through a callback. */
    METADATA = 0xf60808f6,
    /** This tag contains a certificate that will be used to verify the authenticity of the GBL file. */
    CERTIFICATE = 0xf30b0bf3,
    /** This tag contains the ECDSA-P256 signature of all preceding data in the file. */
    SIGNATURE = 0xf70a0af7,
    /**
     * This tag indicates the end of the GBL file.
     * It contains a 32-bit CRC for the entire file as an integrity check. The CRC is a non-cryptographic check.
     * This must be the last tag.
     */
    END = 0xfc0404fc,
}
