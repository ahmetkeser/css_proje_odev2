let firstname ="Ahmet"
let lastname ="KESER"
const DOMAIN="denemejs.com"
const DOMAIN2=DOMAIN.replace('denemejs','gmail') // mevcut domain adresinden başka bir adres türetildi
let email=firstname.toLowerCase() + lastname.toLowerCase() + "@" + DOMAIN //Kullanıcı isim soyisim ile domain uzantılı e  mail üret
console.log(email)
console.log(`              
kullanıcı ${firstname} sana tahsis edilen ${DOMAIN} adresiniz
${email}
`) //^Template Literals kullanımını pekiştir^
console.log(`
${DOMAIN.slice(0,DOMAIN.indexOf("."),).toUpperCase()} Tarafından 

${DOMAIN.slice(DOMAIN.indexOf("."),)} uzantılı adresiniz değiştirmek isterseniz 

seçenekler
* ${lastname.toLowerCase()+firstname.toLowerCase()+"@"+DOMAIN}
** ${firstname.toLocaleLowerCase()+lastname.toLowerCase()+"@"+DOMAIN2}
***${lastname.toLowerCase()+firstname.toLowerCase()+"@"+DOMAIN2}
****${firstname[0].toLowerCase()+lastname.toLowerCase()+"@"+DOMAIN2}
*****${firstname.toLowerCase()+lastname[0].toLowerCase()+"@"+DOMAIN2}
`)