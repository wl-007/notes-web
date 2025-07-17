---
title:  node_old
order: 999
group:
  title: node
---
# 全局对象 global

## 常用全局对象

```javascript
globalThis  : 浏览器nodejs统一全局对象  浏览器的window，node的global
__dirname :当前模块的目录名
——filename: 当前模块的文件名  // 打印: /Users/mjr   路径加文件名
setImmediate(callback[, ...args]) // 在本轮 Node.js 事件循环结束时调用的函数
process.nextTick(callback[, ...args]) //在 JavaScript 堆栈上的当前操作运行完成之后，且在允许事件循环继续之前，此队列将被完全排空。
```

# 后端模块化开发

后端模块化：commonJs规范

- 暴露  module.exports在一个js中只能暴露一条数据，那如果需要暴露多个数据可以放在一个对象中

```javascript
const a = 10;
function fn(){
    return 100
}
// 变量a被暴露了
// module.exports = a
// module.exports = fn
module.exports = {
    a,
    fn
}
```

- 引入

```javascript
// 这个地方的{}是在 结构赋值
const {a,fn} = require('./a')
console.log(a)
console.log(fn())
```



# 常用模块

## events 事件驱动

events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就 是事件发射与事件监听器功能的封装。

EventEmitter常用的API。

- EventEmitter.on(event, listener) 为指定事件注册一个监听器，接受一个字 符串 event 和一个回调函数 listener。 
- EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传 递若干可选参数到事件监听器的参数表。 
- EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 
- EventEmitter.removeListener(event, listener) 移除指定事件的某个监听 器，listener 必须是该事件已经注册过的监听器。
- EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。
- emitter.eventNames()：返回当前 EventEmitter对象注册的事件字符串数组；

```js
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'byvoid', 1991);
```

## 文件系统 fs

fs 模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历目录

- fs.readFile(path[, options], callback)：读取文件的内容； 
- fs.writeFile(file, data[, options], callback)：在文件中写入内容；

- fs.open() 方法用于分配新的文件描述符。
- fs.mkdirSync()创建一个新文件夹：

- fs.readdir(path[, options], callback)  :读取目录的内容。

```js
// 如果uploadDir目录不存在就创建目录
// existsSync 如果路径存在则返回 true，否则返回 false。
// mkdirSync 同步地创建目录。 返回 undefined 或创建的第一个目录路径（如果 recursive 为 true）
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
}
```



## Stream 流

Node.js中有四种基本流类型： 

- Writable：可以向其写入数据的流（例如 fs.createWriteStream()）。 
- Readable：可以从中读取数据的流（例如 fs.createReadStream()）。 
- Duplex：同时为Readable和Writable（例如 net.Socket）。 
- Transform：Duplex可以在写入和读取数据时修改或转换数据的流（例如zlib.createDeflate()）。

栗子：

### Readable的使用

```js
//创建文件的Readable
 const read = fs.createReadStream("./foo.txt");
// 事件监听
//监听读取到的数据
read.on('data', (data) => {
  console.log(data);
});
read.on('open', () => {
  console.log(`文件被打开`);
});
read.on('end', () => {
  console.log('文件读取结束');
}); 
read.on('close', () => {
  console.log('文件被关闭');
}); 
```

### Writable的使用

```js
const writer = createWriteStream("./foo.txt",{
    flags:"a+"
});
wrriter.write("你好啊",err=>{
    console.log("写入完毕")
})
```

### pipe 将读取到的输入流放入输出流中

```js
const reader = fs.createReadStream("./foo.txt");
const writer = createWriteStream('./bar.txt');
```



## http

栗子

```js
var http = require('http');
var server = new http.Server();
server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Node.js</h1>');
    res.end('也可以是数据');
});
server.listen(9000, () => {
    console.log('服务启动，端口号9000');
});
```



# express

## express  安装

```js
安装脚手架
npm install -g express-generator
创建项目
express express-demo
安装依赖
npm install
启动项目
node bin/www
```

## express 改造项目

