---
title:  js基础
order: 2
group:
  title: js
---
输出：

- 控制台输出
- 页面输出

- 在当前页面进行内容显示

- 弹窗输出

- 在当前页面作为弹窗输出内容

```plain
console.log("输出的内容")
document.write('输出内容')
alert("输出内容")
```

- 弹窗输出确认之后才会显示页面输出

### 输入：

```plain
prompt("提示性信息")
document.write(prompt("提示性信息"))
```

### 变量

#### 概念：

在程序中，变量就是一个存储数据的容器

- 变量的命名：

1. 字母，数字，_以及$
2. 不能以数字开头,不能包含其他特殊字符
3. 不能以关键字命名
4. 区分大小写，命名对大小写敏感
5. 推荐：大小驼峰命名法，尽量见词达意

- 大驼峰：每个单词首字母大写UserName；一般用于类取名
  
- 小驼峰：第二个单词开始首字母大写userName；一般用于变量和其他函数命名
  
- 注意：

- 只声明未赋值，输出为undefined
  
  没有定义变量直接使用，则程序报错

#### 变量的定义

- var，let，const

1. var时可以在定义变量之前使用；let，const不能在定义变量之前使用，程序会直接报错
2. var可以重复定义同一变量；let，const不能重复定义同一变量
3. var、let可以修改变量值；const作为一个常量，不能重新赋值，而且在声明变量同时必须赋值。

- 基本数据类型（7钟）
- number：表示数字，1，-1，3.14
- string：表示字符串类型，用引号包裹起来的数据为字符串，”中国”,”20”
- boolean：布尔类型。判断真假使用
- true：表示为真（正确）
- false：表示假（错误）
- undefined：未定义，如果变量只声明但未赋值则为未定义。
- null：表示空值
- symbol：表示唯一值
- bigint：表示超大数，一般用于科学计算
- 引用数据类型（1种）
- object：表示对象

```plain
typeof  数据/变量名
```

为什么typeof null的类型object

## 数据类型的转换

### 转为数字类型

- Number()
- parseInt()：取整操作
- parseFloat：保留小数转为数字

```plain
console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number(undefined))//NaN
console.log(Number(null))//0
```

- 注意：
- 字符串：能转数字直接转数字，不能转是NaN
- 布尔类型：true是1，false是0
- undefined：是NaN
- null：是0

```plain
console.log(parseInt("123.4abc"))//123
console.log(parseInt(true))//NaN
console.log(parseInt(false))//NaN
console.log(parseInt(undefined))//NaN
console.log(parseInt(null))//NaN
```

- 字符串：只要是数字开头，都可以转换为数字并且为整数。不能转是NaN
- 布尔类型：是NaN
- undefined：是NaN
- null：是NaN

```plain
console.log(parseFloat("123.4abc"))//123.4
console.log(parseFloat(true))//NaN
console.log(parseFloat(false))//NaN
console.log(parseFloat(undefined))//NaN
console.log(parseFloat(null))//NaN
```

- 字符串：只要是数字开头，都可以转换为数字并且可以保留小数。不能转是NaN
- 布尔类型：是NaN
- undefined：是NaN
- null：是NaN

### 转为字符串

- toString

```plain
let num = 222;
console.log(typeof num.toString())
instanceof
console.log(person instanceof Object); // 变量person是Object吗？
console.log(colors instanceof Array); // 变量colors是Array吗？
console.log(pattern instanceof RegExp); // 变量pattern是RegExp吗？
```

### 转为布尔类型

- Boolean（）

```plain
console.log(Boolean("123abc"))//true
console.log(Boolean(""))//false
console.log(Boolean(123))//true
console.log(Boolean(NaN))//false
console.log(Boolean(undefined))//false
console.log(Boolean(null))//false
```

### 算术运算符

- +：加法
- -：减法
- *：乘法运算
- /：除法运算
- %：取余，取模

```plain
console.log(3 + 4)//7
console.log("3" + "4")//字符串拼接。34
console.log(3 + "4")//隐式转化。34

let str = 5 + ""
console.log(typeof str)//string
```

- - 注意：

- - - 加号两边均为数字类型，进行相加
    - 加号有一边为字符类型，进行字符串的拼接

```plain
console.log("3" - "4")//隐式转化，转为数字再计算。-1
console.log(3 - "4")//隐式转化，转为数字再计算。-1
console.log(3 - "a")//隐式转化，转化不了为NaN

let num = "5" - 0
console.log(typeof num)
```

- - 注意：

- - - 减号两边无论是字符还是数字，直接转换为数字
    - 字符转不了数字的情况下，输出NaN

### 赋值运算符

- =：赋值操作
- +=：在数据原本的基础上进行数据相加，并把结果赋给左边的变量
- -=：在数据原本的基础上进行数据相减，并把结果赋给左边的变量
- *=：在数据原本的基础上进行数据相乘，并把结果赋给左边的变量
- /=：在数据原本的基础上进行数据相除，并把结果赋给左边的变量

### 关系运算符

- 用于判断数据之间的关系，返回数据为一个布尔类型
- ==：判断两边数据是否相等，不会考虑数据类型
- !=：判断两边数据是否不相等，不会考虑数据类型
- \>：判断左边数据是否大于右边数据，不会考虑数据类型
- <：判断左边数据是否小于右边数据，不会考虑数据类型
- \>=：判断左边数据是否大于等于右边数据，不会考虑数据类型
- <=：判断左边数据是否小于等于右边数据，不会考虑数据类型
- ===：全等号，判断两边数据是否全等。
- 概念：就是一堆有序的数据的集合。数组中每个数据都有自己专属的编号——下标，用来快速查找数组中的某个数据.

## 数组

- 定义数组
- 数组的基本使用：

- - 数组的长度
  - 下标（索引）

- - - 概念：其实本质就是一个数字，表示该数据在数组中的位置。下标从0开始，最后一个下标为length-1。

- - 查询数据
  - 数据修改
  - 数据新增：末尾添加数据
  - 删除数据：末尾删除数据

