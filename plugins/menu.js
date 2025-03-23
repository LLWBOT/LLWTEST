const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `⚡ *ආ ${pushname} පැටියෝ..කොහොමද..* ✌️❤️

🌐 *DETAILS* 🌐
📩 *BOT USER:* ${pushname}
☣️ *BOT NAME:* LLW MD
🎲 *LLW MD VERSION:* ${packageJson.version}
♻️ *BOT OWNER:* LLW EDITZ
👑️ *OWNER NUMBER:* 94705564619
📌️ *LLW BOT REPO:* NOT RELEASED
🎭 *LLW BOT UPTIME:* ${runtime(process.uptime())}

🌐 *LLW MD V1 BOT MENU* 🌐

♻️ *REPLY THE COMMANDS WITH THE PREFIX* ♻️
♻️ *prefix එක සමග පහත command එක reply කරන්න* ♻️

⚡ *COMMANDS* ⚡

 🎲 *LLW DOWNLOAD MENU* 🎲
 
 ${menu.download}

 🎭 *MAIN MENU* 🎭

 ${menu.main}

 🔥 *GROUP MENU* 🔥

 ${menu.group}

🗣️ *USER MENU* 🗣️

${menu.owner}

📳 *CONVERT MENU* 📳

${menu.convert}

👑️ *SEARCH MENU* 👑️

${menu.search}

> *LLW MD V1*
> *DEVELOPED BY LLW EDITZ* 🗿
`
await conn.sendMessage(from,{image:{url:"https://i.postimg.cc/vm5scvzn/Untitled912131311121.jpg"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e)
reply(`${e}`)
}
})
