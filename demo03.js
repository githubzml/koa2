const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === "/" && ctx.method === "GET") {
        //显示表单页面
        let html = `
        <h1>hello Koa2</h1>
        <form method="POST" action="/">
        <p>userName</p>
        <input name="userName"></input>
        <p>age</p>
        <input name="age"></input>
        <p>webSite</p>
        <input name="webSite"></input>
        <button type="submit">submit</button>
        </form>
        `;
        ctx.body = html;
    } else if (ctx.url === "/" && ctx.method === "POST") {
        // ctx.body = "接收到post参数";
        let postData = await query(ctx);
        ctx.body = postData;
    } else {
        ctx.body = "<h1>404!</h1>";
    }
});

function query(ctx) {
    return new Promise(resolve => {
        try {
            let postData = "";
            //原生方法
            ctx.req.addListener('data', (data) => {
                postData += data;
            })
            ctx.req.on('end', () => {
                let parsePostData = parseQuery(postData);
                resolve(parsePostData);
            })
        } catch (error) {
            console.log(error)
        }
    })

}
function parseQuery(postData) {
    let ostring = postData.split("&");
    let obj = {};
    console.log('tag', ostring)
    console.log('tag', ostring.entries());
    for (let [index, item] of ostring.entries()) {
        let everyItem = item.split("=");
        //decodeURIComponent 编码进行转译
        obj[everyItem[0]] = decodeURIComponent(everyItem[1]);
    }
    return obj;

}
app.listen(3000, () => {
    console.log('3000 is start')
})