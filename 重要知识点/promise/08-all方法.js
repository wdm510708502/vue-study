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

// 得到一个新的 Promise
const por = Promise.all([getPro('./a.txt'),getPro('./b.txt'),getPro('./c.txt')])
por.then(data => {
    console.log(data.toString());
})