const fs = require('fs')
const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
    if(ctx.path  == '/good') {
        return ctx.body = 'good';
    }

    fs.readFile('somefile.txt',(err,data) => {
        try {
            if(err) {
                throw err;
            }
            ctx.body = 'Hello koa';
        } catch(err) {
            console.log(err)
        }finally {
            console.log("try/catch离开")
        }
    })
})

app.listen(3000)
console.log('server at : http://localhost:3000')