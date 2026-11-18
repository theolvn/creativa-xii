LootJS.modifiers((event) => {
  // boss
    event
        .addTableModifier('mowziesmobs:ferrous_wroughtnaut')
        .addLoot('endrem:undead_eye')

    event
        .addTableModifier('mowziesmobs:umvuthi')
        .addLoot('endrem:evil_eye')
    
    event
        .addTableModifier('mowziesmobs:frostmaw')
        .addLoot('endrem:cold_eye')

    event
        .addTableModifier('ars_nouveau:wilden_boss')
        .addLoot('endrem:corrupted_eye')

    event
        .addTableModifier('cataclysm:scylla')
        .addLoot('endrem:exotic_eye')

    event
        .addTableModifier('cataclysm:ancient_remnant')
        .addLoot('endrem:old_eye')

    event
        .addTableModifier('cataclysm:netherite_monstrosity')
        .addLoot('endrem:cursed_eye')

    event
        .addTableModifier('minecraft:wither')
        .addLoot('endrem:wither_eye')

    event
        .addTableModifier('cataclysm:the_harbinger')
        .addLoot('endrem:lost_eye')

    event
        .addTableModifier('cataclysm:the_leviathan')
        .addLoot('endrem:black_eye')

    event
        .addTableModifier('cataclysm:ignis')
        .addLoot('endrem:nether_eye')

    event
        .addTableModifier('cataclysm:maledictus')
        .addLoot('endrem:magical_eye')

// other
    event
        .addTableModifier('ribbits:chests/sorcerer')
        .addLoot('naturescompass:naturescompass')
        .randomChance(0.75);

    event
        .addTableModifier('minecraft:entities/bat')
        .addLoot('minecraft:rabbit_hide')
        .randomChance(0.5);

    event
        .addTableModifier('minecraft:entities/phantom')
        .addLoot('createornithopterglider:elytra_piece')
        .randomChance(0.25);

    event
        .addTableModifier('iceandfire:entities/deathworm_red')
        .addLoot('starcatcher:almighty_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_tan')
        .addLoot('starcatcher:almighty_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_white')
        .addLoot('starcatcher:almighty_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_red_giant')
        .addLoot('starcatcher:almighty_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_tan_giant')
        .addLoot('starcatcher:almighty_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_white_giant')
        .addLoot('starcatcher:almighty_worm')
        .setCount([1, 4])   
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_red_giant')
        .addLoot('starcatcher:seeking_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_tan_giant')
        .addLoot('starcatcher:seeking_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('iceandfire:entities/deathworm_white_giant')
        .addLoot('starcatcher:seeking_worm')
        .setCount([1, 4])
        .randomChance(0.75);

    event
        .addTableModifier('cataclysm:entities/netherite_monstrosity')
        .addLoot('gateways:gate_pearl[gateways:gateway="gateways:hellforge"]')
        .randomChance(0.75);
});

// LootJS.lootTables((event) => {
//   event.getLootTable('ribbits:chests/sorcerer').firstPool().addEntry('naturescompass:naturescompass');
//   event.getLootTable('minecraft:entities/bat').firstPool().addEntry('minecraft:rabbit_hide');
//   event.getLootTable('minecraft:entities/phantom').firstPool().addEntry('createornithopterglider:elytra_piece');

//   event.getLootTable('iceandfire:entities/deathworm_red').firstPool().addEntry('starcatcher:almighty_worm');
//   event.getLootTable('iceandfire:entities/deathworm_tan').firstPool().addEntry('starcatcher:almighty_worm');
//   event.getLootTable('iceandfire:entities/deathworm_white').firstPool().addEntry('starcatcher:almighty_worm');

//   event.getLootTable('iceandfire:entities/deathworm_red_giant').firstPool().addEntry('starcatcher:almighty_worm');
//   event.getLootTable('iceandfire:entities/deathworm_tan_giant').firstPool().addEntry('starcatcher:almighty_worm');
//   event.getLootTable('iceandfire:entities/deathworm_white_giant').firstPool().addEntry('starcatcher:almighty_worm');
//   event.getLootTable('iceandfire:entities/deathworm_red_giant').firstPool().addEntry('starcatcher:seeking_worm');
//   event.getLootTable('iceandfire:entities/deathworm_tan_giant').firstPool().addEntry('starcatcher:seeking_worm');
//   event.getLootTable('iceandfire:entities/deathworm_white_giant').firstPool().addEntry('starcatcher:seeking_worm');

// });