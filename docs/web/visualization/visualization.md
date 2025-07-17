---
title:  可视化
order: 1
group:
  title: visualization
---



# Canvs

## Canvas初体验

```html
<canvas id="tutorial" width="300" height="300px">
    你的浏览器不兼容Canvas,请升级您的浏览器!
</canvas>
<script>
    window.onload = function() {
      // 1.拿到canvas的元素对象
      let canvasEl = document.getElementById('tutorial')
      
      if(!canvasEl.getContext){
        return
      }
      // 2.拿到Canvas渲染的上下文
      // ctx: CanvasRenderingContext2D
      // ctx是一个绘图的上下文: 提供了绘图的指令, 可以绘制各种图形( 圆形 直线 椭圆... )
      let ctx = canvasEl.getContext('2d') // 2d | webgl
      console.log(ctx)
    }
  </script>
```

## 矩形

```js
 // 1.绘制了一个填充的矩形
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 100, 50)

// 2.绘制一个边框的矩形
ctx.strokeRect(100, 100, 100, 50)

// 3.清除指定区域的矩形
// ctx.clearRect(0,0, 100, 50)
```

## 路径/直线

```js
// 1.创建一个新的路径
ctx.beginPath()
// 2.使用的绘图的命名(ctx对象中的 属性 和 API)
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
// 3.闭合路径
// ctx.closePath() // 不是必须
// 4.描边或填充
ctx.stroke()  // 绘制线条只能用 stroke填充,不用 fill
```

## 圆

```js
// 1.每个图形都绘制在一个路径中
      // ctx.beginPath()
      // ctx.arc(50, 50, 25, 0, Math.PI * 2, false)
      // ctx.stroke()

      // ctx.beginPath()
      // ctx.arc(150, 150, 25, 0, Math.PI)
      // ctx.stroke()


     
      // 2.在一个路径中绘制多个图形
      ctx.beginPath()
      ctx.arc(50, 50, 25, 0, Math.PI * 2, false)
      ctx.moveTo(175, 150)
      ctx.arc(150, 150, 25, 0, Math.PI)
      // ctx.closePath()
      ctx.stroke()
```

## 颜色

```js
// fillStyle 填充色 ； strokeRect 描边色

ctx.fillStyle = '#cdcdcd'
ctx.fillRect(200, 0, 100, 50)

ctx.strokeStyle = 'blue'
ctx.strokeRect(200, 0, 100, 50)

// 透明度 Transparent
// 方式一：strokeStyle 和 fillStyle属性结合RGBA：
// 方式二 globalAlpha = 0 ~ 1 所有canvas的透明度

ctx.globalAlpha = 0.3

ctx.fillStyle = 'rgba(255, 0, 0, 0.3)'
ctx.fillRect(0,0, 100, 50) // 单位也是不用写 px
```

## 线型

```js
// lineWidth = value： 设置线条宽度
// lineCap = type： 设置线条末端样式。 butt round  square
// lineJoin = type： 设定线条与线条间接合处的样式 round bevel miter

ctx.lineWidth = 10
ctx.lineCap = 'butt' // butt round square
ctx.lineJoin = 'bevel' // miter  round  bevel
```

## 文本

```js
// fillText(text, x, y [, maxWidth])  在 (x,y) 位置，填充指定的文本 绘制的最大宽度（可选）
// strokeText(text, x, y [, maxWidth]) 在 (x,y) 位置，绘制文本边框 绘制的最大宽度（可选）
// font = value： 当前绘制文本的样式。
// textAlign = value：文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start
// textBaseline = value：基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。

ctx.font = '60px sen-serif'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.strokeStyle ="red"
ctx.fillStyle ="red"

// 将字体绘制在 100, 100 这个坐标点
ctx.fillText('Ay', 100, 100)
// ctx.strokeText('Ay', 100, 100)
```

## 图片

```js
// drawImage(image, x, y)
// drawImage(image, x, y, width, height)
// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 其它 8 个参数最好是参照右边的图解，前 4 个
//   是定义图像源的切片位置和大小，后 4 个则是定义切片的目标显示位置和大小
// 1.准备一张图片
var image = new Image()
image.src = '../images/backdrop.png'

image.onload = function() {
    // 2.开始用Canvas来绘制图片
    ctx.drawImage(image, 0, 0, 180, 130)

    // 3.绘制折线
    ctx.beginPath()
    ctx.moveTo(40, 100)
    ctx.lineTo(50, 70)
    ctx.lineTo(60, 90)
    ctx.lineTo(100, 30)
    ctx.lineTo(170, 90)
    ctx.stroke()
}
```