```plain
//定义数组
let arr1 = new Array()//new关键字定义
let arr2 = []//推荐使用，字面量定义
let arr1 = new Array(数据1,数据2,数据3....)
let arr2 = [数据1,数据2,数据3....]

//数组的长度属性
数组名.length

//使用数组获取值
数组名[下标]

//赋值语句
数组名[下标] = 新数据
```

- - - 下标为0，表示查找第一个数据，以此类推
    - 找不存在的下标，数据返回为undefined

## 循环语句

#### for循环

```plain
for(循环变量初始化;循环判断条件;变量控制条件){
    循环体
}
```

#### while

```plain
while (循环判断条件) {
        循环体
    } 
```

### do while

```plain
do{
    循环体
}while(循环条件)
```

## 分支结构

### if

```plain
if(判断条件){
    //在条件成立时执行
    执行代码
} else if(判断条件){
    //在前一个条件不成立，当前条件成立时
    执行代码
}else{
    //在所有条件不成立的时候执行
    执行代码
}
```

### switch

```plain
switch(要判断的数据){
    case 数据1：当满足数据1时要执行的代码;break;
    case 数据2：当满足数据2时要执行的代码;break;
    case 数据3：当满足数据3时要执行的代码;break;
    case 数据4：当满足数据4时要执行的代码;break;
    .....
    default:
        当上诉数据都不满足时要执行的代码;break;
}
```

## 逻辑运算符

- 概念：用于关系表达式之间的连接词
- &&：表示并且。两边表达式同时为真，则返回为true，任意一边为假，则返回false
- ||：表示或者。两边表达式有一边为真，则返回true。两边都为假，则返回false
- !:表示非，对结果进行取反操作。

## break 与continue

break表示结束循环，continue表示本次循环跳过后面的语句。

## 二维数组

### 二维数组的定义

```javascript
//字面量形式, 大佬推荐使用此方法
let users1 = [
    ["xiaoming", "ad123"],
    ["xiaohong", "ad123"],
    ["xiaowang", "ad123"]
];
console.log(users1);
//new关键字
let users2 = new Array(
    new Array("xiaoming", "ad123"),
    new Array("xiaohong", "ad123"),
    new Array("xiaowang", "ad123"),
)
console.log(users2);
```

### 数组api

### 总结：

| 方法          | 说明                                       | 是否改变原数组 | 返回值                        |
| ------------- | ------------------------------------------ | -------------- | ----------------------------- |
| unshift()     | 向数组开头批量添加数据                     | 是             | 数组长度                      |
| push()        | 向数组末尾批量添加数据                     | 是             | 数组长度                      |
| shift()       | 删除数组开头第一个数据                     | 是             | 被删除的数据                  |
| pop()         | 删除数组末尾最后一个数据                   | 是             | 被删除的数据                  |
| splice()      | 完成指定位置的插入或删除数据               | 是             | 被删除的数据新数组            |
| indexOf()     | 获取的是某个数据在数组中第一次出现的下标   | 否             | 下标，没找到则返回 -1         |
| lastIndexOf() | 获取的是某个数据在数组中最后一次出现的下标 | 否             | 下标，没找到则返回 -1         |
| includes()    | 获取某个数据是否在数组中                   | 否             | 有则返回true，没有则返回false |
| concat()      | 可以将多个数据进行合并                     | 否             | 合并后的新数组                |
| slice()       | 截取数组中的一部分数据                     | 否             | 截取后的新数组                |
| join()        | 能够将数组里的数据拼接为字符串             | 否             | 字符串                        |

```javascript
left.unshift(1,2,3)   在第一个位置插值并返回新数组长度,会改变原数组
push() 在最后一个位置插值并返回新数组长度,会改变原数组
left.shift()   删除第一个值并返回该值
pop() 删除最后一个值并返回该值
slice()  该函数不会改变元数组
	取字符串的某个部分，并以新的字符串返回被提取的部分。  
  start 为起始值，必须要； 算start 不算end
  arr.slice(start, end); 

splice(first,second,third)  会改变原数组
  first 为起始值，必须要； second需删除的元素个数 ；third，要增加的元素
indexOf()和lastIndexOf()都返回要查找的元素在数组中的位置，
   如果没找到则返回-1。
includes()返回布尔值，表示是否至少找到
concat()
该方法可以连接两个或多个数组，并将新的数组返回，该方法不会对原数组产生影响
    var arr2 = [5,6,7,8];
    var arr3 = arr.concat(arr2);
    console.log(arr3); // 连接之后返回的数组为：[1, 2, 3, 4, 5, 6, 7, 8]
join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
  var arr = ['xiao','lin','qiqi','mingtian'];
  var arr2 = arr.join(',');
  console.log(arr2); 
  // 根据','隔开返回的字符串为："xiao,lin,qiqi,mingtian"
every()：对数组每一项都运行传入的函数，如果对每一项函数都
返回true，则这个方法返回true。
filter()：对数组每一项都运行传入的函数，函数返回true的项会
组成数组之后返回。
forEach()：对数组每一项都运行传入的函数，没有返回值。
map()：对数组每一项都运行传入的函数，返回由每次函数调用的
结果构成的数组。
some()：对数组每一项都运行传入的函数，如果有一项函数返回
true，则这个方法返回true。
这些方法都不改变调用它们的数组。
```

## 函数

### 函数的定义

```javascript
//函数声明式
function 函数名(){
    //函数体，之后被执行的一段代码
}
//函数的表达式
let getMin = function () {
            //函数体
            console.log("找到一个最小值")
}
//调用函数;
函数名();
```

### 多参数使用

```javascript
// arguments 类数组， 箭头函数 没有arguments 
function getArr() {
    for (let index = 0; index < arguments.length; index++) {
      const element = arguments[index];
      console.log(element);   
    }
}
// 扩展运算符 ...
let fuc=(...more)=>{

}
```

## 变量

