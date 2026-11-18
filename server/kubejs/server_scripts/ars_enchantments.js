ServerEvents.recipes(event => {

    function enchantment(enchantmentId, ingredients, sourceCost) {
        var pedestalItems = [
            { item: 'minecraft:lapis_lazuli' },
            { item: 'ars_nouveau:source_gem' }
        ];

        ingredients.forEach(function(ingredient) {
            if (ingredient.startsWith('#')) {
                pedestalItems.push({
                    tag: ingredient.substring(1)
                });
            } else {
                pedestalItems.push({
                    item: ingredient
                });
            }
        });

        event.custom({
            type: 'ars_nouveau:enchantment',
            enchantment: enchantmentId,
            level: 1,
            pedestalItems: pedestalItems,
            sourceCost: sourceCost
        });
    }

    var recipes = [
        ['alexsmobs:board_return', ['alexsmobs:straddlite', 'minecraft:soul_sand']],
        ['alexsmobs:lavawax', ['alexsmobs:straddlite', 'ars_elemancy:lava_essence']],
        ['alexsmobs:serpentfriend', ['alexsmobs:straddlite', 'minecraft:bone']],
        ['alexsmobs:straddle_jump', ['alexsmobs:straddlite', 'ars_nouveau:air_essence', 'ars_nouveau:manipulation_essence']],
        ['ars_additions:spellweave', ['ars_nouveau:blank_thread', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber']],
        ['ars_elemental:mirror_shield', ['ars_nouveau:spell_prism', 'ars_nouveau:abjuration_essence', 'ars_nouveau:manipulation_essence']],
        ['ars_elemental:soulbound', ['minecraft:soul_sand']],
        ['ars_nouveau:mana_boost', ['ars_nouveau:sourceberry_bush']],
        ['ars_nouveau:mana_regen', ['ars_nouveau:sourceberry_bush', 'ars_nouveau:sourceberry_bush']],
        ['ars_nouveau:reactive', ['ars_nouveau:spell_parchment']],
        ['create:capacity', ['create:fluid_tank']],
        ['create:potato_recovery', ['minecraft:potato', 'minecraft:soul_sand']],
        ['createrailgrinding:railgrind_enchantment', ['create:track', 'ars_nouveau:manipulation_essence']],
        ['deeperdarker:catalysis', ['minecraft:sculk_catalyst']],
        ['deeperdarker:reverberation', ['deeperdarker:reinforced_echo_shard', 'ars_nouveau:manipulation_essence']],
        ['deeperdarker:sculk_smite', ['deeperdarker:reinforced_echo_shard', 'minecraft:quartz']],
        ['deeperdarker:volume', ['deeperdarker:reinforced_echo_shard', 'ars_nouveau:manipulation_essence']],
        ['dungeonsdelight:ricochet', ['minecraft:slime_ball', 'ars_nouveau:manipulation_essence']],
        ['dungeonsdelight:serrated_strike', ['#c:tools/knife', 'ars_nouveau:abjuration_essence']],
        ['farmersdelight:backstabbing', ['#c:tools/knife']],
        ['gaze:enmity', ['minecraft:quartz']],
        ['malum:animated', ['minecraft:sugar', 'minecraft:quartz']],
        ['malum:ascension', ['ars_nouveau:air_essence', 'ars_nouveau:conjuration_essence']],
        ['malum:capacitor', ['malum:blazing_quartz']],
        ['malum:haunted', ['iceandfire:silver_ingot', 'minecraft:quartz']],
        ['malum:rebound', ['ars_nouveau:air_essence', 'minecraft:quartz']],
        ['malum:replenishing', ['ars_nouveau:conjuration_essence']],
        ['malum:spirit_plunder', ['minecraft:emerald']],
        ['malum:weavers_haste', ['minecraft:sugar', 'malum:blazing_quartz']],
        ['malum:weavers_propagation', ['ars_nouveau:conjuration_essence', 'malum:blazing_quartz']],
        ['minecraft:aqua_affinity', ['#minecraft:fishes', '#minecraft:fishes', '#minecraft:fishes']],
        ['minecraft:bane_of_arthropods', ['minecraft:spider_eye', 'minecraft:spider_eye']],
        ['minecraft:binding_curse', ['minecraft:soul_sand', 'minecraft:soul_sand']],
        ['minecraft:blast_protection', ['minecraft:iron_ingot']],
        ['minecraft:breach', ['minecraft:iron_ingot', 'ars_nouveau:abjuration_essence']],
        ['minecraft:channeling', ['createaddition:electrum_ingot']],
        ['minecraft:density', ['ars_nouveau:air_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:earth_essence']],
        ['minecraft:depth_strider', ['ars_nouveau:water_essence', 'ars_nouveau:water_essence']],
        ['minecraft:efficiency', ['minecraft:sugar', 'minecraft:iron_pickaxe']],
        ['minecraft:feather_falling', ['ars_nouveau:air_essence', '#simulated:merging_glue']],
        ['minecraft:fire_aspect', ['ars_nouveau:fire_essence']],
        ['minecraft:fire_protection', ['ars_nouveau:fire_essence', 'ars_nouveau:abjuration_essence']],
        ['minecraft:flame', ['ars_nouveau:fire_essence', 'minecraft:blaze_rod', 'ars_nouveau:air_essence']],
        ['minecraft:fortune', ['ars_nouveau:source_gem', 'ars_nouveau:earth_essence', 'minecraft:diamond']],
        ['minecraft:frost_walker', ['ars_nouveau:water_essence', 'ars_nouveau:manipulation_essence']],
        ['minecraft:impaling', ['ars_nouveau:water_essence', 'minecraft:quartz']],
        ['minecraft:infinity', ['minecraft:diamond', 'ars_nouveau:air_essence', 'ars_nouveau:air_essence']],
        ['minecraft:knockback', ['ars_nouveau:manipulation_essence', 'ars_nouveau:air_essence']],
        ['minecraft:looting', ['minecraft:emerald']],
        ['minecraft:loyalty', ['minecraft:soul_sand', 'ars_nouveau:water_essence']],
        ['minecraft:luck_of_the_sea', ['minecraft:emerald', 'ars_nouveau:water_essence']],
        ['minecraft:lure', ['minecraft:diamond', 'ars_nouveau:water_essence']],
        ['minecraft:mending', []],
        ['minecraft:multishot', ['ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence']],
        ['minecraft:piercing', ['ars_nouveau:manipulation_essence']],
        ['minecraft:power', ['minecraft:diamond', 'ars_nouveau:air_essence']],
        ['minecraft:projectile_protection', ['minecraft:arrow', 'ars_nouveau:air_essence', 'ars_nouveau:abjuration_essence']],
        ['minecraft:protection', ['ars_nouveau:manipulation_essence', 'ars_nouveau:abjuration_essence']],
        ['minecraft:punch', ['ars_nouveau:manipulation_essence', 'ars_nouveau:air_essence', 'minecraft:arrow']],
        ['minecraft:quick_charge', ['ars_nouveau:air_essence', 'ars_nouveau:abjuration_essence']],
        ['minecraft:respiration', ['ars_nouveau:water_essence']],
        ['minecraft:riptide', ['ars_nouveau:water_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:air_essence']],
        ['minecraft:sharpness', ['minecraft:quartz']],
        ['minecraft:silk_touch', ['minecraft:emerald', 'minecraft:diamond']],
        ['minecraft:smite', ['minecraft:bone', 'minecraft:rotten_flesh']],
        ['minecraft:soul_speed', ['minecraft:soul_sand', 'minecraft:sugar', 'ars_nouveau:manipulation_essence']],
        ['minecraft:sweeping_edge', ['ars_nouveau:manipulation_essence']],
        ['minecraft:swift_sneak', ['minecraft:sugar', 'ars_nouveau:manipulation_essence']],
        ['minecraft:thorns', ['ars_nouveau:wilden_spike']],
        ['minecraft:unbreaking', ['minecraft:diamond', 'ars_nouveau:abjuration_essence']],
        ['minecraft:vanishing_curse', ['ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence']],
        ['minecraft:wind_burst', ['ars_nouveau:air_essence', 'ars_nouveau:air_essence']],
        ['mynethersdelight:poaching', ['minecraft:emerald', 'minecraft:quartz']],
        ['piglinproliferation:bang', ['ars_nouveau:abjuration_essence', 'minecraft:tnt']],
        ['piglinproliferation:turning', ['minecraft:sugar', 'ars_nouveau:manipulation_essence', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:amphibious', ['minecraft:bone', 'ars_nouveau:water_essence', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:blazing_protection', ['minecraft:bone', 'ars_nouveau:fire_essence', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:blight_curse', ['minecraft:bone', '#minecraft:flowers', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:bubbling', ['minecraft:bone', 'supplementaries:bubble_blower', 'ars_nouveau:manipulation_essence']],
        ['redomesticate:chain_lighting', ['minecraft:bone', 'createaddition:electrum_ingot', 'ars_nouveau:air_essence']],
        ['redomesticate:charisma', ['minecraft:bone', 'minecraft:emerald']],
        ['redomesticate:deflection', ['minecraft:bone', 'minecraft:arrow', 'ars_nouveau:air_essence']],
        ['redomesticate:defusal', ['minecraft:bone', 'minecraft:iron_ingot']],
        ['redomesticate:disc_jockey', ['minecraft:bone', 'minecraft:jukebox']],
        ['redomesticate:fireproof', ['minecraft:bone', 'ars_nouveau:fire_essence', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:frost_fang', ['minecraft:bone', 'ars_nouveau:water_essence', 'minecraft:ice']],
        ['redomesticate:gluttonous', ['minecraft:bone', 'farmersdelight:cooking_pot']],
        ['redomesticate:healing_aura', ['minecraft:bone', 'minecraft:campfire']],
        ['redomesticate:health_boost', ['minecraft:bone', 'minecraft:golden_apple']],
        ['redomesticate:health_siphon', ['minecraft:bone', 'alexsmobs:blood_sac', 'ars_nouveau:manipulation_essence']],
        ['redomesticate:herding', ['minecraft:bone', 'ars_nouveau:earth_essence', 'ars_nouveau:conjuration_essence']],
        ['redomesticate:immaturity_curse', ['minecraft:bone', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:immunity_frame', ['minecraft:bone', 'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence']],
        ['redomesticate:infamy_curse', ['minecraft:bone', 'ars_nouveau:conjuration_essence', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:intimidation', ['minecraft:bone', 'ars_nouveau:conjuration_essence', 'ars_nouveau:manipulation_essence']],
        ['redomesticate:linked_inventory', ['minecraft:bone', '#c:ender_pearls', 'create:fluid_pipe']],
        ['redomesticate:magnetic', ['minecraft:bone', 'oritech:magnetic_coil']],
        ['redomesticate:muffled', ['minecraft:bone', '#minecraft:wool']],
        ['redomesticate:ore_scenting', ['minecraft:bone', 'minecraft:compass', 'ars_nouveau:earth_essence']],
        ['redomesticate:poison_resistance', ['minecraft:bone', 'minecraft:spider_eye', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:psychic_wall', ['minecraft:bone', 'ars_nouveau:conjuration_essence', 'ars_nouveau:conjuration_essence']],
        ['redomesticate:rejuvenation', ['minecraft:bone', 'minecraft:sculk_catalyst']],
        ['redomesticate:shadow_hands', ['minecraft:bone', 'create:brass_hand']],
        ['redomesticate:speedster', ['minecraft:bone', 'minecraft:sugar']],
        ['redomesticate:tethered_teleport', ['minecraft:bone', '#c:ender_pearls']],
        ['redomesticate:total_recall', ['minecraft:bone', 'ars_nouveau:manipulation_essence', 'ars_nouveau:abjuration_essence']],
        ['redomesticate:undead_curse', ['minecraft:bone', 'minecraft:rotten_flesh']],
        ['redomesticate:vampire', ['minecraft:bone', 'alexsmobs:blood_sac']],
        ['redomesticate:void_cloud', ['minecraft:bone', 'quark:bottled_cloud']],
        ['redomesticate:warping_bite', ['minecraft:bone', '#c:ender_pearls', 'ars_nouveau:conjuration_essence']],
        ['supplementaries:statis', ['minecraft:string', 'ars_nouveau:air_essence']]
    ];

    recipes.forEach(function(recipe) {
        enchantment(recipe[0], recipe[1], 2000);
    });

});