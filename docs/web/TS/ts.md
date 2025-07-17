---
title:  ts
order: 1
group:
  title: ts
---
# TS 环境搭建

 TypeScript，是 JavaScript 的超集，可以简单理解为 TS 是 JS 的升级版。

## 一、搭建 TS 环境

### 1、全局安装 TS

```bash
npm i -g typescript
```

### 2、查看 TS 版本号

```bash
tsc -v
```

### 3、编写 TS 代码

创建一个以 `.ts` 为结尾的文件，在该文件中可以编写 JS 代码：

```js
var a = 1;
console.log(a);
let b = 2;
console.log(b);
```

## 二、编译转换 TS

### 1、手动编译

```bash
tsc 文件名.ts
```

### 2、自动编译

#### 1）生成配置文件

将终端定位到当前目录，执行以下命令，在当前目录中生成配置文件：

```bash
tsc --init
```

#### 2）更改 JS 的存储路径

在配置文件中，找到 `outDir` 属性，将编译后的 JS 文件的存储路径，设置为 `./js` 文件夹路径：

```json
{
     "outDir": "./js", 
}
```

#### 3）启动监视器

【终端】-【运行任务】-【typescript】-【监视 tsconfig.json】

# 数据类型

## 一、定义变量

```js
var a: number = 1;
```

在 TS 中，定义变量时，需要通过 `:数据类型` 来约束变量的数据类型。

但是大部分时候，TS 都可以帮我们去做自动的类型推导，所以有些代码是可以不写类型约束的。

## 二、数据类型

### 1、基础数据（!）

- 数字 number
- 字符串 string
- 布尔值 boolean
- 空值 null
- 未定义 undefined

```ts
var a: number = 1;
let b: string = 'hello';
const c: boolean = true;
let d: undefined = undefined;
let e: null = null;
```

### 2、数组（!）

TS 中，要求数组中所有元素，必须是同一个数据类型。

```ts
const arr: number[] = [1, 2, 3];
```

### 3、对象（!）

在 TS 中，对象的类型约束，需要将键和值全部一一对应：

```ts
let student: { name: string, age: number } = {
    name: '张三',
    age: 20
}
```

如果对象中的某一些属性，可有可无，可以通过 `?:` 形式来设置可选属性：

```ts
let student: { name: string, age: number, gender?: string } = {
    name: '张三',
    age: 20
}
```

### 4、any（!） 和 unknown

any 和 unknown 都可以以用来表示任意数据类型。

any 和 unknown 的区别在于，any 可以赋值给其他任意类型，但是 unknown 只能赋值给 any 和 unknown。

```ts
var a: number = 1;
let b: string = 'hello';

let f: any = "1";
let g: unknown = 1;

a = f;
b = g;  // 报错
```

### 5、元组

元组，类似数组。它和数组不同的地方在于，元组中可以保存不同类型的数据。

```ts
let i: [number, number, string] = [1, 2, "3"];
```

元组中的数据类型，必须按照位置一一对应，每一个元素都需要设置对应的数据类型。

### 6、枚举（!） enum

枚举的作用，就是用来对数据中的一些“魔鬼数字”来进行标记，给所有的数字定义一个对应含义的英文单词。

```ts
enum GoodState {
    unsale = 0,
    sale = 1,
}

const goodItem: { name: string, state: GoodState } = {
    name: '苹果',
    state: GoodState.sale
}
```

枚举中的数字可以省略不写，默认从 0 开始递增：

```ts
enum GoodState {
    unsale,
    sale
}
```

### 7、void（!）

没有任何类型。通常用来约束函数返回值的类型。

```ts
function foo(): void {

}
```

### 8、never

表示永不存在的值的类型，通常当程序报错时，抛出的报错就是 never 类型。

# 函数

在 TS 中，我们需要对函数的参数，以及函数的返回值，进行类型约束。

## 一、基本语法

### 1、函数声明式

```ts
function 函数名(形参: 数据类型): 返回值的数据类型 {
    return 返回值;
}
函数名(实参)

```

### 2、函数表达式

```js
const 函数名 = function(形参: 数据类型): 返回值的数据类型 {
    return 返回值;
}
函数名(实参)

```

代码：

```tsx
function foo(x: number, y: string): number {
    return x;
}
foo(1, '2');

```

## 二、函数的参数

### 1、参数的默认值

```ts
function foo(x: number, y: number = 1) {

}

foo(10, 20);

```

参数的默认值，必须放在所有的形参最后。

### 2、可选参数

```ts
const bar = (x: number, y?: number) => {

}

bar(1, 2);

```

可选参数，必须放在所有的形参最后。

### 3、不定（rest）参数

