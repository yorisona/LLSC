//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//加载session
const session=require("express-session")
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080","*"],
  credentials:true
}));
//7:加载第三方模块 body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require("body-parser");
//8:配置对特殊 json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))
//配置session
app.use(session({
  secret:"128随机字符",  //安全字符串
  resave:false,  //每次请求是否更新数据
  saveUninitialized:true,  //初始化时保存数据
  cookie:{
    maxAge:1000*60*60*8
  }
}))

//功能一:home 组件轮播图片  
app.get("/imageList",(req,res)=>{
   //1:将轮播图中所需图片 复制public/img
   //2:查询
   var list = [
     {id:1,img_url:"http://127.0.0.1:3000/img/bn01.jpg"},
     {id:2,img_url:"http://127.0.0.1:3000/img/bn02.jpg"},
     {id:3,img_url:"http://127.0.0.1:3000/img/bn03.jpg"},
     {id:4,img_url:"http://127.0.0.1:3000/img/bn04.jpg"},
   ];
   res.send(list); 
});
//功能二:获取新闻列表分页显示
app.get("/newslist",(req,res)=>{
  //1:获取参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值  pno 1 pageSize 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //3:创sql语句 
  var sql = " SELECT id,title,img_url";
  sql +=" ,ctime,point";
  sql +=" FROM xz_news";
  sql +=" LIMIT ?,?";
  var ps = parseInt(pageSize);
  //(2-1)*7= 7
  var offset = (pno-1)*pageSize;
  pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
  //4:返回 
});
//功能三:商品分页显示 
app.get("/products",(req,res)=>{
  //1:参数 pno pageSize
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:允许使用默认值  1 7  15:15
  if(!pno){pno=1}
  if(!pageSize){pageSize=7}
  //3:sql
 var sql = " SELECT l.lid,l.title,";
 sql+=" l.price,p.md";
 sql+=" FROM xz_laptop l,xz_laptop_pic p";
 sql+=" WHERE l.lid = p.laptop_id";
 sql+=" GROUP BY l.lid";
 sql+=" LIMIT ?,?";
 //4:json 
 var offset = (pno-1)*pageSize;
 pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
 }) 
});
//功能四:获取一条新闻详细信息
app.get("/findNewsInfo",(req,res)=>{
  //1:获取参数
  var id = req.query.id;
  //2:创建正则表达式
  var reg = /^\d{1,}$/;
  //3:如果验证失败 输出错误信息{code:-1}
  if(!reg.test(id)){
   res.send({code:-1,msg:"新闻编号格式有误"});
   return;//函数停止运行
  }
  //4:创建sql
  var sql = " SELECT id,title,content,ctime";
      sql +=" ,img_url FROM xz_news";
      sql +=" WHERE id = ?";
  //5:发送sql语句
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
  //6:输出查询结果 输出{code:1}
})
//功能五:获取评论列表
app.get("/getComment",(req,res)=>{
  //1:参数 nid 新闻编号 pno 页码 pageSize 
  //页大小
  var nid = req.query.nid;
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 
  if(!pno){pno=1}
  if(!pageSize){pageSize=5}
  //3:sql语句
  var sql = " SELECT id,content,ctime,nid";
      sql +=" FROM xz_comment";
      sql +=" WHERE nid = ?";
      sql +=" LIMIT ?,?";
  //4:offset 行偏移量    
  var offset = (pno-1)*pageSize;
  //5:页大小造型
  pageSize = parseInt(pageSize);
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result});
  });
})
//功能六:发表评论
//1:用户post请求 /addcomment
app.post("/addcomment",(req,res)=>{
 //2:获取二个参数 nid content
 var nid = req.body.nid;        //新闻编号
 var content = req.body.content;//评论内容
 //3:创建sql语句
 var sql = "INSERT INTO xz_comment VALUES";
     sql+="(null,?,now(),?)";
 //4:发送sql语句并且返回返回结果
 pool.query(sql,[content,nid],(err,result)=>{
    if(err)throw err;
    //判断执行insert语句影响行数
    if(result.affectedRows>0){
      res.send({code:1,msg:"评论发表成功"});
    }else{
      res.send({code:-1,msg:"评论发表失败"});
    }
 })
 //5:判断 评论成功 评论失败
});
//6:加载body-parser模块 配置 写在 app.js 前面 

