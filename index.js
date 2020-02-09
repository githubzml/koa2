//服务端渲染
const Koa = require('koa');
const app = new Koa();
//服务
app.use(async(ctx)=>{
    //ctx koa自带箭头函数
    ctx.body='hello ok'; 
})
//监听端口
app.listen(3000);
//显示启动
console.log("app is starting at port");