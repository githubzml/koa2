function getSomeThing() {
    return 'something';
}
//声明变为异步方法
async function testAsync() {
    return 'hello async';
}
async function test() {
    const result1 = getSomeThing();
    const result2 = testAsync();
    console.log(result1, result2);
}

//返回promise


//await 会造成阻塞 用于接受promise对象
//async a wait
test();

//await 亦可接受普通函数

//请求后台 不想阻塞 多步 异步请求