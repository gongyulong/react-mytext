import React,{Component} from 'react'

import bus from './bus'

export default class Broter1 extends Component{
    sendValue = (name,age) => {
        bus.emit('myEvent',{name,age})
    }

    render() {
        return <div>
            我是兄弟1<br/>
            <button onClick={() => this.sendValue('小白',18)}>传递值给兄弟2</button>
            <button onClick={() => this.sendValue('小欧',16)}>传递值给兄弟2</button>
        </div>
    }
}