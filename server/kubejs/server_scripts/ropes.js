ServerEvents.tags('item', event => {

    event.add('c:modded_ropes', 'beautify:rope')
    event.add('c:modded_ropes', 'createornithopterglider:rope')
    event.add('c:modded_ropes', 'dustydecorations:rope')
    event.add('c:modded_ropes', 'farmersdelight:rope')
    event.add('c:modded_ropes', 'supplementaries:rope')
    event.add('c:modded_ropes', 'farm_and_charm:rope')
    
});

ServerEvents.recipes(event => {
    event.replaceInput(
        {
            mod: 'mcwbridges',
            input: 'minecraft:string'
        },
        'minecraft:string',
        'supplementaries:rope'
    );

    event.shaped(
        Item.of('create:white_sail', 2),
        [
            'AB',
            'BC'
        ],
        {
            A: 'supplementaries:flax',
            B: 'minecraft:stick',
            C: 'create:andesite_alloy'
        }
    )
    event.shaped(
        Item.of('create:white_sail', 2),
        [
            'AB',
            'BC'
        ],
        {
            A: 'nirvana:hemp_cloth',
            B: 'minecraft:stick',
            C: 'create:andesite_alloy'
        }
    )
});