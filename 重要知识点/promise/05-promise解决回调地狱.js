const fs = require('fs')
// 创建对象
var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./a.txt', (err, data) => {
        if (err) {
         reject(err)
        } else {
            resolve(data)
        }
    })
})
var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./b.txt', (err, data) => {
        if (err) {
         reject(err)
        } else {
            resolve(data)
        }
    })
})
var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./c.txt', (err, data) => {
        if (err) {
         reject(err)
        } else {
            resolve(data)
        }
    })
})

// 解决回调地狱
p1.then(data => {
    console.log(data.toString());
    return p2        // 这里不给返回值的话,下面得到的是undefined,但要把data.toString()
                     // 写成data,因为undefined没有toString
}).then(data => {
    console.log(data.toString());
    return p3
}).then(data => {
    console.log(data.toString());
})