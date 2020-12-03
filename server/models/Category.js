const mongoose = require('mongoose')
// 创建集合规则
const schema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})
schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})

schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
})

module.exports = mongoose.model('Category', schema)