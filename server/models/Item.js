const mongoose = require('mongoose')
// 创建集合规则
const schema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    icon: {
        type: String
    }
})

module.exports = mongoose.model('Item', schema)