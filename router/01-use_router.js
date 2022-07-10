const express = require('express')
const app = express()

//导入路由模块
const router = require('./01-router_modularity')
    //注册路由模块，注册全局中间件
app.use(router)

app.listen(80, () => {
    console.log('http://127.0.0.1')
})