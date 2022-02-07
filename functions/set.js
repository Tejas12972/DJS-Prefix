/**
 * set prefix
 * @param {String} guildID Discord ServerID
 * @param {String} prefix Prefix to be set 
 * @returns {boolean}
 */
const Schema = require("../models/prefix")
module.exports = async function connect(guildID, prefix) {

    if (!guildID) {
        throw new Error("[DJS-Prefix] guildID not provided in set function")
    }

    if (typeof guildID !== "string") {
        throw new Error("[DJS-Prefix] guildID is not a string")
    }

    if(!prefix) {
        throw new Error("[DJS-Prefix] prefix is not provided in set function")
    }

    if (typeof prefix !== "string") {
        throw new Error("[DJS-Prefix] prefix is not a string")
    }

    let success = true;

   await new Schema({
        guildID: guildID,
        prefix: prefix,
    }).save().catch(e => {
        success = false
        throw e
    }).then(() => {
        if (success === true) {
            return true
        }
    });
}