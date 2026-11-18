ServerEvents.recipes(event => {
    // steel ingot
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "tag": "c:ingots/iron"
            },
            {
                "item": "oritech:coal_dust"
            }
        ],
        "results": [
            {
                "id": "oritech:steel_ingot"
            }
        ]
    });
    // amethyst to fluix
    event.custom({
        "type": "createaddition:charging",
        "energy": 10000,
        "ingredients": [
            {
            "item": "minecraft:amethyst_shard"
            }
        ],
        "max_charge_rate": 360,
        "results": [
            {
            "id": "ae2:fluix_crystal"
            }
        ]
    });
    // nerf shield
    event.remove({ id: 'minecraft:shield' })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
            "item": "create:iron_sheet"
            },
            {
            "tag": "minecraft:planks"
            }
        ],
        "results": [
            {
            "id": "minecraft:shield"
            }
        ]
    });



    // apotheosis gem dust
    // event.custom({
    //     "type": "create:milling",
    //     "ingredients": [
    //         {
    //         "item": "apotheosis:gem"
    //         }
    //     ],
    //     "processing_time": 200,
    //     "results": [
    //         {
    //         "count": 2,
    //         "id": "apotheosis:gem_dust"
    //         },
    //         {
    //         "chance": 0.5,
    //         "count": 1,
    //         "id": "apotheosis:gem_dust"
    //         },
    //         {
    //         "chance": 0.5,
    //         "count": 1,
    //         "id": "apotheosis:gem_dust"
    //         }
    //     ]
    // });
    // event.custom({
    //     "type": "create:crushing",
    //     "ingredients": [
    //         {
    //         "item": "apotheosis:gem"
    //         }
    //     ],
    //     "processing_time": 200,
    //     "results": [
    //         {
    //         "count": 2,
    //         "id": "apotheosis:gem_dust"
    //         },
    //         {
    //         "chance": 0.5,
    //         "count": 1,
    //         "id": "apotheosis:gem_dust"
    //         },
    //         {
    //         "chance": 0.5,
    //         "count": 1,
    //         "id": "apotheosis:gem_dust"
    //         },
    //         {
    //         "chance": 0.5,
    //         "count": 1,
    //         "id": "apotheosis:gem_dust"
    //         },
    //         {
    //         "chance": 0.5,
    //         "count": 1,
    //         "id": "apotheosis:gem_dust"
    //         }
    //     ]
    // });

    // haunted certus = nether quartz
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
            "item": "ae2:certus_quartz_crystal"
            }
        ],
        "results": [
            {
            "id": "minecraft:quartz"
            }
        ]
    });
    // mixing certus
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "item": "ae2:charged_certus_quartz_crystal"
            },
            {
            "item": "ae2:certus_quartz_dust"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
            "count": 2,
            "id": "ae2:certus_quartz_crystal"
            }
        ]
    });
    // fluix crush
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": "ae2:fluix_crystal"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "id": "ae2:fluix_dust"
            }
        ]
    });
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "ae2:fluix_crystal"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "id": "ae2:fluix_dust"
            }
        ]
    });
    // moyai
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "moyai:moyai"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "id": "moyai:moyai"
            },
            {
            "chance": 0.5,
            "count": 1,
            "id": "minecraft:tuff"
            },
            {
            "chance": 0.3,
            "count": 1,
            "id": "minecraft:andesite"
            },
            {
            "chance": 0.2,
            "count": 1,
            "id": "minecraft:cobblestone"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "minecraft:gravel"
            }
        ]
    });

    // tuff
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:tuff"
            }
        ],
        "processing_time": 350,
        "results": [
            {
            "chance": 0.25,
            "count": 1,
            "id": "minecraft:flint"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "minecraft:gold_nugget"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "create:copper_nugget"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "create:zinc_nugget"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "minecraft:iron_nugget"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "mekanism:nugget_osmium"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "mekanism:nugget_tin"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "mekanism:nugget_lead"
            },
            {
            "chance": 0.1,
            "count": 1,
            "id": "oritech:nickel_nugget"
            }
        ]
    });

    // ash
    event.custom({
        "type": "minecraft:blasting",
        "category": "misc",
        "cookingtime": 100,
        "experience": 0.1,
        "ingredient": {
            "tag": "c:foods"
        },
        "result": {
            "count": 1,
            "id": "supplementaries:ash"
        }
    });
    event.custom({
        "type": "minecraft:smoking",
        "category": "misc",
        "cookingtime": 100,
        "experience": 0.0,
        "ingredient": {
            "tag": "minecraft:logs"
        },
        "result": {
            "count": 1,
            "id": "quark:charcoal_block"
        }
    });
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": "iceandfire:ash"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "count": 4,
            "id": "supplementaries:ash"
            }
        ]
    });
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "iceandfire:ash"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "count": 4,
            "id": "supplementaries:ash"
            }
        ]
    });
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
            "item": "supplementaries:ash"
            },
            {
            "item": "supplementaries:ash"
            },
            {
            "item": "supplementaries:ash"
            },
            {
            "item": "supplementaries:ash"
            }
        ],
        "results": [
            {
            "id": "iceandfire:ash"
            }
        ]
    });
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "item": "minecraft:andesite"
            },
            {
            "item": "supplementaries:ash"
            }
        ],
        "results": [
            {
            "id": "create:andesite_alloy"
            }
        ]
    });
    event.shaped(
        Item.of('create:andesite_alloy', 1),
        [
            'AB',
            'BA',
        ],
        {
            A: 'supplementaries:ash',
            B: 'minecraft:andesite', 
        }
    )
    event.custom({
        "type": "minecraft:blasting",
        "category": "misc",
        "cookingtime": 100,
        "experience": 0.1,
        "ingredient": {
            "tag": "c:foods"
        },
        "result": {
            "count": 1,
            "id": "supplementaries:ash"
        }
    });
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:basalt"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "id": "supplementaries:ash"
            },
            {
            "chance": 0.5,
            "count": 1,
            "id": "supplementaries:ash"
            },
            {
            "chance": 0.25,
            "count": 1,
            "id": "minecraft:gunpowder"
            },
            {
            "chance": 0.2,
            "count": 1,
            "id": "mekanism:dust_sulfur"
            }
        ]
    });
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
            "item": "minecraft:basalt"
            }
        ],
        "processing_time": 200,
        "results": [
            {
            "count": 1,
            "id": "supplementaries:ash"
            },
            {
            "chance": 0.20,
            "count": 1,
            "id": "minecraft:gunpowder"
            }
        ]
    });
    event.custom({
        "type": "create_dragons_plus:freezing",
        "ingredients": [
            {
            "item": "minecraft:magma_block"
            }
        ],
        "results": [
            {
            "id": "minecraft:basalt"
            }
        ]
    });
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
            "type": "neoforge:single",
            "amount": 100,
            "fluid": "minecraft:lava"
            }
        ],
        "results": [
            {
            "id": "minecraft:magma_block"
            }
        ]
    });
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "item": "minecraft:dirt"
            },
            {
            "item": "supplementaries:ash"
            },
            {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
            "count": 2,
            "id": "minecraft:clay"
            }
        ]
    });

    //ars essence
    event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:abjuration_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:abjuration_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:conjuration_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:conjuration_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:air_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:air_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:earth_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:earth_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:fire_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:fire_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:manipulation_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:manipulation_essence"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "ars_nouveau:water_essence"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 2,
      id: "ars_nouveau:water_essence"
    }
  ]
});
    event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "minecraft:amethyst_shard"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      id: "ars_nouveau:source_gem"
    }
  ]
});

