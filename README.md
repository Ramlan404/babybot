<p align="center">
<img src="https://raw.githubusercontent.com/Ramlan404/Ramlan404/main/baby.jpg" alt="BABY BOT" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="BABY BOT" src="https://img.shields.io/badge/BABY BOT-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/Ramlan404"><img title="Author" src="https://img.shields.io/badge/Author-Ramlan ID-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/Ramlan404/followers"><img title="Followers" src="https://img.shields.io/github/followers/Ramlan404?color=blue&style=flat-square"></a>
<a href="https://github.com/Ramlan404/megumikato2/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Ramlan404/babybot?color=red&style=flat-square"></a>
<a href="https://github.com/Ramlan404/megumikato2/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Ramlan404/babybot?color=red&style=flat-square"></a>
<a href="https://github.com/Ramlan404/megumikato2/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Ramlan404/babybot?label=Watchers&color=blue&style=flat-square"></a>
</p>

<p align="center">
  <a href="https://github.com/Ramlan404/babybot#requirements">Requirements</a> •
  <a href="https://github.com/Ramlan404/babybot#instalasi">Installation</a> •
  <a href="https://github.com/Ramlan404/babybot#features">Features</a> •
  <a href="https://github.com/Ramlan404/babybot#thanks-to">Thanks to</a>
</p>
</div>


---



# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)
* [Libwebp](https://developers.google.com/speed/webp/download) (for sticker wm)
* [Image Magic](https://imagemagick.org/script/download.php) ( for nulis command, Centang Kolom 1,2,3,5,6)
* Any text editor

# Instalasi
## For Windows
```bash
git clone https://github.com/Ramlan404/babybot.git
cd babybot
npm install
npm start
```
## For Termux
```bash
termux-setup-storage
apt update && apt upgrade
pkg install nodejs git ffmpeg libwebp imagemagick
git clone https://github.com/Ramlan404/babybot.git
cd babybot
npm install
npm start
```

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```


## Installing the libwebp for Windows
* Unduh salah satu versi libwebp yang tersedia dengan mengklik [di sini](https://developers.google.com/speed/webp/download).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `libwebp`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
setx /m PATH "C:\libwebp\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal libwebp, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
webpmux -version
```

## Donate
- [Saweria](https://saweria.co/ramlanid)

# Features
- Cek [disini](https://github.com/Ramlan404/babybot/blob/main/message/help.js)

# Thanks to
* [`Baileys`](https://github.com/adiwajshing/Baileys)
* [`Xinz-Team`](https://github.com/Xinz-Team)