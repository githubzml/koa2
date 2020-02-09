const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

//层级prefix
const router = new Router({
    prefix:'/jspang'
});


router
    .get("/", (ctx, next) => {
        ctx.body = "hello world";
    })
    .get("/todo", (ctx, next) => {
        ctx.body = "Todo page";
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('service is doing')
})