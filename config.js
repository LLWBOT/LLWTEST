const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~Oap3ABbL#zvQFCWvMPSHit_jptUTiiHbX8TO1v7BIATc0igabUC4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/vm5scvzn/Untitled912131311121.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "⚡LLW MD IS ALIVE.THANKS FOR USING LLW BOT🔥.CONTACT OWNER 94705564619",
};
