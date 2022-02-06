/**
 * Connect to MongoDB 
 * @param {String} url The MongoDB URI
 * @returns {void}
 */
const {
    connect
} = require('mongoose')
module.exports = async function connect(url) {
    if (!url) {
        throw new Error("[DJS-Prefix] - No mongo uri was provided")
    }
    try {
        connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            autoIndex: false
        })
    } catch (e) {
        throw new Error(`[DJS-Prefix] Error while connecting to mongoDB\n${e}`)
    }
}