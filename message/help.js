exports.menu = (ucapan, pushname, mundur, ownerName, botName, tanggal, jam, runtime, isOwner, isPremium, sisalimit, limitCount, sisaGlimit, gcount, expired, prefix) => {
    return `${ucapan} ${pushname}
    
Hitung Mundur Bulan Ramadhan
${mundur}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
📆 Tanggal : ${tanggal}
⌚ Jam : ${jam}
⏳ Runtime
${runtime}

*USER INFO*

*‣ Name : ${pushname}*
*‣ Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*
*‣ Limit : ${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
*‣ Limit Game : ${isOwner ? 'Unlimited' : `${sisaGlimit}/${gcount}`}*
*‣ Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*

*LIST MENU BOT*

❏ ${prefix}menusimple
❏ ${prefix}menusticker
❏ ${prefix}menugroup
❏ ${prefix}menusistem
❏ ${prefix}menustore
❏ ${prefix}menudownload
❏ ${prefix}menugame
❏ ${prefix}menurandom
❏ ${prefix}menusearch
❏ ${prefix}menuowner
`
}

exports.simpleMenu = (prefix) => {
    return `
❏ ${prefix}sticker
❏ ${prefix}attp
❏ ${prefix}nulis
❏ ${prefix}limit
`
}

exports.stickerMenu = (prefix) => {
    return `
❏ ${prefix}sticker
❏ ${prefix}swm
❏ ${prefix}attp
❏ ${prefix}pentol
`
}

exports.groupMenu = (prefix) => {
    return `
❏ ${prefix}add
❏ ${prefix}kick
❏ ${prefix}welcome
❏ ${prefix}left
❏ ${prefix}setwelcome
❏ ${prefix}changewelcome
❏ ${prefix}delsetwelcome
❏ ${prefix}setleft
❏ ${prefix}changeleft
❏ ${prefix}delsetleft
❏ ${prefix}mute
❏ ${prefix}hidetag
❏ ${prefix}opengrup
❏ ${prefix}closegrup
❏ ${prefix}checksewa
`
}

exports.sistemMenu = (prefix) => {
    return `
❏ ${prefix}antilink
❏ ${prefix}antiwame
❏ ${prefix}antiyt
❏ ${prefix}antitele
❏ ${prefix}antibitly
❏ ${prefix}setcmd
❏ ${prefix}delcmd
`
}

exports.storeMenu = (prefix) => {
    return `
❏ ${prefix}list
❏ ${prefix}addlist
❏ ${prefix}dellist
❏ ${prefix}update
❏ ${prefix}tambah
❏ ${prefix}kurang
❏ ${prefix}kali
❏ ${prefix}bagi
❏ y < reply chat >
❏ d < reply chat >
`
}

exports.downloadMenu = (prefix) => {
    return `
❏ ${prefix}instagram
❏ ${prefix}youtube
❏ ${prefix}tiktok
`
}

exports.gameMenu = (prefix) => {
    return `
❏ ${prefix}tebakgambar
❏ ${prefix}family100
❏ ${prefix}tictactoe
❏ ${prefix}suit
❏ ${prefix}topglobal
❏ ${prefix}toplocal
`
}

exports.randomMenu = (prefix) => {
    return `
❏ ${prefix}asupan
❏ ${prefix}couple
❏ ${prefix}meme1
❏ ${prefix}meme2
❏ ${prefix}gachacewek
❏ ${prefix}gachacowok
`
}

exports.searchMenu = (prefix) => {
    return `
❏ ${prefix}nickff 
❏ ${prefix}nickml
❏ ${prefix}nickpubg
`
}

exports.ownerMenu = (prefix) => {
    return `
❏ ${prefix}bc
❏ ${prefix}join
❏ ${prefix}exif
❏ ${prefix}self
❏ ${prefix}public
❏ ${prefix}setlogo
❏ ${prefix}setprefix
❏ ${prefix}ban
❏ ${prefix}unban
❏ ${prefix}listban
❏ ${prefix}addsewa
❏ ${prefix}delsewa
❏ ${prefix}listsewa
❏ ${prefix}addprem
❏ ${prefix}delprem
❏ ${prefix}listprem
`
}
