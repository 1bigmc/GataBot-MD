const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} 𝙉𝙊 𝙎𝙀 𝙀𝙈𝘾𝙊𝙉𝙏𝙏𝙍𝙊 𝙉𝙄𝙉𝙂𝙐𝙉 𝙋𝙍𝙀𝙁𝙄𝙅𝙊, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙋𝙍𝙀𝙁𝙄𝙅𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼 𝙀𝙎𝙏𝘼𝘽𝙇𝙀𝘾𝙀𝙍, 𝙀𝙅: ${usedPrefix + command} #`;
global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
await m.reply(`${lenguajeGB['smsAvisoEG']()} *𝗢 𝗣𝗥𝗘𝗙𝗜𝗫𝗢 𝗔𝗧𝗨𝗔𝗟 𝗗𝗘 ${gt} 𝗦𝗘 𝗘𝗦𝗧𝗔𝗕𝗘𝗟𝗘𝗖𝗘𝗨 𝗣𝗔𝗥𝗔 :* [ ${text} ]`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
