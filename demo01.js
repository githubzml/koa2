//假设settimeout 作为异步请求
function oh() {
    return new Promise(resolve => {
        setTimeout(() => resolve('long_time_value'), 1000);
    })
}

async function test() {
    let result = await oh();
    console.log(result)
}
test();