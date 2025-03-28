const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "sl5jBTwZ#icMoPKGJRlNLnyunn1iJp7_HBkjk0tCFpoYJ2di7JPw",//session id එක llw session generator site එකෙන් ගන්න...
MONGODB: process.env.MONGODB || "mongodb://mongo:RPLGUXREQpSepcqpjIHnuqrPyjlzKQbX@trolley.proxy.rlwy.net:32639",//මේක ගන්න හැටි මන් deploy කරන විදිහ දාපු video එකේ ඇති...
AUTO_REACT_NUMBER: process.env.AUTO_REACT_NUMBER || "94705564619",
};
