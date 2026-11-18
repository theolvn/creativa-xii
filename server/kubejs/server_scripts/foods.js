ServerEvents.tags('item', event => {
    //event.add('c:gems/fluix', 'oritech:fluxite')
    //event.removeAllTagsFrom('oritech:biosteel_ingot')
    event.add('c:storage_blocks/lettuce', 'farm_and_charm:lettuce_bag')
    event.add('c:storage_blocks/tomato', 'farm_and_charm:tomato_bag')
    event.add('c:storage_blocks/carrot', 'farm_and_charm:carrot_bag')
    event.add('c:storage_blocks/potato', 'farm_and_charm:potato_bag')
    event.add('c:storage_blocks/onion', 'farm_and_charm:onion_bag')
    event.add('c:storage_blocks/beetroot', 'farm_and_charm:beetroot_bag')
    event.add('c:storage_blocks/corn', 'farm_and_charm:corn_bag')
    event.add('c:storage_blocks/strawberry', 'farm_and_charm:strawberry_bag')

    //lettuce
    // event.add('c:crops/lettuce', 'farmersdelight:cabbage')
    // event.add('c:crops/lettuce', 'farm_and_charm:lettuce')
    // event.add('c:seeds/lettuce', 'farmersdelight:cabbage_seeds')
    // event.add('c:seeds/lettuce', 'farm_and_charm:lettuce_seeds')
    // event.removeAllTagsFrom('farmersdelight:cabbage_leaf')

    //onion
    event.add('c:crops/onion', 'farmersdelight:onion')
    event.add('c:crops/onion', 'farm_and_charm:onion')

    //tomato
    event.add('c:seeds/rotten_tomato', 'farmersdelight:tomato_seeds')
    event.add('c:seeds/rotten_tomato', 'farm_and_charm:tomato_seeds')
    event.add('c:crops/rotten_tomato', 'farmersdelight:rotten_tomato')
    event.add('c:crops/rotten_tomato', 'farm_and_charm:rotten_tomato')
    //tomato soup
    event.add('c:foods/tomato_soup', 'farmersdelight:tomato_sauce')
    event.add('c:foods/tomato_soup', 'farm_and_charm:simple_tomato_soup')
    //raw pasta
    event.add('c:foods/raw_pasta', 'farmersdelight:raw_pasta')
    event.add('c:foods/raw_pasta', 'farm_and_charm:raw_pasta')
    //minced beef
    event.add('c:foods/minced_beef', 'farmersdelight:minced_beef')
    event.add('c:foods/minced_beef', 'farm_and_charm:minced_beef')
    //chicken cuts
    event.add('c:foods/chicken_cuts', 'farmersdelight:chicken_cuts')
    event.add('c:foods/chicken_cuts', 'farm_and_charm:chicken_parts')
    event.add('c:foods/cooked_chicken_cuts', 'farmersdelight:cooked_chicken_cuts')
    event.add('c:foods/cooked_chicken_cuts', 'brewery:half_chicken')
    //bacon CHANGER LES RECETTES QUI UTILISE DU RAW AU LIEU DU COOKED
    event.add('c:foods/bacon', 'farmersdelight:bacon')
    event.add('c:foods/bacon', 'farm_and_charm:bacon')
    //mutton chops
    event.add('c:foods/mutton_chops', 'farmersdelight:mutton_chops')
    event.add('c:foods/mutton_chops', 'farm_and_charm:lamb_ham')
    //dumplings
    event.add('c:foods/dumplings', 'farmersdelight:dumplings')
    event.add('c:foods/dumplings', 'brewery:dumplings')
    //bacon and eggs
    event.add('c:foods/bacon_and_eggs', 'farmersdelight:bacon_and_eggs')
    event.add('c:foods/bacon_and_eggs', 'farm_and_charm:bacon_with_eggs')
    //roasted chicken
    event.add('c:foods/roasted_chicken', 'farmersdelight:roast_chicken')
    event.add('c:foods/roasted_chicken', 'farm_and_charm:roasted_chicken')
    //dog food
    event.add('c:foods/dog_food', 'farmersdelight:dog_food')
    event.add('c:foods/dog_food', 'farm_and_charm:dog_food')
    //horse feed
    event.add('c:foods/horse_feed', 'farmersdelight:horse_feed')
    event.add('c:foods/horse_feed', 'farm_and_charm:horse_fodder')
    //chocolate
    event.add('c:foods/chocolate', 'create:bar_of_chocolate')
    event.add('c:foods/chocolate', 'bakery:chocolate_truffle')
    //flour RENOMMER ET VERIFIER LES CRAFTS
    event.add('c:foods/flour', 'create:wheat_flour')
    event.add('c:foods/flour', 'farm_and_charm:flour')
    event.add('c:flours/wheat', 'farm_and_charm:flour')
    //sweet dough
    event.add('c:foods/sweet_dough', 'create_bic_bit:sweet_dough')
    event.add('c:foods/sweet_dough', 'bakery:sweet_dough')
    //dough
    event.add('c:foods/dough', 'farm_and_charm:dough')
    event.add('c:foods/dough', 'create:dough')
    event.add('c:dough', 'farm_and_charm:dough')
    event.add('c:dough', 'create:dough')
    //sausage
    event.add('c:foods/sausage', 'mynethersdelight:hoglin_sausage')
    event.add('c:foods/sausage', 'brewery:sausage')
    //ghast dough AJOUTER UN CRAFT POUR GHAST DOUGH VERS DOUGH
    event.removeAllTagsFrom('mynethersdelight:ghast_dough')
    //coconut
    event.add('c:foods/coconut', 'ecologics:coconut_slice')
    event.add('c:foods/coconut', 'beachparty:coconut_open')

    event.add('c:crops/tomato', 'someassemblyrequired:tomato_slices')
    event.add('c:crops/onion', 'someassemblyrequired:sliced_onion')
    event.add('c:crops/beetroot', 'someassemblyrequired:chopped_beetroot')
    event.add('c:crops/carrot', 'someassemblyrequired:chopped_carrot')
});

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('create:dough', 1),
        [
            'mynethersdelight:ghast_dough',
        ]
    )
    //lettuce
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farmersdelight:cabbage'
        },
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf'
    );
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:lettuce'
        },
        'farm_and_charm:lettuce',
        'farmersdelight:cabbage_leaf'
    );
    //onion
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:onion'
        },
        'farm_and_charm:onion',
        'farmersdelight:onion'
    );
    //tomato
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:tomato'
        },
        'farm_and_charm:tomato',
        'farmersdelight:tomato'
    );
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:rotten_tomato'
        },
        'farm_and_charm:rotten_tomato',
        'farmersdelight:rotten_tomato'
    );
    //tomato soup
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:simple_tomato_soup'
        },
        'farm_and_charm:simple_tomato_soup',
        'farmersdelight:tomato_sauce'
    )
    //raw pasta
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:raw_pasta'
        },
        'farm_and_charm:raw_pasta',
        'farmersdelight:raw_pasta'
    );
    //minced beef
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:minced_beef'
        },
        'farm_and_charm:minced_beef',
        'farmersdelight:minced_beef'
    );
    //chicken cuts
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:chicken_parts'
        },
        'farm_and_charm:chicken_parts',
        'farmersdelight:chicken_cuts'
    );
    //bacon
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:bacon'
        },
        'farm_and_charm:bacon',
        'farmersdelight:bacon'
    );
    //mutton chops
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:lamb_ham'
        },
        'farm_and_charm:lamb_ham',
        'farmersdelight:mutton_chops'
    );
    //dumplings
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:dumplings'
        },
        'farm_and_charm:dumplings',
        'farmersdelight:dumplings'
    );
    //bacon and eggs
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:bacon_and_eggs'
        },
        'farm_and_charm:bacon_and_eggs',
        'farmersdelight:bacon_and_eggs'
    );
    //roasted chicken
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:roasted_chicken'
        },
        'farm_and_charm:roasted_chicken',
        'farmersdelight:roast_chicken'
    );
    //dog food
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:dog_food'
        },
        'farm_and_charm:dog_food',
        'farmersdelight:dog_food'
    );
    //horse feed
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:horse_fodder'
        },
        'farm_and_charm:horse_fodder',
        'farmersdelight:horse_feed'
    );
    //chocolate
    event.replaceInput(
        {
            mod: 'bakery',
            input: 'bakery:chocolate_truffle'
        },
        'bakery:chocolate_truffle',
        'create:bar_of_chocolate'
    );
    //flour
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'farm_and_charm:wheat_flour'
        },
        'farm_and_charm:wheat_flour',
        'create:wheat_flour'
    );
    //dough
    event.replaceInput(
        {
            input: 'farm_and_charm:dough'
        },
        'farm_and_charm:dough',
        'create:dough'
    );
    //sausage
    event.replaceInput(
        {
            mod: 'brewery',
            input: 'brewery:sausage'
        },
        'brewery:sausage',
        'mynethersdelight:hoglin_sausage'
    );


    //beachparty
    event.replaceInput(
        {
            mod: 'beachparty',
            input: 'beachparty:palm_planks'
        },
        'beachparty:palm_planks',
        'ecologics:coconut_planks'
    );

    event.replaceInput(
        {
            mod: 'beachparty',
            input: 'beachparty:palm_slab'
        },
        'beachparty:palm_planks',
        'ecologics:coconut_slab'
    );


    //slice instead of item
    //carrot
    event.replaceInput(
        {
            mod: 'farmersdelight',
            input: 'minecraft:carrot'
        },
        'minecraft:carrot',
        Ingredient.of('#c:crops/carrot')
    );
    event.replaceInput(
        {
            mod: 'mynethersdelight',
            input: 'minecraft:carrot'
        },
        'minecraft:carrot',
        Ingredient.of('#c:crops/carrot')
    );
    event.replaceInput(
        {
            mod: 'brewinandchewin',
            input: 'minecraft:carrot'
        },
        'minecraft:carrot',
        Ingredient.of('#c:crops/carrot')
    );
    event.replaceInput(
        {
            mod: 'bakery',
            input: 'minecraft:carrot'
        },
        'minecraft:carrot',
        Ingredient.of('#c:crops/carrot')
    );
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'minecraft:carrot'
        },
        'minecraft:carrot',
        Ingredient.of('#c:crops/carrot')
    );
    //beetroot
    event.replaceInput(
        {
            mod: 'farmersdelight',
            input: 'minecraft:beetroot'
        },
        'minecraft:beetroot',
        Ingredient.of('#c:crops/beetroot')
    );
    event.replaceInput(
        {
            mod: 'mynethersdelight',
            input: 'minecraft:beetroot'
        },
        'minecraft:beetroot',
        Ingredient.of('#c:crops/beetroot')
    );
    event.replaceInput(
        {
            mod: 'brewinandchewin',
            input: 'minecraft:beetroot'
        },
        'minecraft:beetroot',
        Ingredient.of('#c:crops/beetroot')
    );
    event.replaceInput(
        {
            mod: 'bakery',
            input: 'minecraft:beetroot'
        },
        'minecraft:beetroot',
        Ingredient.of('#c:crops/beetroot')
    );
    event.replaceInput(
        {
            mod: 'farm_and_charm',
            input: 'minecraft:beetroot'
        },
        'minecraft:beetroot',
        Ingredient.of('#c:crops/beetroot')
    );

});