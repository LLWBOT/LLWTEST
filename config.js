//අනිවාරියෙන්ම මේ අලු පාට TEXT ටික කියවන්න EDIT කරන්න කලින්😗...
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sl5jBTwZ#icMoPKGJRlNLnyunn1iJp7_HBkjk0tCFpoYJ2di7JPw",//session id එක llw session generator site එකෙන් ගන්න...
MONGODB: process.env.MONGODB || "mongodb://mongo:FWZlOFoeqddOQbqiVokTNQohtXwGXGAk@caboose.proxy.rlwy.net:57119",//මේක railway site එකෙන් mongodb database එකක් හදන් ඒකෙ pubic url එක දාන්න.yt එකෙත් video එකක් දාන්නම් ඒත් තෙරෙන්නෙ නැත්තම් මට whatsapp msg එකක් දාන්න 94705564619....
USER_NAME: process.env.USER_NAME || "LLW EDITZ",//user command එක සදහා ඔබේ නම..අත්‍යාවශ්‍ය නැත..user command එකේ details වලට පමනි..
USER_AGE: process.env.USER_AGE || "99",//user command your age
USER_FROM: process.env.USER_FROM || "COLOMBO",//your location for user command
USER_DESCRIPTION: process.env.USER_DESCRIPTION || "`OWNER OF LLW MD LLW EDITZ..🧑‍💻✅`",//ඔයා ගැන පොඩි description එකක් user command එකට දාන්න...
USER_NUMBER: process.env.USER_NUMBER || "94705564619",//user command එක සදහා ඔබේ number එක..අත්‍යාවශ්‍ය නැත..user command එකේ details වලට පමනි..

};
