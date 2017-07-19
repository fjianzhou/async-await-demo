//mysql的使用
//acquireTimeout:设置获取连接的超时时间 默认10s
//waitForConnections: 当没有可用链接，如果true，等待链接   如果false报错 默认ture
//connectionLimit:  第一次创建的最大连接数
//queueLimit: 当无可用连接的时，请求排队的数量，设置为0是表示数量没有限制 默认是0
var mysql =require('mysql');
//创建连接池
var pool=mysql.createPool({
    connectionLimit:10,
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    //database:'' //数据库
});


//获取连接池中的一个连接
// err错误信息
// connection mysql连接
pool.getConnection(function(err,connection){
    if(err){
        console.log(err);
        return;
    }
    //将连接返回连接池
    //connection.release();
    //查询语句的使用
    // connection.query('select * from tem_test.t_test',function(err, result, fields){
    //     //err 查询是的错误信息   result 查询结果  fields字段信息
    // });
    //？ 占位符的顺序 对应 第二个参数数据组里的顺序
    // connection.query('select * from tem_test.t_test where id = ?',[2223],function(err,result){
    //     //在查询语句中 使用？好占位符
    //     console.log(JSON.stringify(result));
    // });

    // connection.query({sql:'select * from tem_test.t_test where id = ? ',values:[2223],timeout:4000},function(err,result){
    //     //在查询语句中 使用？好占位符
    //     console.log(new Date().getMilliseconds());
    // })

    // var post ={
    //     Name:'xx',
    //     Age:12,
    //     Score:10.01,
    //     Date:new Date(),
    // }
    // connection.query("insert into tem_test.t_test SET ?",post,function(err,result){
    //     if(err){
    //         console.log(err);
    //     }
    //
    // })

    //？？ 和 ？合用
    var userid=1;
    var columns=['Name','Age']
    connection.query('select ?? from ?? where ??=?',[columns,'tem_test.t_test','Id',2224],function(err,result){
        console.log(err);
        console.log(result);
    })

})

//关闭连接池中所有的连接
//pool.end(function(err){})