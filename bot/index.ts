import { Telegraf, Markup } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN || '7437197044:AAHjr5_mFvA72FD9NBL5WQscYvJeI_er2W8';
const bot = new Telegraf(BOT_TOKEN);

// Start command
bot.start((ctx) => {
  console.log(bot.botInfo)
  ctx.reply('Welcome! Click a button', Markup.inlineKeyboard([
    Markup.button.callback('Button 1', 'button1'),
    Markup.button.callback('Button 2', 'button2'),
    Markup.button.webApp('Open app', 'https://4477-176-125-33-224.ngrok-free.app')
  ]));
});

bot.launch().then(() => {
  console.log('Bot is up and running');
});
