import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';
import config from 'config';
import { ogg } from './ogg.js';

const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));
// bot.on(message('text'), async ctx => {
//   await ctx.reply();
// });
bot.on(message('voice'), async ctx => {
  try {
    const link = await ctx.telegram.getFileLink(ctx.message.voice.file_id);
    const userId = String(ctx.message.from.id);
    const oggPath = await ogg.create(link.href, userId);
    await ctx.reply(JSON.stringify(link, null, 2));
    // const mp3Path = await ogg.toMp3(oggPath);
    // await ctx.reply(mp3Path, userId);
  } catch (e) {
    console.log(e);
  }
  await ctx.reply();
});
bot.command('start', async ctx => {});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