event.custom({
   type: "create:mixing",
  ingredients: [
    {
      item: "minecraft:lapis_lazuli"
    },
    {
      type: "neoforge:single",
      amount: 250,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      id: "ars_nouveau:source_gem"
    }
  ]
});
    event.custom({
   type: "create:compacting",
  ingredients: [
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      tag: "c:stones"
    },
    {
      type: "neoforge:single",
      amount: 500,
      fluid: "sauce:source_fluid"
    }
  ],
  results: [
    {
      count: 8,
      id: "ars_nouveau:sourcestone"
    }
  ]
});

// CHANNELING
event.custom({
  type: "create_aquatic_ambitions:channeling",
  ingredients: [
    {
      tag: "c:gems/lapis"
    }
  ],
  results: [
    {
      chance: 0.75,
      id: "minecraft:prismarine_shard"
    },
    {
      chance: 0.125,
      id: "minecraft:prismarine_crystals"
    }
  ]
});

event.custom({
  type: "create_aquatic_ambitions:channeling",
  ingredients: [
    {
      item: "minecraft:obsidian"
    }
  ],
  results: [
    {
      id: "minecraft:crying_obsidian"
    }
  ]
});

event.custom({
  type: "create_aquatic_ambitions:channeling",
  ingredients: [
    {
      item: "minecraft:bone_block"
    }
  ],
  results: [
    {
      id: "create:limestone"
    }
  ]
});

