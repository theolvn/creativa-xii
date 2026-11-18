LootJS.lootTables(event => {
    event.modifyLootTables(LootType.PIGLIN_BARTER).createPool(pool => {
        pool.addEntry(LootEntry.of('cataclysm:monstrous_eye').withWeight(1))
        pool.addEntry(LootEntry.of('alexsmobs:blood_sac').withWeight(1))
        pool.addEntry(LootEntry.of('alexsmobs:hemolymph_sac').withWeight(1))
        pool.addEntry(LootEntry.of('alexsmobs:straddlite').withWeight(1))
        pool.addEntry(LootEntry.of('malum:blazing_quartz').withWeight(1))
        pool.addEntry(LootEntry.of('minecraft:wither_skeleton_skull').withWeight(1))
        pool.addEntry(LootEntry.of('minecraft:dried_ghast').withWeight(1))
    })
})


// gold
// quartz
// blazing quarts
// netherite scrap
// nether wart
// blaze rod
// ghast tear
// wither skull
// soul bead
// dry ghast
// bullet pepper
