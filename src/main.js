import { Telegraf } from "telegraf";
import config from "config";

const bot = new Telegraf(config.get("TELEGRAM_TOKEN"));

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

{
  // https://www.youtube.com/watch?v=-6ufFPvp6CY  (time 9:54)
}
