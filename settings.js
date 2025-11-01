//base par Kervens
//YouTube: @Kervens
//Instagram: kervens_king
//Telegram: t.me/soszoe
//WhatsApp: +50942588377
//tu veux plus de scripts de bot gratuits? abonne-toi à ma chaîne YouTube: https://youtube.com/@Kervens

const fs = require('fs')
const chalk = require('chalk')

//détails de contact
global.ownernomer = "50942588377"
global.ownername = "*KERVENS*"
global.ytname = "YT: Kervens King"
global.socialm = "GitHub: KervensKing"
global.location = "Haïti, Port-au-Prince"

global.ownernumber = '50942588377'  //numéro du créateur
global.ownername = 'Kervens' //nom du propriétaire
global.botname = 'KERVENS KING BOT' //nom du bot

//détails du sticker
global.packname = 'Sticker Par Kervens'
global.author = 'Bonjour\n\nContact: 50942588377'

//vue/theme de la console
global.themeemoji = '👑'
global.wm = "Kervens"

//lien du theme
global.link = 'https://whatsapp.com/channel/0029Va8SosLY6d7CAFndv3Z'

//préfixe personnalisé
global.prefa = ['','!','.','#','&']

//false=désactivé et true=activé
global.autoRecording = false //enregistrement automatique
global.autoTyping = false //tape automatique
global.autorecordtype = false //tape + enregistrement automatique
global.autoread = false //lecture automatique des messages
global.autobio = false //mise à jour automatique de la bio
global.anti92 = false //blocage automatique du +92 
global.autoswview = true //vue automatique du statut/story

//type de menu 
//v1 est le menu image, 
//v2 est le menu lien + image,
//v3 est le menu vidéo,
//v4 est le menu de fin d'appel
global.typemenu = 'v1'

//messages de réponse
global.mess = {
    done: 'Terminé !',
    prem: 'Cette fonctionnalité ne peut être utilisée que par un utilisateur premium',
    admin: 'Cette fonctionnalité ne peut être utilisée que par un administrateur',
    botAdmin: 'Cette fonctionnalité ne peut être utilisée que lorsque le bot est administrateur du groupe',
    owner: 'Cette fonctionnalité ne peut être utilisée que par le propriétaire',
    group: 'Cette fonctionnalité est uniquement pour les groupes',
    private: 'Cette fonctionnalité est uniquement pour les chats privés',
    wait: 'En cours... ',    
    error: 'Erreur !',
}

global.thumb = fs.readFileSync('./modsMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Mise à jour de '${__filename}'`))
    delete require.cache[file]
    require(file)
})