```ts
const bar = (x: number, ...rest: number[]) => {
    console.log(rest);  // [2, 3, 4]

}

bar(1, 2, 3, 4)

```

不定（rest）参数，必须放在所有的形参最后。

## 三、函数类型（扩展）

```tsx
const foo: (x: number, y: number) => number = (x, y) => {
    return x + y;
}

```

# 联合类型和类型别名

## 一、联合类型

### 1、基本语法

```ts
类型一 | 类型二 | 类型三

```

### 2、示例代码

```tsx
const arr: (number | string)[] = [1, 2, '3'];
let a: number | string = "10";

```



## 交叉类型

```TypeScript
type NameProtocal = {name: string}
type PersonLikeProtocal = {age: number; say: () => void}

type Student = NameProtocal & PersonLikeProtocal
```

## 二、类型别名

类型别名，是对一个已有的类型取一个新的名字。

### 1、基础语法

```ts
type 新名字 = 类型

```

### 2、示例代码

```ts
type NsType = number | string;

const arr: NsType[] = [1, 2, '3'];

let a: NsType = "10";

function bar(x: NsType) {

}

```

# 类型断言

## 一、基础语法

```ts
值 as 类型;
<类型>值;

```

## 二、代码示例

```tsx
const arr = [1, 2, 3, 4];

// const result: number = <number>arr.find(item => item >= 3);
const result: number = arr.find(item => item >= 3) as number;

```

# 接口

## 一、基础语法

```ts
interface 接口名 {
    属性名: 数据类型;
    属性名: 数据类型;
    // ...
}

```

示例代码：

```ts
interface Person {
    name: string;
    age: number;
    gender: string
}

const student: Person = {
    name: '张三',
    age: 20,
    gender: '男'
}

```

## 二、可选属性

```ts
interface Person {
    name: string;
    age: number;
    gender?: string
}

```

## 三、只读属性

```ts
interface Person {
    readonly id: number;
    name: string;
    age: number;
    gender?: string
}

```

## 四、接口中使用接口

在一个接口中，可以使用其他接口，也可以当前接口自身。

```ts
interface MenuItem {
    title: string,
    path: string,
    children?: MenuItem[]
}

const menusData: MenuItem[] = [
    {
        title: '首页',
        path: '/home'
    },
    {
        title: '用户管理',
        path: '/users',
        children: [
            {
                title: '用户列表',
                path: '/users/list'
            },
            {
                title: '新增用户',
                path: '/users/add'
            }
        ]
    }
]

```

# 泛型

## 一、泛型和函数

### 1、基本语法

```ts
function 函数名<泛型变量>(参数名: 泛型变量): 泛型变量 {
    
}
函数名<数据类型>(实参)

```

示例代码：

```ts
function bar<T>(x: T, y: T): T {
    return x;
}

bar(1, 2);
bar<string>('1', '2');
bar<boolean>(true, false);


```

### 2、多个泛型变量

```ts
function bar<T, K>(x: T, y: K) {
    
}
bar<number, string>(1, 'hello');

```

## 二、泛型和接口

### 1、基础语法

```ts
interface 接口名<泛型变量> {
    属性名: 数据类型;
    属性名: 泛型变量;
}

```

示例代码：

```ts
interface Person<T> {
    name: string;
    age: T
}

const student: Person<number> = {
    name: '张三',
    age: 20,
}

const teacher: Person<string> = {
    name: '张三',
    age: '20',
}

```

## 类型体操

### extends 的重要性

通常除了 extends，还有几个关键字非常常用，分别是：keyof、typeof

用于类型推导

```TypeScript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface A {
    name: string;
    age: number;
    sex: number;
}

type A1 = Pick<A, 'name'|'age'>
```

用于类型约束

```TypeScript
type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
```

### Infer

#### 获取函数参数类型

有没有想过，假如我们定义了一个函数，此刻我们想获取参数的类型，怎么做？

```TypeScript
type ParamType<T> = T extends (arg: infer P) => any ? P : T;
```

使用

```TypeScript
interface User {
  name: string;
  age: number;
}

type Func = (user: User) => void;

type Param = ParamType<Func>; // Param = User
type AA = ParamType<string>; // string
```

#### 获取函数返回值

```TypeScript
type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
```

### 类型守卫与类型保护

类型守卫可以简单理解为通过类型判断或者类型中某个属性是否满足从而推导对应类型。

比如判断一个类型是否是预期

```TypeScript
const dom = document.querySelector('dom')

dom?.addEventListener('mousedown', (ev) => {
    const t = ev.target

    // 类型守卫
    if (t instanceof HTMLDivElement) {
        t.classList.add('active')
    }
}, false)
```

