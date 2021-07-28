// contadores activos de bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s; 
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const menu = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, Leveling_, role, AntiLinktele_, AntiLinkdis_, Nopor_, isGroup, process) => { 
  if (isGroupAdmins){
    admin = "Admin del Grupo"
  } else if (!isGroupAdmins){
    admin = "Miembro del grupo"
  }
		if (isGroup) return `▢ ${tanggal()}
▢ Hora ${jam} 

  ≡ *INFORMACION*
┌───⊷ *USUARIO* ⊶
├╼ Nombre : *${pushname}*
├╼ Numero : *${sender.split("@")[0]}*
├╼ Premium : ${prem_}
└──────────────
  ≡  *FG98 👨🏻‍💻*
┌──────────────
├╼ *Ig* : instagram.com/fg98._
├╼ *Grupo* : t.me/AndroidWorldfg
├╼ *Grupo Wha* : bit.ly/DyLuxfg
└──────────────
┌───⊷ *GRUPO* ⊶
├╼ *${groupMetadata.subject}*
├╼ *Estado* : ${admin}
├╼ *Miembros del grupo* : _${groupMetadata.participants.length}_
├╼ *Admins del Grupo* : _${groupAdmins.length}_
├╼ *Welcome* : _${Welcome_}_
├╼ *AntilinkWha* : _${AntiLink_}_
└──────────────
  ≡ *LISTA DE MENUS*
┌───⊷ *LISTA* ⊶
├╼ *${prefix}menu 1*
├╼ *${prefix}menu 2*
├╼ *${prefix}menu group*
├╼ *${prefix}menu owner*
└──────────────
┌───⊷ *ACERCA DE DYLUX* ⊶
├╼ *${prefix}Bot*
├╼ *${prefix}Info*
├╼ *${prefix}Creador*
├╼ *${prefix}Ping*
├╼ *${prefix}Runtime*
├╼ *${prefix}Report*
├╼ *${prefix}Banlist*
├╼ *${prefix}Blocklist*
├╼ *${prefix}Soporte*
├╼ *${prefix}Install*
└──────────────
  ≡  FG98 👨🏻‍💻 
© *Dev y Owner*
──────────────────────`

else if (!isGroup) return`▢ ${tanggal()}
▢ Jam ${jam} 

  ≡ *INFORMACION*
┌───⊷ *USUARIO* ⊶
├╼ Nombre : *${pushname}*
├╼ Numero : *${sender.split("@")[0]}*
├╼ Premium : ${prem_}
├╼ Rango : *${role}* 🏅
└──────────────
  ≡  *FG98 👨🏻‍💻*
┌──────────────
├╼ *Ig* : instagram.com/fg98._
├╼ *Grupo* : t.me/AndroidWorldfg
├╼ *Grupo Wha* : bit.ly/DyLuxfg 
└──────────────
┌───⊷ *BOT* ⊶
├╼ Nombre: *${Lxa.user.name}*
├╼ Version Bot : 3.8.3
├╼ WAConnection : *${Lxa.browserDescription[0]}*
├╼ Velocidad : ${process.uptime()}
├╼ Tiempo Ejecucion : *${kyun(uptime)}*
└──────────────
┌───⊷ *BOT* ⊶
├╼ Nama : *${Lxa.user.name}*
├╼ Versi Bot : 0.2.6
├╼ WAConnection : *${Lxa.browserDescription[0]}*
├╼ Speed : ${process.uptime()}
├╼ Runtime : *${kyun(uptime)}*
└──────────────
  ≡ *LISTA DE MENUS*
┌───⊷ *LISTA* ⊶
├╼ *${prefix}menu 1*
├╼ *${prefix}menu 2*
├╼ *${prefix}menu group*
├╼ *${prefix}menu owner*
└──────────────
┌───⊷ *ACERCA DE DYLUX* ⊶
├╼ *${prefix}Bot*
├╼ *${prefix}Info*
├╼ *${prefix}Creador*
├╼ *${prefix}Ping*
├╼ *${prefix}Runtime*
├╼ *${prefix}Report*
├╼ *${prefix}Banlist*
├╼ *${prefix}Blocklist*
├╼ *${prefix}Soporte*
├╼ *${prefix}Install*
└──────────────
  ≡  FG98 👨🏻‍💻 
© *Dev y Owner*
──────────────────────`
}

//---
const menu1 = (prefix, tanggal, jam) => {
    return `▢ ${tanggal()}
▢ Hora ${jam}

  ≡ *MENU*
┌───⊷ *FUN* ⊶
├╼ *${prefix}Motivacion*
├╼ *${prefix}Citas*
├╼ *${prefix}Frases*
├╼ *${prefix}Hacker*
├╼ *${prefix}Tonterias*
├╼ *${prefix}Hechos*
├╼ *${prefix}Shipping*
├╼ *${prefix}Guapo*
├╼ *${prefix}Guapa*
├╼ *${prefix}Feo*
├╼ *${prefix}Sadboy*
├╼ *${prefix}Sadgirl*
├╼ *${prefix}Random*
├╼ *${prefix}Fake* _(@tag=txt1=txt2)_
├╼ *${prefix}Say* _(Texto)_
└──────────────
┌───⊷ *JUEGOS* ⊶
├╼ *${prefix}verdad*
├╼ *${prefix}reto*
├╼ *${prefix}pregunta*
├╼ *${prefix}topgay*
├╼ *${prefix}ppt* _(piedra/papel/tijera)_
└──────────────
┌───⊷ *IMAGEN* ⊶
├╼ *${prefix}img*  _(busca imagen)_
├╼ *${prefix}cat* 
├╼ *${prefix}dog* 
└──────────────`
}

