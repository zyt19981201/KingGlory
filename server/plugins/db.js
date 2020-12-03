module.exports = app => {

    const mongoose = require('mongoose')
    mongoose.set('useFindAndModify', false)
    // 连接数据库
    mongoose.connect('mongodb://localhost/node-vue-moba', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("数据库连接成功"))
        .catch((err) => console.log('数据库连接失败'));


    require('require-all')(__dirname + '/../models/')
}