```js
//改造项目启动
// module.exports = app;
const port=8001;
app.listen(port,()=>{
  console.log("服务已启动，端口号为"+port);
})

```

## 中间件



```js
//对网络请求的数据处理，express有对应的自带中间件处理 ,例如
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//文件上传中间件
multer
```

## 路由

```js
//  routers/user.js
var express = require('express');
var router = express.Router();
const {currentUser}=require("../controllers/UsersController");
//  当前用户
router.post('/currentUser', currentUser);

// app挂载
var usersRouter = require('./routes/users');
app.use('/movies', usersRouter);
```

## 解析请求参数

- 方式一：通过get请求中的URL的params；  请求地址：http://localhost:8000/login/abc/why
- 方式二：通过get请求中的URL的query；  请求地址：http://localhost:8000/login?username=why&password=123
- 方式三：通过post请求中的body的json格式（中间件中已经使用过）； 
- 方式四：通过post请求中的body的x-www-form-urlencoded格式（中间件使用过）； 
- 方式五：通过post请求中的form-data格式（中间件中使用过）；

```js
req.body;
```



## 静态资源服务器

```js
app.use("/public",express.static(path.join(__dirname, 'public')));
```



# Mongodb

## Mongodb

```javascript
//查询
db.sub.find();

//插入
//db.sub.insert({_id:"0323",code:"gfgg" ,name:"gj", gender:1});
//插入
//db.sub.insert({_id:"0323" ,name:"gj", gender:1});
```

### 比较运算符

```js
等于： 默认是等于判断， 没有运算符
小于：$lt （less than）
小于于等于：$lte （less than equal）
大于：$gt （greater than）
大于等于：$gte
不等于：$ne
格式：db.集合名称.find({age:{$gte:18}})
```


```javascript
UsersModel.find({age:{$lte:45}});
```

## mongooes插件

安装  npm install mongoose

### 连接数据库

```javascript
// 导入 mongoose 模块
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
// 设置默认 mongoose 连接
const mongoDB = 'mongodb://127.0.0.1:27017/moviesApp';
mongoose.connect(mongoDB,(err)=>{
    if(!err){
        console.log("movieApp数据库链接成功")
    }else{
        console.log("movieApp数据库链接失败")
    }
}
);
```

### 定义映射 schema  

```javascript
const { Schema, model, SchemaType } = require('mongoose');
const mongoose = require('mongoose');
// 定义验证函数
function Int8(key, options) {
    mongoose.SchemaType.call(this, key, options, 'Int8');
}
Int8.prototype = Object.create(mongoose.SchemaType.prototype);
Int8.prototype.cast = function (val) {
    var _val = Number(val);
    if (isNaN(_val)) {
        throw new mongoose.SchemaType.CastError("Int8",'Int8: ' + val + ' is not a number',"age");
    }
    _val = Math.round(_val);
    if (_val < -0x80 || _val > 0x7f) {
        throw new mongoose.SchemaType.CastError(
            'Int8: ' + val + ' is outside of the range of valid 8-bit ints'
        );
    }
    return _val;
};
// 将相应的属性添加到 mongoose.Schema.Types
mongoose.Schema.Types.Int8 = Int8;

// 映射数据模型的所有字段
const UsersSchema = new Schema(
    {
        username: { type: String, required: true },
        password: String,
        order: Array,
        age: Int8,//使用自定义验证类型
        img: String,
        creatDate: { type: Date, default: Date.now },
        birthday: { type: Date, default: new Date('2020-10-10 08:00:00') },
        phone: {
            type: String,
            validate: { //自定义验证器
                validator: function (v) {
                    return /\d{3}-\d{3}-\d{4}/.test(v);
                },
                message: '{VALUE} is not a valid phone number!',
            },
            required: [true, 'User phone number required'],
        },
    },
    { versionKey: false }//不开启版本号
); 
//  模型名称 , 映射, 表名
module.exports = model('UsersModel', UsersSchema, 'users');

```

### 查询find

- Model.find(conditions, [projection], [options], [callback])

