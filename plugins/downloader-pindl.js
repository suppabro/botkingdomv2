let fetch = require('node-fetch');

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Enter URL!\n\ncontoh:\n${usedPrefix}${command} https://pin.it/4CVodSq`;
  }
  if (!args[0].startsWith('https://')) {
    throw `ආකෘතිය සහිත වලංගු URL එකක් ඇතුළත් කළ යුතුය *https://*\n\nEx: https://pin.it/4CVodSq`;
  }
  try {
    m.reply(wait);
    const api = await fetch(`https://api.botcahx.eu.org/api/download/pinterest?url=${args[0]}&apikey=${btc}`);
    const res = await api.json();
    let { media_type, image, title } = res.result.data;
    if (media_type === 'video/mp4') {
      await conn.sendMessage(m.chat, { video: { url: image } });
    } else {
      conn.sendFile(m.chat, image, 'pindl.jpeg', `*Title:* ${title}\n*Mediatype:* ${media_type}\n*Source Url*: ${image}\n`, m);
    }
  } catch (e) {
    console.log(e);
    throw `404!`;
  }
};

handler.help = ['pindl'];
handler.command = /^(pindl|pin)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.premium = false;

module.exports = handler;
