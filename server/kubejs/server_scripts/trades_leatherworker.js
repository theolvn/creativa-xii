MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:leatherworker
    // simplehats:hatbag_common
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:leather
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('minecraft:leather', 2, 4));
    // minecraft:leather
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 4, 6),  TradeItem.of('minecraft:leather', 4, 8));
    // minecraft:leather
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:leather', 8, 16));
    // minecraft:leather
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 12, 16),  TradeItem.of('minecraft:leather', 16, 32));
    // minecraft:leather
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('minecraft:leather', 32, 64));

// minecraft:leather_pants
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:leather_leggings', 1, 2));
// minecraft:leather_boost
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:leather_boots', 1, 2));
// minecraft:leather_cap
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:leather_helmet', 1, 2));
// minecraft:leather_boots
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:leather_chestplate', 1, 2));
// minecraft:leather_horse_armor
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:leather_horse_armor', 1, 2));
// minecraft:saddle
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:saddle', 1, 2));
// minecraft:rabbit_hide
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('minecraft:rabbit_hide', 2, 4));
    // minecraft:rabbit_hide
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 4, 6),  TradeItem.of('minecraft:rabbit_hide', 4, 8));
    // minecraft:rabbit_hide
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:rabbit_hide', 8, 16));
    // minecraft:rabbit_hide
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 12, 16),  TradeItem.of('minecraft:rabbit_hide', 16, 32));
    // minecraft:rabbit_hide
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('minecraft:rabbit_hide', 32, 64));

// minecraft:bundle
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:bundle', 1, 2));
// ars_elemental:curio_bag
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('ars_elemental:curio_bag', 1, 2));
// alexsmobs:kangaroo_hide
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('alexsmobs:kangaroo_hide', 2, 4));
    // alexsmobs:kangaroo_hide
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 12, 16),  TradeItem.of('alexsmobs:kangaroo_hide', 4, 8));
    // alexsmobs:kangaroo_hide
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('alexsmobs:kangaroo_hide', 8, 16));


