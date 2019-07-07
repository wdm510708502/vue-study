const fs = require('fs')
// 创建一个 promise 对象
// 定义之后立即执行
// 因为promise的特点,有三个状态,所以在定义后立即执行了,就给p一个状态了(最重要的就是给状态)
// 当执行 resolve 时状态变为成功
// 当执行 reject 时状态变为失败

var p = new Promise(function (resolve, reject) {
    console.log('我是 p')
    fs.readFile('./a.txt', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})
var pb = new Promise(function (resolve, reject) {
    fs.readFile('./b.txt', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})

p.then(data => {
    console.log(data)
}).then(data2 => {
    // 如果返回值为 undefined， 第二个 then 可以执行，但是参数为 Undeinfed
    console.log('我是第二个 then 方法')
    console.log(data2)
    return '123'
}).then(data3 => {
    // 如果上一个 then 方法返回的是普通数据 字符串， bool 值， 数据，对象... 这个数据会当作参数交给下一个 then 方法
    console.log('我是第三个 then 方法')
    console.log(data3)
    return pb // 返回了一个 promise 对象
}).then(data4 => {
    // 如果上一个 then 方法返回的是一个 promise 对象，那么后的 then 方法就是调用的这个对象的方法
    console.log('我是第四个 then 方法')
    console.log(data4)
})


// pb.then(data4 => {
//     console.log(data4)
// })
