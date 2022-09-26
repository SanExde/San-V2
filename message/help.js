const moment = require("moment-timezone");
const fs = require("fs");
const { runtime, sleep } = require("../lib/myfunc");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/20YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} @${sender.split('@')[0]} 👋
	
 *INFO BOT*
 👑 Creator : ${setting.ownerName}
 🤖 Bot Name : ${setting.botName}
 📆 Tanggal : ${tanggal}
 ⌚ Jam : ${jam}
 ⏳ Runtime
 ${runtime(process.uptime())}
 
 *INFO USER*
 📝 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 ⏱️ Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 🎮 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 💰 Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
╭─━─━RANDOM MENU
│❏ ${prefix}runtime
│❏ ${prefix}speed
│❏ ${prefix}owner
│❏ ${prefix}sc
│❏ ${prefix}donasi
│❏ ${prefix}thanksto
│❏ ${prefix}delete
│❏ ${prefix}kirim
│❏ ${prefix}cekprem
│❏ ${prefix}listprem
│❏ ${prefix}listban
│❏ ${prefix}listsewa
│❏ ${prefix}topbalance
│❏ ${prefix}login
│❏ ${prefix}listlogin
╰─━━──━──
╭─━─━CONVERTER/TOOLS
│❏ ${prefix}sticker [reply/kirim gambar]
│❏ ${prefix}toimg [reply stickernya]
│❏ ${prefix}tovid [reply stickernya]
│❏ ${prefix}attp [teks]
│❏ ${prefix}ttp [teks]
│❏ ${prefix}smeme [teks1|teks2]
│❏ ${prefix}tahta [teks]
│❏ ${prefix}gaminglogo [teks]
│❏ ${prefix}fpslogo [teks]
│❏ ${prefix}ffbanner [teks]
│❏ ${prefix}removebg [reply/kirim gambar]
│❏ ${prefix}wanted [reply/kirim gambar]
│❏ ${prefix}wasted [reply/kirim gambar]
│❏ ${prefix}triggered [reply/kirim gambar]
│❏ ${prefix}ssweb [url]
│❏ ${prefix}nulis [teks]
│❏ ${prefix}nulis2 [teks]
╰─━━──━── 
╭─━─━DOWNLOADER
│❏ ${prefix}play [query]
│❏ ${prefix}tiktok [url]
│❏ ${prefix}tiktoknowm [url]
│❏ ${prefix}tiktokaudio [url]
│❏ ${prefix}ytmp4 [url]
│❏ ${prefix}ytmp3 [url]
│❏ ${prefix}ytmp3vn [url]
│❏ ${prefix}getvideo
│❏ ${prefix}getmusic
│❏ ${prefix}pinterest [query]
╰─━━──━──
╭─━─━MEME MENU
│❏ ${prefix}meme1
│❏ ${prefix}meme2
│❏ ${prefix}meme3
│❏ ${prefix}meme4
│❏ ${prefix}meme5
│❏ ${prefix}meme6
│❏ ${prefix}meme7
│❏ ${prefix}meme8
╰─━━──━──
╭─━─━STORE MENU
│❏ ${prefix}addlist [key@response]
│❏ ${prefix}dellist [key]
│❏ ${prefix}updatelist [key@response]
│❏ ${prefix}list
│❏ ${prefix}proses
│❏ ${prefix}done
│❏ ${prefix}iklan
╰─━━──━──  
╭─━─━STALK MENU
│❏ ${prefix}stalkml
│❏ ${prefix}stalkff
│❏ ${prefix}stalkgenshin
│❏ ${prefix}stalkcod
│❏ ${prefix}stalkdomino
│❏ ${prefix}stalkpubg
│❏ ${prefix}stalksausage
╰─━━──━──
╭─━─━GAME MENU
│❏ ${prefix}susunkata
│❏ ${prefix}siapakahaku
│❏ ${prefix}mancing
╰─━━──━──  
╭─━─━PAYMENT & BANK
│❏ ${prefix}buylimit
│❏ ${prefix}buyglimit
│❏ ${prefix}transfer
│❏ ${prefix}ceklimit
│❏ ${prefix}cekbalance
╰─━━──━──  
╭─━─━GROUP MENU
│❏ ${prefix}linkgrup
│❏ ${prefix}setppgrup
│❏ ${prefix}setnamegc [text]
│❏ ${prefix}setdesc [text]
│❏ ${prefix}group [open/close]
│❏ ${prefix}imgtag [text]
│❏ ${prefix}mute
│❏ ${prefix}unmute
│❏ ${prefix}revoke
│❏ ${prefix}hidetag [text]
│❏ ${prefix}tagall [text]
│❏ ${prefix}add [@tag]
│❏ ${prefix}kick [@tag]
│❏ ${prefix}promote [@tag]
│❏ ${prefix}demote [@tag]
│❏ ${prefix}welcome [enable/disable]
│❏ ${prefix}antilink [enable/disable]
╰─━━──━──  
╭─━─━OWNER MENU
│> evalcode
│x evalcode-2
│$ executor
│❏ ${prefix}broadcast [text]
│❏ ${prefix}setppbot [reply/kirim gambar]
│❏ ${prefix}setexif [text1 | text2]
│❏ ${prefix}setowner [nomor]
│❏ ${prefix}setmenu [type]
│❏ ${prefix}setfake [teks]
│❏ ${prefix}setfooter [teks]
│❏ ${prefix}setthumb [reply/kirim gambar]
│❏ ${prefix}setdonasi [reply/kirim gambar]
│❏ ${prefix}addlimit [nomor@jumlah]
│❏ ${prefix}addglimit [nomor@jumlah]
│❏ ${prefix}addbalance [nomor@jumlah]
│❏ ${prefix}addprem [nomor] [waktu]
│❏ ${prefix}delprem [nomor]
│❏ ${prefix}join [link
│❏ ${prefix}leave
│❏ ${prefix}mode
│❏ ${prefix}public
│❏ ${prefix}self
│❏ ${prefix}ban [nomor waktu]
│❏ ${prefix}unban [nomor]
│❏ ${prefix}block [nomor]
│❏ ${prefix}unblock [nomor]
│❏ ${prefix}sewa [add/del]
╰─━━──━── 
 *THANKS TO*
 ➢ Christian ID
 ➢ Nc Tech
 ➢ Irfan / Riyan
 ➢ Gorge_
`
}
