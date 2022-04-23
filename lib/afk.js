const fs = require('fs')

/**
 * Add AFK.
 * @param {String} userId 
 * @param {String} time 
 * @param {String} reason 
 * @param {Object} _dir 
 */
const addAfkUser = (userId, time, reason, _dir = fs.readFileSync('./database/afk.json')) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
}

/**
 * Check user AFK.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkAfkUser = (userId, _dir) => {
    let status = false
    const position = _dir.findIndex(object => object.id === userId)
    if (position !== -1) status = true
    return status
}

/**
 * Get AFK reason.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getAfkReason = (userId, _dir) => {
    const position = _dir.findIndex(object => object.id === userId)
    if (position !== -1) {
        return _dir[position].reason
    }
}

/**
 * Get AFK time.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getAfkTime = (userId, _dir) => {
    const position = _dir.findIndex(object => object.id === userId)
    if (position !== -1) {
        return _dir[position].time
    }
}

/**
 * Get AFK ID.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getAfkId = (userId, _dir) => {
    const position = _dir.findIndex(object => object.id === userId)
    if (position !== -1) {
        return _dir[position].id
    }
}

/**
 * Get AFK position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getAfkPosition = (userId, _dir) => {
    let currentState = null
    const position = _dir.findIndex(object => object.id === userId)
    if (position !== -1) {
        currentState = position
    }
    return currentState
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
}
