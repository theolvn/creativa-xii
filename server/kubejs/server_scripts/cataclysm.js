ServerEvents.recipes(event => {

        event.remove({ id: 'cataclysm:mech_eye' })
        event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "minecraft:ender_eye"
        },
        "loops": 4,
        "results": [
            {
            "chance": 120.0,
            "id": "cataclysm:mech_eye"
            },
            {
            "chance": 8.0,
            "id": "minecraft:ender_eye"
            },
            {
            "chance": 8.0,
            "id": "mekanism:alloy_infused"
            },
            {
            "chance": 5.0,
            "id": "mekanism:steel_casing"
            },
            {
            "chance": 3.0,
            "id": "mekanism:ingot_osmium"
            },
            {
            "chance": 2.0,
            "id": "oritech:plastic_sheet"
            },
            {
            "chance": 2.0,
            "id": "supplementaries:ash"
            }
        ],
        "sequence": [
            {
            "type": "create:filling",
            "ingredients": [
                {
                "item": "minecraft:ender_eye"
                },
                {
                "type": "neoforge:single",
                "amount": 250,
                "fluid": "minecraft:lava"
                }
            ],
            "results": [
                {
                "id": "minecraft:ender_eye"
                }
            ]
            },
            {
            "type": "create:deploying",
            "ingredients": [
                {
                "item": "minecraft:ender_eye"
                },
                {
                "item": "mekanism:alloy_infused"
                }
            ],
            "results": [
                {
                "id": "minecraft:ender_eye"
                }
            ]
            },
            {
            "type": "create:deploying",
            "ingredients": [
                {
                "item": "minecraft:ender_eye"
                },
                {
                "item": "mekanism:steel_casing"
                }
            ],
            "results": [
                {
                "id": "minecraft:ender_eye"
                }
            ]
            },
            {
            "type": "create:pressing",
            "ingredients": [
                {
                "item": "minecraft:ender_eye"
                }
            ],
            "results": [
                {
                "id": "minecraft:ender_eye"
                }
            ]
            }
        ],
        "transitional_item": {
            "id": "minecraft:ender_eye"
        }
    });

    event.remove({ id: 'cataclysm:flame_eye' })
    event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "ice",
        "cookTime": 1000,
        "input": {
            "item": "iceandfire:dragonsteel_fire_ingot"
        },
        "blood": {
            "item": "iceandfire:dragonsteel_ice_ingot"
        },
        "result": {
            "id": "cataclysm:flame_eye"
        }
    });
    event.custom({
        "type": "iceandfire:dragonforge",
        "dragonType": "fire",
        "cookTime": 1000,
        "input": {
            "item": "iceandfire:dragonsteel_fire_ingot"
        },
        "blood": {
            "item": "iceandfire:dragonsteel_ice_ingot"
        },
        "result": {
            "id": "cataclysm:flame_eye"
        }
    });
})