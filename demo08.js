//层级路由
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
let router = new Router();

//各自路由
let home = new Router();
home
    .get("/jszhu", async (ctx) => {
        ctx.body = "homepage jszhu"
    })
    .get("/jshua", async (ctx) => {
        ctx.body = "homepage jshua"
    })

let page = new Router();
page
    .get("/jszhu", async (ctx) => {
        ctx.body = "pagepage jszhu"
    })
    .get("/jshua", async (ctx) => {
        ctx.body = "pagepage jshua"
    })

//装载中间件
router.use("/home", home.routes(), home.allowedMethods())
router.use("/page", page.routes(), page.allowedMethods())
//装载路由
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000, () => {
    console.log("service is doing")
})