---
title:  js补充
order: 3
group:
  title: js
---

# 函数式编程

函数式编程的思维方式：把现实世界的事物和事物之间的联系抽象到程序世界（对运算过程进行抽 象）

```js
// 非函数式
let num1 = 2
let num2 = 3
let sum = num1 + num2
console.log(sum)
// 函数式
function add (n1, n2) {
return n1 + n2
}
let sum = add(2, 3)
console.log(sum)
```

## 基础概念

### 函数是一等公民

在 JavaScript 中函数就是一个普通的对象

- 函数可以存储在变量中
- 函数作为参数
- 函数作为返回值

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// 将 `sayHello` 作为 `greeting` 函数的参数进行传递
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```



### 高阶函数

- 可以把函数作为参数传递给另一个函数 
- 以把函数作为另一个函数的返回结果

```js

// 函数作为参数
function forEach (array, fn) {
for (let i = 0; i < array.length; i++) {
    fn(array[i])
    }
}
// 函数作为返回值
function makeFn () {
let msg = 'Hello function'
    return function () {
    console.log(msg)
    }
}
```

### 闭包

闭包 (Closure)：可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员

```js
// 访问msg
function makeFn () {
let msg = 'Hello function'
    return function () {
    console.log(msg)
    }
}
const fn = makeFn()
fn()

```

## 纯函数

纯函数：相同的输入永远会得到相同的输出，而且没有任何可观察的副作用

### 副作用

果函数依赖于外部 的状态就无法保证输出相同，就会带来副作用。

## 柯里化

当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）， 然后返回一个新的函数接收剩余的参数，返回结果

```js
// 要柯里化的函数
function getSum (a, b, c) {
	return a + b + c
}
// 柯里化后的函数
function getSum (a, b) {
	return (c)=>{
        return a + b + c
    }
}
```

## 函数组合

函数组合可以让我们把细粒度的函数重新组合生成一个新的函数

```js
const compose = (...fns) => value => fns.reduce((acc, fn) =>
fn(acc), value)
```

## promise

```js
const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor (executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e);
    }
  }
  // promise 状态 
  status = PENDING;
  // 成功之后的值
  value = undefined;
  // 失败后的原因
  reason = undefined;
  // 成功回调
  successCallback = [];
  // 失败回调
  failCallback = [];

  resolve = value => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 将状态更改为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value;
    // 判断成功回调是否存在 如果存在 调用
    this.successCallback && this.successCallback(this.value);
  }
  reject = reason => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 将状态更改为失败
    this.status = REJECTED;
    // 保存失败后的原因
    this.reason = reason;
    // 判断失败回调是否存在 如果存在 调用
    this.failCallback && this.failCallback(this.reason);
  }
  then (successCallback, failCallback) {
    // 参数可选
    successCallback = successCallback ? successCallback : value => value;
    // 参数可选
    failCallback = failCallback ? failCallback: reason => { throw reason };
    let promsie2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = successCallback(this.value);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve 
            // 如果是promise对象 查看promsie对象返回的结果 
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promsie2, x, resolve, reject)
          }catch (e) {
            reject(e);
          }
        }, 0)
      }else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve 
            // 如果是promise对象 查看promsie对象返回的结果 
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promsie2, x, resolve, reject)
          }catch (e) {
            reject(e);
          }
        }, 0)
      } else {
        // 等待
        // 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie2, x, resolve, reject)
            }catch (e) {
              reject(e);
            }
          }, 0)
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie2, x, resolve, reject)
            }catch (e) {
              reject(e);
            }
          }, 0)
        });
      }
    });
    return promsie2;
  }
  finally (callback) {
    return this.then(value => {
      return MyPromise.resolve(callback()).then(() => value);
    }, reason => {
      return MyPromise.resolve(callback()).then(() => { throw reason })
    })
  }
  catch (failCallback) {
    return this.then(undefined, failCallback)
  }
  static all (array) {
    let result = [];
    let index = 0;
    return new MyPromise((resolve, reject) => {
      function addData (key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          // promise 对象
          current.then(value => addData(i, value), reason => reject(reason))
        }else {
          // 普通值
          addData(i, array[i]);
        }
      }
    })
  }
  static resolve (value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
}

function resolvePromise (promsie2, x, resolve, reject) {
  if (promsie2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    // promise 对象
    // x.then(value => resolve(value), reason => reject(reason));
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}

module.exports = MyPromise;
```

# 内存管理

## 分析工具

- Performance
- 浏览器任务管理器
- 堆快照查找分离DOM(搜索deta)

## 代码优化

- 避免使用全局变量
- 避免循环引用
- 采用字面量替换new
- 采用事件委托
- 不要为了闭包而闭包
- 避免函数嵌套过深





