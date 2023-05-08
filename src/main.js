import { Telegraf } from "telegraf";
import config from "config";

const bot = new Telegraf(config.get("TELEGRAM_TOKEN"));

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
