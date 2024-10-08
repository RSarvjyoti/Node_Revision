const express = require('express');
const router = express.Router();
const upload = require('../middileware/multer');
const { cloudinary_js_config } = require('../utils/cloudinary');


 router.post('/', upload.single('image'), function (req, res) {
  cloudinary_js_config.uploader.upload(req.file.path, function (err, result){
    if(err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error"
      })
    }

    res.status(200).json({
      success: true,
      message:"Uploaded!",
      data: result
    })
  })
});

module.exports = router;