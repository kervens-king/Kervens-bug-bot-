//base par Kervens
//re-upload? recode? copie du code? donne des crédits stp :)
//YouTube: @Kervens
//Instagram: kervens_king
//Telegram: t.me/soszoe
//GitHub: @Kervens-King
//WhatsApp: +50942588377
//tu veux plus de scripts de bot gratuits? abonne-toi à ma chaîne YouTube: https://youtube.com/@Kervens

const fs = require('fs')

const addAfkUser = (userId, time, reason, _dir) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./database/afk-user.json', JSON.stringify(_dir, null, 2))
}

const checkAfkUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

const getAfkReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].reason
    }
}

const getAfkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

const getAfkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

const getAfkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
}
