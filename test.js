require('./mongodb_dome');
var user=require('./User');
var moment=require('moment');

// user.find({},function(){
//     console.log(arguments);
// // });
// user.remove({_id:'5976fd6f125d1a190c27ba56'},function(){
//     console.log(arguments)
// })

// user.create({name:'xxx3',age:40})
//user.update({});

//where条件语句
// user.where({name:'xxx3'}).exec(function(){
//     console.log(arguments)
// });

//gt大于  gte大于等于 用在where之后
// user.where('age').gte(40).exec(function(){
//     console.log(arguments)
// });

// $gt大于 $gte大于等于   $eq等于 $lt小于 $lte小于等于  $ne不等于  $in可以  $nin
// user.find({age:{$ne:['xxx3']}}).exec(function(err,result){
//     // var day =moment(result[0].createData).format('YYYY-MM-DD HH:mm:ss');
//     // console.log(day)
//     console.log(arguments)
// })
// user.find({name:{$ne:['xxx3']}}).exec(function(err,result){
//     // var day =moment(result[0].createData).format('YYYY-MM-DD HH:mm:ss');
//     // console.log(day)
//     console.log(arguments)
// })
// user.find({name:{$nin:['xxx3']}}).exec(function(err,result){
//     // var day =moment(result[0].createData).format('YYYY-MM-DD HH:mm:ss');
//     // console.log(day)
//     console.log(arguments)
// })


// $or或  $and和
// user.find({$or:[{age:{$eq:12}},{name:{$eq:'xxx3'}}]}).exec(function(){
//     console.log(arguments)
// })
// user.find({$and:[{age:{$eq:12}},{name:{$eq:'xxx1'}}]}).exec(function(){
//     console.log(arguments)
// })
//按照时间进行查询
// user.find({$and:[{createData:{$gte:new Date('2017-7-25 09:00:00.000')}},{createData:{$lte:new Date('2017-7-25 23:59:59.999')}}]}).exec(function(){
//     console.log(arguments)
// })

user.find({$and:[{createData:{$gte:new Date('2017-7-26 09:00:00.000'),$lte:new Date('2017-7-26 23:59:59.999')}}]}).exec(function(){
    console.log(arguments)
})

// $regex 正则匹配 代替mySql like
// user.find({name:{$regex:/2/}}).exec(function(){
//     console.log(arguments)
// })

