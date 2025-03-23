const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "list",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
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
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `🎲 *LLW MD COMMANDS LIST* 🎲
⚡ *HELLOW ${pushname}!* ⚡

♻️මෙහි ඇත්තෙ menu එකේ commands වලට අමතරව එහි සදහන් කර නොමැති commands වේ...♻️

🎭 *LLW MD FULL COMMAND LIST* 🎭

.menu
.list
.song
.video 
.update
.restart
.alive
.system 



})