- 概念：根据变量定义的位置不同将变量进行分类，分为全局变量和局部变量
- 全局变量：在函数外部定义的变量则成为全局变量
- 可以在程序任何地方使用，无论是函数内部还是外部
- 局部变量：在函数内部定义的变量则成为局部变量
- 局部变量只能在定义它的函数内部使用，其他地方直接报错
- 函数内部形参也是一个局部变量，只能在函数内部使用
- 在函数内部，如果全局和局部有同名变量时使用局部变量（如果要使用全局变量可以通过this，window调用）
- 注意：如果一个变量只进行了赋值没有声明则默认变为全局变量

## 箭头函数

- ES6提供的一种可以简化函数定义格式的语法，可以用于辅助函数定义，语法更加简洁
- 写法：
- 如果只有一个形参可以省略()不写
- 如果函数体中只有return没有其他代码，那么可以省略{}和return不写

```plain
//函数表达式
let demo = function(){
    //函数体()
}
//箭头函数
let demo1 = () => {
    //函数体
}
```

- 省略function，并且在小括号和大括号之间用=>

```plain
let add1 = (num) =>{
    return num + 5
}

let add1 = num =>{
    return num + 5
}
```

- 如果函数体中只有return没有其他代码，那么可以省略{}和return不写

```plain
let add1 = num =>{
    return num + 5
}

let add1 = num => num + 5
```

## 对象

- 背景：对于复杂的数据，用多维数据表示不方便进行数据管理。记住下标，数组嵌套。
- 概念：在Javascript中专门用来描述复合型数据的数据类型
- 复合型数据：本身是一个整体，其中可以使用其他多个数据类型进行表述

#### 创建对象

```javascript
//创建空对象
let student = new Object();
let student = {}//字面量形式
console.log(student);
//创建带有数据的对象
let 对象变量名 = new Object();
对象变量名.属性名1 = 属性值1;
st对象变量名udent.属性名2 = 属性值2;
let 对象变量名 = {
    属性名1:属性值1,
    属性名2:属性值2,
    属性名3:属性值3,
    ...
    属性名n:属性值n
}
```

- 键值对：属性名为键，属性值为值。属性名和属性值一一对应。
- 属性名：类型为字符串，可以简写""
- 属性值：可以放任意数据类型。

#### 访问对象的方法

```javascript
//书写方式
student.属性名;
student["属性名"];
student[变量名]
```

#### 对象遍历for-in

```javascript
//for-in，针对对象遍历,每次遍历将属性名赋值给变量 key
for(let item in student){
    //循环体
    console.log(item);//输出属性名
    console.log(student[item]);//item表示变量，输出属性值
}
```

## 字符串api

```javascript
查找字符串indexOf()
let stringValue = "hello world";
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4

repeat() 表示要将字符串复制多少次
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman

search()方法 字符串搜索返回模式第一个匹配的位置索引，如果没找到则返回-1。
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1

replace()方法 替换
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"
result = text.replace(/at/g, "ond");
console.log(result); // "cond, bond, sond, fond"

// 匹配首部
let str="abcd123";
console.log(str.startsWith("ab")); //true
// 匹配尾部
let str="abcd123";
console.log(str.endsWith("23")); //true
截取字符  
subStr(index,number)  index:开始索引 number：往右截取的字符数量
substring(start,end)  开始索引与结束索引，包含开始不包含索引
slice(start,end) 开始索引与结束索引，包含开始不包含结束,可为负数


split("^") 按指定字符拆分之后返回拆分后的数据组成的数组

JS字符(字母)与ASCII码转换
大写字母A-Z对应的ASCII码值是65-90

小写字母a-z对应的ASCII码值是97-122
var str = "A";
str.charCodeAt();  // 65
"Z".charCodeAt() // 90
var str1 = 'a';
str1.charCodeAt();  // 97

var num = 65;
String.fromCharCode(num);  // 'A'

var num1 = 97;
String.fromCharCode(num1);  // 'a'
```

## dom

```javascript
html标签属性
.attributes
getAttribute  
setAttribute("index","123")  有就修改，没有就增加
标签变量名.removeAttribute("属性名")
oul.removeAttribute("index")  删除

添加标签
document.createElement() appendChild  insertBefore
删除标签
removeChild

getComputedStyle(标签变量名,伪元素)
previousElementSibling 上一个兄弟标签  
nextElementSibling  下一个兄弟标签
获取子标签
firstElementChild  lastEllementChild   children
获取父标签
parentElemnent

innerHTML ：获取标签内部的HTML代码。一般针对于 <标签名></标签名> 这种标签
innerText：获取标签内的文本内容。一般针对于 <标签名></标签名> 这种标签

// 作为前一个同胞节点插入
element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>");
element.insertAdjacentText("beforebegin", "Hello world!");
// 作为第一个子节点插入
element.insertAdjacentHTML("afterbegin", "<p>Hello world!</p>");
element.insertAdjacentText("afterbegin", "Hello world!");
// 作为最后一个子节点插入
element.insertAdjacentHTML("beforeend", "<p>Hello world!</p>");
element.insertAdjacentText("beforeend", "Hello world!");
```

## 事件

### 概念

- 用户和页面之间的所有交互动作称为事件。一个动作就是一个事件，点击，双击，鼠标事件，键盘事件
- 当js触发事件是，执行指定代码
- 事件三要数：

1. 1. 事件源：触发事件的元素
   2. 事件类型：

1. 1. 1. 鼠标事件
      2. 键盘事件
      3. 点击
      4. 双击

1. 1. 事件处理程序：触发事件是执行的相关代码

- 事件的发展

- - DOM0级&1级事件：没有统一标准，是浏览器厂商自己开发实现的，大概实在98年左右，出现第一个规范 DOM1级
  - DOM2级：有规范，能够对页面进行增删查改以及css样式相关操作，目前最普及的版本
  - DOM3级：针对xml，对DOM进行了模块化，添加了很多新特新。

### 添加事件

