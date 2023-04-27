const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
    if(ctx.path === '/good') {
        return ctx.body = 'good'
    }

    fs.readFile('somefile.txt',(err,data) => {
        if(err) throw err
        ctx.body = 'hello koa'
    })
})

// process.on('uncaughtException', err => {
//     console.log(err)
// })

app.listen(3000)

console.log('http://localhost:3000')