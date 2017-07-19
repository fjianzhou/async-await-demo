//基础规则
//1.async表示这是一个async函数，await只能出现在这个函数中。
//2.await表示这里等待promise返回结果，再继续执行
//3.await后面跟着一个promise对象；如果不是promise对象会立即执行


var mysql =require('mysql');

var pool =mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'12345611',
});



var mySqlQuyer = async function(){
    var connection;
    var result;
    try{
        connection=await  new Promise((resolve,reject)=>{
            pool.getConnection((err,connection)=>{
                if(err){

                    reject(err)
                }
                else {
                    resolve(connection);
                }
            })
        });
        result=await new Promise((resolve,reject)=>{
            connection.query('select * from tem_test.t_test',function(err,result,fields){
                if(err){
                    reject(err)
                }
                else{
                    resolve(result);
                }
            });

        });
        console.log(result);
    }catch (ex){
        console.log(ex,connection);
    }

};


mySqlQuyer();


// var promiseFactory=function (cb){
//     return new Promise((resolve,reject)=>{
//
//     })
// }
//
//
//
//
// var promiseFN=function(time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             Math.ceil(Math.random()*10)>5?resolve({status:200,msg:'OK!'}):reject({err:500,msg:'服务器错误！'})
//         },time)
//     });
// }
//
// var start= async function(){
//     try{
//         console.time('async');
//         let reulst= await promiseFN(3000);
//         console.log(JSON.stringify(reulst));
//         console.timeEnd('async');
//     }catch (ex) {
//         console.log(ex)
//         console.timeEnd('async');
//     }
//
// }
// start();
