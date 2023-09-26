let userName1="ahmet"
let userName2="keser"
const DOMAIN="bilgihavuzu.org"
let email = userName1+userName2+"@"+DOMAIN
console.log(email)
console.log(`
${userName1} hoşgeldin. sana tahsis edilen mail :${userName1+userName2+"@"+DOMAIN}
`)
console.log(userName1.length)//harf sayısı
let first =userName1[0].toUpperCase()+userName2[0].toLocaleUpperCase()
console.log(first)
console.log("aradığım:",userName1.search("ezzt")) //-1 sonucu döndürür
console.log("aradığım:",userName2.search("ser"))