## 会画状态

```js
// save()：保存画布 (canvas) 的所有绘画状态
// restore()：恢复画布 (canvas) 的所有绘画状态

ctx.save()
ctx.fillStyle ='red'
ctx.fillRect(10, 10, 30, 15)
ctx.restore()
```

## translate

```js
// translate(x, y)
 // 1.形变(保存形变之前的状态)
ctx.save()
ctx.translate(100, 100)
ctx.fillRect(0,0, 100, 50) // 单位也是不用写 px
ctx.restore() // 恢复了形变之前的状态( 0,0)

ctx.save() // (保存形变之前的状态)
ctx.translate(100, 100)
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 50, 30)
ctx.restore()
```

## rotate

```js
// rotate(angle)
// 保存形变之前的状态
ctx.save()
// 1.形变
ctx.translate(100, 100)
// 360 -> Math.PI * 2
// 180 -> Math.PI
// 1 -> Math.PI / 180
// 45 -> Math.PI / 180 * 45
ctx.rotate(Math.PI / 180 * 45)
ctx.fillRect(0, 0, 50, 50) 

// ctx.translate(100, 0)
// ctx.fillRect(0, 0, 50, 50)
// 绘图结束(恢复形变之前的状态)
ctx.restore()
```

## scale

```js
//  scale(x, y)
ctx.scale(2, 2) // 对坐标轴进行了放大(2倍)
```

## Canvas动画

Canvas绘图都是通过JavaScript 去操控的，如要实现一些交互性动画是相当容易的;

 Canvas 画出一帧动画的基本步骤（如要画出流畅动画，1s 需绘60帧）

### setInterval

```js
setInterval(function() {
    draw()
}, 1000)
function draw() {
}
```

### requestAnimationFrame

```js
 // 在浏览器下一次重绘之前会回调该函数的回调函数draw
requestAnimationFrame(draw)
 /*
      一秒钟会被回调  61s 次
    */
function draw() {
    let endTime = new Date().getTime()
    if(endTime - startTime > 1000){
        return
    }
    console.log('draw')
    requestAnimationFrame(draw)
}
```

# SVG

优点:扩展好;灵活;可以动画;轻量级;可打印

缺点:SVG 图像变得复杂时，加载会比较慢

## 创建SVG

```html
// js

 <script>
window.onload = function() {
    // 1.创建svg 和 rect 元素
    let xmlns = 'http://www.w3.org/2000/svg'
    let svgEl = document.createElementNS(xmlns, 'svg') 
    let rectEl = document.createElementNS(xmlns, 'rect') 

    // 2.给svg 和 rect 元素对象添加属性
    svgEl.setAttributeNS(null, 'version', '1.0')
    svgEl.setAttributeNS(null, 'width', 100)
    svgEl.setAttributeNS(null, 'height', 100)

    rectEl.setAttributeNS(null, 'width', 50)
    rectEl.setAttributeNS(null, 'height', 50)

    // 3.将svg添加到 body上
    svgEl.appendChild(rectEl)
    document.body.appendChild(svgEl)
}
     </script>

// 直接书写
<!-- 1.创建svg 1.0 -->
  <svg
    version="1.0"
    baseProfile="full"
    width="100"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
  > 
   <rect x="0" y="0" width="100" height="100"></rect>
  </svg>

  <!-- 2.创建svg 2.0 -->
  <svg
    width="100"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
  > 
   <rect x="0" y="0" width="100" height="100"></rect>
  </svg>
```

## 使用SVG

```HTML
 <!-- 在img中直接使用svg -->
<img src="./rect.svg" alt="">

background-image: url(./rect.svg);

// html直接书写
<svg
     width="100"
     height="100"
     xmlns="http://www.w3.org/2000/svg"
     >
    <rect x="0" y="0" width="100" height="100"></rect>
</svg>
```

## 基本图形

```js
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <rect x="0" y="0" width="100" height="50"></rect> // 矩形
 	<circle cx="100" cy="100" r="50" fill="red"></circle>  //圆形
	<path d="M 20 0,L 80 50,L 20 100 Z" fill="transparent" stroke="red"></path> // 路径
	<ellipse cx="100" cy="100" rx="25" ry="50" fill="red"></ellipse> // 椭圆
	<line x1="100" y1="100"  x2="200" y2="100" stroke="red" stroke-width="5"></line> // 直线
	<polyline points="20 0, 80 50, 20, 100" fill="transparent" stroke="red"></polyline> // 折线
	<polygon points="20 0, 80 50, 20 100" fill="transparent" stroke="red"></polygon> // 多边形
</svg>
```