```javascript
window.onload=function(){ // 页面初始化后执行的函数代码
};


// 动态绑定,自己寻找事件源,绑定事件
const obtn = document.querySelector("#btn")
obtn.onclick = function(){
    console.log(123);
}
// 单击事件
obtn.addEventListener("click",function(){
    console.log(123);
},false)

// 聚焦事件
obj.onfocus=function (){
    console.log(this.value);
}
// 失焦事件
obj.onblur=function (e){
    console.log(this.value);
}

// 多选的事件绑定
obj = document.querySelectorAll("[name='xueli']");
for (let I = 0; I < obj.length; I++) {
    const element = obj[I];
    element.onchange = function () {
        console.log(this.checked); //判断选中状态
        console.log(this.value);
    };
}
// 移入
  obj.onmouseenter=function (){
      console.log("onmouseenter");
  }
  // 移除
  obj.onmouseleave=function (){
      console.log("onmouseleave");
  }
  // 盖住
  obj.onmouseover=function (){
      console.log("onmouseover");
  }
  // 出盖
  obj.onmouseout=function (){
      console.log("onmouseout");
  }

// 阻止事件冒泡
e.stopPropagation()
```

### 删除事件

```javascript
内联的删除
标签变量名.removeAttribute("on事件类型");

标签变量名.on事件类型 = null

标签变量名.removeEventListener("事件类型",函数名)
```

### event事件对象

概念：在事件绑定时自动传入的一个对象，可以在该对象身上找到一些事件触发的相关信息

常用

```javascript
target：表示用户当前操作的标签
currentTarget：表示事件阶段正在处理的标签
pageX/pageY：表示鼠标相对于页面的坐标
clientX/clientY：表示鼠标相对于窗口的坐标
offsetX/offsetY：表示鼠标相对于触发事件标签左上角的位置（不包含边框）

preventDefault()：阻止标签的默认行为
stopPropagation()：阻止事件流的传播
```

## 定时器

```javascript
let 定时器标识符 = setTimeout(function () {
    //需要延迟执行的代码
},延迟时间)//单位为毫秒
clearTimeout(定时器标识符)

let 定时器标识符 = setInterval(function () {
    //每隔一段时间需要执行的代码
},间隔时间)//单位为毫秒
clearInterval(定时器标识符)
```

## BOM

- window：浏览器窗口对象

- - location：浏览器url地址对象
  - history：浏览器浏览历史记录对象
  - screen：屏幕对象
  - navigator：浏览器导航对象

```javascript
location.href：获得当前url中完整地址
location.search：获取从其他网页传递过来的参数，从问好开始，需要配合api转换数据
页面跳转：
location.href：会生成一条记录，能够进行回退
location.assign()：会生成一条记录，能够进行回退
location.replace()：不会生成一条记录，不能够进行回退
```

## 正则表达式

```javascript
//1.字面量  /正则规则/修饰符
let regExp = /a/;
//2.new关键字  new RegExp("正则规则","修饰符")
let regExp1 = new regExp("a","i")

test()	字符串	检测字符串是否符合规则	布尔类型
exec()	字符串	检测字符串是否符合规则	不包含返回null或者是数组
compilte()	字符串	修改正则规则	无

const userExp = new RegExp(username);
userExp.test(element['username']);
```

### 正则的规

- 方括号规则

|表达式|描述|
| ---- | ---- |
| /[abc]/ | 包含[]中任意一个字符 |
| /[^abc]/ | 包含除了[]中任意一个字符 |
| /[0-9]/ | 包含任意数字 |
| /[a-z]/ | 包含任意小写字母 |
| /[A-Z]/ | 包含任意大写字母 |
| /[A-Za-z0-9]/ | 包含所有字母和数字 |

- 元字符
|   表达式   | 描述     |
| ---- | ---- | ---- |
| /\w/ | 包含数字、字母、以及下划线中任意字符/[A-Za-z0-9_]/ |
| /\W/ | 包含除了数字、字母、以及下划线中任意字符/[^A-Za-z0-9_]/ |
| /\d/ | 包含任意数字/[0-9]/ |
| /\D/ | 包含除了任意数字之外的字符/[^0-9]/ |
| /\s/ | 包含空格字符 |
| /\S/ | 包含除了空白字符以外的任意字符 |

- 量词
|   表达式   | 描述     |
| ---- | ---- |
| /n+/ | 包含的字符n至少出现一次 |
| /n*/ | 包含的字符nk可有可无，次数>=0 |
| /n?/ | 包含的字符n只能出现1次或0次 |
| /n{x}/ | 包含的字符n只能出现x次 |
| /n{x,}/ | 包含的字符n至少出现x次 |
| /n{x,y}/ | 包含的字符n至少出现x次，最多出现y次 |


- 开始和结束
  
|   表达式   | 描述     |
| ---- | ---- |
| /^n/ | 匹配以n开头 |
| /n$/ | 匹配以n结尾|

- 其它字符
|   表达式   | 描述     |
| ---- | ---- |
| | | 或者 |
| () | 分组 |
| \ | 转义符 |

### 修饰符

| 表达式 | 描述                     |
| ------ | ------------------------ |
| i      | 不区分大小写             |
| g      | 对所有字符串都要进行匹配 |
| m      | 多行匹配                 |



## 变量声明

- var  作用域为函数体内部
- let 作用域为块级
- const  用它声明变量时必 须同时初始化变量，且尝试修改const声明的变量会导致运行时错误。  

### 变量比较

```javascript
ECMAScript 6规范新增了Object.is()，这个方法与===很像，
console.log(Object.is(true, 1)); // false
console.log(Object.is({}, {})); // false
console.log(Object.is("2", 2)); // false
// 正确的0、-0、+0相等/不等判定
console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false
// 正确的NaN相等判定
console.log(Object.is(NaN, NaN)); // true
```

### typeof确定变量类型

```javascript
let message = "some string";
console.log(typeof message); // "string"
console.log(typeof(message)); // "string"
console.log(typeof 95); // "number"

"undefined"表示值未定义；
"boolean"表示值为布尔值；
"string"表示值为字符串；
"number"表示值为数值；
"object"表示值为对象（而不是函数）或null；
"function"表示值为函数；
"symbol"表示值为符号。
```

### 数值

