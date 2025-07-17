---
title:  Vue3进阶
group:
  title: vue
  order: 2

---

# vue3进阶

## Transition

会在一个元素或组件进入和离开 DOM 时应用动画

```vue
<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
```

```css
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
```

## TransitionGroup

是一个内置组件，用于对 `v-for` 列表中的元素或组件的插入、移除和顺序改变添加动画效果

```vue
<TransitionGroup is="ul" name="slide">
      <!-- Vue3 列表渲染 -->
      <li v-for="li in list" :key="li">
        <div>{{ li }}</div>
      </li>
    </TransitionGroup>
```

```css
.slide-active {
  height: 100px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  height: 0;
}
```

## 响应式工具

### isRef

含义：检查一个值是否是一个 ref 对象。

使用场景：在处理混合类型数据时，确保安全地访问 ref 对象的值。示例：

```ts
let foo: unknown
if (isRef(foo)) {
  // foo 的类型被收窄为了 Ref<unknown>
  foo.value
}
```

### unref

如果参数是 ref，则返回内部值，否则返回参数本身。这是 `val = isRef(val) ? val.value : val` 计算的一个语法糖。

```ts
function useFoo(x: number | Ref<number>) {
  const unwrapped = unref(x)
  // unwrapped 现在保证为 number 类型
}
```

### toRef

可以将值、refs 或 getters 规范化为 refs (3.3+)。

```ts
// 按原样返回现有的 ref
toRef(existingRef)

// 创建一个只读的 ref，当访问 .value 时会调用此 getter 函数
toRef(() => props.foo)

// 从非函数的值中创建普通的 ref
// 等同于 ref(1)
toRef(1)
```

### toValue

将值、refs 或 getters 规范化为值。这与 [unref()](https://cn.vuejs.org/api/reactivity-utilities.html#unref) 类似，不同的是此函数也会规范化 getter 函数。如果参数是一个 getter，它将会被调用并且返回它的返回值。

```ts
toValue(1) //       --> 1
toValue(ref(1)) //  --> 1
toValue(() => 1) // --> 1
```

### toRefs

将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref

```ts
const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型：{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// 这个 ref 和源属性已经“链接上了”
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
```

### isProxy

检查一个对象是否是由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive)、[`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly)、[`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 或 [`shallowReadonly()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly) 创建的代理。

```ts
import { reactive, isProxy } from 'vue';
const state = reactive({ count: 0 });
console.log(isProxy(state)); // true
```

### isReactive

查一个对象是否是由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive) 或 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 创建的代理。

### isReadonly

检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。

## 响应式进阶

### shallowRef

[`ref()`](https://cn.vuejs.org/api/reactivity-core.html#ref) 的浅层作用形式

```ts
const state = shallowRef({ count: 1 })

// 不会触发更改
state.value.count = 2

// 会触发更改
state.value = { count: 2 }
```

### triggerRef

强制触发依赖于一个[浅层 ref](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 的副作用，这通常在对浅引用的内部值进行深度变更后使用

```ts
const shallow = shallowRef({
  greet: 'Hello, world'
})

// 触发该副作用第一次应该会打印 "Hello, world"
watchEffect(() => {
  console.log(shallow.value.greet)
})

// 这次变更不应触发副作用，因为这个 ref 是浅层的
shallow.value.greet = 'Hello, universe'

// 打印 "Hello, universe"
triggerRef(shallow)
```

### customRef

创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。

栗子:创建一个防抖 ref，即只在最近一次 set 调用后的一段固定间隔后再调用：

```js
import { customRef } from 'vue'

export function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
```

`````````````````````````````````````````````````````````````````````````````vue
<script setup>
import { useDebouncedRef } from './debouncedRef'
const text = useDebouncedRef('hello')
</script>

<template>
  <input v-model="text" />
</template>
`````````````````````````````````````````````````````````````````````````````

### shallowReactive

[`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive) 的浅层作用形式

```ts
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 更改状态自身的属性是响应式的
state.foo++

// ...但下层嵌套对象不会被转为响应式
isReactive(state.nested) // false

// 不是响应式的
state.nested.bar++
```

### toRaw()

根据一个 Vue 创建的代理返回其原始对象。

```js
const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo) // true
```

### effectScope

创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。对于该 API 的使用细节

```js
const scope = effectScope()

scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count: ', doubled.value))
})

// 处理掉当前作用域内的所有 effect
scope.stop()
```

### getCurrentScope

如果有的话，返回当前活跃的 [effect 作用域](https://cn.vuejs.org/api/reactivity-advanced.html#effectscope)。

```js
import { effectScope, getCurrentScope } from 'vue';
const scope = effectScope();
scope.run(() => {  
    console.log(getCurrentScope() === scope); // true
});
```

### onScopeDispose

当相关的 effect 作用域停止时会调用这个回调函数。

```js
import { effectScope, onScopeDispose } from 'vue';
const scope = effectScope();
scope.run(() => {
  const count = ref(0);
  watchEffect(() => {
    console.log(count.value);
  });
  onScopeDispose(() => {
    console.log('Scope disposed');
  });
});
scope.stop(); // 输出: 'Scope disposed'
```

## 生命周期

### onErrorCaptured

注册一个钩子，在捕获了后代组件传递的错误时调用;

`errorCaptured` 钩子可以通过返回 `false` 来阻止错误继续向上传递。即表示“这个错误已经被处理了，应当被忽略”，它将阻止其他的 `errorCaptured` 钩子或 `app.config.errorHandler` 因这个错误而被调用。

```js
onErrorCaptured((err, vm, info) => {
  console.log("onErrorCaptured", err, vm, info);
  return false;
});
```

### onRenderTracked

注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。

**这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。**

```js
onRenderTracked((event) => {
  console.log("onRenderTracked", event);
});
```

### onRenderTriggered

注册一个调试钩子，当响应式依赖的`变更`触发了组件渲染时调用。

**这个钩子仅在开发模式下可用，且在服务器端渲染期间不会被调用。**

```js
onRenderTriggered((event) => {
  console.log("onRenderTriggered", event);
});
```

## 异步组件

### defineAsyncComponent

定义一个异步组件，它在运行时是懒加载的。

### Suspense

用于协调对组件树中嵌套的异步依赖的处理。

```vue
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AsyncChild = defineAsyncComponent(() => import("./11.AsyncChild.vue"));
</script>

<template>
  <Suspense>
    <template #default>
      <AsyncChild />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped></style>

```

