import {createStore,applyMiddleware,compose} from 'redux'

// 1.0 导入reducer
import reducer from './reducer' 

// 2.0 导入中间件
import thunk from 'redux-thunk'

// 3.0 使用谷歌浏览器redux工具配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 4.0 应用中间件创建仓库
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// 5.0 导出 给组件使用
// 组件可以根据store获取仓库中的值及触发action
export default store
