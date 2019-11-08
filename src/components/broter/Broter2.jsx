import React,{Component} from 'react'
import bus from './bus'

export default class Broter2 extends Component{
    state = {
        name: '',
        age: ''
    } 
    // 组件挂载完毕之后，只会执行一次
    // 注册监听on只执行一次， 回调函数可能会执行多次
    componentDidMount () {
        bus.on('myEvent',data => {

            this.setState({
                name: data.name,
                age: data.age
            })
        })
    }
    render() { 
        const {name,age}=this.state
        return <div>
            <div>兄弟2</div>
            {name}{age}
        </div>
        
    }
}