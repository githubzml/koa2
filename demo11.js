//ejs 模板引擎
const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const path = require("path");

app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async (ctx) => {
    let title = "Hello enen";
    await ctx.render('index', { title })

})
app.listen(3000, console.log('service is doing'))