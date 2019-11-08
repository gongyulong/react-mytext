import React from 'react'
import PropTypes from 'prop-types'

class ClassCount extends React.Component {
    constructor (props){
        super(props)

        this.state ={
            count:props.initCount
        }
    } 
    // 点击更改子组件ClassCount  count值
    add = () => {
        this.setState({
            count: this.state.count + 1 
        }, ()=> {
            console.log(`子组件中${this.state.count}`)

            // 调用回调函数， 把值传递给父组件
            this.props.callBack(this.state.count)
        })
    }
    render() {
        return (
            <div>
                {this.state.count}<br/>
                <button onClick = {this.add}>点我加加</button>
            </div>
        )
    } 
}

// 类型约束
ClassCount.Prototype = {
    initCount: PropTypes.number.isRequired
}

// 设置默认值
ClassCount.defaultProps = {
    initCount: 100
}

export default ClassCount