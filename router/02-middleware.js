const express = require('express')
const app = express()

//中间件函数，有next表示为中间件函数，没有则为路由函数
// const mw = (req, res, next) => {
//     next()
// }

//mw注册为全局生效中间件
// app.use(mw)

//简化形式
app.use((req, res, next) => {
    next()
})

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})