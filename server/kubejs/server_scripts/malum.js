ServerEvents.tags('item', event => {
    // soulstone = source gem
    event.add('c:gems/source', 'malum:refined_soulstone')
});

ServerEvents.recipes(event => {
    event.replaceInput(
        {
            mod: 'malum',
            input: 'malum:refined_soulstone'
        },
        'malum:refined_soulstone',
        'ars_nouveau:source_gem'
    );
	event.replaceInput(
        {
            mod: 'malum',
            input: 'minecraft:iron_ingot'
        },
        'minecraft:iron_ingot',
        'iceandfire:silver_ingot'
    );
});