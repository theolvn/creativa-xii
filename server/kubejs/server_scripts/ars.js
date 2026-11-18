ServerEvents.recipes(event => {
  event.replaceInput(
        {
            mod: 'ars_nouveau',
            input: 'minecraft:popped_chorus_fruit'
        },
        'minecraft:popped_chorus_fruit',
        'malum:warp_flux'
    );
    event.replaceInput(
        {
            mod: 'ars_controle',
            input: 'minecraft:popped_chorus_fruit'
        },
        'minecraft:popped_chorus_fruit',
        'malum:warp_flux'
    );
    event.replaceInput(
        {
            mod: 'ars_additions',
            input: 'minecraft:popped_chorus_fruit'
        },
        'minecraft:popped_chorus_fruit',
        'malum:warp_flux'
    );
  event.replaceInput(
        {
            mod: 'oritech',
            input: 'minecraft:enchanting_table'
        },
        'minecraft:enchanting_table',
        'ars_nouveau:enchanting_apparatus'
    );

  event.replaceInput(
        {
            mod: 'create_enchantment_industry',
            input: 'minecraft:enchanting_table'
        },
        'minecraft:enchanting_table',
        'ars_nouveau:enchanting_apparatus'
    );

    event.remove({ id: 'ars_nouveau:novice_spell_book' })
    event.remove({ id: 'ars_nouveau:novice_spellbook_alt' })
    event.shapeless('ars_nouveau:novice_spell_book', [
            'minecraft:book',
            'ars_nouveau:source_gem', 
            'ars_nouveau:source_gem'
        ]);
    event.remove({ id: 'ars_nouveau:apprentice_book_upgrade' })
    event.shapeless('ars_nouveau:apprentice_spell_book', [
            'ars_nouveau:novice_spell_book',
            'ars_nouveau:abjuration_essence', 
            'ars_nouveau:conjuration_essence',
            'ars_nouveau:air_essence', 
            'ars_nouveau:earth_essence', 
            'ars_nouveau:fire_essence', 
            'ars_nouveau:manipulation_essence', 
            'ars_nouveau:water_essence'
        ]);
})