```javascript
转为数值
Number()
let num1 = Number("Hello world!"); // NaN
let num2 = Number(""); // 0
let num3 = Number("000011"); // 11
let num4 = Number(true); // 1

parseInt()
let num1 = parseInt("1234blue"); // 1234
let num2 = parseInt(""); // NaN
let num3 = parseInt("0xA"); // 10，解释为十六进制整数
let num4 = parseInt(22.5); // 22
let num5 = parseInt("70"); // 70，解释为十进制值
let num6 = parseInt("0xf"); // 15，解释为十六进制整数
let num1 = parseInt("10", 2); // 2，按二进制解析
let num2 = parseInt("10", 8); // 8，按八进制解析
let num3 = parseInt("10", 10); // 10，按十进制解析
let num4 = parseInt("10", 16); // 16，按十六进制解析

parseFloat()
let num1 = parseFloat("1234blue"); // 1234，按整数解析
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("0908.5"); // 908.5
let num6 = parseFloat("3.125e7"); // 31250000
```

### 字符串

```javascript
新增定义方法
let lastName = `Jingleheime
rschmidt`; // 可换行 可进行插值
let value = 5;
// 以前，字符串插值是这样实现的：
let interpolatedString =
value + ' to the ' + (value * value);
// 现在，可以用模板字面量这样实现：
let interpolatedTemplateLiteral =
`${ value } to the  power is ${ value * value }`;


转换为字符串
toString()
let age = 11;
let ageAsString = age.toString(); // 字符串"11"
let found = true;
let foundAsString = found.toString(); // 字符串"true"
 转换数值时可接受参数，表示返回的数值的进制
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
```

#### toLocaleString() 格式化字符串

```javascript
1.数字
const num = 2333333;   
num.toLocaleString('zh',{style:'decimal'});  //2,333,333              
num.toLocaleString('zh',{style:'percent'});   // 233,333,300%                  
num.toLocaleString('zh',{style:'currency'});     //  报错  
let num = 2333.3;
//整数最少位
num.toLocaleString('zh', { minimumIntegerDigits: 5 }); 
//02,333.3//如果不想有分隔符，可以指定useGrouping为false
num.toLocaleString('zh', { minimumIntegerDigits: 5, useGrouping: false }); //02333.3
//小数最少位
num.toLocaleString('zh', { minimumFractionDigits: 2, useGrouping: false }); //2333.30
num = 666.666
//小数最多位
num.toLocaleString('zh', { maximumFractionDigits: 2, useGrouping: false }); //666.67

const num = 1234.5;
//最少有效位数
num.toLocaleString('zh', { minimumSignificantDigits: 6, useGrouping: false }); //1234.50
//最大有效位数
num.toLocaleString('zh', { maximumSignificantDigits: 4, useGrouping: false }); //1235

2.货币
const num = 2333333
num.toLocaleString('zh',{style:'currency' , currency:'CNY' }); //￥2,333,333.00
// CNY2,333,333.00
num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'code' });  
 //2,333,333.00人民币
num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'name' }); 
hour12 表示的是使用十二小时制还是使用二十四小时制
const date = new Date();
date.toLocaleString('zh', { hour12: true });  //2018/4/4 下午6:57:36
date.toLocaleString('zh', { hour12: false });  //2018/4/4 18:57:36

剩下的格式化就是年月日时分秒星期等选项了，具体的属性一共有九个，分别是 
weekday、era、year、month、day、hour、minute、second 与 timeZoneName
```

#### 字符串函数

```javascript
查找字符串indexOf()
let stringValue = "hello world";
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4

repeat() 表示要将字符串复制多少次
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman

search()方法 字符串搜索返回模式第一个匹配的位置索引，如果没找到则返回-1。
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1

replace()方法 替换
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"
result = text.replace(/at/g, "ond");
console.log(result); // "cond, bond, sond, fond"

// 匹配首部
let str="abcd123";
console.log(str.startsWith("ab")); //true
// 匹配尾部
let str="abcd123";
console.log(str.endsWith("23")); //true
截取字符  
substr(index,number)  index:开始索引 number：往右截取的字符数量
substring(start,end)  开始索引与结束索引，包含开始不包含索引
slice(start,end) 开始索引与结束索引，包含开始不包含索引,可为负数


split("^") 按指定字符拆分之后返回拆分后的数据组成的数组

JS字符(字母)与ASCII码转换
大写字母A-Z对应的ASCII码值是65-90

小写字母a-z对应的ASCII码值是97-122
var str = "A";
str.charCodeAt();  // 65
"Z".charCodeAt() // 90
var str1 = 'a';
str1.charCodeAt();  // 97

var num = 65;
String.fromCharCode(num);  // 'A'

var num1 = 97;
String.fromCharCode(num1);  // 'a'

转大写
let str1 = "AbCdEf"
str1.toUpperCase()
console.log(str1) // 输出：ABCDEF

转小写
let str3 = "AbCdEf"
str3.toLowerCase()
console.log(str3) // 输出：abcdef
```



### 确定数据类型

####  typeof操作符  

```html
let s = "Nicholas";
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();
console.log(typeof s); // string
console.log(typeof i); // number
console.log(typeof b); // boolean
console.log(typeof u); // undefined
console.log(typeof n); // object
console.log(typeof o); // object
```

#### instanceof操作符  

 typeof虽然对原始值很有用，但它对引用值的用处不大。我们通常不关 心一个值是不是对象，而是想知道它是什么类型的对象。   为了解决这个 问题，ECMAScript提供了instanceof操作符  

```html
console.log(person instanceof Object); // 变量person是Object吗？
console.log(colors instanceof Array); // 变量colors是Array吗？
console.log(pattern instanceof RegExp); // 变量pattern是RegExp吗？
```

#### Object.prototype.toString.call()

```javascript
Object.prototype.toString.call('stjd')
//"[object String]"
 
Object.prototype.toString.call(1)
//"[object Number]"
 
Object.prototype.toString.call(true)
//"[object Boolean]"

Object.prototype.toString.call(null)
//"[object Null]"

Object.prototype.toString.call(undefined)
//"[object Undefined]"
```

## 函数

###  模板字面量标签函数  

