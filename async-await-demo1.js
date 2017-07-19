//基础规则
//1.async表示这是一个async函数，await只能出现在这个函数中。
//2.await表示这里等待promise返回结果，再继续执行
//3.await后面跟着一个promise对象；如果不是promise对象会立即执行


// async wait 与mysql.beginTransaction 混合使用案例

var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
});


var mySqlQuyer = async function () {
    var connection;
    var result;
    try {
        connection = await new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {

                    reject(err)
                }
                else {
                    resolve(connection);
                }
            })

        });
        if (connection) {
            await new Promise((resolve, reject) => {
                connection.beginTransaction(function (err) {
                    if (err) {
                        console.log("beginTransactionErr:" + err);
                        reject("beginTransactionErr:" + err);
                        return;
                    }
                    (async function () {
                        try {
                            // await new Promise((resolve, reject) => {
                            //     connection.query('delete  from tem_test.t_test  where id =3', function (err, result) {
                            //         if (err) {
                            //             reject('selectSqlError' + err);
                            //         }
                            //         console.log('delete1',JSON.stringify(result));
                            //         resolve(result);
                            //     })
                            // });
                            var arr=[4,2222];
                            for( var i=0; i<arr.length; i++ ){
                                await new Promise((resolve, reject) => {
                                    connection.query('delete  from tem_test.t_test where id ='+arr[i], function (err, reuslt) {
                                        if (err) {
                                            reject('deleteSqlError' + err);
                                            return;
                                        }
                                        console.log('delete2',JSON.stringify(reuslt));
                                        if(reuslt.affectedRows<1){
                                            reject('没有要删数据！' + err);
                                            return;
                                        }
                                        resolve(reuslt)
                                    })
                                });
                            }
                            connection.commit(function(err){
                                if(err){
                                    connection.rollback(function(){
                                        console.log('commit错误事物回滚！')
                                    })
                                    reject('事物Error'+err);
                                    return;
                                }
                                connection.release();
                                console.log("数据删除成功！");

                            });

                        } catch (ex) {
                            connection.rollback(function(){
                                console.log('事物回滚！')
                            });
                            connection.release();
                            reject("beginTransactionErrSql:" + ex);
                        }
                    })();
                })
            })
        }
    } catch (ex) {
        console.log('xxx', ex);
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
