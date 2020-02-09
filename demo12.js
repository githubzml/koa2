//静态文件
const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const app = new Koa();

//声明静态路径
const staticPath = "./static";

app.use(static(path.join(__dirname, staticPath)));

app.use(async (ctx) => {
    ctx.body = "haha"
})

app.listen(3000, console.log('service is doing'))