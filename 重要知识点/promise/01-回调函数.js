// 有三个文件 a,b,c
// 请分别把期中的内容读出来: 先读a,a读完再读b,b读完再读C
const fs = require('fs')

// 先读a
fs.readFile('./a.txt',(err, data) => {
    console.log(data.toString());
    // 再读b
    fs.readFile('./b.txt',(err, data) => {
        console.log(data.toString());
        // 再读c
        fs.readFile('./c.txt',(err, data) => {
            console.log(data.toString());
        })
    })
})