### SVG 路径 和 命令

d属性值支持的命令 

直线命令  M / m：Move To ;L / l ：Line To ;Z / z：Close Path ;H / h：horizontal ;V / v：vertical

曲线命令  C ：三次贝塞尔曲线 ; S：简写三次贝塞尔曲线 ; Q：二次贝塞尔曲线 ; T：简写二次贝塞尔曲线

## 文字

```html
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
   
    <!-- 1.在svg中绘制一个文字 -->
    <!-- <text x="100" y="100" font-size="50" fill="red">Ay</text> -->

    <!-- 2.文本的对齐方式 -->
    <!-- <text x="100" y="100" text-anchor="middle"  font-size="50" fill="red">Ay</text> -->

    <!-- 3.基线对齐方式 :
    有 auto 、middle 或 hanging 值, 默认值：auto
    -->
    <text x="100" y="100" dominant-baseline="middle" font-size="50" fill="red">Ay</text>
    
     <!-- <tspan> 元素用来标记大块文本的子部分，它必须是一个text元素或别的tspan元素的子元素。 -->  
	<text x="40" y="100" font-size="20">
      iPhone14 
      <tspan fill="red">¥100</tspan>
    </text>
</svg>
```

## 图片

```html
<!-- svg 2.0版本的语法 -->
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <image 
           x="0"
           y="0"
           href="../images/googlelogo_color_92x30dp.png"
           width="100"
           height="100"
           >
    </image>
</svg>
```

## 分组

```html
<!-- 
      g 元素没有专有的属性,只有全局的属性
      全局属性:id  class  style fill stroke onclick
     -->
    <g fill="transparent" stroke="red">
      <circle cx="50" cy="50" r="25"></circle>
      <circle cx="80" cy="50" r="25"></circle>
      <circle cx="110" cy="50" r="25"></circle>
      <circle cx="140" cy="50" r="25"></circle>  
    </g>
```

## 复用

```html
// defs
<defs>
    <!-- 0.样式 -->
    <style>
        rect{
            fill: green;
        }
    </style>
    <!-- 1.定义了一个矩形 -->
    <rect id="rectangle"  x="0" y="0" width="100" height="50"></rect>

    <!-- 2.定义了一个组合图形 -->
    <g id="logo" fill="transparent" stroke="red">
        <circle cx="50" cy="50" r="25"></circle>
        <circle cx="80" cy="50" r="25"></circle>
        <circle cx="110" cy="50" r="25"></circle>
        <circle cx="140" cy="50" r="25"></circle>  
    </g>
    <!-- 定义渐变 -->
    <!-- 滤镜 -->
</defs>

<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <!-- 
他的宽和高是没有生效的 ????  只用use引用的图形是 svg 或 symbol 才会起作用
-->
    <use href="#rectangle" width="200" height="100" ></use>
</svg>
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <use href="#logo"></use>
</svg>
```

### 图形元素复用 

symbol

```html
 <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >

     <!-- 1.ICON previous-->
     <symbol id="previous" viewBox="0 0 100 100">
         <path fill="currentColor" d="M 80 0,L 20 50, L 80 100 Z"></path>
     </symbol>

     <!-- 2.ICON next -->
     <symbol id="next" viewBox="0 0 100 100">
         <polygon points="20 0, 80 50, 20 100"></polygon>
     </symbol>

     <!-- 复用 -->
     <!-- <use href="#previous" width="100" height="100"></use> -->
</svg>

<!-- 复用 -->
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <!-- 直接在use上指定ICON的 width和 hegiht -->
    <use href="#previous" width="50" height="50"></use>
</svg>

<!-- 这个属于缩小 -->
<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" >
    <use href="#previous" ></use>
</svg>

<!-- 属于放大 -->
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" >
    <use href="#previous" ></use>
</svg>
```

## 形变-平移

```html
// translate(x, y)函数
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <!-- 1.平移一个元素 -->
    <!-- <rect x="0" y="0" width="100" height="50"
      transform="translate(200, 200)"
    >
    </rect> -->

    <!-- 2.平移一个元素, 在元素的内部会创建一个新的坐标系统 -->
    <!-- <rect 
      transform="translate(100, 100)"
      x="-10" y="-10" width="100" height="50"
    >
    </rect> -->

    <!-- 2.平移一个元素, 在元素的内部会创建一个新的坐标系统 -->
    <g transform="translate(100, 100)">
      <rect 
        x="10" y="10" width="100" height="50"
      >
      </rect>
    </g>

  </svg>
```

