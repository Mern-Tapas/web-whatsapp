const { Client } = require('whatsapp-web.js');
const grcode = require("qrcode-terminal")
const client = new Client();
const path = require("path")
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');
const express = require("express")
const app = express()
app.use(express.static("images"))
const contacts = require("./contact")

client.on('qr', (qr) => {
    console.log('Please scan QR code with WhatsApp on your phone:', qr);
    grcode.generate(qr, { small: true })

});



// const media = MessageMedia.fromFilePath(filePath);
client.on('ready', () => {



    fs.readFile("image.jpg", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const run = () => {

                for (let i = 0; i <= contacts.length; i++) {

                    setTimeout(async () => {
                        const media = await MessageMedia.fromUrl("https://fastly.picsum.photos/id/428/536/354.jpg?hmac=39bUBapsMK9rz_caQW-lmClLVRgFZiS23LkHtRFdHXw");
                        client.sendMessage(`91${contacts[i].contact}@c.us`, media)
                        console.log(contacts[i].contact)

                    }, i * 1000)

                }

            }
            run()
        }

    })
});

client.initialize();
