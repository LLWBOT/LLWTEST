const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "contactllw",
    desc: "get owner details.",
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

let madeMenu = `〽️ *LLW MD V1 CONTACT OWNER* 〽️

*මොකක් හරි බොට් ගැන ප්‍රශ්නයක් අහන්න නැත්තම් බොට් ගැන දැනගන්න,bug තියේ නම් දැනුවත් කරන්න වගේ දේවල් වලට LLW MD එක හදපු LLW EDITZ ව CONTACT කරගන්න හා අපගේ group,website,channel වගේ links ද මෙහිදී ලබා ගත හැක...🔥* 🔥

📊 *NUMBER(LLW):* 94705564619

📊 *LLW MD GROUP:* https://chat.whatsapp.com/LhjB2cADDyS8faloLh9oe5

📊 *LLW MD WA CHANNEL:* https://whatsapp.com/channel/0029Vb0s10t6BIEm7YKTHm3R

📊 *LLW MD REPO:* ${config.prefix}botrepo command එක ගහන්න..

📊 *LLW MD PAIR SITE:* https://resident-emelita-primellw-952f1d06.koyeb.app/

📊 *LLW MD OWNER:* LLW EDITZ


> *LLW MD V1 BY LLW EDITZ* 🗿
`
await conn.sendMessage(from,{image:{url:"https://files.catbox.moe/egqzxo.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
