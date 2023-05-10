import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import config from 'config';

const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));
bot.on(message('text'), async ctx => {
  await ctx.reply();
});
bot.command('start', async ctx => {
  await ctx.reply();
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