**类型保护**是在类型守卫基础上，将类型的判断约束进行封装，在使用的位置通过调用对应方法进行判断来处理。

```TypeScript
function isHTMLElement(e:EventTarget | null):e is HTMLElement {
    return e instanceof HTMLElement
}
```

### extends条件类型

```js
type IDType = number | string

// 判断number是否是extendsIDType
// const res = 2 > 3? true: false
type ResType = boolean extends IDType? true: false

// 举个栗子: 函数的重载
// function sum(num1: number, num2: number): number
// function sum(num1: string, num2: string): string

// 错误的做法: 类型扩大化
// function sum(num1: string|number, num2: string|number): string

function sum<T extends number | string>(num1: T, num2: T): T extends number? number:string
function sum(num1, num2) {
  return num1 + num2
}

const res = sum(20, 30)
const res2 = sum("abc", "cba")
// const res3 = sum(123, "cba")

export {}
```

### infer类型推断

```js
type CalcFnType = (num1: number, num2: string) => number

function foo() {
  return "abc"
}

// 总结类型体操题目: MyReturnType
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R? R: never

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) => any? A: never


// 获取一个函数的返回值类型: 内置工具
type CalcReturnType = MyReturnType<CalcFnType>
type FooReturnType = MyReturnType<typeof foo>
// type FooReturnType2 = MyReturnType<boolean>

type CalcParameterType = MyParameters<CalcFnType>

export {}
```

### 类型分发

```js
type toArray<T> = T extends any? T[]: never

// number[]|string[]

type NumArray = toArray<number>
// number[]|string[] 而不是 (number|string)[]
type NumAndStrArray = toArray<number|string>

```

### 可选

```ts
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type MyPartial<T> = {
  [P in keyof T]?: T[P] 
}


// IKun都变成可选的
type IKunOptional = MyPartial<IKun>

export {}

```

### 必选

```ts
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type MyRequired<T> = {
  [P in keyof T]-?: T[P] 
}


// IKun都变成可选的
type IKun2 = Required<IKun>


export {}

```

### 只读

```ts
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P] 
}


// IKun都变成可选的
type IKun2 = MyReadonly<IKun>

export {}

```

### Record

```ts
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
// name | age | slogan
type keys = keyof IKun
type Res = keyof any // => number|string|symbol

// 确实keys一定是可以作为key的联合类型
type MyRecord<Keys extends keyof any, T> = {
  [P in Keys]: T
}


// IKun都变成可选的
type t1 = "上海" | "北京" | "洛杉矶"
type IKuns = Record<t1, IKun>

const ikuns: IKuns = {
  "上海": {
    name: "xxx",
    age: 10
  },
  "北京": {
    name: "yyy",
    age: 5
  },
  "洛杉矶": {
    name: "zzz",
    age: 3
  }
}

export {}

```

### Pick选择(对象)

```ts
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 确实keys一定是可以作为key的联合类型
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// IKun都变成可选的
type IKuns = Pick<IKun, "slogan"|"name">


export {}

```

### Omit去除(对象)

```ts
interface IKun {
  name: string
  age: number
  slogan?: string
}

// 确实keys一定是可以作为key的联合类型
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never: P]: T[P]
}

// IKun都变成可选的
type IKuns = Omit<IKun, "slogan"|"name">


export {}

```

### Exclude去除

```ts
type IKun = "sing" | "dance" | "rap"

// 确实keys一定是可以作为key的联合类型
type MyExclude<T, E> = T extends E? never: T

// IKun都变成可选的
type IKuns = Exclude<IKun, "rap">

export {}
```

### Extract提取

```ts
type IKun = "sing" | "dance" | "rap"

// 确实keys一定是可以作为key的联合类型
type MyExtract<T, E> = T extends E? T: never

// IKun都变成可选的
type IKuns = Extract<IKun, "rap"|"dance">


export {}

```

### InstanceType获取类型

```ts
class Person {}
class Dog {}


// 类型体操
type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R? R: never


const p1: Person = new Person()

// typeof Person: 构造函数具体的类型
// InstanceType构造函数创建出来的实例对象的类型
type MyPerson = InstanceType<typeof Person>
const p2: MyPerson = new Person()


// 构造函数的例子
// 通过的创建实例的工具函数时会用到这个InstanceType
function factory<T extends new (...args: any[]) => any>(ctor: T): InstanceType<T> {
  return new ctor()
}

const p3 = factory(Person)
const d = factory(Dog)

```

### 不为空

```ts
type IKun = "sing" | "dance" | "rap" | null | undefined

// 确实keys一定是可以作为key的联合类型
type MyNonNullable<T> = T extends null|undefined ? never: T

// IKun都变成可选的
type IKuns = NonNullable<IKun>

export {}
```



