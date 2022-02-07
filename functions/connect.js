/**
 * Connect to MongoDB 
 * @param {String} url The MongoDB URI
 * @returns {boolean}
 */
const {
    connect
} = require('mongoose')

module.exports = async function connect(url) {
    try {
        require.resolve("mongoose")
    } catch (e) {
        throw new Error("[DJS-prefix] Cannot find module 'mongoose'")
    }

    if (!url) {
        throw new Error("[DJS-Prefix] - No mongo uri was provided")
    }
    let connected = true
    connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        autoIndex: false
    }).catch(e => {
        connected = false
        throw e
    }).then(() => {
        if (connected === true) {
            return true
        }
    });
}