```javascript
//查询成绩大于60以上的数据
UsersModel.find({grades:{$gte:60}},(err,docs) => {
    if(!err){
         console.log(docs)
     }
 })
```

### 根据id查询findById

- Model.findById(id, [projection], [options], [callback])

```javascript
await UsersModel.findById("6426b1772b18beace7139703");
```

### 查询第一个

- Model.findOne([conditions], [projection], [options], [callback])

### 模糊查询

```javascript
const regexp = new RegExp(username, 'i'); // 正则模糊匹配
const users = await UsersModel.find({ username: regexp });

const users = await UsersModel.find({username:'lisi',age:20})

另一种
const users = await UsersModel.find({username:{$regex:'s',$options:'$i'}})
```

### 条件查询

```javascript
await UsersModel.find({score:{$lte:tscore}});或者UsersModel.find().where('score').lt(7);


⼩于：$lt （less than）
⼩于等于：$lte （less than equal）
⼤于：$gt （greater than）
⼤于等于：$gte
不等于：$ne
```

### 关联查询populate

```javascript
"movies": [
      {
        type:Schema.Types.ObjectId,
        ref:'MoviesModel'
      }

const data = await OperasModel.find().populate({
    path:'movies',
    select:['title','movieType','score'],
     populate:{
        path:'movieType'
    }
})
```

### 自定义查询 $where

```javascript
//条件内部作用域貌似不一样，无法使用外部变量
await UsersModel.find({
          $where:function() {
              return this.age==null;}
       });
```

### 更新一个数据

- Model.updateOne(conditions, doc, [options], [callback])

```javascript
UsersModel.updateOne({ _id: id }, { password });
```

### 更新全部

- await UsersModel.updateOne({ _id: id }, { password });

### 更改数据 update

- Model.update(conditions, doc, [options], [callback])
- options
  - runValidators  ，更新验证 器   4.0   默认是关闭的
  - multi  是否全部更新

```javascript
var opts = { runValidators: true,multi:true };
UsersModel.update({ _id: id }, { password },opts);
```

### 增加数据

- Model.create(doc(s), [callback])  操作模型
- Model.prototype.save([options], [options.safe], [options.validateBeforeSave], [fn])  操作文档

```javascript
UsersModel.create({ username, password });

UsersModel.({ username, password }).save();

OrdersModel.insertMany({ username, password })
```

### 删除第一个 deleteOne

- Model.deleteOne(conditions，[options] )  

```javascript
await UsersModel.deleteOne({ _id: id });
```

### 删除所有满足条件的

- Model.deleteMany(conditions，[options] )  

## 代码片段

### 将数组字段内的数值数据更换成对象id

```javascript
思路：先将数据转行成与对象id等长的字符串，再将字符串转换成对象id
上代码--------

Schema模型
 movieType: [
            {
                // type: String,// 先将字段类型设置为字符串，便于转换成对象id长度的字符
                type:  Schema.Types.ObjectId,
                ref:'TestModel'
            },
        ],
```

```javascript
 async update(req, res, next) {
        res.send("接口未开通");
        return;
        try {
            // 数据库查询数据的方法,find方法可以传参
            let rtn = { code: 1, msg: '成功', data: [] };
            const users = await MoviesModel.find({}, { movieType: 1 });
            users.forEach(async (items) => {
                let movieTypeArr = items.movieType;
                if (movieTypeArr) {
                    let tempArr = [];
                    for (let i = 0; i < movieTypeArr.length; i++) {
                        let element = movieTypeArr[i][0]?movieTypeArr[i][0]:movieTypeArr[i].toString();
                        console.log(typeof element);
                        if (typeof element == 'number' || typeof element == 'string') {
                            element = formatSchemaObject(element);
                            // log(element);
                            // let t = new Schema.Types.ObjectId('' + element);
                            tempArr.push(element);
                        } else {
                            element = formatSchemaObject(element);
                            tempArr.push(element);
                        }
                        console.log(tempArr);
                        let _id = items._id.toString();
                        await MoviesModel.updateOne({ _id }, { movieType: tempArr });
                    }
                }
            });
            rtn.data = users;
            res.send(rtn);
        } catch (error) {
            res.send(error.message);
        }
    }

```

