exports.menu = (ucapan, pushname, ownerName, botName, tanggal, jam, runtime, isOwner, isPremium, sisalimit, limitCount, sisaGlimit, gcount, expired, prefix) => {
    return `${ucapan} ${pushname}

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
❏ ${prefix}menugabut
❏ ${prefix}menugroup
❏ ${prefix}menusistem
❏ ${prefix}menustore
❏ ${prefix}menudownload
❏ ${prefix}menugame
❏ ${prefix}menurandom
❏ ${prefix}menutextpro
❏ ${prefix}menuphotooxy
❏ ${prefix}menusearch
❏ ${prefix}menuowner
`
}

exports.simpleMenu = (prefix) => {
    return `
❏ ${prefix}sticker
❏ ${prefix}toimg
❏ ${prefix}attp
❏ ${prefix}nulis
❏ ${prefix}hartatahta
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
❏ ${prefix}afk
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
❏ ${prefix}open
❏ ${prefix}close
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
❏ p < reply chat >
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
❏ ${prefix}akinator
❏ ${prefix}topglobal
❏ ${prefix}toplocal
`
}

exports.randomMenu = (prefix) => {
    return `
❏ ${prefix}asupan
❏ ${prefix}couple
❏ ${prefix}meme
❏ ${prefix}waifu
❏ ${prefix}gachacewek
❏ ${prefix}gachacowok
❏ ${prefix}quotes
❏ ${prefix}bucin
❏ ${prefix}pantun
❏ ${prefix}katabijak
❏ ${prefix}faktaunik
`
}

exports.searchMenu = (prefix) => {
    return `
❏ ${prefix}nickff 
❏ ${prefix}nickml
❏ ${prefix}nickpubg
❏ ${prefix}nickdomino
`
}

exports.gabutMenu = (prefix) => {
    return `
❏ ${prefix}apakah
❏ ${prefix}kapankah
❏ ${prefix}bisakah
❏ ${prefix}hobby
❏ ${prefix}rate
❏ ${prefix}truth
❏ ${prefix}dare
❏ ${prefix}cekbapak
❏ ${prefix}seberapagay
❏ ${prefix}jadian
❏ ${prefix}ganteng
❏ ${prefix}cantik
`
}

exports.textproMenu = (prefix) => {
    return `
❏ ${prefix}neon
❏ ${prefix}matrix
❏ ${prefix}blackpink
❏ ${prefix}halloween
❏ ${prefix}thundername
❏ ${prefix}devilwings
❏ ${prefix}cloudtext
❏ ${prefix}bloodtext
❏ ${prefix}bloodtext2
❏ ${prefix}steeltext
❏ ${prefix}lavatext
❏ ${prefix}toxiclogo
❏ ${prefix}dropwater
❏ ${prefix}metaldark
❏ ${prefix}sandwrite
❏ ${prefix}3dwater
❏ ${prefix}graffiti
❏ ${prefix}graffiti2
❏ ${prefix}phlogo
❏ ${prefix}glitch
❏ ${prefix}graffiti3
❏ ${prefix}layeredtext
❏ ${prefix}vintage
❏ ${prefix}3dspace
❏ ${prefix}stonetext
❏ ${prefix}avengers
❏ ${prefix}marvellogo
❏ ${prefix}3dmetal
❏ ${prefix}lionlogo
❏ ${prefix}wolflogo
❏ ${prefix}ninjalogo
`
}

exports.photooxyMenu = (prefix) => {
    return `
❏ ${prefix}shadowtext
❏ ${prefix}smoketext
❏ ${prefix}romancetext
❏ ${prefix}carvedwood
❏ ${prefix}harrypotter
❏ ${prefix}flamingtext
❏ ${prefix}falleaves
❏ ${prefix}underwater
❏ ${prefix}wolfmetal
❏ ${prefix}woodboard
❏ ${prefix}woodheart
❏ ${prefix}undergrass
❏ ${prefix}coffetext
❏ ${prefix}lovetext
❏ ${prefix}burnpaper
❏ ${prefix}lovemessage
❏ ${prefix}pubglogo
`
}

exports.ownerMenu = (prefix) => {
    return `
❏ ${prefix}bc
❏ ${prefix}bcsewa
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
