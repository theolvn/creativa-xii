MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

    // simplehats:hatbag_common
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:armorer', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:armorer', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:armorer', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:armorer', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:armorer
    // minecraft:iron_ingot
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('minecraft:iron_ingot', 1, 4));
    // minecraft:copper_ingot
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 1, 2),  TradeItem.of('minecraft:copper_ingot', 1, 4));
    // iceandfire:silver_ingot
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('iceandfire:silver_ingot', 1, 4));
    // mekanism:ingot_lead
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 4, 6),  TradeItem.of('mekanism:ingot_lead', 1, 4));

    // minecraft:iron_ingot
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 3, 6),  TradeItem.of('minecraft:iron_ingot', 4, 8));
    // minecraft:copper_ingot
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('minecraft:copper_ingot', 4, 8));
    // iceandfire:silver_ingot
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 3, 6),  TradeItem.of('iceandfire:silver_ingot', 4, 8));
    // mekanism:ingot_lead
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('mekanism:ingot_lead', 4, 8));

    // minecraft:iron_ingot
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:iron_ingot', 8, 12));
    // minecraft:copper_ingot
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:copper_ingot', 8, 12));
    // iceandfire:silver_ingot
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('iceandfire:silver_ingot', 8, 12));
    // mekanism:ingot_lead
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 12, 24),  TradeItem.of('mekanism:ingot_lead', 8, 12));

    // minecraft:iron_ingot
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 10, 24),  TradeItem.of('minecraft:iron_ingot', 12, 16));
    // minecraft:copper_ingot
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:copper_ingot', 12, 16));
    // iceandfire:silver_ingot
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 10, 24),  TradeItem.of('iceandfire:silver_ingot', 12, 16));
    // mekanism:ingot_lead
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('mekanism:ingot_lead', 12, 16));

    // minecraft:iron_ingot
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 20, 48),  TradeItem.of('minecraft:iron_ingot', 16, 20));
    // minecraft:copper_ingot
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('minecraft:copper_ingot', 16, 20));
    // iceandfire:silver_ingot
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 20, 24),  TradeItem.of('iceandfire:silver_ingot', 16, 20));
    // mekanism:ingot_lead
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('mekanism:ingot_lead', 16, 20));

    // minecraft:blast_furnace
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:blast_furnace', 1));
    // minecraft:anvil
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:anvil', 1));
    // create:cardboard_boots
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('create:cardboard_boots', 1));
    // create:cardboard_leggings
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('create:cardboard_leggings', 1));
    // create:cardboard_chestplate
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('create:cardboard_chestplate', 1));
    // create:cardboard_helmet
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('create:cardboard_helmet', 1));
    // iceandfire:armor_copper_metal_boots
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:armor_copper_metal_boots', 1));
    // iceandfire:armor_copper_metal_leggings
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:armor_copper_metal_leggings', 1));
    // iceandfire:armor_copper_metal_chestplate
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:armor_copper_metal_chestplate', 1));
    // iceandfire:armor_copper_metal_helmet
    event.addTrade('minecraft:armorer', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:armor_copper_metal_helmet', 1));
    // iceandfire:armor_silver_metal_boots
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('iceandfire:armor_silver_metal_boots', 1));
    // iceandfire:armor_silver_metal_leggings
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('iceandfire:armor_silver_metal_leggings', 1));
    // iceandfire:armor_silver_metal_chestplate
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('iceandfire:armor_silver_metal_chestplate', 1));
    // iceandfire:armor_silver_metal_helmet
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('iceandfire:armor_silver_metal_helmet', 1));
    // minecraft:iron_boots
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:iron_boots', 1));
    // minecraft:iron_leggings
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:iron_leggings', 1));
    // minecraft:iron_chestplate
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:iron_chestplate', 1));
    // minecraft:iron_helmet
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:iron_helmet', 1));
    // minecraft:chainmail_boots
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:chainmail_boots', 1));
    // minecraft:chainmail_leggings
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:chainmail_leggings', 1));
    // minecraft:chainmail_chestplate
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:chainmail_chestplate', 1));
    // minecraft:chainmail_helmet
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:chainmail_helmet', 1));
    // minecraft:diamond_boots
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:diamond_boots', 1));
    // minecraft:diamond_leggings
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:diamond_leggings', 1));
    // minecraft:diamond_chestplate
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:diamond_chestplate', 1));
    // minecraft:diamond_helmet
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 16, 48),  TradeItem.of('minecraft:diamond_helmet', 1));
    // alchemancy:lead_boots
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 8, 32),  TradeItem.of('alchemancy:lead_boots', 1));
    // alchemancy:lead_leggings
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 8, 32),  TradeItem.of('alchemancy:lead_leggings', 1));
    // alchemancy:lead_chestplate
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 8, 32),  TradeItem.of('alchemancy:lead_chestplate', 1));
    // alchemancy:lead_helmet
    event.addTrade('minecraft:armorer', 2, TradeItem.of('minecraft:emerald', 8, 32),  TradeItem.of('alchemancy:lead_helmet', 1));
    // usefulslime:slime_boots
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('usefulslime:slime_boots', 1));
    // usefulslime:slime_leggings
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('usefulslime:slime_leggings', 1));
    // usefulslime:slime_chestplate
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('usefulslime:slime_chestplate', 1));
    // usefulslime:slime_helmet
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('usefulslime:slime_helmet', 1));
    // alexsmobs:crocodile_chestplate
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 32),  TradeItem.of('alexsmobs:crocodile_chestplate', 1));
    // alexsmobs:rocky_chestplate
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 32),  TradeItem.of('alexsmobs:rocky_chestplate', 1));
    // minecraft:iron_horse_armor
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:iron_horse_armor', 1));
    // minecraft:golden_horse_armor
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:golden_horse_armor', 1));
    // minecraft:diamond_horse_armor
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 12, 24),  TradeItem.of('minecraft:diamond_horse_armor', 1));
    // iceandfire:dragonarmor_copper_head
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('iceandfire:dragonarmor_copper_head', 1));
    // iceandfire:dragonarmor_copper_neck
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('iceandfire:dragonarmor_copper_neck', 1));
    // iceandfire:dragonarmor_copper_body
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('iceandfire:dragonarmor_copper_body', 1));
    // iceandfire:dragonarmor_copper_tail
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('iceandfire:dragonarmor_copper_tail', 1));
    // iceandfire:dragonarmor_iron_head
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_iron_head', 1));
    // iceandfire:dragonarmor_iron_neck
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_iron_neck', 1));
    // iceandfire:dragonarmor_iron_body
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_iron_body', 1));
    // iceandfire:dragonarmor_iron_tail
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_iron_tail', 1));
    // iceandfire:dragonarmor_silver_head
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_silver_head', 1));
    // iceandfire:dragonarmor_silver_neck
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_silver_neck', 1));
    // iceandfire:dragonarmor_silver_body
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_silver_body', 1));
    // iceandfire:dragonarmor_silver_tail
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 48),  TradeItem.of('iceandfire:dragonarmor_silver_tail', 1));
    // iceandfire:dragonarmor_gold_head
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 64),  TradeItem.of('iceandfire:dragonarmor_gold_head', 1));
    // iceandfire:dragonarmor_gold_neck
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 64),  TradeItem.of('iceandfire:dragonarmor_gold_neck', 1));
    // iceandfire:dragonarmor_gold_body
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 64),  TradeItem.of('iceandfire:dragonarmor_gold_body', 1));
    // iceandfire:dragonarmor_gold_tail
    event.addTrade('minecraft:armorer', 4, TradeItem.of('minecraft:emerald', 24, 64),  TradeItem.of('iceandfire:dragonarmor_gold_tail', 1));
    // iceandfire:dragonarmor_diamond_head
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:dragonarmor_diamond_head', 1));
    // iceandfire:dragonarmor_diamond_neck
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:dragonarmor_diamond_neck', 1));
    // iceandfire:dragonarmor_diamond_body
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:dragonarmor_diamond_body', 1));
    // iceandfire:dragonarmor_diamond_tail
    event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:dragonarmor_diamond_tail', 1));
    // minecraft:sentry_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:sentry_armor_trim_smithing_template', 1, 2));
    // minecraft:vex_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:vex_armor_trim_smithing_template', 1, 2));
    // minecraft:wild_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:wild_armor_trim_smithing_template', 1, 2));
    // minecraft:coast_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:coast_armor_trim_smithing_template', 1, 2));
    // minecraft:dune_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:dune_armor_trim_smithing_template', 1, 2));
    // minecraft:wayfinder_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:wayfinder_armor_trim_smithing_template', 1, 2));
    // minecraft:raiser_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:raiser_armor_trim_smithing_template', 1, 2));
    // minecraft:shaper_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:shaper_armor_trim_smithing_template', 1, 2));
    // minecraft:host_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:host_armor_trim_smithing_template', 1, 2));
    // minecraft:ward_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:ward_armor_trim_smithing_template', 1, 2));
    // minecraft:silence_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:silence_armor_trim_smithing_template', 1, 2));
    // minecraft:tide_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:tide_armor_trim_smithing_template', 1, 2));
    // minecraft:snout_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:snout_armor_trim_smithing_template', 1, 2));
    // minecraft:rib_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:rib_armor_trim_smithing_template', 1, 2));
    // minecraft:eye_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:eye_armor_trim_smithing_template', 1, 2));
    // minecraft:spire_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:spire_armor_trim_smithing_template', 1, 2));
    // minecraft:flow_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:flow_armor_trim_smithing_template', 1, 2));
    // minecraft:bolt_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('minecraft:bolt_armor_trim_smithing_template', 1, 2));
    // supplementaries:blast_armor_trim_smithing_template
    event.addTrade('minecraft:armorer', 3, TradeItem.of('minecraft:emerald', 8, 24),  TradeItem.of('supplementaries:blast_armor_trim_smithing_template', 1, 2));

});