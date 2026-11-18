MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:cartographer
    // simplehats:hatbag_common
    event.addTrade('minecraft:cartographer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:paper
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:paper', 2, 8));
// minecraft:torch
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:torch', 4, 16));
// minecraft:lantern
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:lantern', 4, 8));
// minecraft:map
    event.addTrade('minecraft:cartographer', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:map', 1, 2));
// minecraft:lodestone
    event.addTrade('minecraft:cartographer', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:lodestone', 1));
// cluttered:antique_map
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('cluttered:antique_map', 1));
// dustydecorations:treasure_map
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('dustydecorations:treasure_map', 1));
// supplementaries:globe
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('supplementaries:globe', 1));
// supplementaries:globe_sepia
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('supplementaries:globe_sepia', 1));
// supplementaries:antique_ink
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('supplementaries:antique_ink', 1));
// supplementaries:rope
    event.addTrade('minecraft:cartographer', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('supplementaries:rope', 4, 16));
// minecraft:compass
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:compass', 1));
// minecraft:recovery_compass
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:recovery_compass', 1));
// naturescompass:naturescompass
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('naturescompass:naturescompass', 1));
// ae2:meteorite_compass
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 12, 32),  TradeItem.of('ae2:meteorite_compass', 1));
// minecraft:brush
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:brush', 1));
// betterarcheology:iron_brush
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('betterarcheology:iron_brush', 1));
// betterarcheology:diamond_brush
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('betterarcheology:diamond_brush', 1));
// betterarcheology:netherite_brush
    event.addTrade('minecraft:cartographer', 1, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('betterarcheology:netherite_brush', 1));
// furniture:explorers_box
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('furniture:explorers_box', 1));
// dustydecorations:bovine_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('dustydecorations:bovine_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// dustydecorations:equine_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('dustydecorations:equine_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// dustydecorations:canine_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('dustydecorations:canine_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:hippogryph_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:hippogryph_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:cyclops_skull
    event.addTrade('minecraft:cartographer', 3,  TradeItem.of('iceandfire:cyclops_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:cockatrice_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:cockatrice_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:stymphalian_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:stymphalian_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:troll_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:troll_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:amphithere_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:amphithere_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:seaserpent_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:seaserpent_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:hydra_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:hydra_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// iceandfire:hydra_skull
    event.addTrade('minecraft:cartographer', 3, TradeItem.of('iceandfire:hydra_skull', 1), TradeItem.of('minecraft:emerald', 8, 32));
// waystones:blank_scroll
    event.addTrade('minecraft:cartographer', 4, TradeItem.of('minecraft:emerald', 6),  TradeItem.of('waystones:blank_scroll', 1));
// waystones:warp_stone
    event.addTrade('minecraft:cartographer', 5, TradeItem.of('minecraft:emerald', 6),  TradeItem.of('waystones:warp_stone', 1));
    
});