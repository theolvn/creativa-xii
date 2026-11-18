// create crushing
function createCrushing(event, item, result) {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": item
            }
        ],
        "processing_time": 350,
        "results": [
            {
            "id": result
            }
        ]
    });
}

// create milling
function createMilling(event, item, result, count) {
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": item
            }
        ],
        "processing_time": 50,
        "results": [
            {
            "count": count,
            "id": result
            }
        ]
    });
}

// mekanism crusher
function mekanismCrushing(event, item, result, count) {
    event.custom({
        "type":"mekanism:crushing",
        "input":
        {
            "count":1,
            "item": item
        },
        "output":
        {
            "count":count,
            "id": result
        }
    });
}

// oritech pulverizing
function oritechPulverizing(event, item, result, count) {
    event.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": item
            }
        ],
        "results": [
            {
            "count": count,
            "id": result
            }
        ],
        "time": 100
    });
}

// oritech fragmenting
function oritechFragmenting(event, item, result, count) {
    event.custom({
        "type": "oritech:grinder",
        "ingredients": [
            {
            "item": item
            }
        ],
        "results": [
            {
            "count": count,
            "id": result
            }
        ],
        "time": 40
    });
}

ServerEvents.recipes(event => {
    const sulfurRecipes = [
        { item: "minecraft:sulfur", result: "mekanism:dust_sulfur", count: 2 },
        //{ item: "minecraft:sulfur_stairs", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:sulfur_slab", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:sulfur_wall", result: "mekanism:dust_sulfur", count: 2 },
        //{ item: "minecraft:chiseled_sulfur", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:polished_sulfur", result: "mekanism:dust_sulfur", count: 2 },
        //{ item: "minecraft:polished_sulfur_stairs", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:polished_sulfur_slab", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:polished_sulfur_wall", result: "mekanism:dust_sulfur", count: 2 },
        //{ item: "minecraft:sulfur_brick", result: "mekanism:dust_sulfur", count: 2 },
        //{ item: "minecraft:sulfur_brick_stairs", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:sulfur_brick_slab", result: "mekanism:dust_sulfur", count: 1 },
        //{ item: "minecraft:sulfur_brick_wall", result: "mekanism:dust_sulfur", count: 2 },
        { item: "minecraft:sulfur_spike", result: "mekanism:dust_sulfur", count: 2 },
        { item: "minecraft:potent_sulfur", result: "mekanism:dust_sulfur", count: 18 }
    ];

    sulfurRecipes.forEach(r => {
        // CREATE CRUSHING
        // createCrushing(event, r.item, r.result);
        // CREATE MILLING
        createMilling(event, r.item, r.result, r.count);
        // MEKANISM CRUSHING
        mekanismCrushing(event, r.item, r.result, r.count);
        // ORITECH PULVERIZER
        oritechPulverizing(event, r.item, r.result, r.count);
        // ORITECH GRINDER
        // oritechFragmenting(event, r.item, r.result, r.count);
    });

    // cinnabar
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:cinnabar"
            }
        ],
        "processing_time": 250,
        "results": [
            {
            "id": "minecraft:red_dye",
            "count": 2
            },
            {
            "id": "minecraft:iron_nugget",
            "chance": 0.5
            },
            {
            "id": "minecraft:redstone",
            "chance": 0.2
            }
        ]
    });
    createMilling(event, "minecraft:cinnabar", "minecraft:red_dye", 1);
    mekanismCrushing(event, "minecraft:cinnabar", "minecraft:red_dye", 2);
    oritechPulverizing(event, "minecraft:cinnabar", "minecraft:red_dye", 2);
    event.custom({
        "type": "oritech:pulverizer",
        "ingredients": [
            {
            "item": "minecraft:cinnabar"
            }
        ],
        "processing_time": 100,
        "results": [
            {
            "id": "minecraft:red_dye",
            "count": 2
            },
            {
            "count": 2,
            "id": "minecraft:iron_nugget",
            },
            {
            "id": "minecraft:redstone",
            }
        ]
    });
});