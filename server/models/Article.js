const mongoose = require('mongoose')
// 创建集合规则
const schema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
    body: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', schema)