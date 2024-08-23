import { Telegraf, Markup } from 'telegraf';

const BOT_TOKEN = process.env.BOT_TOKEN || '7437197044:AAHjr5_mFvA72FD9NBL5WQscYvJeI_er2W8';
const bot = new Telegraf(BOT_TOKEN);

// Start command
bot.start((ctx) => {
  ctx.reply('Welcome! Click a button', Markup.inlineKeyboard([
    Markup.button.webApp('Open app', 'https://b18f-194-44-206-232.ngrok-free.app')
  ]));
});

bot.launch().then(() => {
  console.log('Bot is up and running');
});
