const {
	MessageType,
	Presence
} = require("@adiwajshing/baileys");
const fs = require("fs");

const { getBuffer, sleep } = require("../lib/myfunc");

let setting = JSON.parse(fs.readFileSync('./config.json'));
let { botName } = setting
const {
	isSetWelcome,
    getTextSetWelcome
} = require('../lib/setwelcome');
const {
    isSetLeft,
    getTextSetLeft
} = require('../lib/setleft');

module.exports = async(baby, anj, welcome, left, set_welcome_db, set_left_db) => {
    const isWelcome = welcome.includes(anj.jid)
    const isLeft = left.includes(anj.jid)
    const mdata = await baby.groupMetadata(anj.jid)
    const groupName = mdata.subject

    if (anj.action === 'add'){
        if (anj.participants[0] === baby.user.jid){
            await sleep(5000)
            baby.updatePresence(anj.jid, Presence.composing)
            baby.sendMessage(anj.jid, `Hai aku ${botName}, silahkan kirim #menu`, MessageType.text)
        } else if (isWelcome){
            try {
                var pic = await baby.getProfilePicture(anj.participants[0])
            } catch {
                var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
            if (isSetWelcome(anj.jid, set_welcome_db)) {
                var get_teks_welcome = getTextSetWelcome(anj.jid, set_welcome_db)
                var replace_pesan = (get_teks_welcome.replace(/@nama/gi, `@${anj.participants[0].split('@')[0]}`))
                var full_pesan = (replace_pesan.replace(/@grup/gi, groupName))
                baby.sendMessage(anj.jid, await getBuffer(pic), MessageType.image, {caption: `${full_pesan}`, contextInfo: {"mentionedJid": [anj.participants[0]]}})
            } else {
                baby.sendMessage(anj.jid, await getBuffer(pic), MessageType.image, {caption: `Hai @${anj.participants[0].split("@")[0]}, selamat datang di ${groupName}`, contextInfo: {"mentionedJid": [anj.participants[0]]}})
            }
        }
    } else if (anj.action === 'remove' && isLeft){
        try {
            var pic = await baby.getProfilePicture(anj.participants[0])
        } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }
        if (isSetLeft(anj.jid, set_left_db)) {
            var get_teks_welcome = getTextSetLeft(anj.jid, set_left_db)
            var replace_pesan = (get_teks_welcome.replace(/@nama/gi, `@${anj.participants[0].split('@')[0]}`))
            var full_pesan = (replace_pesan.replace(/@grup/gi, groupName))
            baby.sendMessage(anj.jid, await getBuffer(pic), MessageType.image, {caption: full_pesan, contextInfo: {"mentionedJid": [anj.participants[0]]}})
        } else {
            baby.sendMessage(anj.jid, await getBuffer(pic), MessageType.image, {caption: `Sayonara @${anj.participants[0].split("@")[0]}`, contextInfo: {"mentionedJid": [anj.participants[0]]}})
        }
    }
}