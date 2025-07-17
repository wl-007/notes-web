---
title: express
order: 2
group:
  title: node

---

# Express



##  安装

- 方式一：安装express-generator 

安装脚手架 npm install -g express-generator 

创建项目 express express-demo 

安装依赖 npm install 

启动项目 node bin/www 

- 方式二：从零搭建自己的express应用结构； Express安装 

npm init -y

## 基本使用

```js
const express = require('express')

// 1.创建express的服务器
const app = express()

// 客户端访问URL: /login和/home
app.post('/login', (req, res) => {
  // 处理login请求
  res.end('登录成功, 欢迎回来~')
})

app.get('/home', (req, res) => {
  res.end('首页的轮播图/推荐数据列表~')
})

// 2.启动服务器, 并且监听端口
app.listen(9000, () => {
  console.log('express服务器启动成功~')
})
```

## 中间件

```js
// 普通中间件 app.use
app.use((req, res, next) => {
  console.log('normal middleware')
})

// 注册路径匹配的中间件
app.use('/home', (req, res, next) => {
  console.log('match /home middleware')
  res.end('home data')
})

// 注册中间件: 对path/method都有限制
app.get('/home', (req, res, next) => {
  console.log('match /home get method middleware')
  res.end('home data')
})
```

## 应用中间件

### 参数解析

```js
app.use(express.json()) // 解析客户端传递过来的json
app.use(express.urlencoded({ extended: true })) // 解析客户端传递过来的urlencoded
```

### 文件上传

```js
const multer = require('multer')

// 应用文件上传第三方的中间件
const upload = multer({
  // dest: './uploads'
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, './uploads')
    },
    filename(req, file, callback) {
      callback(null, Date.now() + '_' + file.originalname)
    }
  })
})

// 编写中间件
// 上传单文件: single方法
app.post('/avatar', upload.single('avatar') , (req, res, next) => {
  console.log(req.file)
  res.end('文件上传成功~')
})

// 上传多文件: 
app.post('/photos', upload.array('photos'), (req, res, next) => {
  console.log(req.files)
  res.end('上传多张照片成功~')
})
```

### 路由

```js
const express = require('express')

// 创建app对象
const app = express()
// 1.创建路由对象
const userRouter = express.Router()

// 2.定义路由对象中的映射接口
userRouter.get('/', (req, res, next) => {
  res.json('用户列表数据')
})

// 让路由生效
app.use('/users', userRouter)
```

### 静态资源服务器

```js
const express = require('express')

// 创建app对象
const app = express()

// 内置的中间件: 直接将一个文件夹作为静态资源
app.use(express.static('./uploads'))
app.use(express.static('./build'))
```











