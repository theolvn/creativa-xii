StartupEvents.registry('item', event => {

    Platform.mods.kubejs.name = 'Creativa X'

    //event.create('pepette').displayName('Pepette').texture('creativax:item/pepette')
    //event.create('liasse').displayName('Liasse').texture('creativax:item/liasse')
    event.create('jeton_rouge').displayName('Jeton Rouge').texture('creativax:item/jeton_rouge')
    event.create('jeton_bleu').displayName('Jeton Bleu').texture('creativax:item/jeton_bleu')
    event.create('jeton_vert').displayName('Jeton Vert').texture('creativax:item/jeton_vert')
    event.create('jeton_noir').displayName('Jeton Noir').texture('creativax:item/jeton_noir')
	
	event.create('creativa_alloy').displayName('Creativa Alloy').texture('creativax:item/creativa_alloy')
})