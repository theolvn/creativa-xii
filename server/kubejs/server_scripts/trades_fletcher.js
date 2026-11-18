MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:fletcher
    // simplehats:hatbag_common
    event.addTrade('minecraft:fletcher', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:arrow
    event.addTrade('minecraft:fletcher', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:arrow', 4, 16));
    // minecraft:arrow
    event.addTrade('minecraft:fletcher', 2, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:arrow', 8, 24));
    // minecraft:arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:arrow', 16, 32));
    // minecraft:arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 12, 24),  TradeItem.of('minecraft:arrow', 24, 48));
    // minecraft:arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('minecraft:arrow', 32, 64));

// minecraft:flint
    event.addTrade('minecraft:fletcher', 1, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:flint', 4, 8));
// minecraft:feather
    event.addTrade('minecraft:fletcher', 1, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:feather', 2, 8));
// minecraft:bow
    event.addTrade('minecraft:fletcher', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:bow', 1, 2));
// minecraft:crossbow
    event.addTrade('minecraft:fletcher', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:crossbow', 1, 2));
// minecraft:spectral_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('minecraft:spectral_arrow', 4, 16));
    // minecraft:spectral_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 12, 20),  TradeItem.of('minecraft:spectral_arrow', 8, 24));
    // minecraft:spectral_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 20, 28),  TradeItem.of('minecraft:spectral_arrow', 16, 32));
// minecraft:target
    event.addTrade('minecraft:fletcher', 2, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:target', 2, 4));
// quark:torch_arrow
    event.addTrade('minecraft:fletcher', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('quark:torch_arrow', 4, 16));
    // quark:torch_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 12, 20),  TradeItem.of('quark:torch_arrow', 8, 24));
    // quark:torch_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 20, 28),  TradeItem.of('quark:torch_arrow', 16, 32));
    // quark:torch_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 28, 32),  TradeItem.of('quark:torch_arrow', 24, 48));

// quark:pickarang
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('quark:pickarang', 1, 2));
// supplementaries:rope_arrow
    event.addTrade('minecraft:fletcher', 2, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('supplementaries:rope_arrow', 4, 16));
    // supplementaries:rope_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 12, 20),  TradeItem.of('supplementaries:rope_arrow', 8, 24));
    // supplementaries:rope_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 20, 28),  TradeItem.of('supplementaries:rope_arrow', 16, 32));
    // supplementaries:rope_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 28, 32),  TradeItem.of('supplementaries:rope_arrow', 24, 48));

// supplementaries:quiver
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 6, 12),  TradeItem.of('supplementaries:quiver', 1, 2));   
// dummmmmmy:target_dummy
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('dummmmmmy:target_dummy', 1, 2));
// iceandfire:sea_serpent_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('iceandfire:sea_serpent_arrow', 4, 16));
    // iceandfire:sea_serpent_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('iceandfire:sea_serpent_arrow', 8, 24));
    // iceandfire:sea_serpent_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:sea_serpent_arrow', 16, 32));

// iceandfire:hydra_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('iceandfire:hydra_arrow', 4, 16));
    // iceandfire:hydra_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('iceandfire:hydra_arrow', 8, 24));
    // iceandfire:hydra_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:hydra_arrow', 16, 32));

// iceandfire:dragonbone_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('iceandfire:dragonbone_arrow', 4, 16));
    // iceandfire:dragonbone_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('iceandfire:dragonbone_arrow', 8, 24));
    // iceandfire:dragonbone_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:dragonbone_arrow', 16, 32));

// iceandfire:amphithere_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('iceandfire:amphithere_arrow', 4, 16));
    // iceandfire:amphithere_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('iceandfire:amphithere_arrow', 8, 24));
    // iceandfire:amphithere_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:amphithere_arrow', 16, 32));

// iceandfire:stymphalian_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('iceandfire:stymphalian_arrow', 4, 16));
    // iceandfire:stymphalian_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('iceandfire:stymphalian_arrow', 8, 24));
    // iceandfire:stymphalian_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('iceandfire:stymphalian_arrow', 16, 32));

// alexsmobs:shark_tooth_arrow
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('alexsmobs:shark_tooth_arrow', 4, 16));
    // alexsmobs:shark_tooth_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('alexsmobs:shark_tooth_arrow', 8, 24));
    // alexsmobs:shark_tooth_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('alexsmobs:shark_tooth_arrow', 16, 32));

// ars_nouveau:amplify_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:amplify_arrow', 4, 16));
    // ars_nouveau:amplify_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:amplify_arrow', 8, 24));

// ars_nouveau:split_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:split_arrow', 4, 16));
    // ars_nouveau:split_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:split_arrow', 8, 24));

// ars_nouveau:pierce_arrow
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('ars_nouveau:pierce_arrow', 4, 16));
    // ars_nouveau:pierce_arrow
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('ars_nouveau:pierce_arrow', 8, 24));

// cgs:flintlock
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:flintlock', 1, 2));
// cgs:revolver
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('cgs:revolver', 1, 2));
// cgs:shotgun
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('cgs:shotgun', 1, 2));
// cgs:paper_cartridge
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:paper_cartridge', 4, 16));
// cgs:paper_shot
    event.addTrade('minecraft:fletcher', 3, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:paper_shot', 4, 16));
// cgs:round_revolver
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:round_revolver', 4, 16));
// cgs:round_revolver_piercing
    event.addTrade('minecraft:fletcher', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:round_revolver_piercing', 4, 16));
// cgs:round_shotgun
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:round_shotgun', 4, 16));
// cgs:round_shotgun_incendiary
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:round_shotgun_incendiary', 4, 16));
// cgs:round_shotgun_flechette
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:round_shotgun_flechette', 4, 16));
// cgs:round_shotgun_flechette_steel
    event.addTrade('minecraft:fletcher', 5, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('cgs:round_shotgun_flechette_steel', 4, 16));
    
});