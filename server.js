const express = require('express')
const multer = require('multer')
const cors = require('cors')

const server = express()

server.use(cors())

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/media')
    },
    filename: function(req, file, cb) {
        cb(null, 'certificado.png')
    }
})

const upload = multer({storage}).single('file')

server.post('/upload', function(req, res) {

    upload(req, res, function(err) {
        if (err instanceof multer.MulterError){
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})

server.listen(8000, function(){
    console.log('Server running os port 8000')
})