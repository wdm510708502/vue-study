const fs = require('fs')
// 创建对象
function getPro(path){
 return new Promise(function (resolve, reject) {
    fs.readFile(path, (err, data) => {
        if (err) {
         reject(err)
        } else {
            resolve(data)
        }
    })
})
}


// 解决回调地狱
getPro('./a.txt').then(data => {
    console.log(data.toString());
    return getPro('./b.txt')
}).then(data => {
    console.log(data.toString());
    return getPro('./c.txt')
}).then(data => {
    console.log(data.toString());
})