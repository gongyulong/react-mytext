import React, { Component } from 'react'

import Style from './Layout.module.css'

import { Link,Route,Redirect,Switch } from 'react-router-dom'

// 2.1 菜单1 组件
class Menu1 extends Component {
    render() {
        return (
            <div style={{color:'red',fontSize:30}}>
                <h3>我是菜单1</h3>
            </div>
        )
    }
}

// 2.2 菜单2 组件
class Menu2 extends Component {
    render() {
        return (
            <div style={{color:'green',fontSize:50}}>
                <h3>我是菜单2</h3>
            </div>
        )
    }
}

// 1.0 布局组件
class Layout extends Component { 
    render() {
        return (
            <div className={Style.layout}>
               
                <div className={Style.left}>
                    {/*  3.0 路由跳转 */}
                    <p>
                        <Link to="/layout/menu1">菜单1</Link>
                    </p>
                    <p>
                        <Link to="/layout/menu2">菜单1</Link>
                    </p>
                </div>
                
                <div className={Style.right}>
                     {/* 3.1 配置嵌套路由规则 */}
                     <Switch>
                         <Route path="/layout/menu1" component={Menu1} />
                         <Route path="/layout/menu2" component={Menu2} />

                         <Redirect exact from="/layout" to="/layout/menu2"/>
                     </Switch>
                </div>
            </div>
        )
    }
}

export default Layout