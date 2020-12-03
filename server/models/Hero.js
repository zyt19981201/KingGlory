const mongoose = require('mongoose')
// 创建集合规则
const schema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    avatar: {
        type: String
    },
    banner: {
        type: String
    },
    title: {
        type: String
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
    scores: {
        difficult: {
            type: Number
        },
        skills: {
            type: Number
        },
        attack: {
            type: Number
        },
        survice: {
            type: Number
        }
    },
    skills: [{
        icon: {
            type: String
        },
        name: {
            type: String
        },
        delay: {
            type: String,
            // required: true
        },
        cost: {
            type: String,
            // required: true
        },
        description: {
            type: String
        },
        tips: {
            type: String
        }
    }],
    items1: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    items2: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    usageTips: {
        type: String
    },
    battleTips: {
        type: String
    },
    teamTips: {
        type: String
    },
    partners: [{
        hero: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        description: {
            type: String
        }
    }]

})

module.exports = mongoose.model('Hero', schema, 'heroes')