import React from 'react'
import './App.css'

// 导入子组件
// import FunComponent from './components/FunComponent'
// import ClassComponents from './components/ClassComponents'
// import ClassCount from './components/ClassCount'

// 兄弟组件传参
// import Index from './components/broter'

// 生命周期
// import Index from './components/life'

// 父子&爷孙组件传参
// import Index from './components/grandColor'

// 条件渲染
// import If from './components/if&for/If'

// 列表渲染
// import For from './components/if&for/For'

// 受控组件
// import Control from './components/control&ref/Control'

// 非受控组件
// import Ref from './components/control&ref/Ref'

// 路由
// import IndexRouter from './components/router/index'

// 路由嵌套
// import Index from './components/nes-router/index'

// redux(计数器)
//  import Index from './components/redux-counter/index'

// redux（购物车）
import Index from './components/redux-cart/'



// 回调函数（子传父）
// function getCount(count) {
//   console.log(`父组件App中的${count}`)
// }

function App() {
  // 返回的内容
  return (
    <div className="App">
        {/* 父组件传值子组件 */}
        {/* <FunComponent name='--鲁班' />
        <hr />
        <ClassComponents name='周瑜'/>
        <hr />
        <ClassCount initCount={10}  callBack={ getCount }/>
        <hr />
        <If />
        <hr />
        <For />
        <hr />
        <Control />
        <hr />
        <Ref />
        <hr />
        <IndexRouter />  */}
        <Index />
    </div>
  )
}

export default App
