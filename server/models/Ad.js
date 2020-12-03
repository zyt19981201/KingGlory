const mongoose = require('mongoose')
// 创建集合规则
const schema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    items: [{
        image: {
            type: String,
        },
        url: {
            type: String
        }
    }]
})

module.exports = mongoose.model('Ad', schema)