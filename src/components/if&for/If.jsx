import React, {Component} from 'react'

// 欢迎页面
function Welcome () {
    return <div>
        欢迎登陆
    </div>
}

// 登陆页面
class Login extends Component {
    render () {
        return <div>
            <form action="">
                用户名：<input /><br/>
                密码<input /><br/>
                <button>登录</button>
            </form>
        </div>
    }
}

// 条件渲染
class If extends Component {
    constructor () {
        super()
        this.state = {
            isLogin: false
        }
    }

    render () {
    //    if (this.state.isLogin) {
    //        return <Welcome />
    //    } else {
    //        return <Login />
    //    }
             
       return <div>
           {/* 三目运算 */}
           {/* {this.state.isLogin ? <Welcome /> : <Login />} */}

           {/* 与运算 */}
           {this.state.isLogin && <Welcome />}
           {this.state.isLogin && <Login />}
        
       </div>
    }

}

export default If