import React, { Component } from 'react'

import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

// 导入子组件
import Login from './login'
import Layout from './layout'


class Index extends Component {
    render() {
        return <Router>
            <div>
                {/* 路由跳转 */}
                <p>
                    <Link to='./login'>登陆</Link>&nbsp;&nbsp;
                    <Link to='./layout'>布局</Link>
                </p>

                {/* 路由规则 */}
                <div>
                    <Switch>
                        {/* 登陆路由 */}
                        <Route path="/login" component={Login}/>

                        {/* 布局路由 */}
                        <Route path="/layout" component={Layout}/>

                        {/* 重定向 */}
                        <Redirect exact from='/' to='/login'/>
                    </Switch>
                </div>
            </div>

        </Router>
    }
}

export default Index