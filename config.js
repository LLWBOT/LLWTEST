const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "8sZjwS4C#n06Fziu5xAPchrvtgCSyNhsHzqn2gNNOMLzPpxpGtic",
MONGODB: process.env.MONGODB || "",
};
