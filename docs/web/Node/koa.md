---
title: koa
order: 3
group:
  title: node
---

# koa

## koa的基本使用

```js
const Koa = require('koa')

// 创建app对象
const app = new Koa()

// 注册中间件(middleware)
// koa的中间件有两个参数: ctx/next
app.use((ctx, next) => {
  console.log('匹配到koa的中间件')
  ctx.body = '哈哈哈哈哈'
})

// 启动服务器
app.listen(8900, () => {
  console.log('koa服务器启动成功~')
})
```

## 参数解析

```js
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')
app.use(bodyParser())
// 1.get/params
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = 'user list data~:' + id
})

// 2.get/query
userRouter.get('/', (ctx, next) => {
  const query = ctx.query
  console.log(query)
  ctx.body = '用户的query信息' + JSON.stringify(query)
})
// 3.post/json(使用最多)
userRouter.post('/json', (ctx, next) => {
  // 注意事项: 不能从ctx.body中获取数据
  console.log(ctx.request.body, ctx.req.body)

  // ctx.body用于向客户端返回数据
  ctx.body = '用户的json信息'
})

// 4.post/urlencoded
userRouter.post('/urlencoded', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = '用户的urlencoded信息'
})
// 5.post/form-data
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = '用户的formdata信息'
})
```

## 路由

```js
const KoaRouter = require('@koa/router')

// 1.创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })
// 2.在路由中注册中间件: path/method
userRouter.get('/', (ctx, next) => {
  ctx.body = 'users list data~'
})
```

## 文件上传

```js
const multer = require('@koa/multer')
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname)
    }
  })
})
// 注册路由对象
const uploadRouter = new KoaRouter({ prefix: '/upload' })

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.request.file)
  ctx.body = '文件上传成功~'
})

uploadRouter.post('/photos', upload.array('photos'), (ctx, next) => {
  console.log(ctx.request.files)
  ctx.body = '文件上传成功~'
})
```

## 静态资源服务

```js
const static = require('koa-static')

app.use(static('./uploads'))
app.use(static('./build'))

```

## 响应对象

```js
// 1.body的类型是string
  // ctx.body = 'user list data~'

  // 2.body的类型是Buffer
  // ctx.body = Buffer.from('你好啊, 李银河~')

  // 3.body的类型是Stream
  // const readStream = fs.createReadStream('./uploads/1668331072032_kobe02.png')
  // ctx.type = 'image/jpeg'
  // ctx.body = readStream

  // 4.body的类型是数据(array/object) => 使用最多
  ctx.status = 201
  ctx.body = {
    code: 0,
    data: [
      { id: 111, name: 'iphone', price: 100 },
      { id: 112, name: 'xiaomi', price: 990 },
    ]
  }

  // 5.body的值是null, 自动设置http status code为204
  // ctx.body = null
```

## 错误处理

```js
userRouter.get('/', (ctx, next) => {
  const isAuth = false
  if (isAuth) {
    ctx.body = 'user list data~'
  } else {
    // ctx.body = {
    //   code: -1003,
    //   message: '未授权的token, 请检测你的token'
    // }
    // EventEmitter
    ctx.app.emit('error', -1003, ctx)
  }
})
// 独立的文件: error-handle.js
app.on('error', (code, ctx) => {
  const errCode = code
  let message = ''
  switch (errCode) {
    case -1001:
      message = '账号或者密码错误~'
      break
    case -1002:
      message = '请求参数不正确~'
      break
    case -1003:
      message = '未授权, 请检查你的token信息'
      break
  }

  const body = {
    code: errCode,
    message
  }

  ctx.body = body
})
```

# mysql2

## 基本使用

```js
const mysql = require('mysql2')

// 1.创建一个连接(连接上数据库)
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'root'
})


// 2.执行操作语句, 操作数据库
const statement = 'SELECT * FROM `students`;'
// structure query language: DDL/DML/DQL/DCL
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log('查询失败:', err)
    return
  }

  // 查看结果
  console.log(values)
  // console.log(fields)
})
```

## 预处理

```js
const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ?;'
connection.execute(statement, [1000, 8], (err, values) => {
  if (err) {
    console.log('查询失败:', err)
    return
  }
  console.log('values',values)
})
```

## 连接池

```js
// 1.创建一个连接
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'music_db',
  user: 'root',
  password: 'root',
  connectionLimit: 5
})
```

## promise

```js
const statement = 'SELECT * FROM `products` WHERE price > ? AND score > ?;'
connectionPool.promise().execute(statement, [1000, 9]).then((res) => {
  const [values, fields] = res
  console.log('-------------------values------------------')
  console.log(values)
  console.log('-------------------fields------------------')
  console.log(fields)
}).catch(err => {
  console.log(err)
})
```