const menu2 = (prefix, tanggal, jam) => {
    return `▢ ${tanggal()}
▢ Hora ${jam} 

  ≡ *MENU*
┌───⊷ *STICKER* ⊶
├╼ *${prefix}sticker* _(Foto/video)_
├╼ *${prefix}toimg* _(Reply Sticker)_
├╼ *${prefix}smoji*
├╼ *${prefix}ttp* _(Txt)_
├╼ *${prefix}attp* _(Txt)_
├╼ *${prefix}attp2* _(Txt)_
├╼ *${prefix}tickff* 
├╼ *${prefix}triggered*
└──────────────
┌───⊷ *TOOLS* ⊶
├╼ *${prefix}wame*
├╼ *${prefix}ocr* _(Foto)_
├╼ *${prefix}tomp3* _(Video)_
├╼ *${prefix}tts* _(Code Idioma + Texto)_
├╼ *${prefix}idiomas*
├╼ *${prefix}Leermas* _(txt1=txt2)_
└──────────────
┌───⊷ *MEDIA* ⊶
├╼ *${prefix}Nightcore (Reply audio)*
├╼ *${prefix}Slow*
├╼ *${prefix}Bass*
├╼ *${prefix}Tupai*
├╼ *${prefix}Gemuk*
├╼ *${prefix}Listvn*
├╼ *${prefix}Listimg*
├╼ *${prefix}Listvid*
├╼ *${prefix}Liststik*
├╼ *${prefix}Getimg* _(Nombre pack)_
├╼ *${prefix}Getvid* _(Nombre pack)_
├╼ *${prefix}Gets* _(Nombre pack)_
└──────────────
 ≡ *MENU DESCARGA*
┌───⊷ *DESCARGAS* ⊶
├╼ *${prefix}play* 
├╼ *${prefix}ytmp3*
├╼ *${prefix}ytmp4*
├╼ *${prefix}igfoto*
├╼ *${prefix}igvideo*
└──────────────
┌───⊷ *BUSQUEDA* ⊶
├╼ *${prefix}ytsearch*
├╼ *${prefix}igstalk*
└────────────── 
  ≡ *MENU MAKER* 
┌───⊷ *MAKER* ⊶
├╼ *${prefix}3dtext*
└──────────────`}


const menuOwner = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Hora ${jam}

  ≡ *MENU OWNER*
┌───⊷ *OWNER* ⊶
├╼ *${prefix}Clone* _(@user)_
├╼ *${prefix}Ban*
├╼ *${prefix}Unban*
├╼ *${prefix}Clearchat*
├╼ *${prefix}Totaluser*
├╼ *${prefix}Solicitudes*
├╼ *${prefix}Informes*
├╼ *${prefix}Addstick* 
├╼ *${prefix}Addvn* 
├╼ *${prefix}Addimg* 
├╼ *${prefix}Addvid* 
├╼ *${prefix}Addverdad*
├╼ *${prefix}Addreto* 
├╼ *${prefix}Addhecho*
├╼ *${prefix}Addmotivacion* 
├╼ *${prefix}Addcita* 
├╼ *${prefix}Addtonteria* 
├╼ *${prefix}Addhacker* 
├╼ *${prefix}Tx*
├╼ *${prefix}Result* _(url)_
└──────────────`
}

const menuGrup = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU GRUPO*
┌───⊷ *GRUPO* ⊶
├╼ *${prefix}Staff*
├╼ *${prefix}Online*
├╼ *${prefix}Link* 
├╼ *${prefix}promover* _(@User)_
├╼ *${prefix}degradar* _(@User)_
├╼ *${prefix}seticon* _(Foto)_
├╼ *${prefix}kick* _(@user)_
├╼ *${prefix}add* _(Numero)_
├╼ *${prefix}delete* _(Mensaje bot)_
├╼ *${prefix}group* _(Close/Open)_
├╼ *${prefix}dueñogp*
├╼ *${prefix}welcome* _(1/0)_
├╼ *${prefix}antilinkwha* _(1/0)_
├╼ *${prefix}salir* _(Bot deja el grupo)_  
└──────────────
  ≡  Estos comandos menciona a todos los usuarios de un grupo
┌───⊷ *MENSIONES* ⊶
├╼ *${prefix}tagall* 
├╼ *${prefix}notify* _(Texto)_
├╼ *${prefix}here*
└──────────────` 
}

module.exports = { menu, menu1, menu2, menuOwner, menuGrup}