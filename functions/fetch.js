/**
 * fetches prefix
 * @param {String} guildID Discord ServerID
 * @returns {String}
 */
const prefix = require("../models/prefix")
const Schema = require("../models/prefix")
module.exports = async function fetch(guildID) {

    if (!guildID) {
        throw new Error("[DJS-Prefix] guildID not provided in fetch function")
    }

    if (typeof guildID !== "string") {
        throw new Error("[DJS-Prefix] guildID is not a string")
    }

    Schema.findOne({
        guildID: guildID
    }, async (err, data) => {
        if (!data) {
            return null;
        } else if (data) {
            return data.prefix
        }
    })
}