import type { ChipInfo } from "./types.js";

export const GBL_BUILD_DIR = "gbl-builds";

export const VALID_SILABS_CRC = 0x2144df1c;

// platform/bootloader/api/btl_interface.h

// /** ALL */
// // First stage takes a single flash page
// #define BTL_FIRST_STAGE_SIZE              (FLASH_PAGE_SIZE)

// <o NVM3_DEFAULT_NVM_SIZE> NVM3 Default Instance Size
// <i> Size of the NVM3 storage region in flash. This size should be aligned with
// <i> the flash page size of the device.
// <i> Default: 40960
export const NVM3_DEFAULT_NVM_SIZE = 40960;

// /** ALL MG21 _SILICON_LABS_GECKO_INTERNAL_SDID_200 (no apploader/custom) */
// // No bootloader area: Place the bootloader in main flash
// #define BTL_FIRST_STAGE_BASE              FLASH_BASE
// #define BTL_APPLICATION_BASE              (FLASH_BASE + 0x00004000UL)
// #define BTL_MAIN_STAGE_MAX_SIZE           (BTL_APPLICATION_BASE - BTL_FIRST_STAGE_SIZE)

// /** ALL MG24 _SILICON_LABS_GECKO_INTERNAL_SDID_215 (no apploader/custom) */
// // No bootloader area: Place the bootloader in main flash
// #define BTL_FIRST_STAGE_BASE              FLASH_BASE
// #define BTL_APPLICATION_BASE              (FLASH_BASE + 0x00006000UL)
// #define BTL_MAIN_STAGE_MAX_SIZE           (BTL_APPLICATION_BASE - (BTL_FIRST_STAGE_BASE + BTL_FIRST_STAGE_SIZE))

// /** ALL MG26 _SILICON_LABS_GECKO_INTERNAL_SDID_225 (no apploader/custom) */
// // No bootloader area: Place the bootloader in main flash
// #define BTL_FIRST_STAGE_BASE              FLASH_BASE
// #define BTL_APPLICATION_BASE              (FLASH_BASE + 0x00006000UL)
// #define BTL_MAIN_STAGE_MAX_SIZE           (BTL_APPLICATION_BASE - (BTL_FIRST_STAGE_BASE + BTL_FIRST_STAGE_SIZE))

const EFR32MG21A020F512IM32_FLASH_BASE = 0x00000000;

/**
 * platform/Device/SiliconLabs/EFR32MG21/Include/efr32mg21a020f512im32.h
 *
 * PROGRAM_DATA2 OFFSET 16,384
 */
export const CHIP_EFR32MG21A020F512IM32: ChipInfo = {
    chip: "EFR32MG21A020F512IM32",

    flashBase: EFR32MG21A020F512IM32_FLASH_BASE,
    flashSize: 0x00080000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG21A020F512IM32_FLASH_BASE + 0x00004000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const EFR32MG21A020F768IM32_FLASH_BASE = 0x00000000;

/**
 * platform/Device/SiliconLabs/EFR32MG21/Include/efr32mg21a020f768im32.h
 */
export const CHIP_EFR32MG21A020F768IM32: ChipInfo = {
    chip: "EFR32MG21A020F768IM32",

    flashBase: EFR32MG21A020F768IM32_FLASH_BASE,
    flashSize: 0x000c0000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG21A020F768IM32_FLASH_BASE + 0x00004000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const EFR32MG21A020F1024IM32_FLASH_BASE = 0x00000000;

/**
 * platform/Device/SiliconLabs/EFR32MG21/Include/efr32mg21a020f1024im32.h
 */
export const CHIP_EFR32MG21A020F1024IM32: ChipInfo = {
    chip: "EFR32MG21A020F1024IM32",

    flashBase: EFR32MG21A020F1024IM32_FLASH_BASE,
    flashSize: 0x00100000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG21A020F1024IM32_FLASH_BASE + 0x00004000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const EFR32MG24A020F1024IM40_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/EFR32MG24/Include/efr32mg24a020f1024im40.h
 */
export const CHIP_EFR32MG24A020F1024IM40: ChipInfo = {
    chip: "EFR32MG24A020F1024IM40",

    flashBase: EFR32MG24A020F1024IM40_FLASH_BASE,
    flashSize: 0x00100000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG24A020F1024IM40_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const EFR32MG24A420F1536IM40_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/EFR32MG24/Include/efr32mg24a420f1536im40.h
 */
export const CHIP_EFR32MG24A420F1536IM40: ChipInfo = {
    chip: "EFR32MG24A420F1536IM40",

    flashBase: EFR32MG24A420F1536IM40_FLASH_BASE,
    flashSize: 0x00180000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG24A420F1536IM40_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const EFR32MG24B220F1536IM48_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/EFR32MG24/Include/efr32mg24b220f1536im48.h
 */
export const CHIP_EFR32MG24B220F1536IM48: ChipInfo = {
    chip: "EFR32MG24B220F1536IM48",

    flashBase: EFR32MG24B220F1536IM48_FLASH_BASE,
    flashSize: 0x00180000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG24B220F1536IM48_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

export const MGM240PA32VNN_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/MGM24/Include/mgm240pa32vnn.h
 */
export const CHIP_MGM240PA32VNN: ChipInfo = {
    chip: "MGM240PA32VNN",

    flashBase: MGM240PA32VNN_FLASH_BASE,
    flashSize: 0x00180000,
    flashPageSize: 0x00002000,

    btlApplicationBase: MGM240PA32VNN_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const MGM240PB32VNN_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/MGM24/Include/mgm240pb32vnn.h
 */
export const CHIP_MGM240PB32VNN: ChipInfo = {
    chip: "MGM240PB32VNN",

    flashBase: MGM240PB32VNN_FLASH_BASE,
    flashSize: 0x00180000,
    flashPageSize: 0x00002000,

    btlApplicationBase: MGM240PB32VNN_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const MGM240PB32VNA_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/MGM24/Include/mgm240pb32vna.h
 */
export const CHIP_MGM240PB32VNA: ChipInfo = {
    chip: "MGM240PB32VNA",

    flashBase: MGM240PB32VNA_FLASH_BASE,
    flashSize: 0x00180000,
    flashPageSize: 0x00002000,

    btlApplicationBase: MGM240PB32VNA_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};

const EFR32MG26B420F3200IM48_FLASH_BASE = 0x08000000;

/**
 * platform/Device/SiliconLabs/EFR32MG26/Include/efr32mg26b420f3200im48.h
 */
export const CHIP_EFR32MG26B420F3200IM48: ChipInfo = {
    chip: "EFR32MG26B420F3200IM48",

    flashBase: EFR32MG26B420F3200IM48_FLASH_BASE,
    flashSize: 0x00320000,
    flashPageSize: 0x00002000,

    btlApplicationBase: EFR32MG26B420F3200IM48_FLASH_BASE + 0x00006000,

    nvm3DefaultNVMSizes: [NVM3_DEFAULT_NVM_SIZE, 32768],

    userdataBase: 0x0fe00000,
    userdataSize: 0x00000400,
    userdataEnd: 0x0fe003ff,
    userdataBits: 0xb,
};