//功能七:获取商品详细信息
app.get("/findProduct",(req,res)=>{
  //1:参数 pid
  var pid = req.query.pid;
  //2:sql  SELECT lname,price FROM xz_laptop WHERE //lid=?
  var sql =" SELECT lname,price FROM xz_laptop";
      sql+=" WHERE lid = ?";
  //3:json {code:1,data:[]}
  pool.query(sql,[pid],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
  })
});

//功能八:用户登录
app.get("/login",(req,res)=>{
 //参数
 var uname = req.query.uname;
 var upwd = req.query.upwd;
 //sql
 var sql = " SELECT id FROM xz_login";
      sql+=" WHERE uname = ? AND upwd = md5(?)";
 pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;  
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
      //将用户登录凭证保存在服务器端 session对象中
      var id=result[0].id;  //获取当前用户的id保存到session
      req.session.uid=id;
      console.log(req.session.uid)
      res.send({code:1,msg:"登录成功"});
    }
 });
})

//功能九:将商品添加至购物车
app.get("/addcart",(req,res)=>{
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"})
    return
  }


  //1:参数 pid count uid price
  var pid = parseInt(req.query.pid);
  var count = 1;
  var uid = parseInt(req.query.uid);
  var price = parseInt(req.query.price);
  var sql =" SELECT id FROM xz_cart";
      sql+=" WHERE uid = ? AND pid = ?";
  pool.query(sql,[uid,pid],(err,result)=>{
    if(err)throw err; 
    if(result.length==0){
     var sql = ` INSERT INTO xz_cart`;
     sql+=` VALUES(null,1,${price},${pid},${uid})`;
    }else{
      var sql = ` UPDATE xz_cart`;
      sql+=` SET count=count+1 WHERE pid=${pid}`;
      sql+=` AND uid = ${uid}`;
    }
    pool.query(sql,(err,result)=>{
      if(err)throw err;
      if(result.affectedRows > 0){
        res.send({code:1,msg:"添加成功"});
      }else{
        res.send({code:-1,msg:"添加失败"});
      }
    })
  })
  //5:JSON
});

//功能十:购物车列表
app.get("/cartlist",(req,res)=>{
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"})
    return
  }

 //参数 uid   
 var uid = req.query.uid;
 //sql  多表查询
 var sql = " SELECT c.id,c.count,c.price,";
 sql+=" c.uid,c.pid,l.lname";
 sql+=" FROM xz_cart c,xz_laptop l";
 sql+=" WHERE l.lid = c.pid";
 sql+=" AND c.uid = ?";
 pool.query(sql,[uid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result})
 })
});

//功能十一:删除购物车中一件商品3
//http://127.0.0.1:3000/delCartItem?id=5
app.get("/delCartItem",(req,res)=>{
  //1:参数 id   9:38
  var id = req.query.id;
  //2:sql  DELETE
  var sql = "DELETE FROM xz_cart WHERE id = ?";
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     if(result.affectedRows > 0){
       res.send({code:1,msg:"删除成功"});
     }else{
       res.send({code:-1,msg:"删除失败"});
     }
  });
  //3:json msg
});

//功能十二:删除购物车中多个指定商品
app.get("/removeMItem",(req,res)=>{
   //1:参数 ids  3,4 9:35
   var ids = req.query.ids;
   //2:sql DELETE
   var sql =" DELETE FROM xz_cart ";
       sql+=" WHERE id IN ("+ids+")";
   //http://127.0.0.1:3000/removeMItem?ids=3,8
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.affectedRows > 0){
       res.send({code:1,msg:"删除成功"})
     }else{
       res.send({code:-1,msg:"删除失败"}) 
     }
   })
   //4:请求地址格式
});

