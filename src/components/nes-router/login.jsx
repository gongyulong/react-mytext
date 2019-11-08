import React, { Component } from 'react'

import Style from './Login.module.css'

class Login extends Component {
    state = {
        username:'admin',
        password:'123'
    }

    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const {username,password} = this.state
        if(username === 'admin' && password==='123') {
            // console.log(this.props) //{history: {…}, location: {…}, match: {…}, staticContext: undefined}

            // 编程式导航
            this.props.history.push('/layout')
        }
    }
    render () {
        const {username,password} = this.state
        return <div className={Style.loginContainer}>
            用户名:<input type='text'  value={username}  onChange={this.changeValue} name='username'/>
            密码：<input type='password' value={password} onChange={this.changeValue} name='password'/>
            <button onClick={this.login}>登陆</button>
        </div>
    }
}

export default Login