## 形变-旋转

```html
//rotate
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <!-- 1.旋转一个元素 -->
    <!-- <rect 
      transform="rotate(45, 50, 25) translate(100, 0)"
      x="0" y="0" width="100" height="50"
    >
    </rect> -->

    <rect 
      transform="translate(100, 0) rotate(45, 50, 25)"
      x="0" y="0" width="100" height="50"
    >
    </rect>

    
  </svg>
```

## 形变-缩放

```html
// scale(x, y)函数
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <!-- 1.缩放一个元素 -->
    <!-- <rect 
      transform="translate(100, 100) scale(1, 2)"
      x="0" y="0" width="100" height="50"
    >
    </rect> -->

    <!-- 2.修改缩放的原点 -->
    <!-- <rect 
      transform="translate(100, 100) scale(2)"
      x="-25" y="-25" width="50" height="50"
    >
    </rect> -->
    
     <!-- 3.修改缩放的原点 -->
     <g  transform="scale(2)">
        <rect
          transform="translate(10, 0)"
          x="0" y="0" width="50" height="50"
        >
        </rect>
     </g>

    
  </svg>
```

# SMIL

SVG 动画元素是基于SMIL实现

## Set元素



```html
// 在3秒后自动将长方形瞬间移到右边
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <rect x="0" y="0" width="100" height="50" fill="red">
        <set
             attributeName ='x'
             to="200"
             begin="3s"
             >
        </set> 
    </rect>
</svg>

// 点击长方形后，长方形瞬间移到右边
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <rect id="rectangle" x="0" y="0" width="100" height="50" fill="green">
        <set
             attributeName ='x'
             to="200"
             begin="rectangle.click"
             >
        </set> 
    </rect>
</svg>
```

## Animate

```html
svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
    <rect x="0" y="0" width="100" height="50" fill="red">
      <!-- 
        1.animate 元素的基本使用
       -->
      <!-- <animate
        attributeName="x"
        form="0"
        to="200"
        dur="3s"
        begin="2s"
        fill="freeze"
      > -->
      <!-- 
        2.animate 元素的基本使用(3个属性时必须的)
       -->
      <animate
        attributeName="x"
        to="200"
        dur="3s"
      >

      </animate>
    </rect>
  </svg>
```

## animateTransform

指定目标元素的形变（transform）属性，从而允许控制元素的平移、旋转、缩放或倾斜动画

```html
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
    <rect x="0" y="0" width="100" height="50" fill="red">
      <animateTransform
        attributeName="transform"
        type="translate"
        from="0, 0"
        to="200, 0"
        dur="2s"
        begin="1s"
        repeatCount="indefinite"
      >
      </animateTransform>
    </rect>
  </svg>
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    <rect x="0" y="0" width="50" height="50" fill="red">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 150 150"
        to="360 150 150"
        dur="20s"
        begin="1s"
        repeatCount="indefinite"
      >
      </animateTransform>
    </rect>
  </svg>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" >
    <rect x="0" y="0" width="100" height="50" fill="red">
      <animateTransform
        attributeName="transform"
        type="scale"
        values="1;0.5"
        dur="2s"
        begin="1s"
        repeatCount="indefinite"
      >
      </animateTransform>
    </rect>
  </svg>

```

## animateMotion

< animateMotion > 定义了一个元素如何沿着运动路径进行移动

```html
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" >
    
    <!-- 1.图形 -->
    <path id="linePath" d="M 0 100, L 100 30, L 200 100, L 300 30" fill="transparent" stroke="red"></path>
    <rect id="rectangle" x="-10" y="-5" width="20" height="10" rx="4" ry="4" fill="red"></rect>


    <!-- 2.动画 -->
    <animateMotion
                   href="#rectangle"
                   dur="5s"
                   rotate="auto"
                   fill="freeze"
                   >
        <mpath href="#linePath"></mpath>
    </animateMotion>
</svg>
```

## GSAP动画库

GSAP 是一个强大的 JavaScript 动画库，可让开发人员轻松的制作各种复杂的动画

## 大屏适配



### rem + font-size

动态设置HTML根字体大小 和 body 字体大小（lib_flexible.js） 

将设计稿的宽（1920）平均分成 24 等份， 每一份为 80px。

