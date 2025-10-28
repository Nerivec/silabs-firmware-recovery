# Silicon Labs firmware recovery

Tools to help in the recovery of misbehaving/bricked devices.

> [!CAUTION]
> This is highly experimental, and should only be used as a last resort. Consult the manufacturer of your device before. **Use at your own risk; no guarantee anything will work.**

# GBL firmware to clear flash areas

Depending on the state of your device, you may need to do some research into how to force the device into bootloader. Some adapters have a dedicated button, others require opening the casing.

_If your device cannot even enter the bootloader, you will not be able to use the methods below._

Some methods to (usually) force into bootloader:

-   Sonoff ZBDongle-E
    -   pressing the `BOOT` button (inside the casing), plugging it in, then releasing `BOOT` after a few seconds.
-   SMLight (SLZB-06 series)
    -   connecting `G` and `0` (inside the casing) then plugging it in. [More details](https://smlight.tech/flasher/#SLZB-06)
-   SMLight (SLZB-07 series)
    -   connecting `FLSH` with the metal part of the antenna (inside the casing). [More details](https://smlight.tech/manual-slzb-07/)

> [!TIP]
> In some cases, [universal-silabs-flasher](https://github.com/NabuCasa/universal-silabs-flasher) or [ember-zli](https://github.com/Nerivec/ember-zli) might be able to do that for you without opening the casing (`--bootloader-reset [yellow|ihost|slzb07|sonoff]` for the former, `Force reset` for the latter).

#### Flashing

You can try the following (non-exhaustive) software:

-   [universal-silabs-flasher](https://github.com/NabuCasa/universal-silabs-flasher) (dedicated to Silabs products)
-   [ember-zli](https://github.com/Nerivec/ember-zli) (dedicated to Silabs products)
-   [ExtraPuTTY](https://sourceforge.net/projects/extraputty/) (with XMODEM file transfer)
-   [SecureCRT](https://www.vandyke.com/products/securecrt/) (with XMODEM file transfer)

## NVM3 Clear

Clears the entire NVM3 section. Erases the non-volatile memory, including network configs, etc.. After flashing, you will need to restore or create a new network.

The file name format is as follow:
`<CHIP_NAME>_<GBL_TYPE>_<FLASH_BASE>_<FLASH_SIZE>_<FLASH_PAGE_SIZE>_<BTL_APPLICATION_BASE>_<NVM3_DEFAULT_NVM_SIZE>.gbl`

> [!IMPORTANT]
> Current builds are only intended for use with default project parameters (no customization to the bootloader or other relevant areas) used by `silabs-firmware-builder` projects. Check in the relevant location ([example](https://github.com/NabuCasa/silabs-firmware-builder/blob/522332517f5bd9fb1c418c2c883596b4879fe8e1/src/zigbee_ncp/zigbee_ncp.slcp#L48-L49)) in the repository of your firmware provider for the `NVM3_DEFAULT_NVM_SIZE` you should use (in most cases, it should be, NCP: 32768, RCP: 40960).

## APP Clear

Clears the entire section after the bootloader (including NVM3). Erases any firmware previously flashed. After flashing, only the bootloader will be available (automatically entered by the chip), and a new firmware will have to be flashed then run.

The file name format is as follow:
`<CHIP_NAME>_<GBL_TYPE>_<FLASH_BASE>_<FLASH_SIZE>_<FLASH_PAGE_SIZE>_<BTL_APPLICATION_BASE>.gbl`

> [!IMPORTANT]
> These are unusually big GBL files, flashing will take a lot longer than usual (~5 minutes for serial, 2-3 times that for TCP). Make sure your connection is solid and won't drop over the duration or you may have to start over.

# Chips for most common adapters

You can check the manifests in a [silabs-firmware-builder](https://github.com/Nerivec/silabs-firmware-builder/tree/main/manifests) repository to see the chip used by an adapter (usually on the second line, "device: ").

-   Aeotec ZGA008: EFR32MG21A020F1024IM32
-   easyiot ZB-GW04-1v1: EFR32MG21A020F768IM32
-   easyiot ZB-GW04-1v2: EFR32MG21A020F768IM32
-   NabuCasa SkyConnect: EFR32MG21A020F512IM32
-   NabuCasa Yellow: MGM210PA32JIA
-   NabuCasa ZBT-2: EFR32MG24A420F1536IM40
-   SeeedStudio XiaoMG24: EFR32MG24B220F1536IM48
-   SMLIGHT SLZB-06M: EFR32MG21A020F768IM32
-   SMLIGHT SLZB-06MG24: EFR32MG24A020F1024IM40
-   SMLIGHT SLZB-06MG26: EFR32MG26B420F3200IM48
-   SMLIGHT SLZB-07: EFR32MG21A020F768IM32
-   SMLIGHT SLZB-07MG24: EFR32MG24A020F1024IM40
-   SONOFF DONGLE-E: EFR32MG21A020F768IM32
-   SparkFun MGM240P: MGM240PB32VNA
-   TubesZB BM24: EFR32MG24A420F1536IM48
-   TubesZB MGM24: MGM240PA32VNN

> [!CAUTION]
> Always confirm the chip and adapter you are flashing are correct, else risk more problems.
