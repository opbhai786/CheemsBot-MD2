//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//no credit? i will not take action immediately
//© 2022 TJ Bot Inc. Doge Bot 
//Thank you to Allah Almighty, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['923008354428']
global.premium = ['923008354428']
global.ownernumber = '923008354428'
global.ownername = 'Đ₳Ɽ₭ ĐΔŘ€ 𝔻𝔼𝕍𝕀𝕃'
global.botname = 'T҉J҉ 𝕌𝕃𝕋ℝ𝔸'
global.footer = '𝕌𝕃𝕋ℝ𝔸 #bot.'
global.ig = 'https://github.com/opbhai786'
global.region = 'Pakistan, Punjab, Khanpur'
global.sc = 'wa.me/+923008354428'
global.myweb = 'https://chat.whatsapp.com/JiNuJqtoz8D5aiV1JPYQ71'
global.packname = '𝕌𝕃𝕋ℝ𝔸 Bot'
global.author = 'Đ₳Ɽ₭ ĐΔŘ€ 𝔻𝔼𝕍𝕀𝕃'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In Process...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
