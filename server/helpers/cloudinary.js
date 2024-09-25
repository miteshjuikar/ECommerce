const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Configuration
cloudinary.config({ 
    cloud_name: 'dslqocpya', 
    api_key: '497337285795762', 
    api_secret: 'R9TvFIUViv5PSJ-AseWIujcQmq0' // Click 'View API Keys' above to copy your API secret
});

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader
       .upload(file, {
                resource_type: "auto",
            }
       )
       .catch((error) => {
           console.log(error);
       });

    return result;
}

const storage = new multer.memoryStorage();

const upload = multer({ storage });



module.exports = { upload, imageUploadUtil };
