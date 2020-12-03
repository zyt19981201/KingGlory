module.exports = options => {
    return async (req, res, next) => {
        // inflection的classify：转类名，小写复数形式转换为大写单数形式
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modelName}`)
        next()
    }
}