# 文件上传

## 配置路由

app.js 引入路由

```js
var filesRouter=require('./routes/files')
app.use('/files', filesRouter);
```

routes 

```js
//配置路由
var express = require('express');
var router = express.Router();
const {fileUp,updateUserHeadImg} = require('../controllers/FilesController')
//1. 文件上传，请求方式一定是post
router.post('/fileUp',fileUp);
// 确认修改
router.post('/updateUserHeadImg',updateUserHeadImg);
module.exports = router;

```



## FilesController.js

```js
//写文件上传的逻辑以及返回
const { uploadFiles,moveFiles } = require('../utils/filesUtil')
const Utils = require('../utils/utils');
const UsersModel = require('../models/UsersModel');
class FilesController {
    fileUp(req, res) {
        const uploading = uploadFiles()
        uploading(req, res, (err) => {
            if (err) {
                res.send({
                    code: 0,
                    msg: '文件上传失败'
                })
            } else {
                //文件上传成功
                //req.files就是文件上传成功后的一些相关的文件信息
                console.log(req.files)
                if (req.files.length > 0) {
                    res.send({
                        code: 1,
                        msg: '文件上传成功',
                        data: `/temp/${req.files[0].filename}`
                    })
                } else {
                    res.send({
                        code: 0,
                        msg: '文件上传失败'
                    })
                }
            }
        })
    }
    //后端修改用户信息的接口
    async updateUserHeadImg(req, res) {
        const bearerToken = req.get('Authorization')
        console.log(bearerToken)
        if (bearerToken) {
            //解码token
            const decode=Utils.verifyToken(bearerToken);
            const {filename} = req.body
            // 
            console.log(filename);
            const fromPath='public/temp/'
            const toPath='public/images/'
            if (filename) {
                //将图片移动到images文件夹下
                try {
                    moveFiles({
                        fromPath,
                        toPath,
                        filename
                    })
                    // 修改用户信息
                    console.log(toPath+filename );
                    const data = await UsersModel.updateOne({ _id: decode._id }, { img:filename });
                    res.send({
                        code: 1,
                        msg: '修改成功',
                    })
                } catch (error) {
                    res.send({
                        code: 0,
                        msg: '头像修改失败',
                    })
                }
            }
        } else {
            res.send({
                code: 0,
                msg: 'token失效'
            })
        }
    }
}
module.exports = new FilesController();
```



## 工具库

```js
const multer = require('multer');
const fs = require("fs");
const path = require('path');

// 上传文件
module.exports.uploadFiles = ({ dir = "./public/temp", key = "file", size = 10000 } = {}) => {
    // 1. 对参数进行解构并设置默认值
    // 2. 设置 multer 的参数，配置 diskStorage，来控制文件存储的位置以及文件名字等
    const storage = multer.diskStorage({
        // 2.1 确定图片存储的位置
        destination: function (req, file, cb) {
            // 当 dir 所对应目录不存在时，则自动创建该文件
            try {
                fs.accessSync(dir);
            } catch (error) {
                fs.mkdirSync(dir);
            }
            cb(null, dir);
        },
        // 2.2 确定图片存储时的名字。（注意：如果使用原名，可能会造成再次上传同一张图片的时候的冲突）
        filename: function (req, file, cb) {
            var changedName = new Date().getTime() + parseInt(Math.random() * 10) + path.extname(file.originalname);
            cb(null, changedName);
        }
    });
    // 3. 配置图片限制
    const limits = {
        // 限制文件大小
        fileSize: 1024 * size,
        // 限制文件数量
        files: 10
    };
    // 4.生成的专门处理上传的一个工具，可以传入 storage、limits 等配置
    const upload = multer({ storage, limits });
    // 5. 返回多文件上传的设置信息（同样可用于单文件上传）
    return upload.array(key);
}

// 移动文件
module.exports.moveFiles = ({ fromPath, toPath, filename } = {}) => {
    if (!filename) {
        console.log('========== 文件移动失败: filename 文件名不能为空 ==========');
        return;
    }
    // 要移动的文件的原路径
    const sourceFile = path.join(fromPath, filename);
    // 判断源文件是否存在
    try {
        fs.accessSync(sourceFile);
    } catch (error) {
        console.log('========== 文件移动失败：' + sourceFile + ' 该文件不存在。==========');
        return;
    }
    // 判断文件要移动的新路径是否存在，如果不存在，则创建
    try {
        fs.accessSync(toPath);
    } catch (error) {
        fs.mkdirSync(toPath);
    }
    // 文件移动后的新路径
    const newFile = path.join(toPath, filename);
    fs.renameSync(sourceFile, newFile);
    return { newPath: newFile };
}

```

