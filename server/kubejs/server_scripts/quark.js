ServerEvents.recipes((event) => {
    const recipes = [];

    const stone_conversions = [
        'quark:jasper',
        'quark:shale',
        'quark:myalite',
        'quark:dusky_myalite',
        'create:limestone'
    ];

    stone_conversions.forEach((stone, index) => {
        let input = stone;
        let output = index + 1 >= stone_conversions.length ? stone_conversions[0] : stone_conversions[index + 1];

        recipes.push({
            output: `8x ${output}`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: input,
                B: 'ars_nouveau:manipulation_essence'
            },
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key);
    });
});