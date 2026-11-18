MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:butcher
    // simplehats:hatbag_common
    event.addTrade('minecraft:butcher', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:butcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:butcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:butcher', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:butcher', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:butcher', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:butcher', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:beef
    event.addTrade('minecraft:butcher', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:beef', 1, 8));
// minecraft:porkchop
    event.addTrade('minecraft:butcher', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:porkchop', 1, 8));
// minecraft:mutton
    event.addTrade('minecraft:butcher', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:mutton', 1, 8));
// minecraft:chicken
    event.addTrade('minecraft:butcher', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:chicken', 1, 8));
// minecraft:rabbit
    event.addTrade('minecraft:butcher', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:rabbit', 1, 8));
// minecraft:farmersdelight:chicken_cuts
    event.addTrade('minecraft:butcher', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('farmersdelight:chicken_cuts', 4, 12));
// minecraft:farmersdelight:bacon
    event.addTrade('minecraft:butcher', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('farmersdelight:bacon', 4, 12));
// minecraft:farmersdelight:mutton_chops
    event.addTrade('minecraft:butcher', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('farmersdelight:mutton_chops', 4, 12));
// minecraft:farmersdelight:minced_beef
    event.addTrade('minecraft:butcher', 2, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('farmersdelight:minced_beef', 4, 12));
// dustydecorations:raw_bratwurt_sausage
    event.addTrade('minecraft:butcher', 2, TradeItem.of('minecraft:emerald', 3, 8),  TradeItem.of('dustydecorations:raw_bratwurst_sausage', 1, 6));
// mynethersdelight:hoglin_loin
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 3, 10),  TradeItem.of('mynethersdelight:hoglin_loin', 1, 6));
// mynethersdelight:hoglin_sausage
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 3, 10),  TradeItem.of('mynethersdelight:hoglin_sausage', 1, 6));
// mynethersdelight:strider_slice
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 3, 10),  TradeItem.of('mynethersdelight:strider_slice', 1, 6));
// mynethersdelight:minced_strider
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 3, 10),  TradeItem.of('mynethersdelight:minced_strider', 1, 6));
// minecraft:cooked_beef
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('minecraft:cooked_beef', 1, 6));
// minecraft:cooked_porkchop
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('minecraft:cooked_porkchop', 1, 6));
// minecraft:cooked_mutton
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('minecraft:cooked_mutton', 1, 6));
// minecraft:cooked_chicken
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('minecraft:cooked_chicken', 1, 6));
// minecraft:cooked_rabbit
    event.addTrade('minecraft:butcher', 3, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('minecraft:cooked_rabbit', 1, 6));
// minecraft:farmersdelight:cooked_chicken_cuts
    event.addTrade('minecraft:butcher', 4, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('farmersdelight:cooked_chicken_cuts', 4, 12));
// minecraft:farmersdelight:cooked_bacon
    event.addTrade('minecraft:butcher', 4, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('farmersdelight:cooked_bacon', 4, 12));
// minecraft:farmersdelight:cooked_mutton_chops
    event.addTrade('minecraft:butcher', 4, TradeItem.of('minecraft:emerald', 4, 10),  TradeItem.of('farmersdelight:cooked_mutton_chops', 4, 12));
// mynethersdelight:cooked_loin
    event.addTrade('minecraft:butcher', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('mynethersdelight:cooked_loin', 1, 4));
// mynethersdelight:roasted_sausage
    event.addTrade('minecraft:butcher', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('mynethersdelight:roasted_sausage', 1, 4));
// dustydecorations:raw_bratwurt_sausage
    event.addTrade('minecraft:butcher', 5, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('dustydecorations:smoked_bratwurst_sausage', 1, 4));
    
});