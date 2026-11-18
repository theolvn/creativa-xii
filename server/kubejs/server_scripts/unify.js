ServerEvents.tags('item', event => {
    // coal charcoal
    event.add('c:dusts/coal_dust', 'mekanism:dust_coal')
    event.add('c:dusts/coal_dust', 'oritech:coal_dust')
    event.add('c:dusts/charcoal_dust', 'mekanism:dust_charcoal')
    event.remove('c:ingots/steel', 'oritech:biosteel_ingot')
});