## 前端网络请求封装

```js
// 默认异步  jquery  Promise
export  function $cn({ url, method="post", data, async = true, dataType = "json", timeout = 3000 } = {}) {
    url = URL_NODE_SERVER + url;
    const token=getLocal("token");
    data=JSON.stringify(data);  //  contentType:"application/json"的时候必须串json字符串
    const exclude= /\/login|\/register/;
    if (token==""&&!exclude.test(url)) {
        return {code:-901,msg:"没有token"};
    }
    return  new Promise((resolve,reject) => {
        $.ajax({
            type: method,url: url,data,dataType,async,timeout, // 超时设置 单位毫秒
            contentType:"application/json", //"application/json"
            headers:{
                //将token每次请求的时候放在请求头中，然后需要在token之前拼接'Bearer '
                Authorization:'Bearer ' + token  
            },
            success:(res)=>{
               if (res.data) {
                if( res.data.img){
                    res.data.img=URL_NODE_SERVER+ res.data.img;
                }
               }
               
                resolve(res);
            },
            error:(res)=>{
                reject(res);
            },
        });
    })
}
// 用于文件传输  头像
export  function $upFile(data) {
    const  url = URL_NODE_SERVER + '/files/fileUp';
    const token=getLocal("token");
    const exclude= /\/login|\/register/;
    if (token==""&&!exclude.test(url)) {
        return {code:-901,msg:"没有token"};
    }
    return  new Promise((resolve,reject) => {
        $.ajax({
            type: "post",url: url,data, // 超时设置 单位毫秒
           //禁止jqueryAjax对传输的数据格式进行内部处理
        contentType:false,
        processData:false,
            headers:{
                //将token每次请求的时候放在请求头中，然后需要在token之前拼接'Bearer '
                Authorization:'Bearer ' + token  
            },
            success:(res)=>{
                resolve(URL_NODE_SERVER+res.data);
            },
            error:(res)=>{
                reject(res);
            },
        });
    })
}
```

## 前端使用栗子

```js
const flag = true;
    // 确认修改
    $("#changeImg").on('click', async function (e) {
        if (flag) {
            confirm("请先选择头像");
            return;
        }
        let filename = $("#headImg").css("background-image");
        filename = filename.substring(filename.lastIndexOf("/") + 1);
        filename = filename.replace(`")`, "");
        let option = {
            url: "/files/updateUserHeadImg",
            data: {
                filename
            }
        }
        const res = await $cn(option);
        console.log(res);
        return
    });
    // 发送文件数据
    $("#fileImg").on('change', async function (e) {
        flag = false;
        // console.dir(this.files[0]);
        // 1.拿文件数据
        const fileInfo = this.files[0]
        // 2.通 FormData 构造函数对文件数据进行格式转换，转换成二进制流
        const fd = new FormData();
        fd.append('file', fileInfo);
        const res = await $upFile(fd);
        $("#headImg").css("background-image", `url(${res})`);
    });
```

## MD5加密

- 基于crypto， nodejs提供的一个内置模块，用于数据加密

```js
/**
     * 对数据进行加密   密码加密使用
     * @param {Sting} str 
     * @param {Sting} secret 
     * @returns 
     */
