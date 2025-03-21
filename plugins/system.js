const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
cmd({
    pattern: "system",
    alias: ["status","botinfo"]
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `♻️*LLW MD SYSTEM INFO*♻️
💠*Uptime:*  ${runtime(process.uptime())}
💠*Ram usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
💠*HostName:* ${os.hostname()}
💠*Owner:* LLW EDITZ🗣️
💠*contact llw:* 94705564619
💠*whatsapp channel:*https://whatsapp.com/channel/0029Vb0s10t6BIEm7YKTHm3R

*LLW MD 2025*💫
`
return reply(`${status}`)

}catch(e){
console.log(e)
reply(`${e}`)

}
})
