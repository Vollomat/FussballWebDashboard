import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

const app = opine();

const pathToIndexHTMLFile = `${Deno.cwd()}/frontend/index.html`


app.get("/", async function (req, res) {
    const result: any = await Request.get('https://www.openligadb.de/api/getavailableteams/bl1/2021')

    let ergebnis = "";

    for (let i = 0; i < result.length; i++) {
        ergebnis = ergebnis + "<img src= " + result[i].TeamIconUrl + ">";
        console.log (result[i].TeamIconUrl);
      }

    res.send(`${ergebnis}`);
    console.log(`${JSON.stringify(result[1].TeamIconUrl)}`);
});

const port = 3000

app.listen(
    port,
    () => console.log(`server has started on http://localhost:${port} 🚀`),
);
