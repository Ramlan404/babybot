const fs = require("fs");

function isAlreadyAntilink(groupID, _db) {
    let found = false;

    Object.keys(_db).forEach((x) => {
        if (_db[x] === groupID) {
            found = true
        }
    })

    return found;
}

function deleteAntilink(groupID, _db) {
    let position = null;

    Object.keys(_db).forEach((x) => {
        if (_db[x] === groupID) {
            position = x
        }
    })

    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync("./database/antilink.json", JSON.stringify(_db, null, 2))
    }
}

function addedAntilink(groupID, _db) {
    _db.push(groupID)
    fs.writeFileSync("./database/antilink.json", JSON.stringify(_db, null, 2))
}

module.exports = {
    isAlreadyAntilink,
    deleteAntilink,
    addedAntilink
}