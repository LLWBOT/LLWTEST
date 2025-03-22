const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "1wYlVDTS#nrokG79W9SaRfiYiAqLB1G0o-BkJ083zs9-N3Ad0q0c",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/vm5scvzn/Untitled912131311121.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "⚡LLW MD IS ALIVE.THANKS FOR USING LLW BOT🔥.CONTACT OWNER 94705564619",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
