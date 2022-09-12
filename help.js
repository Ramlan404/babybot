exports.menu = (ucapan, pushName, ownerName, botName, tanggal, jam, runtime, prefix) => {
    return `${ucapan} ${pushName}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
📆 Tanggal : ${tanggal}
⌚ Jam : ${jam}
⏳ Runtime
${runtime}

*TOOLS/CONVERTER*
• ${prefix}sticker
• ${prefix}swm *text | text*
• ${prefix}ttp *text*
• ${prefix}attp *text*
• ${prefix}toimg *reply image*
• ${prefix}tomp3 *reply video*

*GROUPS MENU*
• ${prefix}kick *@tag*
• ${prefix}add *62855xxx*
• ${prefix}group *open/close*
• ${prefix}setppgroup *reply image*
• ${prefix}setgcname *text*
• ${prefix}setgcdesk *text*
• ${prefix}hidetag *text*
• ${prefix}linkgroup
• ${prefix}antilink *on/off*
• ${prefix}welcome *on/off*
• ${prefix}setwelcome *text*
• ${prefix}changewelcome *text*
• ${prefix}delsetwelcome *text*
• ${prefix}left *on/off*
• ${prefix}setleft *text*
• ${prefix}changeleft *text*
• ${prefix}delsetleft *text*

*STORE MENU*
• ${prefix}addlist *key@response*
• ${prefix}dellist *key*
• ${prefix}updatelist *key@response*
• ${prefix}resetlist
• ${prefix}list
• p
• d
• ${prefix}setp *text*
• ${prefix}changep *text*
• ${prefix}delsetp *text*
• ${prefix}setd *text*
• ${prefix}changed *text*
• ${prefix}delsetd *text*

*DOWNLOADERS*
• ${prefix}youtube *url*
• ${prefix}instagram *url*
• ${prefix}tiktok *url*

*BAILEYS*
• ${prefix}towame *number/reply number*
• ${prefix}quoted *reply container*
• ${prefix}fakehidetag *text*
• ${prefix}react *emoji*

*OWNERS MENU*
• ${prefix}setlogo *reply image*
• ${prefix}join *link group*
• ${prefix}leave
• ${prefix}setexif *text | text*
• ${prefix}setprefix *nopref/multi/#*
• ${prefix}setppbot *reply image*
• ${prefix}self
• ${prefix}public
• ${prefix}broadcast *text/reply image or video*
• ${prefix}bcsewa *text/reply image or video*
• ${prefix}addsewa *linkgroup waktu*
• ${prefix}delsewa *id*
• ${prefix}checksewa

*EXECUTE*
• $
• >
• =>
`
}



