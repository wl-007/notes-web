---
title:  React进阶
order: 2
group:
  title: React

---

# 一、react进阶

## Hooks

### useState

允许你向组件添加一个 [状态变量](https://zh-hans.react.dev/learn/state-a-components-memory)。

```jsx
const [state, setState] = useState(initialState)
```

```jsx
export function UseStateDemo() {
  const [count, setCount] = useState(() => 0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((c) => c + 1)}>Click me</button>
    </div>
  );
}
```

### useReducer

它允许你向组件里面添加一个 [reducer](https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer)。

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

```jsx
enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

type Action = {
  type: ActionType;
};

type State = {
  count: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
    
export const UseReducerDemo = () => {
  // 因为 useState 不能很好地组织状态
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div onClick={() => dispatch({ type: ActionType.INCREMENT })}>
      Hello, Functional Component Basic!{state.count}
    </div>
  );
};
```

### useEffect

它允许你 [将组件与外部系统同步](https://zh-hans.react.dev/learn/synchronizing-with-effects)。(模拟生命周期)

```JSX
useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      console.log("clean up");
    };
  }, [count]);
```

### useLayoutEffect

类似useEffect,但是在浏览器重新绘制屏幕之前触发

```jsx
useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
```

### useContext

可以让你读取和订阅组件中的 [context](https://zh-hans.react.dev/learn/passing-data-deeply-with-context)  (依赖注入)

```jsx
// 一定要结合 Context
const UserContext = React.createContext({ name: "default",age: 0 });

// 提供者
export const UseContextDemo = () => {
  const [info, setInfo] =useState({ name: "jack",age:18 });
  return (
    <UserContext.Provider value={info}>
      <Child />
    </UserContext.Provider>
  );
};

// 消费者
const Child = () => {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
};
```

### useRef

它能帮助引用一个不需要渲染的值.  ref绑定,或者不引起页面更新的值(挂载到 .current上面)

```jsx
const refsH= useRef(null);

<div>
    <h2 ref={refsH}>Ref 1 Demo</h2>
</div>
```

### useMemo

缓存计算值,计算属性

```jsx
const doubleCount = useMemo(() => {
    console.log("🚀 ~ UseMemoAndCallbackDemo ~ count:", count);
    return count * 2;
  }, [count]);
```

### useCallback

缓存函数

```jsx
const handleClick = useCallback(() => {
    console.log("🚀 ~ handleClick ~ count:", count);
}, [count]);
```

### useImperativeHandle

它能让你自定义由 [ref](https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs) 暴露出来的句柄。(像父组件暴露方法)

```jsx
useImperativeHandle(ref, () => ({
    focusOrSelect: () => {
        inputRef.current;
    },
}));

// 父组件使用方式
<FancyInput ref={inputRef} />
inputRef.current.focusOrSelect()
```

### useId

可以生成传递给无障碍属性的唯一 ID。(服务端客户端统一id)

```jsx
const id = useId();

<div>
    <label htmlFor={id}>Name</label>
    <input id={id} type="text" />
</div>
```

### useTransition

在不阻塞 UI 的情况下更新状态的 React Hook。

```jsx
const handleClick = () => {
    startTransition(() => {
  	  // 此过程不阻塞ui
      setCount((c) => c + 1);
    });
  };
```

### useDeferredValue

可以让你延迟更新 UI 的某些部分。它还会安排一个后台重新渲染。这个后台重新渲染是可以被中断的，如果 `value` 有新的更新，React 会从头开始重新启动后台渲染

```jsx
const [text, setText] = useState("");
const deferredText = useDeferredValue(text);

 <div>
    <input type="text" value={text} onChange={handleChange} />
    <p>{deferredText}</p>
    <p>{text}</p>
</div>
```

### useSyncExternalStore

是一个让你订阅外部 store 的 React Hook。

```jsx
function useWindowWidth() {
  return useSyncExternalStore(
    (cb) => {

      window.addEventListener("resize", cb);
      return () => window.removeEventListener("resize", cb);
    },
    () => window.innerWidth,
    () => window.innerWidth
  );
}

const width = useWindowWidth();
<div>
      Window width: {width}
</div>
```

## 进阶特性

### ref的函数形式

```tsx
interface Refs {
  c1?: HTMLHeadingElement | null;
  c2?: HTMLHeadingElement | null;
  c3?: HTMLHeadingElement | null;
}

const refs = useRef<Refs>({});

return (
    <div>
      <h2 ref={(node) => (refs.current.c1 = node)}>Ref 1 Demo</h2>
      <h2 ref={(node) => (refs.current.c2 = node)}>Ref 2 Demo</h2>
      <h2 ref={(node) => (refs.current.c3 = node)}>Ref 3 Demo</h2>
    </div>
  );
```

### forwardRef

允许组件使用 [ref](https://zh-hans.react.dev/learn/manipulating-the-dom-with-refs) 将 DOM 节点暴露给父组件. 这样父组件传递的ref才正确

```jsx
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const id = useId();
  return (
    <div style={{ display: "flex" }}>
      <label htmlFor={id}>children input</label>
      <input id={id} ref={ref} />
    </div>
  );
});
```

### Suspense

允许在子组件完成加载前展示后备方案。

基础用法:

```tsx
const Header = lazy(() =>
  import("./Header").then((module) => ({ default: module.Header }))
);

<Suspense fallback={<div>Loading...</div>}>
    <Header />
</Suspense>
```

### lazy

组件懒加载

```jsx
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

### memo

缓存组件

```tsx
const hasHeaderPropsEqual = (
  prevProps: HeaderProps,
  nextProps: HeaderProps
) => {
  // const isEqual = prevProps === nextProps;
  // shallowEqual
  return true;
};
// hasHeaderPropsEqual 可不穿,默认比较浅层
const Header = memo(() => {
  useEffect(() => {
    console.log("Header rendered");
  });
  return <div>header</div>;
}, hasHeaderPropsEqual);
```

## 状态管理

### useState

```tsx
const getInitialCount = () => {
  const count = localStorage.getItem("count");
  return count ? Number(count) : 0;
};
export const UseStateDemo = () => {
  const [count, setCount] = useState(getInitialCount());

  const handleClick = useCallback(() => {
    setCount( c => c + 1);
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>btn</button>
    </div>
  );
};
```

### useReducer

```tsx
enum ActionType {
  UPDATE_NAME = 'UPDATE_NAME',
  UPDATE_AGE = 'UPDATE_AGE',
}
type Action =
  | { type: ActionType.UPDATE_NAME; payload: string }
  | { type: ActionType.UPDATE_AGE; payload: number };

const reducer = (state: Person, action: Action) => {
  // switch case
  switch (action.type) {
    // 更新名字
    case ActionType.UPDATE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case ActionType.UPDATE_AGE: {
      return {
        ...state,
        age: action.payload,
      };
    }
    default:
      return state;
  }
};

export const UserReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: 'John',
    age: 20,
  });
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.UPDATE_NAME,
            payload: 'wl',
          })
        }
      >
        修改用户名
      </button>
      <button
        onClick={() => {
          dispatch({
            type: ActionType.UPDATE_AGE,
            payload: state.age! + 1,
          });
        }}
      >
        修改用户年龄
      </button>
    </div>
  );
};
```

### useContext

```jsx
import React, { PropsWithChildren, useContext } from "react";

interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

// 建议所有的 Provider 都单独定义
// 形成子组件状态隔离
const ThemeProvider: React.FC<PropsWithChildren<ThemeContextValue>> = ({
  theme,
  setTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 消费方式
const ThemeButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        backgroundColor: theme?.theme === "dark" ? "black" : "white",
        color: theme?.theme === "dark" ? "white" : "black",
      }}
      onClick={() => {
        theme?.setTheme(theme.theme === "dark" ? "light" : "dark");
        locale?.setLocale(locale.locale === "en" ? "zh" : "en");
      }}
    >
      点击我
    </button>
  );
};

export const UseContextDemo = () => {
  const [theme, setTheme] = React.useState("dark");
  const [locale, setLocale] = React.useState("en");
  return (
    <div>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
};
```

### redux（redux-toolkit）

```tsx
type ActionType = "UPDATE_NAME" | "UPDATE_AGE";
// 定义动作
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_AGE = "UPDATE_AGE";

// 创建 reducer
const personReducer = (
  state: Person ={},
  action: { type: ActionType; payload: any }
) => {
  switch (action.type) {
    // 更新名字
    case UPDATE_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case UPDATE_AGE: {
      return {
        ...state,
        age: action.payload,
      };
    }
    default:
      return state;
    // 更新年龄
  }
};

const PriceReducer = (
  state: number =100,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "UPDATE_PRICE":
      return action.payload;
    default:
      return state;
  }
};

