const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BwxnAKpB#3lw_6mfncW0KRMCD2h9LaYWzwWuXlqyzl5Np3vSbsgs",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/vm5scvzn/Untitled912131311121.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "⚡LLW MD IS ALIVE.THANKS FOR USING LLW BOT🔥.CONTACT OWNER 94705564619",
};
