let fetch = require('node-fetch');

let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `ප්රශ්නයක් ඇතුලත් කරන්න!!\n\n*Contoh:* snake game express.js`
try {
  await m.reply(wait)
  let res = await (await fetch(`https://api.botcahx.eu.org/api/search/blackbox-chat?text=${text}&apikey=${btc}`)).json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw eror
}
}
handler.command = handler.help = ['blackbox','blackboxai','aicoding'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
