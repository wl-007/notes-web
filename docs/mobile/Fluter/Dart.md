---
title: Dart
order: 1
group:
  title: Fluter
---

## Dart介绍

[Dart](https://dart.cn/) 是一个易用、可移植且高效的语言，适用于在全平台开发高质量的应用程序。由谷歌开发的计算机编程语言,它可以被用于web、服务器、移动应用 和物联网等领域的开发.

### Dart环境搭建

```bash
windows(推荐): 
    http://www.gekorm.com/dart-windows/ 
	注意:不是https,如果提示证书有问题，请手动把浏览器中的https改为http,或者联系客服获取Dart Sdk

mac：
    如果mac电脑没有安装brew这个工具首先第一步需要安装它：  https://brew.sh/
    brew tap dart-lang/dart
    brew install dart
```

### VsCode开发配置

1. 找到vscode插件安装dart找到
2. vscode插件安装code runner   Code Runner  可以运行我们的文件

### helloWorld

```dart	
void main() {
  print('Hello, World!');
}
```

main 为入口方法

## 基础语法

### 变量

虽然 Dart 是 [代码类型安全](https://dart.cn/language/type-system) 的语言，你仍然可以用 `var` 来定义变量，而不用显式指定它们的类型。由于其支持类型推断，因此大多数变量的类型会由它们的初始化内容决定

```dart
var str='this is var';
String str='this is var';
int str=123;
```

注意： var 后就不要写类型 ，  写了类型 不要var  两者都写  var  a int  = 5;  报错

#### Dart 常量

**final 和 const修饰符**

- const值不变 一开始就得赋值
- final 可以开始不赋值 只能赋一次 ; 而final不仅有const的编译时常量的特性，最重要的它是运行时常量，并且final是惰性初始化，即在运行时第一次使用前才初始化

```dart
final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';

const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

### 数据类型

```code
/*
Dart中支持以下数据类型：

  常用数据类型：
      Numbers（数值）:
          int
          double
      Strings（字符串）
          String
      Booleans(布尔)
          bool
      List（数组）
          在Dart中，数组是列表对象，所以大多数人只是称它们为列表
      Maps（字典）
          通常来说，Map 是一个键值对相关的对象。 键和值可以是任何类型的对象。每个 键 只出现一次， 而一个值则可以出现多次


  项目中用不到的数据类型 （用不到）：
      Runes 
        Rune是UTF-32编码的字符串。它可以通过文字转换成符号表情或者代表特定的文字。

        main() {
          var clapping = '\u{1f44f}';
          print(clapping);
          print(clapping.codeUnits);
          print(clapping.runes.toList());
        
          Runes input = new Runes(
              '\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}');
          print(new String.fromCharCodes(input));
        }

        
      Symbols
        Symbol对象表示在Dart程序中声明的运算符或标识符。您可能永远不需要使用符号，但它们对于按名称引用标识符的API非常有用，因为缩小会更改标识符名称而不会更改标识符符号。要获取标识符的符号，请使用符号文字，它只是＃后跟标识符：


        在 Dart 中符号用 # 开头来表示，入门阶段不需要了解这东西，可能永远也用不上。
        
        http://dart.goodev.org/guides/libraries/library-tour#dartmirrors---reflection
*/
```

#### 数值类型

```dart
//1、int   必须是整型
int a=123;
a=45;
print(a);


//2、double  既可以是整型 也可是浮点型
double b=23.5;
b=24;
print(b);
```

#### 字符串类型

```dart
var str1="this is str1";
String str2="this is str2";
  print(str1 + str2);  
```

#### 布尔类型

```dart
bool flag1=true;
```

####  List（数组/集合）

```dart
var l1=["张三",20,true];
```

```code
常用属性：
        length          长度
        reversed        翻转
        isEmpty         是否为空
        isNotEmpty      是否不为空
    常用方法：  
        add         增加
        addAll      拼接数组
        indexOf     查找  传入具体值
        remove      删除  传入具体值
        removeAt    删除  传入索引值
        fillRange   修改   
        insert(index,value);            指定位置插入    
        insertAll(index,list)           指定位置插入List
        toList()    其他类型转换成List  
        join()      List转换成字符串
        split()     字符串转化成List
        filled(3, a)  创建长度为3的数组, 用a填充
        forEach   
        map
        where
        any
        every
```

过滤数组

```dart
List myList=[1,3,4,5,7,8,9];
var newList=myList.where((value){
    return value>5;
});
print(newList.toList());
```

#### Set

Set是没有顺序且不能重复的集合，所以不能通过索引去获取值.

用它最主要的功能就是去除数组重复内容

```dart
List myList=['香蕉','苹果','西瓜','香蕉','苹果','香蕉','苹果'];
var s=new Set();
s.addAll(myList);
print(s);
print(s.toList());
```



#### Maps（字典）  

```dart
var person={
      "name":"张三",
      "age":20,
      "work":["程序员","送外卖"]
    };
print(person);
print(person["name"]);
print(person["age"]);
print(person["work"]);
```

```code
常用属性：
        keys            获取所有的key值
        values          获取所有的value值
        isEmpty         是否为空
        isNotEmpty      是否不为空
    常用方法:
        remove(key)     删除指定key的数据
        addAll({...})   合并映射  给映射内增加属性
        containsValue   查看映射内的值  返回true/false
        forEach   
        map
        where
        any
        every
```



#### 判断数据类型   

is 关键词来判断类型

```dart
var str=123;
if(str is String){
    print('是string类型');
}else if(str is int){
    print('int');
}else{
    print('其他类型');
}
```

#### 类型转换

##### Number与String类型之间的转换

```dart
/// Number类型转换成String类型 toString()
var myNum=12;
var str=myNum.toString();
print(str is String);

// String类型转成Number类型  int.parse()
String price='12';
var myNum=double.parse(price);
print(myNum);
print(myNum is double);
```



### 运算符

#### 算术运算符

```dart
+    -    *    /     ~/ (取整)     %（取余）
```

#### 关系运算符

```dart
==    ！=   >    <    >=    <=
```

#### 逻辑运算符

&& 不存在JS中的短路逻辑

```dart
// !  &&   ||
    
  bool flag=false;
  print(!flag);   //取反
----------
int age=20;
  String sex="女";
  if(age==20 && sex=="女"){
    print("$age --- $sex");
  }else{
    print("不打印");
  }

-----------
int age=23;
  String sex="女";
  if(age==20 || sex=="女"){
    print("$age --- $sex");
  }else{
    print("不打印");
  }
```

#### 赋值运算符

```dart
//基础赋值运算符   =   ??=
//复合赋值运算符   +=  -=  *=   /=   %=  ~/=
    
b??=23;  // 表示如果b为空的话把 23赋值给b
a = b ?? 23; // 兜底 23
```

#### 三目运算符

```dart
bool flag=false;
String c=flag?'我是true':'我是false';
print(c);
```

#### 自运算

```dart
// ++  --   表示自增 自减
// 在赋值运算里面 如果++ -- 写在前面 这时候先运算 再赋值，如果++ --写在后面 先赋值后运行运算
```

### 条件控制语句

#### if

```DART
 bool flag=true;
if(flag){
    print('true');
}else{
    print('false');
}
```

#### switch

```dart
var sex="女";
switch(sex){
    case "男":
        print('性别是男');
        break;
    case "女":
        print('性别是女');
        print('性别是女');
        break;
    default:
        print('传入参数错误');
        break;
}
```



#### for

```dart
for (int i = 1; i<=100; i++) {   
    print(i);
}
```

#### while

```dart
int i=1;
while(i<=10){
    print(i);
    i++;
}
```

#### 跳出

break   continue  , 同 JS java



## 函数

```code
内置方法/函数：

print();

自定义方法：
自定义方法的基本格式：

返回类型  方法名称（参数1，参数2,...）{
    方法体
    return 返回值;
}
```

```dart
void printInfo(){
  print('我是一个自定义方法');
}

int getNum(){
  var myNum=123;
  return myNum;
}

String printUserInfo(){
  return 'this is str';
}


List getList(){
  return ['111','2222','333'];
}
```

### 带参数

```dart
int sumNum(int n){
    var sum=0;
    for(var i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
} 

var n1=sumNum(5);
print(n1);
var n2=sumNum(100);
print(n2);
```

### 参数默认值

```dart
String printUserInfo(String username, [String sex = '男', int age = 0]) {
    if (age != 0) {
      return "姓名:$username---性别:$sex--年龄:$age";
    }
    return "姓名:$username---性别:$sex--年龄保密";
  }

  print(printUserInfo('张三'));
  print(printUserInfo('小李', '女'));
  print(printUserInfo('小李', '女', 30));
```

### 方法可以作为一个参数

```dart
fn2(fn) {
    fn();
}
```

### 箭头函数

`箭头函数内只能写一条语句`

```dart
// 报错
list.forEach((value)=>{
    print(value);
  });

// 正确 
list.forEach((value)=>print(value));
var newList=list.map((value)=>value>2?value*2:value);

```

### 递归函数

```dart
fn(int n){
    sum+=n;
    if(n==0){
        return;
    }
    fn(n-1);
}
```

### 立即执行函数

```dart
((int n){
    print(n);
    print('我是自执行方法');
})(12);
```

### 闭包

与JS一模一样

```dart
fn() {
    var a = 123; /*不会污染全局   常驻内存*/
    return () {
      a++;
      print(a);
    };
  }
```



## 面向对象OOP

面向对象编程(OOP)的三个基本特征是：封装、继承、多态 ;

Dart所有的东西都是对象，所有的对象都继承自Object类。

### 类的使用

#### 创建类

```dart
class Person{
  String name="张三";
  int age=23;
  void getInfo(){
      // print("$name----$age");
      print("${this.name}----${this.age}");
  }
  void setInfo(int age){
    this.age=age;
  }
}
void main(){
  //实例化
  Person p1=new Person();
  // print(p1.name);
  p1.setInfo(28);
  p1.getInfo();

}
```

#### 默认构造函数

```dart
class Person{
  String name='张三';
  int age=20; 
  //默认构造函数
  Person(){
    print('这是构造函数里面的内容  这个方法在实例化的时候触发');
  }
  void printInfo(){   
    print("${this.name}----${this.age}");
  }
}


class Person{
  late String name;
  late int age; 
  //默认构造函数的简写
  Person(this.name,this.age);
  void printInfo(){   
    print("${this.name}----${this.age}");
  }
}
```

#### 命名构造函数

```dart
class Person {
  late String name;
  late int age;
  //默认构造函数的简写
  Person(this.name, this.age);
  Person.now() {
    print('我是命名构造函数');
  }
  Person.setInfo(String name, int age) {
    this.name = name;
    this.age = age;
  }
  void printInfo() {
    print("${this.name}----${this.age}");
  }
}

void main() {
  Person p1 = new Person.setInfo('李四', 30);
  p1.printInfo();
}
```

#### 私有方法/属性

```dart
//使用 _ 把一个属性或者方法定义成私有。
class Animal{
  late String _name;   //私有属性; 
  //默认构造函数的简写
  Animal(this._name);

  void _run(){
    print('这是一个私有方法');
  }

  execRun(){
    this._run();  //类里面方法的相互调用
  }
}
```

#### get/set

```dart
class Rect{
  num height;
  num width;   
  Rect(this.height,this.width);
  get area{
    return this.height*this.width;
  }
}

void main(){
  Rect r=new Rect(10,2);
  print("面积:${r.area}");      //注意调用直接通过访问属性的方式访问area
}

class Rect{
  late num height;
  late num width;   
  Rect(this.height,this.width);
  get area{
    return this.height*this.width;
  }
  set areaHeight(value){
    this.height=value;
  }
}

void main(){
  Rect r=new Rect(10,4);
  // print("面积:${r.area()}");   
  r.areaHeight=6;
  print(r.area);
}
```

#### 始化实例变量

```dart
// Dart中我们也可以在构造函数体运行之前初始化实例变量
class Rect{
  int height;
  int width;
  Rect():height=2,width=10{    
    print("${this.height}---${this.width}");
  }
  getArea(){
    return this.height*this.width;
  } 
}

class Rect{
  int height = 2;
  int width = 10;
  Rect(){    
    print("${this.height}---${this.width}");
  }
  getArea(){
    return this.height*this.width;
  } 
}

void main(){
  Rect r=new Rect();
  print(r.getArea()); 
   
}
```

#### 静态成员

1. 使用static 关键字来实现类级别的变量和函数
2. 静态方法不能访问非静态成员，非静态方法可以访问静态成员

```dart
class Person {
  static String name = '张三';
  int age=20;  
  static void show() {
    print(name);
  }
  void printInfo(){  /*非静态方法可以访问静态成员以及非静态成员*/
      // print(name);  //访问静态属性
      // print(this.age);  //访问非静态属性
      show();   //调用静态方法
  }
  static void printUserInfo(){//静态方法
        print(name);   //静态属性
        show();        //静态方法
        //print(this.age);     //静态方法没法访问非静态的属性
        // this.printInfo();   //静态方法没法访问非静态的方法
        // printInfo();
  }

}

main(){
  // print(Person.name);
  // Person.show(); 

  // Person p=new Person();
  // p.printInfo(); 

  Person.printUserInfo();
}
```

#### 对象操作符

```code
?     条件运算符 （了解）   https://dart.dev/tools/diagnostic-messages#invalid_null_aware_operator        
as    类型转换
is    类型判断
..    级联操作 （连缀）  (记住)  在同一个对象上连续调用多个方法或设置多个属性，而不需要重复引用该对象
```

```dart
 p?.printInfo(); 

if(p is Person){
    p.name="李四";
    (p as Person).printInfo();
}

// 链式调用
Person p1 = new Person('张三1', 20);
p1.printInfo();
p1
    ..name = "李四"
    ..age = 30
    ..printInfo();
```

### 继承

1、子类使用extends关键词来继承父类

2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数

 3、子类能复写父类的方法 getter和setter



#### 简单继承

```dart
class Person {
  String name='张三';
  num age=20; 
  void printInfo() {
    print("${this.name}---${this.age}");  
  } 
}
class Web extends Person{
}

main(){   
  Web w=new Web();
  print(w.name);
  w.printInfo(); 
}
```

#### super调用父类构造器

```dart
class Person {
  String name;
  num age; 
  Person(this.name,this.age);
  Person.xxx(this.name, this.age); //命名构造器
  void printInfo() {
    print("${this.name}---${this.age}");  
  }
}

class Web extends Person{
  late String sex;
  Web(String name, num age,String sex) : super(name, age){
    this.sex=sex;
  }
  Web(String name, num age, String sex) : super.xxx(name, age) {
    this.sex = sex;
  }
  run(){
   print("${this.name}---${this.age}--${this.sex}");  
  }  
}
```

#### 覆写父类的方法

```dart
class Web extends Person{
  Web(String name, num age) : super(name, age);
  run(){
    print('run');
  }
  //覆写父类的方法
  @override       //可以写也可以不写  建议在覆写父类方法的时候加上 @override 
  void printInfo(){
     print("姓名：${this.name}---年龄：${this.age}"); 
  }
  @override
  work(){
    print("${this.name}的工作是写代码");
  }
}
```

#### 子类调用父类的方法

```dart
class Web extends Person{
  Web(String name, num age) : super(name, age);
  run(){
    print('run');
    super.work();  //子类调用父类的方法
  }
}
```

### 抽象类

#### extends抽象类 和 implements的区别：

 1、如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用extends继承抽象类

 2、如果只是把抽象类当做标准的话我们就用implements实现抽象类

```dart
abstract class Animal{
  eat();   //抽象方法
  run();  //抽象方法  
  printInfo(){
    print('我是一个抽象类里面的普通方法');
  }
}

class Dog extends Animal{
  @override
  eat() {
     print('小狗在吃骨头');
  }

  @override
  run() {
    print('小狗在跑');
  }  
}
```

#### 接口

不写方法体,不初始值的抽象类在dart叫接口

```dart
abstract class Db{   //当做接口   接口：就是约定 、规范
    late String uri;      //数据库的链接地址
    add(String data);
    save();
    delete();
}

class MsSql implements Db{
  @override
  late String uri;
  @override
  add(String data) {
    print('这是mssql的add方法'+data);
  }

  @override
  delete() {
    return null;
  }

  @override
  save() {
    return null;
  }
}
```

#### 泛型

```dart
// 泛型方法 
getData<T>(T value){
      return value;
  }

// 泛型类
class MyList<T> {
  List list = <T>[];
  void add(T value) {
    this.list.add(value);
  }

  List getList() {
    return list;
  }
}

// 泛型接口
abstract class Cache<T> {
  getByKey(String key);
  void setByKey(String key, T value);
}
```

## 库

```code
Dart中的库主要有三种：

    1、我们自定义的库     
          import 'lib/xxx.dart';
    2、系统内置库       
          import 'dart:math';    
          import 'dart:io'; 
          import 'dart:convert';
    3、Pub包管理系统中的库  
        https://pub.dev/packages
        https://pub.flutter-io.cn/packages
        https://pub.dartlang.org/flutter/

        1、需要在自己想项目根目录新建一个pubspec.yaml
        2、在pubspec.yaml文件 然后配置名称 、描述、依赖等信息
        3、然后运行 pub get 获取包下载到本地  
        4、项目中引入库 import 'package:http/http.dart' as http; 看文档使用

```

#### async await

```dart
void main() async{
  var result = await testAsync();
  print(result);
}
```

#### as

```dart
import 'lib/Person1.dart';
import 'lib/Person2.dart' as lib;

main(List<String> args) {
  Person p1=new Person('张三', 20);
  p1.printInfo();


  lib.Person p2=new lib.Person('李四', 20);
  p2.printInfo();

}
```

#### 部分导入

show 只导入需要的部分

```dart
// 只导入 foo
import 'package:lib1/lib1.dart' show foo;
```

hide 排除不要的部分

```dart
// 除了 foo 都导入
import 'package:lib2/lib2.dart' hide foo; 
```

#### 延迟加载

```dart
//懒加载使用deferred as关键字来指定，如下例子所示：

import 'package:deferred/hello.dart' deferred as hello;

//当需要使用的时候，需要使用loadLibrary()方法来加载：

greet() async {
    await hello.loadLibrary();
    hello.printGreeting();
}
```