```javascript
标签函数会接收被插值记号分隔后的模板和对每个表达式求值的结果。标签函数本身是一个常规函数，
通过前缀到模板字面量来应用自定义行为，如下例所示。
let a = 6;
let b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
console.log(strings);
console.log(aValExpression);
console.log(bValExpression);
console.log(sumExpression);
return 'foobar';
}
let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "foobar"

##

因为表达式参数的数量是可变的，所以通常应该使用剩余操作符
（rest operator）将它们收集到一个数组中：
let a = 6;
let b = 9;
function simpleTag(strings, ...expressions) {
console.log(strings);
for(const expression of expressions) {
console.log(expression);
}
return 'foobar';
}
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// let taggedResult = simpleTag(`${ a } + ${ b } = ${ a + b }`);
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(taggedResult); // "foobar"
```

#### arguments



## 数组

 ECMAScript数组也是一组有序的数据，但跟其他语言不同 的是，数组中每个槽位可以存储任意类型的数据。  

#### 数组创建

```javascript
let arr = new Array();
arr[0] = 1;
arr[1] = 2;
let colors = new Array("red", "blue", "green");
let arr = [1, "2", 3, "4", 5, "6", 7, "8", 9];
```

#### 数组的属性

```javascript
长度 arr.length)
```

#### 合并数组

```javascript
该方法可以连接两个或多个数组，并将新的数组返回，该方法不会对原数组产生影响
var arr2 = [5,6,7,8];
var arr3 = arr.concat(arr2);
console.log(arr3); // 连接之后返回的数组为：[1, 2, 3, 4, 5, 6, 7, 8]
```

#### 数组拆分

```javascript
join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
var arr = ['xiao','lin','qiqi','mingtian'];
var arr2 = arr.join(',');
console.log(arr2); 
// 根据','隔开返回的字符串为："xiao,lin,qiqi,mingtian"
```

#### 数组方法

```javascript
在第一个位置插值并返回新数组长度,会改变原数组
left.unshift(1,2,3)  
删除第一个值并返回该值
left.shift()  
  
pop()  push()

取字符串的某个部分，并以新的字符串返回被提取的部分。  
start 为起始值，必须要； 算start 不算end
arr.slice(start, end); 

取字符串的某个部分，并以新的字符串返回被提取的部分。 
这种方法会改变原始数组。
splice(first,second,third)
first 为起始值，必须要； second需删除的元素个数 ；third，要增加的元素

indexOf()和lastIndexOf()都返回要查找的元素在数组中的位置，
如果没找到则返回-1。includes()返回布尔值，表示是否至少找到
一个与指定元素匹配的项。
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
alert(numbers.indexOf(4)); // 3
alert(numbers.lastIndexOf(4)); // 5
alert(numbers.includes(4)); // true

字符串转数组 split()
var str ="上海@上海市@闵行区@吴中路";
var splitAdd = str.split("@");
console.log(splitAdd) // ["上海", "上海市", "闵行区", "吴中路"]

every()：对数组每一项都运行传入的函数，如果对每一项函数都
返回true，则这个方法返回true。
filter()：对数组每一项都运行传入的函数，函数返回true的项会
组成数组之后返回。
forEach()：对数组每一项都运行传入的函数，没有返回值。
map()：对数组每一项都运行传入的函数，返回由每次函数调用的
结果构成的数组。
some()：对数组每一项都运行传入的函数，如果有一项函数返回
true，则这个方法返回true。
这些方法都不改变调用它们的数组。
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
alert(everyResult); // false
let someResult = numbers.some((item, index, array) => item > 2);
alert(someResult); // true
```

#### 数组归并

```javascript
let arr=[97, 57, 32, 87, 65, 78, 89];
//没有初始值
let sum = arr.reduce(function(prev, cur, index, array){
    return prev + cur;
    });
//有初始值 0
let sum = arr.reduce(function(prev, cur, index, array){
    return prev + cur;
    },0);
```

## BMO

### 概念

`BOM-（browser Object model）-浏览器对象模型` 。JavaScript会把浏览器 的一个标签页(即网页)作为一个对象存在于程序当中，提供了一系列的api来操作标签页本身。比如新建或关闭标签页，跳转页面、前进或后退等功能。

### window对象api

```javascript
alert()  : 窗口弹出 ；prompt  窗口输入；
confirm :页面上弹出一个确认框，会返回一个true或false。点击确定返回true，否则返回false
open :新建一个页面。不推荐使用，受浏览器的安全机制，可能无法执行。
close ：关闭当前页面
setInterval : 间隔器 clearInterval :清除间隔器 setTimeout :定时器 clearTimeout：清除定时器
```

#### setTimeout

```javascript
setTimeout(() => {
            
}, timeout);
timeout 为延迟时间 单位毫秒 1000毫秒=1秒
```

#### clearTimeout

```plain
停止还未执行的定时器
clearTimeout(定时器标识)
let timer setTimeout(() => {
            
}, timeout);
clearTimeout();
```

#### setInterval

```plain
每隔一定时间反复执行
let inv= setInterval(() => {
    console.log("咕");
}, 20000);
```

#### clearInterval

```plain
清除定时器
let inv2= setInterval(() => {
    console.log("呱");
}, 20000);

let timer3 =setTimeout(() => {
    clearInterval(inv2);       
}, 20000);
```

#### location

location属性一般引用自Location对象，可以用于获取或者设置当前的URL。

```javascript
window.location === document.location;  //true  均引用自Location对象；
URL的一般组成包括
eg: protocol://[user[:password]@]hostname:[port][/path][?query][#fragment]

获取url的方法
location.href
location.toString()
location.toLocaleString()
document.URL

设置url的方法
location.href = " xxx";	//不加协议会默认为相对路径，location="xxx"类似

其他属性
location.host  			//主机加端口号
location.hostname 		//主机
location.port			//端口号
location.protocol  		//协议
location.pathname 		//路径
location.hash			//片段标识符，可以用于保存网页状态
location.search			//返回链接内的查询字符串，获取页面地址中的数据

let strCode=decodeURIComponent(location.search	);  //汉字乱码处理
方法
location.assign('http://www.baidu.com'); 在浏览器的历史记录中增加一条新纪录;
location.replace()	//使用新URL覆盖浏览器的当前历史记录；
location.reload(true)	// 强制从服务器端加载 //重新加载当前页面，默认不传参如果存在缓存会从
浏览器缓存中加载；如果传入Boolean类型的true，则会强制从服务器加载；
```

