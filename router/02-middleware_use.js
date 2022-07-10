const express = require('express')
const app = express()

//多个中间件之间共享req和res，基于这样的特性可以在上游中间件中统一为req和res对象添加自定义属性或方法供下游中间件或路由使用

//简化形式
app.use((req, res, next) => {
    const time = Date.now()
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    res.send('Home page' + req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User page' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})