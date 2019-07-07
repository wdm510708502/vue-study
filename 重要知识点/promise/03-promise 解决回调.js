const fs = require('fs')
// 创建一个 promise 对象
var pa = new Promise(function (resolve, reject) {
    fs.readFile('./a.txt', function (err, data) {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
var pb = new Promise(function (resolve, reject) {
    fs.readFile('./b.txt', function (err, data) {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
var pb = new Promise(function (resolve, reject) {
    fs.readFile('./c.txt', function (err, data) {
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