const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "settings",
    alias: ["status","botinfo"],
    react: '⚙️',
    desc: "check bot settings",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `〽️ *LLW MD V1 SETTINGS* 〽️

*යටින් settings ටික බලාගන්න වෙනස් කරන්න ඕනෙ නම් .update setting එකේ තියෙන එක:ලකුන true or false...* 🔥

*PREFIX:* ${config.PREFIX}

*MODE:* ${config.MODE}

*AUTO READ STATUS:* ${config.AUTO_READ_STATUS}

*AUTO REPLY:* ${config.AUTO_REPLY}

*AUTO VOICE:* ${config.AUTO_VOICE}

*AUTO STICKER:* ${config.AUTO_STICKER}

> *LLW MD V1 BY LLW EDITZ* 🗿
`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})
