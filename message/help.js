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
	return `${ucapanWaktu} @${sender.split('@')[0]} ð
	
 *INFO BOT*
 ð Creator : ${setting.ownerName}
 ð¤ Bot Name : ${setting.botName}
 ð Tanggal : ${tanggal}
 â Jam : ${jam}
 â³ Runtime
 ${runtime(process.uptime())}
 
 *INFO USER*
 ð Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 â±ï¸ Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 ð® Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 ð° Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
â­ââââRANDOM MENU
ââ ${prefix}runtime
ââ ${prefix}speed
ââ ${prefix}owner
ââ ${prefix}sc
ââ ${prefix}donasi
ââ ${prefix}thanksto
ââ ${prefix}delete
ââ ${prefix}kirim
ââ ${prefix}cekprem
ââ ${prefix}listprem
ââ ${prefix}listban
ââ ${prefix}listsewa
ââ ${prefix}topbalance
ââ ${prefix}login
ââ ${prefix}listlogin
â°ââââââââ
â­ââââCONVERTER/TOOLS
ââ ${prefix}sticker [reply/kirim gambar]
ââ ${prefix}toimg [reply stickernya]
ââ ${prefix}tovid [reply stickernya]
ââ ${prefix}attp [teks]
ââ ${prefix}ttp [teks]
ââ ${prefix}smeme [teks1|teks2]
ââ ${prefix}tahta [teks]
ââ ${prefix}gaminglogo [teks]
ââ ${prefix}fpslogo [teks]
ââ ${prefix}ffbanner [teks]
ââ ${prefix}removebg [reply/kirim gambar]
ââ ${prefix}wanted [reply/kirim gambar]
ââ ${prefix}wasted [reply/kirim gambar]
ââ ${prefix}triggered [reply/kirim gambar]
ââ ${prefix}ssweb [url]
ââ ${prefix}nulis [teks]
ââ ${prefix}nulis2 [teks]
â°ââââââââ 
â­ââââDOWNLOADER
ââ ${prefix}play [query]
ââ ${prefix}tiktok [url]
ââ ${prefix}tiktoknowm [url]
ââ ${prefix}tiktokaudio [url]
ââ ${prefix}ytmp4 [url]
ââ ${prefix}ytmp3 [url]
ââ ${prefix}ytmp3vn [url]
ââ ${prefix}getvideo
ââ ${prefix}getmusic
ââ ${prefix}pinterest [query]
â°ââââââââ
â­ââââMEME MENU
ââ ${prefix}meme1
ââ ${prefix}meme2
ââ ${prefix}meme3
ââ ${prefix}meme4
ââ ${prefix}meme5
ââ ${prefix}meme6
ââ ${prefix}meme7
ââ ${prefix}meme8
â°ââââââââ
â­ââââSTORE MENU
ââ ${prefix}addlist [key@response]
ââ ${prefix}dellist [key]
ââ ${prefix}updatelist [key@response]
ââ ${prefix}list
ââ ${prefix}proses
ââ ${prefix}done
ââ ${prefix}iklan
â°ââââââââ  
â­ââââSTALK MENU
ââ ${prefix}stalkml
ââ ${prefix}stalkff
ââ ${prefix}stalkgenshin
ââ ${prefix}stalkcod
ââ ${prefix}stalkdomino
ââ ${prefix}stalkpubg
ââ ${prefix}stalksausage
â°ââââââââ
â­ââââGAME MENU
ââ ${prefix}susunkata
ââ ${prefix}siapakahaku
ââ ${prefix}mancing
â°ââââââââ  
â­ââââPAYMENT & BANK
ââ ${prefix}buylimit
ââ ${prefix}buyglimit
ââ ${prefix}transfer
ââ ${prefix}ceklimit
ââ ${prefix}cekbalance
â°ââââââââ  
â­ââââGROUP MENU
ââ ${prefix}linkgrup
ââ ${prefix}setppgrup
ââ ${prefix}setnamegc [text]
ââ ${prefix}setdesc [text]
ââ ${prefix}group [open/close]
ââ ${prefix}imgtag [text]
ââ ${prefix}mute
ââ ${prefix}unmute
ââ ${prefix}revoke
ââ ${prefix}hidetag [text]
ââ ${prefix}tagall [text]
ââ ${prefix}add [@tag]
ââ ${prefix}kick [@tag]
ââ ${prefix}promote [@tag]
ââ ${prefix}demote [@tag]
ââ ${prefix}welcome [enable/disable]
ââ ${prefix}antilink [enable/disable]
â°ââââââââ  
â­ââââOWNER MENU
â> evalcode
âx evalcode-2
â$ executor
ââ ${prefix}broadcast [text]
ââ ${prefix}setppbot [reply/kirim gambar]
ââ ${prefix}setexif [text1 | text2]
ââ ${prefix}setowner [nomor]
ââ ${prefix}setmenu [type]
ââ ${prefix}setfake [teks]
ââ ${prefix}setfooter [teks]
ââ ${prefix}setthumb [reply/kirim gambar]
ââ ${prefix}setdonasi [reply/kirim gambar]
ââ ${prefix}addlimit [nomor@jumlah]
ââ ${prefix}addglimit [nomor@jumlah]
ââ ${prefix}addbalance [nomor@jumlah]
ââ ${prefix}addprem [nomor] [waktu]
ââ ${prefix}delprem [nomor]
ââ ${prefix}join [link
ââ ${prefix}leave
ââ ${prefix}mode
ââ ${prefix}public
ââ ${prefix}self
ââ ${prefix}ban [nomor waktu]
ââ ${prefix}unban [nomor]
ââ ${prefix}block [nomor]
ââ ${prefix}unblock [nomor]
ââ ${prefix}sewa [add/del]
â°ââââââââ 
 *THANKS TO*
 â¢ Christian ID
 â¢ Nc Tech
 â¢ Irfan / Riyan
 â¢ Gorge_
`
}
