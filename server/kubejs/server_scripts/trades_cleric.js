MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:cleric
    // simplehats:hatbag_common
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:cleric', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:cleric', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:cleric', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:cleric', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:lapis_lazuli
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:lapis_lazuli', 4, 8));
    // minecraft:lapis_lazuli
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:lapis_lazuli', 6, 16));
    // minecraft:lapis_lazuli
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 12, 24),  TradeItem.of('minecraft:lapis_lazuli', 12, 24));
    // minecraft:lapis_lazuli
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('minecraft:lapis_lazuli', 20, 48));
    // minecraft:lapis_lazuli
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('minecraft:lapis_lazuli', 40, 64));

// minecraft:amethyst_shard
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:amethyst_shard', 2, 8));
    // minecraft:amethyst_shard
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:amethyst_shard', 6, 16));
    // minecraft:amethyst_shard
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 12, 24),  TradeItem.of('minecraft:amethyst_shard', 12, 24));
    // minecraft:amethyst_shard
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('minecraft:amethyst_shard', 20, 48));
    // minecraft:amethyst_shard
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('minecraft:amethyst_shard', 40, 64));

// supplementaries:lumisene_bottle
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('supplementaries:lumisene_bottle', 1, 4));
// alchemancy:alchemical_extract
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 12),  TradeItem.of('alchemancy:alchemical_extract', 1, 4));
// ars_nouveau:source_gem
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('ars_nouveau:source_gem', 1, 4));
// ars_nouveau:abjuration_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:abjuration_essence', 1, 4));
// ars_nouveau:conjuration_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:conjuration_essence', 1, 4));
// ars_nouveau:air_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:air_essence', 1, 4));
// ars_nouveau:earth_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:earth_essence', 1, 4));
// ars_nouveau:fire_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:fire_essence', 1, 4));
// ars_nouveau:manipulation_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:manipulation_essence', 1, 4));
// ars_nouveau:water_essence
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:water_essence', 1, 4));
// sauce:anima_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('sauce:anima_essence', 1, 4));
// ars_elemancy:tempest_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('ars_elemancy:tempest_essence', 1, 4));
// ars_elemancy:silt_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('ars_elemancy:silt_essence', 1, 4));
// ars_elemancy:mire_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('ars_elemancy:mire_essence', 1, 4));
// ars_elemancy:lava_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('ars_elemancy:lava_essence', 1, 4));
// ars_elemancy:cinder_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('ars_elemancy:cinder_essence', 1, 4));
// ars_elemancy:vapor_essence
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('ars_elemancy:vapor_essence', 1, 4));
// minecraft:ender_pearl
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:ender_pearl', 1, 4));
    // minecraft:ender_pearl
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 10, 18),  TradeItem.of('minecraft:ender_pearl', 2, 6));
    // minecraft:ender_pearl
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 12, 20),  TradeItem.of('minecraft:ender_pearl', 4, 8));
    // minecraft:ender_pearl
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 14, 24),  TradeItem.of('minecraft:ender_pearl', 6, 12));

// minecraft:redstone
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:redstone', 4, 8));
    // minecraft:redstone
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:redstone', 8, 16));
    // minecraft:redstone
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('minecraft:redstone', 16, 32));
    // minecraft:redstone
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:redstone', 32, 48));
    // minecraft:redstone
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('minecraft:redstone', 48, 64));