// 合并
const reducer = combineReducers({
  person: personReducer,
  price: PriceReducer,
});
const store = createStore(reducer, {
  person: {
    name: "张三",
    age: 18,
  },
  price:200
});

// 使用
const Child = () => {
  const person = useSelector((state) => {
    return state.person
  });
  const dispatch = useDispatch();
  return (
    <div
      onClick={() =>
        dispatch({
          type: UPDATE_NAME,
          payload: "王五" + Math.random(),
        })
      }
    >
      {person.name}
    </div>
  );
};
```

### useSyncExternalStore

定义

```js
// ../lib/redux.js
// 首先我们关注入口函数
// reducer 是用于生成新状态的
// initialState 是初始状态
export function createStore(reducer, initialState) {
  // 初始状态
  // 所有状态都挂载到这个变量上，这也就是我们说的状态树
  // let state = initialState;
  let state = reducer('',{type:''});

  // 注册事件
  const listeners = [];

  // 新状态的生成一定要借助动作
  function dispatch(action) {
    // 为什么说 reducer 是一个纯函数
    state = reducer(state, action);
    // 通知那些订阅了状态更新的事件
    listeners.forEach((listener) => listener());
  }

  // 获取状态
  function getState() {
    return state;
    // return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : null) || initialState
  }

  // 订阅状态更新
  function subscribe(listener) {
    listeners.push(listener);
    // 事件只要有订阅就一定有取消订阅
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}

```

使用

```jsx
import { createStore } from "../lib/redux.js";
const reducer = (action ) => {
  // switch case
  switch (action.type) {
    // 更新名字
    case "UPDATE_NAME": {
      localStorage.setItem("name", action.payload);
      return{
        age:localStorage.getItem("age"),
        name:localStorage.getItem("name")
      }
    }
    case "UPDATE_AGE": {
      localStorage.setItem("age", action.payload);
      return{
        age:localStorage.getItem("age"),
        name:localStorage.getItem("name")
      }
    }
    default:
      return {
        age:localStorage.getItem("age"),
        name:localStorage.getItem("name")
      };
  }
};
const store = createStore(reducer,{name:"",age:""});
const { dispatch, getState, subscribe } = store;
export const CustomReduxDemo = () => {
  const state = useSyncExternalStore(subscribe, getState, getState);
  
  return (
    <div>
      custom redux demo{state.name}----{state.age}
      <button
        onClick={() => dispatch({ type: "UPDATE_NAME", payload: "Heyi" })}
      >
        变更姓名
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_AGE", payload: 28 })}>
        变更年龄
      </button>
    </div>
  );
};
```

### 其他集中状态方案

#### zustand

一个小型、快速、可扩展的基本状态管理解决方案，轻量简单、适合中小型

#### Jotai 

Jotai 采用 Atom 风格的方式进行全局的 React 状态管理。

## React router

```jsx

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        children: [
            {
                path: "team",
                element: <Team />,
                loader: teamLoader,
            },
        ],
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={<p>页面加载中...</p>}>
	  <RouterProvider router={router} />
    </Suspense>
);

export const ReactRouterDemo = () => {
  return <RouterProvider router={router} />;
};
```

### 其他路由方案

#### @tanstack/router

一个适用于 JS/TS, React, Solid, Vue 以及Svelte 的前端路由库，具有类型安全、内置缓存、URL状态管理,约定式路由等特色。

#### wouter

Wouter 是一个轻量级的 React 和 Preact 应用路由库，它依赖于 Hooks 来实现路由功能。相比于 React Router，Wouter 更加轻量，仅 2.1 KB gzipped，非常适合需要快速加载和简洁代码的项目。

### 

# End







