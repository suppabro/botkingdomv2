let fetch = require('node-fetch');
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `ප්රශ්නයක් ඇතුලත් කරන්න!\n\n* `
try {
  await m.reply(wait)
  let res = await (await fetch(`https://api.botcahx.eu.org/api/search/bard-ai?apikey=${btc}&text=${text}`)).json()
  await m.reply(res.message)
} catch (err) {
  console.error(err)
  throw eror
}
}
handler.command = handler.help = ['bard','bardai'];
handler.tags = ['tools'];
handler.premium = false
module.exports = handler;
