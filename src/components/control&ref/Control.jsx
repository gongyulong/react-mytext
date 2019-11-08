import React, {Component} from 'react'

class Control extends Component {
    constructor () {
        super()
        this.state = {
            username: 'admin',
            password: '123'
        }
    }

    // 登陆
    login = () => {
        console.log(this.state)
    }

    // 模型 --》 视图（value）
    // 视图 --》 模型（onChange）
    // changeUsername = e => {
    //     // console.log(e.target.value)
    //     this.setState({
    //         username: e.target.value
    //     })
    // }

    // changePassword = e => {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }

    // 受控组件通用复杂写法
    // changeValue = (key, e) => {
    //     this.setState({
    //         [key]: e.target.value
    //     })
    // }


    // 受控组件简化写法
    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                用户名：
                {/* <input  value={this.state.username} onChange={ e => this.changeValue('username', e)}/> */}
                <input  value={this.state.username} onChange={this.changeValue} name='username'/>
                <br/>
                 密 码：
                <input value={this.state.password} onChange={this.changeValue} name='password'/>
                <button onClick={this.login}>登陆</button>
            </div>
        )
    }
}

export default Control