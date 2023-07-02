require('dotenv').config();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profilePicture',
    allowed_formats: ['jpg', 'jpeg', 'png', 'PNG'],
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|PNG)$/)) {
      return cb(new Error('File type is not supported'), false);
    }
    cb(null, true);
  },
});

module.exports = upload;
