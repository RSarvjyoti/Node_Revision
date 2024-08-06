const cloudinary = require('cloudinary').v2

require('dotenv').config();

const CLOUDANIRY_NAME = process.env.CLOUDANIRY_NAME
const CLOUDANIRY_API_KEY = process.env.CLOUDANIRY_API_KEY
const CLOUDANIRY_SECRET_KEY = process.env.CLOUDANIRY_SECRET_KEY

cloudinary.config({
  cloud_name: CLOUDANIRY_NAME,
  api_key: CLOUDANIRY_API_KEY,
  api_secret: CLOUDANIRY_SECRET_KEY
});

module.exports = { cloudinary_js_config: cloudinary };