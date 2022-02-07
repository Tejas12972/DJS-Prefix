/**
 * deletes prefix
 * @param {String} guildID Discord ServerID
 * @returns {boolean}
 */
const Schema = require("../models/prefix")
module.exports = async function remove(guildID) {

    if (!guildID) {
        throw new Error("[DJS-Prefix] guildID not provided in set function")
    }

    if (typeof guildID !== "string") {
        throw new Error("[DJS-Prefix] guildID is not a string")
    }

    Schema.findOne({
        guildID: guildID
    }, async (err, data) => {
        if (!data) {
            throw new Error(`[DJS-Prefix] no prefix set for ${guildID}`)
        } else if (data) {
            let success = true;
            data.delete().catch(e => {
                success = false
                throw e
            }).then(() => {
                if (success === true) {
                    return true
                }
            });
        }
    })
}