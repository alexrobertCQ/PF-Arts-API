const nodemailer = require('nodemailer');

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'SomosHenryArtGallery@gmail.com',
    pass: 'artgallery123'
  }
});

module.exports = transporter