// alexsmobs:outback_leggings
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 12, 16),  TradeItem.of('alexsmobs:emu_leggings', 1, 2));
// paraglider:paraglider
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('paraglider:paraglider', 1, 2));
// immersive_melodies:bagpipe
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('immersive_melodies:bagpipe', 1, 2));
// immersive_melodies:tiny_drum
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('immersive_melodies:tiny_drum', 1, 2));
// supplementaries:bellows
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('supplementaries:bellows', 1, 2));
// dustydecorations:cowhide_rug
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('dustydecorations:cowhide_rug', 1, 2));
// sophisticatedbackpacks:backpack
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('sophisticatedbackpacks:backpack', 1, 2));
// sophisticatedbackpacks:copper_backpack
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('sophisticatedbackpacks:copper_backpack', 1, 2));
// sophisticatedbackpacks:iron_backpack
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('sophisticatedbackpacks:iron_backpack', 1, 2));
// sophisticatedbackpacks:gold_backpack
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('sophisticatedbackpacks:gold_backpack', 1, 2));
// sophisticatedbackpacks:diamond_backpack
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('sophisticatedbackpacks:diamond_backpack', 1, 2));
// sophisticatedbackpacks:stack_upgrade_starter_tier
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('sophisticatedbackpacks:stack_upgrade_starter_tier', 1, 2));
// sophisticatedbackpacks:stack_upgrade_tier_1
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('sophisticatedbackpacks:stack_upgrade_tier_1', 1, 2));
// sophisticatedbackpacks:stack_upgrade_tier_2
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('sophisticatedbackpacks:stack_upgrade_tier_2', 1, 2));
// sophisticatedbackpacks:stack_upgrade_tier_3
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('sophisticatedbackpacks:stack_upgrade_tier_3', 1, 2));
// sophisticatedbackpacks:pickup_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:pickup_upgrade', 1, 2));
// sophisticatedbackpacks:filter_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:filter_upgrade', 1, 2));
// sophisticatedbackpacks:magnet_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:magnet_upgrade', 1, 2));
// sophisticatedbackpacks:feeding_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:feeding_upgrade', 1, 2));
// sophisticatedbackpacks:compacting_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:compacting_upgrade', 1, 2));
// sophisticatedbackpacks:void_upgrade
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:void_upgrade', 1, 2));
// sophisticatedbackpacks:restock_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:restock_upgrade', 1, 2));
// sophisticatedbackpacks:deposite_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:deposit_upgrade', 1, 2));
// sophisticatedbackpacks:refill_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:refill_upgrade', 1, 2));
// sophisticatedbackpacks:inceptor_upgrade
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:inception_upgrade', 1, 2));
// sophisticatedbackpacks:everlasting_upgrade
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:everlasting_upgrade', 1, 2));
// sophisticatedbackpacks:smelting_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:smelting_upgrade', 1, 2));
// sophisticatedbackpacks:smoking_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:smoking_upgrade', 1, 2));
// sophisticatedbackpacks:blasting_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:blasting_upgrade', 1, 2));
// sophisticatedbackpacks:stonecutter_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:stonecutter_upgrade', 1, 2));
// sophisticatedbackpacks:jukebox_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:jukebox_upgrade', 1, 2));
// sophisticatedbackpacks:tool_swapper_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:tool_swapper_upgrade', 1, 2));
// sophisticatedbackpacks:tank_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:tank_upgrade', 1, 2));
// sophisticatedbackpacks:battery_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:battery_upgrade', 1, 2));
// sophisticatedbackpacks:pump_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:pump_upgrade', 1, 2));
// sophisticatedbackpacks:anvil_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:anvil_upgrade', 1, 2));
// sophisticatedbackpacks:smithing_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:smithing_upgrade', 1, 2));
// sophisticatedbackpacks:alchemy_upgrade
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:alchemy_upgrade', 1, 2));
// sophisticatedbackpacks:mob_catcher_upgrade
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('sophisticatedbackpacks:mob_catcher_upgrade', 1, 2));
// arssophisticatedcompat:source_storage_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:source_storage_upgrade', 1, 2));
// arssophisticatedcompat:agronomic_sourcelink_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:agronomic_sourcelink_upgrade', 1, 2));
// arssophisticatedcompat:alchemical_sourcelink_upgrade
    event.addTrade('minecraft:leatherworker', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:alchemical_sourcelink_upgrade', 1, 2));
// arssophisticatedcompat:mycelial_sourcelink_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:mycelial_sourcelink_upgrade', 1, 2));
// arssophisticatedcompat:volcanic_sourcelink_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:volcanic_sourcelink_upgrade', 1, 2));
// arssophisticatedcompat:vitalic_sourcelink_upgrade
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:vitalic_sourcelink_upgrade', 1, 2));
// arssophisticatedcompat:enchanters_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:enchanters_upgrade', 1, 2));
// arssophisticatedcompat:potion_jar_upgrade
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('arssophisticatedcompat:potion_jar_upgrade', 1, 2));
// minecraft:white_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:white_harness', 1, 2));
// minecraft:light_gray_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:light_gray_harness', 1, 2));
// minecraft:gray_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:gray_harness', 1, 2));
// minecraft:black_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:black_harness', 1, 2));
// minecraft:blue_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:blue_harness', 1, 2));
// minecraft:brown_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:brown_harness', 1, 2));
// minecraft:green_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:green_harness', 1, 2));
// minecraft:red_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:red_harness', 1, 2));
// minecraft:orange_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:orange_harness', 1, 2));
// minecraft:yellow_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:yellow_harness', 1, 2));
// minecraft:pink_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:pink_harness', 1, 2));
// minecraft:purple_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:purple_harness', 1, 2));
// minecraft:light_blue_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:light_blue_harness', 1, 2));
// minecraft:cyan_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:cyan_harness', 1, 2));
// minecraft:magenta_harness
    event.addTrade('minecraft:leatherworker', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:magenta_harness', 1, 2));
// quark:seed_pouch
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('quark:seed_pouch', 1, 2));
// alexsmobs:falconry_glove
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('alexsmobs:falconry_glove', 1, 2));
// alexsmobs:falconry_hood
    event.addTrade('minecraft:leatherworker', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('alexsmobs:falconry_hood', 1, 2));
// supplementaries:sack
    event.addTrade('minecraft:leatherworker', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('supplementaries:sack', 1, 2));
// supplementaries:sack_white
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_white', 1, 2));
// supplementaries:sack_light_gray
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_light_gray', 1, 2));
// supplementaries:sack_gray
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_gray', 1, 2));
// supplementaries:sack_black
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_black', 1, 2));
// supplementaries:sack_blue
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_blue', 1, 2));
// supplementaries:sack_brown
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_brown', 1, 2));
// supplementaries:sack_green
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_green', 1, 2));
// supplementaries:sack_red
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_red', 1, 2));
// supplementaries:sack_orange
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_orange', 1, 2));
// supplementaries:sack_yellow
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_yellow', 1, 2));
// supplementaries:sack_pink
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_pink', 1, 2));
// supplementaries:sack_purple
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_purple', 1, 2));
// supplementaries:sack_light_blue
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_light_blue', 1, 2));
// supplementaries:sack_cyan
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_cyan', 1, 2));
// supplementaries:sack_magenta
    event.addTrade('minecraft:leatherworker', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('suppsquared:sack_magenta', 1, 2));
    
});