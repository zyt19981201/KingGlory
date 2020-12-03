const mongoose = require('mongoose')
// 创建集合规则
const schema = new mongoose.Schema({
    username: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        select: false,
        set: (value) => {
            return require('bcrypt').hashSync(value, 10)
        }
    }
})

module.exports = mongoose.model('AdminUser', schema)