- HTML字体大小就设置为 80 px，即1rem = 80px， 24rem = 1920px 
- body字体大小设置为 16px。 
- 安装 cssrem 插件， root font size 设置为 80px。这个是px单位转rem的参考值 ✓ px 转 rem方式：手动、less/scss函数、cssrem插件、webpack插件、Vite插件 
- 接着就可以按照 1920px * 1080px 的设计稿愉快开发，此时的页面已经是响应式，并且宽高比不变。

```js
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      // body 字体大小默认为 16px
      document.body.style.fontSize = 16 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 这里默认平均分成 10 等分(适用移动端)
  // set 1rem = viewWidth / 24 ；（使用pc端）
  function setRemUnit() {
    var rem = docEl.clientWidth / 24;  // 1920 / 24 = 80 
    docEl.style.fontSize = rem + "px"; // 设置 html字体的大小 80px
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);

```

### vw

直接使用vw单位。 

- 屏幕的宽默认为 100vw，那么100vw = 1920px， 1vw = 19.2px 。
- 安装 cssrem 插件， body的宽高（1920px * 1080px）直接把px单位转vw单位 ✓ px 转 vw 方式：手动、less/scss函数、cssrem插件、webpack插件、Vite插件 
- 接着就可以按照 1920px * 1080px 的设计稿愉快开发，此时的页面已经是响应式，并宽高比不变。



### scale

使用CSS3中的scale函数来缩放网页，这里我们将使用两种方案来实现： 

- 方案一：直接根据宽度的比率进行缩放。（宽度比率=网页当前宽 / 设计稿宽）
- 方案二：动态计算网页宽高比，决定是是否按照宽度的比率进行缩放。

```js
<script>

    // 设计稿:  1920 * 1080
    // 目标适配:  1920 * 1080   3840 * 2160 ( 2 * 2 ) ;  7680 * 2160( 4 * 2)

    // 1.设计稿的尺寸
    let targetX = 1920
    let targetY = 1080
    let targetRatio = 16 / 9 // 宽高比率

    // 2.拿到当前设备(浏览器)的宽度
    let currentX = document.documentElement.clientWidth || document.body.clientWidth
    let currentY = document.documentElement.clientHeight || document.body.clientHeight
    //  1920 * 1080  -> 3840 * 2160

    // 3.计算缩放比例
    let scaleRatio = currentX / targetX; // 参照宽度进行缩放 ( 默认情况 )
    let currentRatio = currentX / currentY // 宽高比率

    // 超宽屏
    if(currentRatio > targetRatio) {
      scaleRatio = currentY / targetY // 参照高度进行缩放
      document.body.style = `width:${targetX}px; height:${targetY}px;transform: scale(${scaleRatio}) translateX(-50%); left: 50%`
    } else {
      // 4.开始缩放网页
      document.body.style = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio})`
    }
      
  </script>
```



### scale相比vw和rem的优势

- 优势一：相比于vw 和 rem，使用起来更加简单，不需要对单位进行转换。 
- 优势二：因为不需要对单位进行转换，在使用第三方库时，不需要考虑单位转换问题。 
- 优势三：由于浏览器的字体默认最小是不能小于12px，导致rem或vw无法设置小于12px的字体，缩放没有这个问题。



### 大屏开发 注意事项

1. 字体大小设置问题（非scale方案需要考虑）

   - 如果使用rem或vw单位时，在JS中添加样式时，单位需要手动设置rem或vw。 

   - 第三方库的字体等默认的都是px单位，比如：element、echarts，因此通常需要层叠第三方库的样式。 

   - 当大屏比例更大时，有些字体还需要相应的调整字号。 
2. 图片模糊问题 

   - 切图时切1倍图、2倍图，大屏用大图，小屏用小图。 

   - 建议都使用SVG矢量图，保证放大缩小不会失真。 
3. Echarts 渲染引擎的选择 

   - 使用SVG渲染引擎，SVG图扩展性更好 
4. 动画卡顿优化 
   - 创建新的渲染层、启用GPU加速、善用CSS3形变动画 
   - 少用渐变和高斯模糊、当不需要动画时，及时关闭动画

### postcss-px-to-viewport

单位使用px

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)

- 本质为 移动端 / PC端适配解决方案
- 此方案不会产生黑边,但是有拉伸的感觉

```bash
npm install postcss-px-to-viewport --save-dev

```

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 1920, // 设计稿的视口宽度
      unitPrecision: 5, // 单位转换后保留的精度
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      replace: true, //  是否直接更换属性值，而不添加备用属性
      exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1920 // 横屏时使用的视口宽度
    }
  }
}
```

配置生效后，原有的代码中px在编译阶段被自动实时转换成vw视口单位，DOM元素与视口大小等比例缩放