栗子

```javascript
location.assign("目标url") ; //
location.relpace("目标url") ; //
location.href("目标url") ; //
location.reload();
```

#### history

History 对象最初设计来表示窗口的浏览历史。但出于隐私方面的原因，History 对象不再允许脚本访问已经访问过的实际 URL。唯一保持使用的功能只有 back()、forward() 和 go() 方法。

```javascript
    window.history.go(-2);  //后退两页   
    window.history.go(-1);  //后退一页   
    window.history.go(1);   //前进一页
    window.history.go(2);   //前进两页
   
    window.history.back();//后退一页
    window.history.forward();//前进一页
// 后退一页
history.go(-1);
// 前进一页
history.go(1);
// 前进两页
history.go(2);
```

#### navigator

收集了跟浏览器本身相关的信息，比如浏览器版本，当前操作系统的版本等

```javascript
返回浏览器的版本信息
navigator.userAgent
```

#### screen

- 概念：收集屏幕的相关信息，比如是否横屏、色彩度之类的.HTML5针对screen新增了来获取屏幕的角度信息，竖屏模式角度返回0，横屏返回90

```plain
conslog.log(screen);
conslog.log(screen.orientation.angle)
```

## DMO

概念

DOM(文档对象模型-document object model)。JavaScript会将文档(HTML页面)看成一系列标签的集合，并提供了一系列的api来操作HTML文档，比如对标签进行增删查改操作，或者修改css。这样的的话借助JavaScript能够实现动态页面。

### api

```plain
html标签属性
.attributes
getAttribute  
setAttribute("index","123")  有就修改，没有就增加

oul.removeAttribute("index")  删除
添加标签
document.createElement() appendChild  insertBefore
删除标签
removeChild()

getComputedStyle(标签变量名,伪元素)
previousElementSibling 上一个兄弟标签  
nextElementSibling  下一个兄弟标签
获取子标签
firstElementChild  lastElementChild   children
获取父标签
parentElemnent

innerHTML ：获取标签内部的HTML代码。一般针对于 <标签名></标签名> 这种标签
innerText：获取标签内的文本内容。一般针对于 <标签名></标签名> 这种标签
```

#### 获取dmo

```javascript
//根据唯一的id来获取这个节点
document.getElementById() 
//根据classname来获取多个节点
document.getElementsByClassName()
//根据标签名字来获取节点
document.getElementByTabName()
//根据标签身上name属性
document.getElementByName()

//通用api
document.querySelector("选择器")  //默认返回找到的第一个节点
document.querySelectorAll() //默认返回一个伪数组，通过[下标编号] 可以使用 forEach

通过 document.getElement获取是动态的 ； document.querySelector是静态的，

# 获取所有属性 attributes
attributes属性中的每个节点的nodeName是对应属性的名字，nodeValue是属性的值。

let att = element.attributes;
let id=att["id"].nodeValue;

getComputedStyle得到结果是一个对象，包含当前这个标签最终样式。貌似还是动态
所有结果都是read-only，只读不可修改
```

#### 添加标签

```javascript
// 修改文本内容，略low，应用场景很小
const comment = prompt("请输入你的评论")
// innerHTML将一串标签字符串,覆盖指定位置的元素
const oul = document.querySelector(".oul")
//先获取原本的内容
let temp = oul.innerHTML
temp+=`<li>${comment}</li>`
// 将拼接好的结果,覆盖之前结果
oul.innerHTML = temp
console.log(temp);
// document.createElement创建一个HTML节点
const oul = document.querySelector(".oul")
const oli = document.createElement("li")
console.log(oli);
oli.innerText = "评论三："
// appendChild得到一个节点，默认将这个节点添加到指定父级下面
// 默认添加到最后
oul.appendChild(oli)
//oul.insertBefore(oli,oli1)  oli是新加入的节点,oli1 是参照节点
```

#### 删除节点

```javascript
// 
const oli = document.querySelector(".com")
// 这个函数remove可以实现删除自己
oli.remove()
const oli = document.querySelector(".com")
// 方案二:
const oul = document.querySelector(".oul")
oul.removeChild(oli)
```

### dmo事件

#### 事件绑定

```javascript
window.onload=function(){ // 页面初始化后执行的函数代码
};


// 动态绑定,自己寻找事件源,绑定事件
const obtn = document.querySelector("#btn")
obtn.onclick = function(){
    console.log(123);
}
// 单击事件
obtn.addEventListener("click",function(){
    console.log(123);
},false)

// 聚焦事件
obj.onfocus=function (){
    console.log(this.value);
}
// 失焦事件
obj.onblur=function (e){
    console.log(this.value);
}

// 多选的事件绑定
obj = document.querySelectorAll("[name='xueli']");
for (let I = 0; I < obj.length; I++) {
    const element = obj[I];
    element.onchange = function () {
        console.log(this.checked); //判断选中状态
        console.log(this.value);
    };
}
// 移入
  obj.onmouseenter=function (){
      console.log("onmouseenter");
  }
  // 移除
  obj.onmouseleave=function (){
      console.log("onmouseleave");
  }
  // 盖住
  obj.onmouseover=function (){
      console.log("onmouseover");
  }
  // 出盖
  obj.onmouseout=function (){
      console.log("onmouseout");
  }

// 阻止事件冒泡
e.stopPropagation()
```

#### 窗口滚动事件

