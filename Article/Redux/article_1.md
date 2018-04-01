# Redux 个人笔记

## 核心概念

* 所有状态都放在*Store*中。组件每次重新渲染，都必须是由状态的变化引起。
* 用户在 UI 上触发*action*
* *reducer*函数接收*action*,然后根据当前的*state*,计算出新的*state*

## 动机

* Redux 试图让*state*的变化变得可预测

## 生命周期

* Action 是一个描述“发生了什么”的普通对象。例如：

```js
{ type: 'LINK_ARTICLE',articleId: 42}
{ type: 'FETCH_USER_SUCCESS', response: {id: 3, name: 'Mary} }
{ type: 'ADD_TODO', text: 'Read the Redux docs.' }
```

> 可以把*action*理解成一个动作的描述。如：“任务列表增加学习 Redux” 或者 “今晚看 anone”
> 可以再任何地方电泳 store.dispatch(action),包括组件、XHR 回调中、甚至定时器中。

* Store 会把两个当前的*state* 树和 *action*这两个参数传入*reducer*中。例如，在这个 *todo*应用中，根 *reducer*可能接受这样的数据：

```js
// 当前应用的state (todos列表和选中的过滤器)
let previousState = {
  visibleTodoFilter: "SHOW_ALL",
  todos: [
    {
      text: "Read the docs.",
      complete: false
    }
  ]
};

// 将要执行的action(添加一个todo)
let action = {
  type: "ADD_TODO",
  text: "Understand the flow"
};

// render 返回处理后的应用状态
let nextState = todoApp(previousState, action);
```

> reducer 是纯函数。只是用来计算下一个 state。它应该是完全可以预测的：多次传入相同的输入必须产生相同的输出结果。不应该做带有副作用的操作，如 API 调用或者路由跳转等。这些操作都应该再*dispatch(action)* 前发生

根据 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树

* 根*reducer* 的结构完全由自己决定，Redux 原生提供*combineReducers()* 辅助函数，来把根*reducer*拆分成多个函数，用于分别处理*state*树的一个分支

* combineRducers()使用方法

```js
function todos(state = [], action) {
  // 逻辑
  return nextState;
}

function visibleTodoFilter(state = "SHOW_ALL", action) {
  return nextState;
}

let todoApp = combineReducers({
  todos,
  visibleTodoFiler
});
```

## Redux 核心 API

* Redux 核心是一个*store*，这个*store*有 Redux 提供的 createStore(reducers,[initialState])方法生成。要想生成*store*，必须传入*reducers*，同时也可以传入第二个可选参数初始化*initailState*

### createStore

* 使用方法 _const store = createStore(reudcer)_

#### reducer

* reducer 本质上是一个纯函数，函数签名为*reducer(previousState, action) => newState*。*reducer*在处理*action*时候，需传入一个*previousState*参数。*reducer*职责就是根据*previousState*和*action*来计算出行的*newState*

* 使用方法将 reducer 即下面的 todo 作为参数传入 createStore(todo)中

```js
const todo = (state = initialState, action) => {
  switch (action.type) {
    case "XXX":
      return; // 具体逻辑
    case "XXX":
      return; // 具体逻辑
    default:
      return state;
  }
};
```

#### getState()

* 使用方法*getState()*
* 获取*store*中的状态

#### dispatch(action)

* 使用方法*store.dispatch(action)*

#### createStore 的实现

* 包含*getState()*, _dispatch(action)_, _subscribe(listener)_;

```js
const createStore = reducer => {
  let state;
  let list = [];
  const getState = () => {
    return state;
  };

  const dispatch = action => {
    state = reducer(state, action);
    list.forEach(fn => {
      fn();
    });
  };

  const subscribe = fn => {
    list.push(fn);
    return () => {
      list = list.filter(cd => cd != fn);
    };
  };

  return {
    getState,
    subscribe,
    dispatch
  };
};
```

#### combineReducers

逻辑

```js
const combineReducers = reducers => {
  return (state = {}, action) => {
    let newState = {};
    Object.keys(reducers).forEach(key => {
      newState[key] = reducers[key](state[key], action);
    });
    return newState;
  };
};

const combineReducers = reducers => (state = {}, action) =>
  Object.keys(reducers).reduce((newState, key) => {
    newState[key] = reducers[key](state[key], action);
    return newState;
  }, {});
```

### react-redux

* react-redux 库---- 官方提供的 React 绑定
* react-redux,提供一个组件*<Provider />*和一个 API _connect()_，*<Provider />*接受一个*store*作为*props*,它是整个 Redux 应用的顶层组件，而*connect()*提供了再整个 React 应用的任意组件中获取*store*中数据的功能

#### Provider

* 用来包裹整个 Redux 的应用
* _<Provider />_ 主要源码

```js
export default class Provider extends Component {
  getChildContext() {
    return { store: this.state };
  }

  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }

  render() {
    return Children.only(this.props.children);
  }
}
```

* 用法

```js
ReactDom.render(
    <Provider store= {sotre}>
        <App />
    <Provider />,
    document.getElementById("root")
)
```

#### connect
- 使用方法*connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(TodoApp)*
- 前四个参数是选填属性，根据需求填入即可。*connect(...)*调用后会返回一个函数,这个函数可传入你需要绑定的组件。

