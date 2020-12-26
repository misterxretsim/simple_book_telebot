const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const sqlite3 = require('sqlite3').verbose();
const help = require('./helpers');
const helpText = require('./helpText');
require('dotenv').config();


const bot = new Telegraf(process.env.BOT_API);

bot.start(ctx => {

    if (ctx.update.message.chat.type === 'private') {
        const kb = help.getKB(ctx);
        ctx.reply(
            helpText.startRules,
            Markup.keyboard(kb).resize().extra()
        )
    }
});

bot.help(ctx => help.sendHelpText(ctx));
bot.hears('Правила', ctx => help.sendHelpText(ctx));

bot.launch();

console.log('Bot started!')
