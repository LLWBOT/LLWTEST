const { updateEnv, readEnv } = require('../lib/database');
const EnvVar = require('../lib/mongodbenv');
const { cmd } = require('../command');

cmd({
    pattern: "settings",
    alias: ["checkenv"],
    desc: "Check environment variables",
    category: "owner",
    filename: __filename,