getCrypto(str, secret = '') {
    const md5 = Crypto.createHash('md5')
    // return md5.update('需要加密的字符串'+'秘钥').digest('hex')
    return md5.update(str + secret).digest('hex')
}
```

生成随机秘钥：https://www.avast.com/zh-cn/random-password-generator#mac

用户的话可以用用户code做密钥，保证对一个用户来说不变的那个值，code要变就不行

# JWT身份认证流程

## JWT本身也是一种规范，

1. 前端进行登录操作，将登录的信息发送给后端，后端就会比对信息判断是否登录成功
2. 如果登录成功，后端会生成一个字符串token，后端会将token返回给前端
3. 前端拿到登录成功的消息，会在跳转页面之前将token保存到本地储存
4. 前端在进入某些需要进行登录验证的页面时，会首先去验证本地储存中是否包含token，如果没有，就会跳转到登录页面
5. 同时需要后端对token进行验证，验证是否超期或者是登录失效，如果后端验证失败，就会返回结果401给前端，
6. 前端拿到401之后就会进行提示，提示登录失效请重新登录，跳转登录页面
7. 某些请求也需要对登录信息进行身份认证。比如：订单，个人中心….，认证不通过也会返回401

## 后端生产token

1. 下载插件 jsonwebtoken

```js
npm install jsonwebtoken
```

2. 生成token

```js
 /**
     *@Desc: 获取密钥
     *@Author: Wanglei
     *@Date: 2023-04-07 15:10:45
     *@param {Sting} type  类型
     */
    getSecret(type = 'token') {
        return 'wCQZSgytEhB66Meu'
    }
    /**
     *@Desc: 生成token
     *@Author: Wanglei
     *@Date: 2023-04-07 15:10:45
     *@param {String} id 用户表_id
     *@param {String} secret 密钥
     *@param {Number} timeLimit 时效 秒
     */
    getToken(id,secret="" ,timeLimit = 60 * 60,) {
         secret = this.getSecret();
        //生成token
        const token = Jwt.sign(
            { _id: id}, //用于保存用户的相关信息
            secret, //秘钥，不能公布出去
            { expiresIn: timeLimit } //设置token的有效期,时间以秒为单位
        )
        console.log(token);
        return token
    }
    /**
     *@Desc: 解析token
     *@Author: Wanglei
     *@Date: 2023-04-07 15:10:45
     *@param {String} bearerToken 前端传递的 Authorization
     *@param {String} secret 密钥
     */
    verifyToken(bearerToken) {
        const  secret = this.getSecret();
        //获取到真实的token
        const token = bearerToken.split(' ')[1];
        //解码token
        const decode = Jwt.verify(
            token,
            secret //秘钥
        )
        return decode
    }
```

3 挂载到app

```js
const {expressjwt} = require('express-jwt');
const jwtAuth = expressjwt({
    secret, //秘钥 与登录时的秘钥一致
    algorithms:['HS256'], //jwt的验证算法
    //前端如果没有发送token过来，也会直接返回401的状态
    //false代表验证是否包含token
    credentialsRequired:true
}).unless({
    //用于配置不需要身份认证的接口
    path:[
        /\/login/,/\/reg/,/\/temp/,/\/images/
    ]
})
app.use(jwtAuth);
```

## 使用公钥和私钥作为密钥：

```js
const jwt = require('jsonwebtoken');
const fs = require('fs');

// 读取公钥和私钥文件
const publicKey = fs.readFileSync('public.pem');
const privateKey = fs.readFileSync('private.pem');

// 签发 JWT
function signToken(payload, expiresIn) {
  return jwt.sign(payload, privateKey, { expiresIn });
}

// 验证 JWT
function verifyToken(token) {
  try {
    return jwt.verify(token, publicKey);
  } catch (error) {
    throw new Error('Invalid token');
  }
}
```

/使用示例

```js
const payload = { userId: 123, username: 'john.doe' };

// 签发 JWT
const token = signToken(payload, '1h');
console.log('Token:', token);

// 验证 JWT
try {
  const decodedToken = verifyToken(token);
  console.log('Decoded Token:', decodedToken);
} catch (error) {
  console.error(error.message);
}
```





# end