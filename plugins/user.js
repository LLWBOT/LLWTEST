const config = require('../config')
const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "botuser",
    desc: "get env list.",
    react: '👤',
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
ai:'',
owner: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `〽️ *LLW MD V1 BOT USER DETAILS* 〽️

*මෙහිදී LLW BOT දාගෙන ඉන්න කෙනාගෙ DETAILS බලාගන්න පුලුවන්...ඔයා මේ bot දාගෙන ඉන්න කෙනා නම් තාම ඔයගෙ details දාගත්තෙ නැත්තම් bot ගෙ config file එකට user කියල තියෙන ටිකේ ඔයගෙ details දාගන්න..* 🔥

👤 *USER DETAILS* 👤

*HII ${pushname}..මෙන්න මගෙ විස්තර්* 😙❤️

📊 *NAME:* ${config.USER_NAME}

📊 *AGE:* ${config.USER_AGE}

📊 *LOCATION:* ${config.USER_FROM}

📊 *NUMBER:* ${config.USER_NUMBER}

📊 *DESCRIPTION:* ${config.USER_DESCRIPTION}


> *LLW MD V1 BY LLW EDITZ* 🗿
`
await conn.sendMessage(from,{image:{url:"https://files.catbox.moe/egqzxo.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
