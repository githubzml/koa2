const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
    //ctx 上下文对象
    let url = ctx.url;
    //前端向后端发送的命令 直观
    let request = ctx.request;
    //接收方式
    let req_query = request.query;
    let req_querystring = request.querystring;
    //第二种方式 不直观 需要解析
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    //打印到页面
    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});
app.listen(3000, () => {
    console.log('3000 is start')
})