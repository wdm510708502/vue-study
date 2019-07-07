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

// 只要有一个执行完,就直接返回,其余的不管了
const por = Promise.race([getPro('./a.txt'),getPro('./b.txt'),getPro('./c.txt')])
por.then(data => {
    console.log(data.toString());
})