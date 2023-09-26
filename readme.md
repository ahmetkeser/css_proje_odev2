# Bu çalışma class ve margin, padding içeriğini kavrama amaçlı yapılmıştır
let userName1="ahmet"
let userName2="keser"
const DOMAIN="bilgihavuzu.org"
let email=userName1+userName2+"@"+DOMAIN
let info=`
Aramıza hoşgeldin ${userName1}
sana tahsis edilen adres ${email}
`
let endText =`
${info}e-mail uzunluğu : ${email.length} cevap: ${(3 + 2) * 10}
${new Date().getHours()}:${new  Date().getMinutes()}
`
console.log(endText)
//https://github.com/hakanyalcinkaya/kodluyoruz-frontend-101-egitimi