// CHARGING

event.custom({
  type: "createaddition:charging",
  energy: 8000,
  ingredients: [
    {
      item: "minecraft:quartz"
    }
  ],
  max_charge_rate: 400,
  results: [
    {
      count: 1,
      id: "create:rose_quartz"
    }
  ]
});

// asurine ochrum etc
event.custom({
  type: "createaddition:charging",
  energy: 4000,
  ingredients: [
    {
      item: "minecraft:crying_obsidian"
    }
  ],
  max_charge_rate: 200,
  results: [
    {
      count: 2,
      id: "create:asurine"
    }
  ]
});
event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "minecraft:magma_block"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:water"
    }
  ],
  results: [
    {
      id: "create:ochrum"
    }
  ]
});
event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      item: "minecraft:gravel"
    },
    {
      item: "minecraft:flint"
    },
    {
      item: "minecraft:flint"
    },
    {
      item: "minecraft:flint"
    },
    {
      type: "neoforge:single",
      amount: 1000,
      fluid: "minecraft:lava"
    }
  ],
  results: [
    {
      id: "create:crimsite"
    }
  ]
});

event.custom({
   type: "create:compacting",
  ingredients: [
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    },
    {
      item: "ars_nouveau:archwood_planks"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "supplementaries:lumisene"
    }
  ]
});

event.custom({
   type: "create:compacting",
   heat_requirement: "superheated",
  ingredients: [
    {
      tag: "c:bookshelves"
    }
  ],
  results: [
    {
      amount: 1000,
      id: "create_enchantment_industry:experience"
    }
  ]
});
});

ServerEvents.recipes(event => {

    event.forEachRecipe({ type: 'create:mixing' }, recipe => {

        let json = recipe.json

        // Vérifie si la recette utilise au moins une honey bottle
        let usesHoneyBottle = JSON.stringify(json.ingredients)
            .includes('minecraft:honey_bottle')

        if (!usesHoneyBottle) return

        // Copie complète de la recette originale
        let newRecipe = JSON.parse(JSON.stringify(json))

        // Remplace les honey bottle par 250 mB de miel liquide
        newRecipe.ingredients = newRecipe.ingredients.map(ingredient => {

            if (ingredient.item === 'minecraft:honey_bottle') {
                return {
                    fluid: 'create:honey',
                    amount: 250
                }
            }

            return ingredient
        })

        // Nouvel ID pour ne pas remplacer la recette originale
        let newId = recipe.getId() + '_liquid_honey'

        event.custom(newRecipe).id(newId)
    })
})

ServerEvents.tags('item', event => {
    event.add('c:experience_bucket', 'create_enchantment_industry:experience_bucket')
    event.add('c:experience_bucket', 'sophisticatedcore:xp_bucket')

    event.add('dndecor:cogwheel', 'create:cogwheel')
    event.add('dndecor:large_cogwheel', 'create:large_cogwheel')
  })