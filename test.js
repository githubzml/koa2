const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === "/index") {
        
        ctx.body = "index page";

    } else {
        ctx.body = "hello page";
    }

})
app.listen(3000, console.log('service is doing'))