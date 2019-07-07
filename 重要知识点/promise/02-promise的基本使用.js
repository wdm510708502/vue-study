const fs = require('fs')
// 创建一个 promise 对象
var p = new Promise(function (resolve, reject) {
    // 逻辑代码
    // err在失败时打印
    // data是成功时的数据
    fs.readFile('./a.txt', function (err, data) {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

// 执行 promise
p.then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
})