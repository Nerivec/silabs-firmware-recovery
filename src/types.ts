/**
 * platform/Device/SiliconLabs/**
 */
export interface ChipInfo {
    chip: string;

    /** Flash Base Address `#define FLASH_BASE` */
    flashBase: number;
    /** Available Flash Memory `#define FLASH_SIZE` */
    flashSize: number;
    /** Flash Memory page size `#define FLASH_PAGE_SIZE` */
    flashPageSize: number;

    /* `#define BTL_APPLICATION_BASE` */
    btlApplicationBase: number;

    /* `#define NVM3_DEFAULT_NVM_SIZE` for various projects */
    nvm3DefaultNVMSizes: ReadonlyArray<number>;

    /** USERDATA base address `#define USERDATA_BASE` */
    userdataBase: number;
    /** USERDATA available address space `#define USERDATA_SIZE` */
    userdataSize: number;
    /** USERDATA end address `#define USERDATA_END` */
    userdataEnd: number;
    /** USERDATA used bits `#define USERDATA_BITS` */
    userdataBits: number;
}

/** @see GBLTagId.HEADER */
export interface GblTagHeader {
    /** Version of the GBL spec used in this file. uint32_t */
    version: number;
    /** Type of GBL. uint32_t */
    type: number;
}

/** @see GBLTagId.APP_INFO */
export interface GblTagAppInfo {
    /**
     * Bitfield representing type of application, e.g., @ref APPLICATION_TYPE_ZIGBEE
     * uint32_t
     */
    type: number;
    /** Version number for this application. uint32_t */
    version: number;
    /** Capabilities of this application. uint32_t */
    capabilities: number;
    /** Unique ID (UUID or GUID) for the product this application is built for. uint8_t[16] */
    productId: Buffer;
}

/** @see GBLTagId.BOOTLOADER */
export interface GblTagBootloader {
    /** Version number of the bootloader. uint32_t */
    bootloaderVersion: number;
    /** Address of the bootloader. uint32_t */
    address: number;
    /** Array of data for bootloader upgrade. uint8_t* */
    data: Buffer;
}

/** @see GBLTagId.PROGRAM_DATA1 @see GBLTagId.PROGRAM_DATA2 @see GBLTagId.PROGRAM_DATA_LZ4 @see GBLTagId.PROGRAM_DATA_LZMA */
export interface GblTagProgType {
    /** Address to start flashing. uint32_t */
    flashStartAddress: number;
    /** Array of data to flash uint8_t* */
    data: Buffer;
}

/** @see GBLTagId.CERTIFICATE */
export interface GblTagCertificate {
    /** Version of the certificate structure. uint8_t */
    structVersion: number;
    /** Reserved flags. uint8_t[3] */
    flags: [number, number, number];
    /** Public key. uint8_t[64] */
    key: Buffer;
    /** The version number of this certificate. uint32_t */
    version: number;
    /** Signature of the certificate. uint8_t[64] */
    signature: Buffer;
}

/** @see GBLTagId.SIGNATURE */
export interface GblTagSignature {
    /** R-point of ECDSA secp256r1 signature. uint8_t[32] */
    r: Buffer;
    /** S-point of ECDSA secp256r1 signature. uint8_t[32] */
    s: Buffer;
}

/** @see GBLTagId.END */
export interface GblTagEnd {
    /** CRC32 of the entire GBL file. uint32_t */
    gblCrc: number;
}
