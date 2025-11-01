//base par Kervens
//re-upload? recode? copie du code? donne des crédits stp :)
//YouTube: @Kervens
//Instagram: kervens_king
//Telegram: t.me/soszoe
//GitHub: @KervensKing
//WhatsApp: +50942588377
//tu veux plus de scripts de bot gratuits? abonne-toi à ma chaîne YouTube: https://youtube.com/@Kervens

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, '../database', + new Date + '.' + ext)
      let out = tmp + '.' + ext2
      await fs.promises.writeFile(tmp, buffer)
      spawn('ffmpeg', [
        '-y',
        '-i', tmp,
        ...args,
        out
      ])
        .on('error', reject)
        .on('close', async (code) => {
          try {
            await fs.promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve(await fs.promises.readFile(out))
            await fs.promises.unlink(out)
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convertir l'audio en audio WhatsApp lisible
 * @param {Buffer} buffer Buffer audio
 * @param {String} ext Extension de fichier 
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '2',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'mp3'
  ], ext, 'mp3')
}

/**
 * Convertir l'audio en PTT WhatsApp lisible
 * @param {Buffer} buffer Buffer audio
 * @param {String} ext Extension de fichier 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convertir la vidéo en vidéo WhatsApp lisible
 * @param {Buffer} buffer Buffer vidéo
 * @param {String} ext Extension de fichier 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
