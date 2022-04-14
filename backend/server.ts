import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'


import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"

const app = opine();


app.get("/getData", async function (req, res) {

    const result: any = await Request.get('https://www.openligadb.de/api/getmatchdata/bl1')
   
    const TOKEN = "";
    if (!TOKEN) throw new Error("Bot token is not provided");
    const bot = new TelegramBot(TOKEN);
    
    bot.on(UpdateType.Message, async (message: any) => {

        const text = message.message.text || "I can't hear you";
    
        await bot.sendMessage({ chat_id: message.message.chat.id, text: `echo ${text}` })
    
    });
    
    bot.run({
        polling: true,
    });

});

const port = 3005


app.listen(
    port,
    () => console.log(`server has started on http://localhost:${port} 🚀`),
);
