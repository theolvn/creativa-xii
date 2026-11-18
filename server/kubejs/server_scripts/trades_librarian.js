MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:librarian
    // simplehats:hatbag_common
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:librarian', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:librarian', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:librarian', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:librarian', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:librarian', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:paper
    event.addTrade('minecraft:librarian', 1, TradeItem.of('minecraft:emerald', 1, 2),  TradeItem.of('minecraft:paper', 1, 4));
    // minecraft:paper
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 2, 4),  TradeItem.of('minecraft:paper', 4, 8));
    // minecraft:paper
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:paper', 8, 16));
    // minecraft:paper
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:paper', 16, 32));
    // minecraft:paper
    event.addTrade('minecraft:librarian', 5, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('minecraft:paper', 32, 64));

// minecraft:bookshelf
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:bookshelf', 1, 4));
    // minecraft:bookshelf
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:bookshelf', 1, 4)); 
    // minecraft:bookshelf
    event.addTrade('minecraft:librarian', 5, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('minecraft:bookshelf', 1, 4)); 

// minecraft:candle
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:candle', 1, 4)); 
// minecraft:white_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:white_candle', 1, 4)); 
// minecraft:orange_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:orange_candle', 1, 4)); 
// minecraft:magenta_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:magenta_candle', 1, 4)); 
// minecraft:light_blue_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:light_blue_candle', 1, 4)); 
// minecraft:yellow_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:yellow_candle', 1, 4)); 
// minecraft:lime_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:lime_candle', 1, 4)); 
// minecraft:pink_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:pink_candle', 1, 4)); 
// minecraft:gray_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:gray_candle', 1, 4)); 
// minecraft:light_gray_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:light_gray_candle', 1, 4)); 
// minecraft:cyan_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:cyan_candle', 1, 4)); 
// minecraft:purple_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:purple_candle', 1, 4)); 
// minecraft:blue_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:blue_candle', 1, 4)); 
// minecraft:brown_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:brown_candle', 1, 4)); 
// minecraft:green_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:green_candle', 1, 4)); 
// minecraft:red_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:red_candle', 1, 4)); 
// minecraft:black_candle
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 2, 6),  TradeItem.of('minecraft:black_candle', 1, 4)); 
// minecraft:book
    event.addTrade('minecraft:librarian', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:book', 1, 4));
    // minecraft:book
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('minecraft:book', 4, 8)); 
    // minecraft:book
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('minecraft:book', 8, 16)); 
    // minecraft:book
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 24, 32),  TradeItem.of('minecraft:book', 16, 32)); 
    // minecraft:book
    event.addTrade('minecraft:librarian', 5, TradeItem.of('minecraft:emerald', 32, 48),  TradeItem.of('minecraft:book', 32, 64)); 

// ars_nouveau:worn_notebook
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('ars_nouveau:worn_notebook', 1));
// chipped:alchemy_book
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('chipped:alchemy_book', 1));
// cookingforblockheads:recipe_book
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('cookingforblockheads:recipe_book', 1));
// cookingforblockheads:crafting_book
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('cookingforblockheads:crafting_book', 1));
// solcarrot:food_book
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('solcarrot:food_book', 1));
// alexsmobs:animal_dictionary
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('alexsmobs:animal_dictionary', 1));
// starcatcher:starcatcher_guide
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:starcatcher_guide', 1));
// malum:encyclopedia_arcana
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('malum:encyclopedia_arcana', 1));
// ftbquests:book
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('ftbquests:book', 1));
// iceandfire:bestiary
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('iceandfire:bestiary', 1));
// iceandfire:manuscript
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('iceandfire:manuscript', 1, 4));
    // iceandfire:manuscript
    event.addTrade('minecraft:librarian', 3, TradeItem.of('minecraft:emerald', 8, 12),  TradeItem.of('iceandfire:manuscript', 4, 8)); 
    // iceandfire:manuscript
    event.addTrade('minecraft:librarian', 4, TradeItem.of('minecraft:emerald', 12, 16),  TradeItem.of('iceandfire:manuscript', 8, 12)); 
    // iceandfire:manuscript
    event.addTrade('minecraft:librarian', 5, TradeItem.of('minecraft:emerald', 16, 24),  TradeItem.of('iceandfire:manuscript', 12, 16)); 

// alchemancy:infusion_codex
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('alchemancy:infusion_codex', 1));
// exposure:album
    event.addTrade('minecraft:librarian', 2, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('exposure:album', 1));
    
});