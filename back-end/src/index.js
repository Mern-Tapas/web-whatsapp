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
                        const media = await MessageMedia.fromFilePath('instagram@reality_advisor_indore.jpeg');
                        const result = await client.sendMessage(`91${contacts[i].contact}@c.us`, media)
                        console.log(contacts[i].contact)
                        // fs.appendFile("result.txt",`\n${result}`,(error)=>{console.log(error)})
                    }, i * 2000)

                }

            }
            run()
        }

    })
});

client.initialize();
