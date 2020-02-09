const Koa = require("koa");
const app = new Koa();
const fs = require('fs');

app.use(async (ctx) => {
    let url = ctx.request.url;

    ctx.body = await route(url);
})
async function render(page) {
    return new Promise((resolve, reject) => {
        let pageUrl = `./page/${page}`;
        //二进制 binary 
        fs.readFile(pageUrl, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
async function route(url) {
    let page = "404.html";
    switch (url) {
        case "/":
            page = "index.html";
            break;
        case "/404":
            page = "404.html";
            break;
        case "/page":
            page = "page.html";
            break;
        case "/notfound":
            page = "notfound.html";
            break;
        default:
            break;
    }
    console.log('tag', url,page);
    let html = await render(page);
    return html;
}
app.listen(3000, () => {
    console.log('service is doing');
})