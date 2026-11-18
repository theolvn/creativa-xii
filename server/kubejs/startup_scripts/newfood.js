StartupEvents.registry('item', event => {
  event.create('tasty_crousty')
  .texture('kubejs:item/tasty') // Chemin vers la texture
  .food(food => {
    food
      .nutrition(16)
      .saturation(4) // This value does not directly translate to saturation points gained
      // The real value can be assumed to be:
      // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
  })
})