// iceandfire:sapphire
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('iceandfire:sapphire_gem', 1, 4));
// malum:refined_brilliance
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:refined_brilliance', 1, 4));
// malum:blazing_quartz
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('malum:blazing_quartz', 1, 4));
// malum:cthonic_gold
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('malum:cthonic_gold', 1, 4));
// malum:grim_talc
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:grim_talc', 1, 4));
// malum:astral_weave
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:astral_weave', 1, 4));
// malum:wind_nucleus
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:wind_nucleus', 1, 4));
// malum:warp_flux
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('malum:warp_flux', 1, 4));
// malum:hex_ash
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:hex_ash', 1, 4));
// malum:living_flesh
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:living_flesh', 1, 4));
// malum:alchemical_calx
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:alchemical_calx', 1, 4));
// malum:soulwoven_silk
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('malum:soulwoven_silk', 1, 4));
// malum:gilded_ring
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:gilded_ring', 1, 2));
// malum:gilded_belt
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:gilded_belt', 1, 2));
// malum:ornate_ring
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:ornate_ring', 1, 2));
// malum:ornate_necklace
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:ornate_necklace', 1, 2));
// malum:runic_brooch
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:runic_brooch', 1, 4));
// malum:elaborate_brooch
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:elaborate_brooch', 1, 4));
// malum:glass_brooch
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:glass_brooch', 1, 4));
// malum:gluttonous_brooch
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:gluttonous_brooch', 1, 4));
// malum:ring_of_esoteric_spoils
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:ring_of_esoteric_spoils', 1, 2));
// minecraft:bone
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:bone', 2, 8));
    // minecraft:bone
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:bone', 4, 16));
    // minecraft:bone
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:bone', 8, 32));
    // minecraft:bone
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('minecraft:bone', 16, 48));
    // minecraft:bone
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:bone', 24, 64));

// minecraft:gunpowder
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:gunpowder', 2, 8));
    // minecraft:gunpowder
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:gunpowder', 4, 16));
    // minecraft:gunpowder
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:gunpowder', 8, 32));
    // minecraft:gunpowder
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('minecraft:gunpowder', 16, 48));
    // minecraft:gunpowder
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:gunpowder', 24, 64));

// minecraft:blaze_powder
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:blaze_powder', 2, 6));
// minecraft:quartz
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:quartz', 2, 8));
    // minecraft:quartz
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('minecraft:quartz', 8, 16));
    // minecraft:quartz
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('minecraft:quartz', 16, 32));

// ae2:certus_quartz
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:certus_quartz_crystal', 2, 6));
// minecraft:rotten_flesh
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:rotten_flesh', 2, 6));
    // minecraft:rotten_flesh
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:rotten_flesh', 4, 12));
    // minecraft:rotten_flesh
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:rotten_flesh', 8, 16));
    // minecraft:rotten_flesh
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('minecraft:rotten_flesh', 12, 24));
    // minecraft:rotten_flesh
    event.addTrade('minecraft:cleric', 5, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:rotten_flesh', 16, 32));

// malum:rotting_essence
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('malum:rotting_essence', 1, 4));
// minecraft:nether wart
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:nether_wart', 1, 4));
// minecraft:fermented spider eye
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:fermented_spider_eye', 1, 4));
// minecraft:ghast tear
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:ghast_tear', 1, 4));
// minecraft:diamond
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:diamond', 1, 4));
// reliquified_artifacts:mimi_dust
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('reliquified_artifacts:mimi_dust', 1, 4));
// alchemancy:dreamsteel_ingot
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('alchemancy:dreamsteel_ingot', 1, 4));
// ars_nouveau:codex_entry
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_additions:codex_entry', 1, 2));
// ars_nouveau:lost_codex_entry
    event.addTrade('minecraft:cleric', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_additions:lost_codex_entry', 1, 2));
// ars_nouveau:ancient_codex_entry
    event.addTrade('minecraft:cleric', 1, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('ars_additions:ancient_codex_entry', 1, 2));
// ars_nouveau:magebloom_crop
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:magebloom_crop', 1, 4));
// ars_nouveau:blue_archwood_sapling
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:blue_archwood_sapling', 1, 4));
// ars_nouveau:red_archwood_sapling
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:red_archwood_sapling', 1, 4));
// ars_nouveau:purple_archwood_sapling
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:purple_archwood_sapling', 1, 4));
// ars_nouveau:green_archwood_sapling
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:green_archwood_sapling', 1, 4));
// ars_nouveau:mendosteen_pod
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:mendosteen_pod', 1, 4)); 
// ars_nouveau:bastion_pod
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:bastion_pod', 1, 4));
// ars_nouveau:frostaya_pod
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:frostaya_pod', 1, 4));
// ars_nouveau:bombegranate_pod
    event.addTrade('minecraft:cleric', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:bombegranate_pod', 1, 4));
// ars_nouveau:novice_spell_book
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:novice_spell_book', 1, 2));
// ars_nouveau:worn_notebook
    event.addTrade('minecraft:cleric', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:worn_notebook', 1, 2)); 
    
});