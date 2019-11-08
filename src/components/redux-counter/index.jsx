import React, { Component } from 'react'

// 导入子组件
import Counter from './Counter'
import Show from './Show'

class Index extends Component {
    render(){
        return <div>
            <Counter />
            <hr />
            <Show />
        </div>
    }
}

export default Index