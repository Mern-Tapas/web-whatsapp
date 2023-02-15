const { Client } = require('whatsapp-web.js');
const grcode = require("qrcode-terminal")
const client = new Client();
const path = require("path")
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');
const express = require("express")
const app = express()
app.use(express.static("images"))

client.on('qr', (qr) => {
    console.log('Please scan QR code with WhatsApp on your phone:', qr);
    grcode.generate(qr, { small: true })

});



// const media = MessageMedia.fromFilePath(filePath);
client.on('ready', () => {



    fs.readFile("image.jpg", (err, data) => {
        if (err) {
            // console.log(err)
        } else {
            const run = async () => {
                const contact = ['6261452510',"8964803609","7999970702","8959567886","9179725663",]
                const media = await MessageMedia.fromUrl("https://fastly.picsum.photos/id/428/536/354.jpg?hmac=39bUBapsMK9rz_caQW-lmClLVRgFZiS23LkHtRFdHXw");
                console.log(media)
                client.sendMessage("918959567886@c.us", media)
            }
            run()
        }

    })
});

client.initialize();
