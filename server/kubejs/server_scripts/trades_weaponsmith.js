MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:weaponsmith
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

// minecraft:shield
    event.addTrade('minecraft:weaponsmith', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:shield', 1, 2));
// minecraft:stone_sword
    event.addTrade('minecraft:weaponsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:stone_sword', 1, 2));
// minecraft:iron_sword
    event.addTrade('minecraft:weaponsmith', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:iron_sword', 1, 2));
// minecraft:diamond_sword
    event.addTrade('minecraft:weaponsmith', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:diamond_sword', 1, 2));
// minecraft:mace
    event.addTrade('minecraft:weaponsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:mace', 1, 2));
// ae2:certus_quartz_sword
    event.addTrade('minecraft:weaponsmith', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:certus_quartz_sword', 1, 2));
// ae2:fluix_sword
    event.addTrade('minecraft:weaponsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ae2:fluix_sword', 1, 2));
// ars_nouveau:enchanters_sword
    event.addTrade('minecraft:weaponsmith', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:enchanters_sword', 1, 2));
// create:cardboard_sword
    event.addTrade('minecraft:weaponsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('create:cardboard_sword', 1, 2));
// create:conferctionery:candy_cane_sword
    event.addTrade('minecraft:weaponsmith', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('create_confectionery:candy_cane_sword', 1, 2));
// iceandfire:silver_sword
    event.addTrade('minecraft:weaponsmith', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('iceandfire:silver_sword', 1, 2));
// iceandfire:copper_sword
    event.addTrade('minecraft:weaponsmith', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('iceandfire:copper_sword', 1, 2));
// alchemancy:lead_sword
    event.addTrade('minecraft:weaponsmith', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('alchemancy:lead_sword', 1, 2));
    
});