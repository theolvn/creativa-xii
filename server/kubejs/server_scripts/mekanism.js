ServerEvents.recipes(event => {
    event.replaceInput(
        {
            mod: 'mekanism',
            input: 'minecraft:gold_ingot'
        },
        'minecraft:gold_ingot',
        'create:golden_sheet'
    );
    event.replaceInput(
        {
            mod: 'mekanism',
            input: 'minecraft:iron_ingot'
        },
        'minecraft:iron_ingot',
        'create:iron_sheet'
    );
    event.replaceInput(
        {
            mod: 'mekanism',
            input: 'oritech:steel_ingot'
        },
        'oritech:steel_ingot',
        'cgs:steel_sheet'
    );
    event.replaceInput(
        {
            mod: 'mekanism',
            input: 'mekanism:energy_tablet'
        },
        'mekanism:energy_tablet',
        'oritech:basic_battery'
    );
    event.replaceInput(
        {
            mod: 'mekanism',
            input: 'minecraft:crafter'
        },
        'minecraft:crafter',
        'create:mechanical_crafter'
    );

    event.replaceInput(
        {
            mod: 'mekanismgenerators',
            input: 'minecraft:gold_ingot'
        },
        'minecraft:gold_ingot',
        'create:golden_sheet'
    );
    event.replaceInput(
        {
            mod: 'mekanismgenerators',
            input: 'minecraft:iron_ingot'
        },
        'minecraft:iron_ingot',
        'create:iron_sheet'
    );
    event.replaceInput(
        {
            mod: 'mekanismgenerators',
            input: 'oritech:steel_ingot'
        },
        'oritech:steel_ingot',
        'cgs:steel_sheet'
    );
    event.replaceInput(
        {
            mod: 'mekanismgenerators',
            input: 'mekanism:energy_tablet'
        },
        'mekanism:energy_tablet',
        'oritech:basic_battery'
    );
    event.replaceInput(
        {
            mod: 'mekanismgenerators',
            input: 'minecraft:crafter'
        },
        'minecraft:crafter',
        'create:mechanical_crafter'
    );
});

ServerEvents.tags('item', event => {
    // HDPE = plastic
    event.add('c:plates/plastic', 'mekanism:hdpe_sheet')
});