//功能十三：给小程序首页返回轮播数据
app.get("/imagelist2",(req,res)=>{
  var rows=[{
    code:1,img_url:"http://127.0.0.1:3000/img/wx01.jpg"
  },{
    code:2,img_url:"http://127.0.0.1:3000/img/wx02.jpg"
  },{
    code:3,img_url:"http://127.0.0.1:3000/img/wx03.jpg"
  },{
    code:4,img_url:"http://127.0.0.1:3000/img/wx04.jpg"
  }]
  res.send(rows)
})

//功能十四：返回小程序九宫格图片列表
app.get("/icons",(req,res)=>{
  var rows=[{
    id:1,
    img_url:"http://127.0.0.1:3000/icons/grid-01.png",
    title:"美食"
  },{
    id:2,
    img_url:"http://127.0.0.1:3000/icons/grid-02.png",
    title:"更多"
  },{
    id:3,
    img_url:"http://127.0.0.1:3000/icons/grid-03.png",
    title:"结婚"
  },{
    id:4,
    img_url:"http://127.0.0.1:3000/icons/grid-04.png",
    title:"卡拉OK"
  },{
    id:5,
    img_url:"http://127.0.0.1:3000/icons/grid-05.png",
    title:"找工作"
  },{
    id:6,
    img_url:"http://127.0.0.1:3000/icons/grid-06.png",
    title:"辅导"
  },{
    id:7,
    img_url:"http://127.0.0.1:3000/icons/grid-07.png",
    title:"汽车保养"
  },{
    id:8,
    img_url:"http://127.0.0.1:3000/icons/grid-08.png",
    title:"租房"
  },{
    id:9,
    img_url:"http://127.0.0.1:3000/icons/grid-09.png",
    title:"装修"
  }]
  // res.send(`fn(${JSON.stringify(rows)})`)

  //$getJSON跨域
  //var callback=req.query.callback
  //res.send(`fn(${JSON.stringify(rows)})`)
  res.send(rows)
})

//功能十五：用户退出
app.get("/logout",(req,res)=>{
  req.session.uid=null
  res.send({code:1,msg:"已退出"})
})

//功能十六：美食列表分页查询
app.get("/shoplist",(req,res)=>{
  //1:参数
  //pno      页码:  用户需要查看页数 1 2 
  //pageSize 页大小:一页7
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.1:默认值 pno 1 pageSize = 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //1.2:创建变量保存执行进度
  var progress = 0; 
  //1.3:创建变量最终发送js对象
  var obj = {code:1}

  //2:sql语句
  var sql =" SELECT id,img_url,name,tel";
     sql +=" ,addr,time,star";
     sql +=" FROM xz_shop"; 
     sql +=" LIMIT ?,?";
  var offset = (pno-1)*pageSize
  pageSize=parseInt(pageSize)
  pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      progress += 50;     //进度值加50
      obj.data = result;  //保存当前面内容
      if(progress==100){  //如果进度值100
        res.send(obj);    //发送
      }
  });
  //3:sql语句总页数
  var sql =" SELECT count(id) as c";
      sql+=" FROM xz_shop";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var ps = Math.ceil(result[0].c/pageSize);
    progress+=50;      //进度值加50
    obj.pageCount = ps;//保存总页数 
    if(progress==100){ //当前进度等于100
      res.send(obj);   //发送
    }
  })
  //4:返回结果 {code:1,data:[],pageCount:3}
});

//功能17：小程序添加商品
app.get("/addpro",(req,res)=>{
  var name=req.query.name
  var sql="insert into xz_pro values(null,?)"
  pool.query(sql,[name],(err,result)=>{
    if(err) throw err
    res.send({code:1,msg:"添加成功"})
  })
})

//功能18：小程序搜索商品
app.get("/search",(req,res)=>{
  var key=req.query.key
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.1:默认值 pno 1 pageSize = 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }

  var sql="select lid,lname,price from xz_laptop where lname like ? limit ?,?"
  pool.query(sql,["%"+key+"%",pno,pageSize],(err,result)=>{
    if(err)throw err
    res.send({code:1,data:result})
  })
})

