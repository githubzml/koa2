const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async (ctx) => {
    if (ctx.url === "/index") {
        ctx.cookies.set(
            'MyName', 'zml', {
            domain: '127.0.0.1',
            //这个路径下有效
            path: '/index',
            //最长有效时间
            maxAge: 1000 * 60 * 60 * 24,
            //失效时间
            expires: new Date('2020-2-8'),
            //允许http
            httpOnly: false,
            //允许重写
            overwrite: false
        }
        )
        ctx.body = "cookies is ok";
    } else {
        if (ctx.cookies.get('MyName')) {
            ctx.body = ctx.cookies.get('MyName');
        } else {
            ctx.body = "cookies is null";
        }

    }
})

// app
//     .use(router.routes())
//     .use(router.allowedMethods())

app.listen(3000, () => {
    console.log('3000 is start')
})