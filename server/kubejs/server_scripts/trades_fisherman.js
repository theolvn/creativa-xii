MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades();
    // event.removeModdedTypedTrades();

// minecraft:fisherman
    // simplehats:hatbag_common
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 1, 8),  TradeItem.of('simplehats:hatbag_common', 1, 2));
    // simplehats:hatbag_uncommon
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('simplehats:hatbag_uncommon', 1, 2));
    // simplehats:hatbag_rare
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 16, 32),  TradeItem.of('simplehats:hatbag_rare', 1, 2));
    // simplehats:hatbag_epic
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 32, 64),  TradeItem.of('simplehats:hatbag_epic', 1, 2));
    // createbb:white_meth
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('createbb:white_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // createbb:blue_meth
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('createbb:blue_meth', 1, 4),  TradeItem.of('minecraft:emerald', 4, 8));
    // nirvana:weed_brownie
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('nirvana:weed_brownie', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));
    // nirvana:joint
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('nirvana:joint', 1, 4),  TradeItem.of('minecraft:emerald', 4, 16));

// minecraft:string
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:string', 1, 8));
// minecraft:cod_bucket
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:cod_bucket', 1));
// minecraft:raw_cod
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:cod', 1, 4));
// minecraft:raw_salmon
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:salmon', 1, 4));
// minecraft:cooked_cod
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:cooked_cod', 1, 4));
// minecraft:cooked_salmon
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('minecraft:cooked_salmon', 1, 4));
// minecraft:heart_of_the_sea
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:heart_of_the_sea', 1, 2));
// minecraft:sea_lantern
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:sea_lantern', 1, 4));
// minecraft:prismarine_shards
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:prismarine_shard', 1, 4));
// minecraft:prismarine_crystals
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:prismarine_crystals', 1, 4));
// minecraft:nautilus_shell
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:nautilus_shell', 1, 4));
// minecraft:sponge
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('minecraft:sponge', 1, 4));
// alexsmobs:flying_fish_boots
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 12),  TradeItem.of('alexsmobs:flying_fish_boots', 1, 2));
// create:copper_diving_helmet
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 12),  TradeItem.of('create:copper_diving_helmet', 1, 2));
// create:copper_diving_boots
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 12),  TradeItem.of('create:copper_diving_boots', 1, 2));
// create_aquatic_ambitions:suspicious_rock
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('create_aquatic_ambitions:suspicious_rock', 1, 4));
// create_aquatic_ambitions:spiky_shell
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('create_aquatic_ambitions:spiky_shell', 1, 4));
// ecologics:seashell
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 1, 4),  TradeItem.of('ecologics:seashell', 1, 4));
// starcatcher:starcatcher_rod
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:starcatcher_rod', 1, 2));
// starcatcher:tackle_box
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:tackle_box', 1, 2));
// starcatcher:aquarium
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:aquarium', 1, 2));
// starcatcher:iron_hook
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:hook', 1, 2));
// starcatcher:amethyst_hook
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:amethyst_hook', 1, 2));   
// starcatcher:shiny_hook
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:shiny_hook', 1, 2));
// starcatcher:gold_hook
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:gold_hook', 1, 2));
// starcatcher:mossy_hook
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:mossy_hook', 1, 2));
// starcatcher:stone_hook
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:stone_hook', 1, 2));
// starcatcher:split_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:split_hook', 1, 2));
// starcatcher:heavy_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:heavy_hook', 1, 2));
// starcatcher:vanilla_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:vanilla_hook', 1, 2));
// starcatcher:copper_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:copper_hook', 1, 2));
// starcatcher:exposed_copper_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:exposed_copper_hook', 1, 2));
// starcatcher:weathered_copperhook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:weathered_copper_hook', 1, 2));
// starcatcher:oxidised_copper_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:oxidised_copper_hook', 1, 2));
// starcatcher:echoing_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:echoing_hook', 1, 2));
// starcatcher:frozen_hook
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:frozen_hook', 1, 2));
// starcatcher:bobbe
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:bobber', 1, 2));
// starcatcher:steady_bobber
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:steady_bobber', 1, 2));
// starcatcher:clear_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:clear_bobber', 1, 2));
// starcatcher:dripstone_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:dripstone_bobber', 1, 2));
// starcatcher:vanilla_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:vanilla_bobber', 1, 2));
// starcatcher:leafy_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:leaf_bobber', 1, 2));
// starcatcher:slimey_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:slimey_bobber', 1, 2));
// starcatcher:glowing_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:glowing_bobber', 1, 2));
// starcatcher:golden_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:golden_bobber', 1, 2));
// starcatcher:cloud_bobber
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:cloud_bobber', 1, 2));
// starcatcher:worm
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('starcatcher:worm', 1, 2));
// starcatcher:almighty_worm
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:almighty_worm', 1, 2));
// starcatcher:seeking_worm
    event.addTrade('minecraft:fisherman', 2, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:seeking_worm', 1, 2));
// starcatcher:gunpowder bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:gunpowder_bait', 1, 2));
// starcatcher:cherry bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:cherry_bait', 1, 2));
// starcatcher:lush bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:lush_bait', 1, 2));
// starcatcher:sculk bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:sculk_bait', 1, 2));
// starcatcher:dripstone bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:dripstone_bait', 1, 2));
// starcatcher:murkwater bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:murkwater_bait', 1, 2));
// starcatcher:legendary bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:legendary_bait', 1, 2));
// starcatcher:meteorological bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:meteorological_bait', 1, 2));
// starcatcher:targeted bait
    event.addTrade('minecraft:fisherman', 3, TradeItem.of('minecraft:emerald', 4, 16),  TradeItem.of('starcatcher:targeted_bait', 1, 2));
// starcatcher:fisherman_hat_white
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_white', 1, 2));
// starcatcher:fisherman_hat_lime
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_lime', 1, 2));
// starcatcher:fisherman_hat_orange
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_orange', 1, 2));
// starcatcher:fisherman_hat_red
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_red', 1, 2));
// starcatcher:fisherman_hat_gray
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_gray', 1, 2));
// starcatcher:fisherman_hat_light_gray
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_light_gray', 1, 2));
// starcatcher:fisherman_hat_black
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_black', 1, 2));
// starcatcher:fisherman_hat_brown
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_brown', 1, 2));
// starcatcher:fisherman_hat_yellow
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_yellow', 1, 2));
// starcatcher:fisherman_hat_pink
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_pink', 1, 2));
// starcatcher:fisherman_hat_magenta
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_magenta', 1, 2));
// starcatcher:fisherman_hat_purpl
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_purple', 1, 2));
// starcatcher:fisherman_hat_blue
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_blue', 1, 2));
// starcatcher:fisherman_hat_light_blue
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_light_blue', 1, 2));
// starcatcher:fisherman_hat_cyan
    event.addTrade('minecraft:fisherman', 5, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_cyan', 1, 2));
// starcatcher:fisherman_hat_green
    event.addTrade('minecraft:fisherman', 4, TradeItem.of('minecraft:emerald', 8, 16),  TradeItem.of('starcatcher:fisherman_hat_green', 1, 2));
    // starcatcher:selling bin
    event.addTrade('minecraft:fisherman', 1, TradeItem.of('minecraft:emerald', 4, 8),  TradeItem.of('selling_bin:selling_bin', 1, 2));
    
});