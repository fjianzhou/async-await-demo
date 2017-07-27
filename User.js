const mongoose=require('mongoose');
mongoose.Promise=Promise;
var userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    status: {type: Number, default: 0},
    createData:{type:Date,default:new Date()},
});

let user=mongoose.model('User', userSchema, 'user');

module.exports=user;
// user.create({name:'xx',age:12},function(){
//     console.log(arguments)
// })
// user.find({_id:'5976f954f881be1c10cbeb33'},function(){
//     console.log(arguments)
// })

