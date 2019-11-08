import React from 'react'
import PropTypes from 'prop-types'

class ClassComponents extends React.Component {
    // 相当于Vue中的data
    constructor (props) {
        super ()
        this.state = {
            message: '亚瑟',
            // name: props.name,
            // age: props.age
        }
        // 获取结果： 同步：返回值 异步：回调函数
    }
    click2 = (message) => {
        // console.log(this)
        this.setState({  // 异步方法
            message
        }, () => {  //该回调函数，等着模型赋值完毕之后，才会执行该回调函数(vue-->$nextTick回调函数)
            console.log(this.state.message)      
        })
    }
    // 这是一个生命周期钩子函数之一
    render (){
        return (
           <div>
                <span>王者剑圣----></span>{this.state.message}
                {/* {this.state.name} */}
                {/* {this.state.age} */}
                <br/>
                {/* 点击修改(箭头函数赋值onClick事件) */}
                <button onClick={() => this.click2('兰陵王')}>点击我更改</button>
           </div>
        )        
    }
}

// 设置检查类
ClassComponents.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

// 设置默认值
ClassComponents.defaultProps = {
    age: 25
}


export default ClassComponents;