import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

const app = opine();

const pathToIndexHTMLFile = `${Deno.cwd()}/frontend/index.html`

app.get("/", function (req, res) {
    res.sendFile(pathToIndexHTMLFile); // consider providing the index.html via github pages as an alternative
});

app.get("/getISSPosition", async function (req, res) {
    const result: any = await Request.get('https://www.openligadb.de/api/getavailableteams/bl1/2021')

    res.send(`${result.length} ${JSON.stringify(result[1].TeamIconUrl)}`);
    for (let i = 0; i < result.length; i++) {
        console.log (result[i].TeamIconUrl);
      }

    console.log(`${JSON.stringify(result[1].TeamIconUrl)}`);
});

const port = 3000

app.listen(
    port,
    () => console.log(`server has started on http://localhost:${port} 🚀`),
);