const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

function createFluid(event, id, color, displayName) {
    event.create(id)
        .displayName(displayName)
        .tint(color)
        .tag('kubejs:' + id)
        .type(type => type
            .renderType(3)
            .stillTexture('kubejs:block/thin_fluid_still')
            .flowingTexture('kubejs:block/thin_fluid_flow')
            .fallDistanceModifier(0)
            .addDripstoneDripping(
                1,
                $ParticleTypes.DRIPPING_DRIPSTONE_WATER,
                'minecraft:water_cauldron',
                $SoundEvents.POINTED_DRIPSTONE_DRIP_WATER
            )
        )
}

StartupEvents.registry('fluid', event => {

    createFluid(event, 'liquid_alchemical_extract', 0xD65623, 'Liquid Alchemical Extract')

    createFluid(event, 'wheat_beer', 0xDDBB64, 'Wheat Beer')
    createFluid(event, 'barley_beer', 0xEBB445, 'Barley Beer')
    createFluid(event, 'hops_beer', 0xDEC4AB, 'Hops Beer')
    createFluid(event, 'nettle_beer', 0xEACE8E, 'Nettle Beer')
    createFluid(event, 'oat_beer', 0xFCCF69, 'Oat Beer')
    createFluid(event, 'haley_beer', 0xDF64CF, 'Haley Beer')

    createFluid(event, 'doub_pissyak_whiskey', 0xDDBB64, 'Doub Pissyak Original Whiskey') //jojannik_whiskey
    createFluid(event, 'brandice_whiskey', 0xBE0E22, 'Brandice Whiskey') //lilitusinglemalt_whiskey
    createFluid(event, 'odakivas_regal_scotch_whiskey', 0xFCE728, 'Odakivas Regal Scotch Whiskey') //cristelwalker_whiskey
    createFluid(event, 'flutchov_single_malt_whiskey', 0xCBA91D, 'Flutchov Single Malt Whiskey') //maggoallan_whiskey
    createFluid(event, 'annyeong_haseyo_whiskey', 0xDDBB64, 'Annyeong Haseyo Whiskey') //carrasconlabel_whiskey
    createFluid(event, 'midlane_ganks_whiskey', 0xDD7814, 'Midlane Ganks Whiskey') //ak_whiskey
    createFluid(event, 'bdd_signature_whiskey', 0xDD7814, 'BDD Signature Whiskey') //highland_hearth_whiskey
    createFluid(event, 'veterano_whiskey', 0xF79B00, 'Veterano Whiskey') //smokey_reverie_whiskey
    createFluid(event, 'valentines_whiskey', 0xE5872A, 'Valentines Whiskey') //jamesons_malt_whiskey

    createFluid(event, 'doub_pissyak_whiskey_wort', 0x7A5A2B, 'Doub Pissyak Whiskey Wort') //jojannik_whiskey_wort
    createFluid(event, 'brandice_whiskey_wort', 0x5B2A1D, 'Brandice Whiskey Wort') //lilitusinglemalt_whiskey_wort
    createFluid(event, 'odakivas_regal_scotch_whiskey_wort', 0x8A6528, 'Odakivas Regal Scotch Whiskey Wort') //cristelwalker_whiskey_wort
    createFluid(event, 'flutchov_whiskey_wort', 0x6D4E1F, 'Flutchov Whiskey Wort') //maggoallan_whiskey_wort
    createFluid(event, 'annyeong_haseyo_whiskey_wort', 0x70532A, 'Annyeong Haseyo Whiskey Wort') //carrasconlabel_whiskey_wort
    createFluid(event, 'midlane_ganks_whiskey_wort', 0x6A3E1A, 'Midlane Ganks Whiskey Wort') //ak_whiskey_wort
    createFluid(event, 'bdd_signature_whiskey_wort', 0x5C3A1C, 'BDD Signature Whiskey Wort') //highland_hearth_whiskey_wort
    createFluid(event, 'veterano_whiskey_wort', 0x6B4215, 'Veterano Whiskey Wort') //smokey_reverie_whiskey_wort
    createFluid(event, 'valentines_whiskey_wort', 0x7C4F20, 'Valentines Whiskey Wort') //jamesons_malt_whiskey_wort

    createFluid(event, 'red_grapejuice', 0x6B3871, 'Red Grapejuice')
    createFluid(event, 'white_grapejuice', 0xD4CEAE, 'White Grapejuice')
    createFluid(event, 'red_taiga_grapejuice', 0x6B3871, 'Red Taiga Grapejuice')
    createFluid(event, 'white_taiga_grapejuice', 0xD4CEAE, 'White Taiga Grapejuice')
    createFluid(event, 'red_jungle_grapejuice', 0x6B3871, 'Red Jungle Grapejuice')
    createFluid(event, 'white_jungle_grapejuice', 0xD4CEAE, 'White Jungle Grapejuice')
    createFluid(event, 'red_savanna_grapejuice', 0x6B3871, 'Red Savanna Grapejuice')
    createFluid(event, 'white_savanna_grapejuice', 0xD4CEAE, 'White Savanna Grapejuice')

    createFluid(event, 'apple_juice', 0xDEA541, 'Apple Juice')
    createFluid(event, 'apple_cider', 0xD6D375, 'Apple Cider')
    createFluid(event, 'apple_wine', 0xD6D375, 'Apple Wine')

    createFluid(event, 'kaslow_wine', 0x8D9D6B, 'Kaslow Blanc') //mellohi_wine
    createFluid(event, 'vivipiss_wine', 0xFCCF54, 'Vivipiss Wine') //glowing_wine
    createFluid(event, 'cocoticity_wine', 0xCEAE57, 'Cocoticity Wine') //solaris_wine
    createFluid(event, 'noir_wine', 0x1C193B, 'Noir Wine')
    createFluid(event, 'red_wine', 0x5F2430, 'Red Wine')
    createFluid(event, 'chateau_blackal_wine', 0x173443, 'Château Blackal') //strad_wine
    createFluid(event, 'cherry_wine', 0xCD1A19, 'Cherry Wine')
    createFluid(event, 'saint_foetus_wine', 0xFBC9E3, 'Saint-Foetus Grand Cru') //cristel_wine
    createFluid(event, 'creepers_crush', 0x4BB600, 'Creepers Crush')
    createFluid(event, 'kelp_cider', 0x1C9E3F, 'Kelp Cider')
    createFluid(event, 'vino_di_caccia_wine', 0xA42838, 'Vino Di Caccia') //lilitu_wine
    createFluid(event, 'domaine_emmalex_wine', 0xBE0E22, 'Domaine Emmalex') //jo_special_mixture_wine
    createFluid(event, 'stella_montis_heritage', 0x82D7FC, 'Stella Montis Heritage') //eiswein
    createFluid(event, 'chateau_kaer_morhen_wine', 0xEBD382, 'Château Kaer Morhen') //aegis_wine
    createFluid(event, 'kazbar_milan_wine', 0xE35E5E, 'Kazbar-Milan Wine') //bolvar_wine
    createFluid(event, 'chorus_wine', 0xF953BF, 'Chorus Wine')
    createFluid(event, 'villagers_fright', 0x8F96AE, 'Villagers Fright')
    createFluid(event, 'chateau_bowser_wine', 0x262626, 'Château Bowser') //clark_wine
    createFluid(event, 'magnetic_wine', 0x641F32, 'Magnetic Wine')
    createFluid(event, 'costa_del_perro_wine', 0xE34242, 'Costa Del Perro Wine') //stal_wine
    createFluid(event, 'rose_mateus_wine', 0xB54646, 'Rosé Mateus') //chenet_wine
    createFluid(event, 'mojang_noir', 0x7D6D7D, 'Mojang Noir')
    createFluid(event, 'bacchus_utimate_wine', 0xB24571, 'Bacchus Ultimate') //jellie_wine


})