```plain
增加事件
let scr=window.addEventListener("scroll", (event) => {
        if (document.compatMode == "CSS1Compat") {
        console.log("CSS1Compat",document.documentElement.scrollTop);
        changeHeadr(document.documentElement.scrollTop);

        } else {
        console.log(document.body.scrollTop);
        }
        });

scrollTop  为距离顶部往下移动了多少px。
/**
 * todo 根据滚动距离实现不同头部切换
 * @param {滚动距离} scrollTop 
 */
function changeHeadr(scrollTop) {
    let objFirst= document.getElementById("js-header-first");
    let objSecond= document.getElementById("js-header-second");

    if (scrollTop>140) {
        // objSecond.setAttribute("opacity",1);
        // objSecond.setAttribute("opacity",1);
        // objFirst.setAttribute("opacity",0);
        let num=parseFloat(scrollTop/600);
        if (num>1) {
            num=1;
        }
        // mark 本次测试使用的内联，不应该用内联，后面尝试修正
        objSecond.style.opacity=num;
        objFirst.style.opacity="0";

        console.log(num);
    }else{
        objSecond.style.opacity="0";
        objFirst.style.opacity="1";
    }
}
```

#### 事件取消

```javascript
const obtn = document.querySelector(".btn")
obtn.removeAttribute("onclick")

const obtn = document.querySelector(".btn")
obtn.onclick = function(){
alert(123)
}
// function代表没有任何一个地方使用,内存回收function
obtn.onclick = null


obtn.removeEventListener("click",play,false)
```

## 绑定事件补充

```javascript
click : 单击事件  element.onclick = function () { };

focus：当元素获得焦点时触发。这个事件不冒泡，所有浏览器都
支持。
blur：当元素失去焦点时触发。这个事件不冒泡，所有浏览器都支
持。

change：用于下拉框，
```

## ajax

不考虑安全性以及并发度

ajax+php+mysql 感觉直接起飞

```plain
$.ajax({
    url:"http://localhost:81/test.php",
    type:"post",
    data:{"id":"123","pwd":"123456"},
    dataType:"text",
    success:function(data,textStatus,jqxhr){
        console.log("__成功__");
        console.log(data);
        console.log(textStatus);
        console.log(jqxhr);
        console.log("______");
    },
    error:function(jqxhr,textStatus,error){
        console.log("__失败__");
        console.log(error);
        console.log(textStatus);
        console.log(jqxhr);
        console.log("******");  
    
    }
})
```

## JSON

 理解JSON最关键的一点是要把它当成一种数据格式，而不是编程语 言。JSON不属于JavaScript，它们只是拥有相同的语法而已。  

```html
JSON.stringify()和JSON.parse()。
stringify()可以把javascript json对象转为字符串;
let book = {
title: "Professional JavaScript",
authors: [
"Nicholas C. Zakas",
"Matt Frisbie"
],
edition: 4,
year: 2017
};
let jsonText = JSON.stringify(book);

parse() 可以把json格式字符串转为JavaScript对象;
let jsonObj = JSON.parse(jsonText);
```

#### JSON.stringify()

```javascript
第一个参数是过滤器，可以是数组或函数；
如果第二个参数是一个数组，那么JSON.stringify()返回的结果只会包含该数组中列出的对象属性。
比如下面的例子：
  let book = {
    title: "Professional JavaScript",
    authors: [
      "Nicholas C. Zakas",
      "Matt Frisbie"
    ],
    edition: 4,
    year: 2017
  };
  let jsonText = JSON.stringify(book, ["title", "edition"]);

JSON字符串中只会包含这两个属性：
{"title":"Professional JavaScript","edition":4}

如果第二个参数是一个函数，则行为又有不同。提供的函数接收两
个参数：属性名（key）和属性值（value）。下面看一个栗子：
    let book = {
    title: "Professional JavaScript",
    authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
    ],
    edition: 4,
    year: 2017
    };
    let jsonText = JSON.stringify(book, (key, value) => {
    switch(key) {
    case "authors":
    return value.join(",")
    case "year":
    return 5000;
    case "edition":
    return undefined;
    default:
    return value;  //第一次调用其实key等于""
    }
    });

最终得到的JSON字符串是这样的：
{"title":"Professional JavaScript","authors":"Nicholas C. Zakas,Matt
Frisbie","year":5000}
JSON.stringify()方法的第三个参数控制缩进和空格，在这个参数是数值时，表示每一级缩进的空格数。
例如，每级缩进4个空格，可以这样：
let book = {
title: "Professional JavaScript",
authors: [
"Nicholas C. Zakas",
"Matt Frisbie"
],
edition: 4,
year: 2017
};
let jsonText = JSON.stringify(book, null, 4);
这样得到的jsonText格式如下：
{
    "title": "Professional JavaScript",
    "authors": [
        "Nicholas C. Zakas",
        "Matt Frisbie"
    ],
    "edition": 4,
    "year": 2017
}
注意，除了缩进，JSON.stringify()方法还为方便阅读插入了换行符。这个行为对于所有有效的缩进参数
都会发生。（只缩进不换行也没什么用。）最大缩进值为10，大于10的值会自动设置为10。
```

#### JSON.parse()

 JSON.parse()方法也可以接收一个额外的参数，这个函数会针对每个键/ 值对都调用一次。为区别于传给JSON.stringify()的起过滤作用的替代 函数（replacer），这个函数被称为还原函数（reviver）。实际上它们的 格式完全一样，即还原函数也接收两个参数，属性名（key）和属性值 （value），另外也需要返回值。 如果还原函数返回undefined，则结果中就会删除相应的键。如果返回 了其他任何值，则该值就会成为相应键的值插入到结果中。还原函数经 常被用于把日期字符串转换为Date对象。例如：  

```javascript
let book = {
title: "Professional JavaScript",
authors: [
"Nicholas C. Zakas",
"Matt Frisbie"
],
edition: 4,
year: 2017,
releaseDate: new Date(2017, 11, 1)
};
let jsonText = JSON.stringify(book);
let bookCopy = JSON.parse(jsonText,
(key, value) => key == "releaseDate" ? new Date(value) : value);
alert(bookCopy.releaseDate.getFullYear());

以上代码在book对象中增加了releaseDate属性，是一个Date对象。这个
对象在被序列化为JSON字符串后，又被重新解析为一个对
象bookCopy。这里的还原函数会查找"releaseDate"键，如果找到就会根
据它的日期字符串创建新的Date对象。得到的bookCopy.releaseDate属
性又变回了Date对象，因此可以调用其getFullYear()方法。
```