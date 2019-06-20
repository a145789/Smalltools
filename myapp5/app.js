const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(express.static('uploads'));

// npm install multer 安装上传模块
const multer = require('multer');     
var upload = multer({"dest":"uploads/"}).single('img1');

app.post('/chk', upload, (req, res)=>{
    console.log( req.file );
    
    if( req.file ){
        var newPath = req.file.path+req.file.originalname
        fs.renameSync(req.file.path, newPath);

        res.send('上传成功<br><img src="'+newPath.replace('uploads/','')+'">')
    }else{
        res.send('请选择上传的图片');
    }
})

app.listen(8080)
