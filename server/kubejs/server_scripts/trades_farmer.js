MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:farmer
    // simplehats:hatbag_common
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:farmer', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:farmer', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:farmer', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:farmer', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:wheat
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:wheat', 2, 8));
// minecraft:potato
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:potato', 2, 8));
// minecraft:poisonous_potato
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:poisonous_potato', 2, 8));
// minecraft:poisonous_potato
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:poisonous_potato', 1, 4),  TradeItem.of('minecraft:potato', 1, 4));
// minecraft:carrot
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:carrot', 2, 8));
// minecraft:beetroot
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:beetroot', 2, 8));
// minecraft:bread
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:bread', 2, 8));
// minecraft:pumpkin_pie
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:pumpkin_pie', 1, 4));
// minecraft:apple
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:apple', 2, 8));
// minecraft:cookie
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:cookie', 2, 8));
// minecraft:suspicious_stew
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:suspicious_stew', 1, 4));
// minecraft:golden_carrot
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('minecraft:golden_carrot', 2, 8));
// minecraft:glistering_melon_slice
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('minecraft:glistering_melon_slice', 2, 8));
// minecraft:bone_meal
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:bone_meal', 4, 8));
// minecraft:brown_mushroom
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:brown_mushroom', 2, 8));
// minecraft:red_mushroom
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:red_mushroom', 2, 8));
// minecraft:sugar
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:sugar', 2, 8));
// minecraft:egg
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:egg', 2, 8));
// minecraft:feather
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:feather', 2, 8));
// minecraft:pumpkin
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:pumpkin', 2, 8));
// minecraft:melon
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:melon', 2, 8));
// minecraft:carved_pumpkin
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:carved_pumpkin', 2, 8));
// minecraft:farmersdelight:onion
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:onion', 2, 8));
// minecraft:farmersdelight:rice_panicle
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:rice_panicle', 2, 8));
// minecraft:farmersdelight:rotten_tomato
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:rotten_tomato', 2, 8));
// minecraft:farmersdelight:cabbage
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:cabbage', 2, 8));
// minecraft:farmersdelight:tomato
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:tomato', 2, 8));
// minecraft:farmersdelight:tomato
    event.addTrade('minecraft:farmer', 1, TradeItem.of('farmersdelight:rotten_tomato', 1, 4),  TradeItem.of('farmersdelight:tomato', 2, 4));
// create:wheat_flour
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('create:wheat_flour', 2, 8));
// create:dough
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('create:dough', 1, 4));
// brewery:hops
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('brewery:hops', 2, 8));
// farm_and_charm:barley
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('farm_and_charm:barley', 2, 8));
// farm_and_charm:corn
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('farm_and_charm:corn', 2, 8));
// farm_and_charm:oat
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('farm_and_charm:oat', 2, 8));
// createbb:ephedra
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('createbb:ephedra', 1, 4));
// minecraft:wheat_seeds
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:wheat_seeds', 2, 8));
// minecraft:pumpkin_seed
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:pumpkin_seeds', 2, 8));
// minecraft:melon_seed
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:melon_seeds', 2, 8));
// minecraft:beetroot_seed
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('minecraft:beetroot_seeds', 2, 8));
// minecraft:farmersdelight:cabbage_seed
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:cabbage_seeds', 2, 8));
// minecraft:farmersdelight:tomato_seeds
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:tomato_seeds', 2, 8));
// farm_and_charm:barley_seeds
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farm_and_charm:barley_seeds', 2, 8));
// farm_and_charm:corn_kernel
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farm_and_charm:kernels', 2, 8));
// farm_and_charm:oat_seeds
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farm_and_charm:oat_seeds', 2, 8));
// create_bic_bit:sunflower_seeds
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('create_bic_bit:sunflower_seeds', 2, 8));
// createbb:ephedra_seeds
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('createbb:ephedra_seeds', 1, 4));
// minecraft:farmersdelight:cabbage_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farmersdelight:cabbage_crate', 2, 8));
// minecraft:farmersdelight:tomato_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farmersdelight:tomato_crate', 2, 8));
// minecraft:farmersdelight:onion_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farmersdelight:onion_crate', 2, 8));
// minecraft:farmersdelight:rich_soil
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farmersdelight:rich_soil', 2, 8));
// snad:snad
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('snad:snad', 2, 8));
// quark:apple_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('quark:apple_crate', 2, 8));
// quark:potato_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('quark:potato_crate', 2, 8)); 
// quark:carrot_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('quark:carrot_crate', 2, 8));
// quark:beetroot_crate
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('quark:beetroot_crate', 2, 8));
// minecraft:farmersdelight:rice_bag
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farmersdelight:rice_bag', 2, 8));
// farm_and_charm:corn_bag
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farm_and_charm:corn_bag', 2, 8));
// farm_and_charm:strawberry_bag
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farm_and_charm:strawberry_bag', 2, 8));
// farm_and_charm:flour_bag
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('farm_and_charm:flour_bag', 2, 8));
// dustydecorations:beetroot_scarecrow
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('dustydecorations:beetroot_scarecrow', 1, 2));
// dustydecorations:pumpkin_scarecrow
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('dustydecorations:pumpkin_scarecrow', 1, 2));
// quark:thatch
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('quark:thatch', 2, 8));
// farm_and_charm:chicken_food
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farm_and_charm:chicken_feed', 1, 4));
// farm_and_charm:cat_food
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farm_and_charm:cat_food', 1, 4));
// farm_and_charm:dog_food_bag
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farm_and_charm:dog_food_bag', 1, 4));
// farm_and_charm:cat_food_bag
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farm_and_charm:cat_food_bag', 1, 4));
// farm_and_charm:scarecrow
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farm_and_charm:scarecrow', 1, 2));
// minecraft:farmersdelight:horse_food
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farmersdelight:horse_feed', 2, 4));
// minecraft:farmersdelight:dog_food
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('farmersdelight:dog_food', 2, 4));
// minecraft:farmersdelight:milk_bottle
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 6),  TradeItem.of('farmersdelight:milk_bottle', 2, 8));
// minecraft:hay_block
    event.addTrade('minecraft:farmer', 5, TradeItem.of('minecraft:emerald', 4, 12),  TradeItem.of('minecraft:hay_block', 2, 8));
// vinery:straw_hat
    event.addTrade('minecraft:farmer', 4, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('vinery:straw_hat', 1, 2));
// dummmmmmy:target_dummy
    event.addTrade('minecraft:farmer', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('dummmmmmy:target_dummy', 1, 2));
// minecraft:milk_bucket
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:milk_bucket', 1, 2));
// minecraft:composter
    event.addTrade('minecraft:farmer', 1, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('minecraft:composter', 1, 4));
// create:millstone
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('create:millstone', 1, 2));
// brewinandchewin:keg
    event.addTrade('minecraft:farmer', 3, TradeItem.of('minecraft:emerald', 2, 8),  TradeItem.of('brewinandchewin:keg', 1, 4));
    
});