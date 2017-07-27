const mongoose= require('mongoose');
mongoose.Promise=Promise;
mongoose.connect('mongodb://127.0.0.1:27017/201703node', {
    useMongoClient: true,
},function (err) {
    if(err){
        console.error(err);
    }else{
        console.log('数据库连接成功');
    }
});

