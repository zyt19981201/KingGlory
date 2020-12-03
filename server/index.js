// 引入express模块
const express = require('express')
// 创建网站服务器
const app = express()

app.set('secret', 'gsc61wt6ahgb88gygt2')

// 添加中间件
app.use(express.json())
// 添加跨域模块
app.use(require('cors')())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))



// 将app作为参数传递给admin文件夹下的index
require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/db')(app)

// 监听端口
app.listen(3000, () => {
    console.log('http://localhost:3000');
})