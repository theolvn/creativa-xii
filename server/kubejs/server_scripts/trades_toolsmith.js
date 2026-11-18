MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:toolsmith
    // simplehats:hatbag_common
    event.addTrade('minecraft:toolsmith', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:stone_pickaxe
    event.addTrade('minecraft:toolsmith', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:stone_pickaxe', 1, 2));
// minecraft:stone_shovel
    event.addTrade('minecraft:toolsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:stone_shovel', 1, 2));
// minecraft:stone_axe
    event.addTrade('minecraft:toolsmith', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:stone_axe', 1, 2));
// minecraft:stone_hoe
    event.addTrade('minecraft:toolsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:stone_hoe', 1, 2));
// minecraft:iron_axe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:iron_axe', 1, 2));
// minecraft:iron_shovel
    event.addTrade('minecraft:toolsmith', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:iron_shovel', 1, 2));
// minecraft:iron_pickaxe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:iron_pickaxe', 1, 2));
// minecraft:iron_hoe
    event.addTrade('minecraft:toolsmith', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:iron_hoe', 1, 2));
// minecraft:diamond_axe
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:diamond_axe', 1, 2));
// minecraft:diamond_shovel
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:diamond_shovel', 1, 2));
// minecraft:diamond_pickaxe
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:diamond_pickaxe', 1, 2));
// minecraft:diamond_hoe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:diamond_hoe', 1, 2));
// minecraft:anvil
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:anvil', 1, 2));
// quark:trowel
    event.addTrade('minecraft:toolsmith', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('quark:trowel', 1, 2));
// iceandfire:silver_axe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:silver_axe', 1, 2));
// iceandfire:silver_shovel
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:silver_shovel', 1, 2));
// iceandfire:silver_pickaxe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:silver_pickaxe', 1, 2));
// iceandfire:silver_hoe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:silver_hoe', 1, 2));
// iceandfire:copper_axe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('iceandfire:copper_axe', 1, 2));
// iceandfire:copper_shovel
    event.addTrade('minecraft:toolsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('iceandfire:copper_shovel', 1, 2));
// iceandfire:copper_pickaxe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('iceandfire:copper_pickaxe', 1, 2));
// iceandfire:copper_hoe
    event.addTrade('minecraft:toolsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('iceandfire:copper_hoe', 1, 2));
// alchemancy:lead_axe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('alchemancy:lead_axe', 1, 2));
// alchemancy:lead_shovel
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('alchemancy:lead_shovel', 1, 2));
// alchemancy:lead_pickaxe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('alchemancy:lead_pickaxe', 1, 2));
// alchemancy:lead_hoe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('alchemancy:lead_hoe', 1, 2));
// ae2:certus_quartz_axe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:certus_quartz_axe', 1, 2));
// ae2:certus_quartz_hoe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:certus_quartz_hoe', 1, 2));
// ae2:certus_quartz_pickaxe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:certus_quartz_pickaxe', 1, 2));
// ae2:certus_quartz_shovel
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:certus_quartz_shovel', 1, 2));
// ae2:fluix_axe
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:fluix_axe', 1, 2));
// ae2:fluix_hoe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:fluix_hoe', 1, 2));
// ae2:fluix_pickaxe
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:fluix_pickaxe', 1, 2));
// ae2:fluix_shovel
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:fluix_shovel', 1, 2));
// create_confectionery:candy_cane_axe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('create_confectionery:candy_cane_axe', 1, 2));
// create_confectionery:candy_cane_hoe
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('create_confectionery:candy_cane_hoe', 1, 2));
// create_confectionery:candy_cane_pickaxe
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('create_confectionery:candy_cane_pickaxe', 1, 2));
// create_confectionery:candy_cane_shovel
    event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('create_confectionery:candy_cane_shovel', 1, 2));
// cgs:axe_iron
    event.addTrade('minecraft:toolsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('cgs:axe_iron', 1, 2));
// cgs:axe_diamond
    event.addTrade('minecraft:toolsmith', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('cgs:axe_diamond', 1, 2));
    
});