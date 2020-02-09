const Koa = require('koa');
const app = new Koa();
//中间件
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

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
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = "<h1>404!</h1>";
    }
});



app.listen(3000, () => {
    console.log('3000 is start')
})