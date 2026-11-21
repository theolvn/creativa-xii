ServerEvents.tags('item', event => {
    // coal charcoal
    event.add('c:dusts/coal_dust', 'mekanism:dust_coal')
    event.add('c:dusts/coal_dust', 'oritech:coal_dust')
    event.add('c:dusts/charcoal_dust', 'mekanism:dust_charcoal')
    event.remove('c:ingots/steel', 'oritech:biosteel_ingot')

    // Quark azalea wood is unobtainable (Ecologics wins the vanilla azalea
    // tree log replacement), let its recipes use Ecologics azalea logs
    event.add('quark:azalea_logs', 'ecologics:azalea_logs')
    event.add('quark:azalea_logs', 'ecologics:flowering_azalea_logs')
});