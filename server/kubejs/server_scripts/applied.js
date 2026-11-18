ServerEvents.recipes(event => {
    event.replaceInput(
        {
            mod: 'ae2',
            input: 'minecraft:gold_ingot'
        },
        'minecraft:gold_ingot',
        'create:golden_sheet'
    );
    event.replaceInput(
        {
            mod: 'ae2',
            input: 'minecraft:iron_ingot'
        },
        'minecraft:iron_ingot',
        'create:iron_sheet'
    );
    event.replaceInput(
        {
            mod: 'ae2',
            input: 'minecraft:crafting_table'
        },
        'minecraft:crafting_table',
        'create:mechanical_crafter'
    );
});