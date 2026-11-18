ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:ladder', 4),
        [
            'A A',
            'AAA',
            'A A'
        ],
        {
            A: 'minecraft:stick'
        }
    )

    event.shapeless(
        Item.of('minecraft:packed_mud', 1),
        [
            'minecraft:mud',
            'supplementaries:ash'
        ]
    )

    event.remove({ id: 'farmersdelight:wheat_dough_from_egg' })
    event.remove({ id: 'minecraft:bread' })
    event.remove({ id: 'quark:tweaks/crafting/utility/bent/bread' })
    event.remove({ id: 'create_bic_bit:mixing/ketchup' })
});

ItemEvents.entityInteracted('minecraft:bucket', event => {
    if(event.target.type != 'minecraft:horse') return
    event.item.count--
    event.player.giveInHand(
            Item.of('minecraft:milk_bucket').withCustomName('Horse Cum')
        )
    event.target.playSound('minecraft:entity.cow.milk')
    event.target.playSound('minecraft:entity.horse.ambiant')
})

ServerEvents.tags('item', event => {
    event.add('c:feathers', 'alexsmobs:roadrunner_feather')
    event.add('c:feathers', 'alexsmobs:emu_feather')
});