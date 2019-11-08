import React, {Component} from 'react'

import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

// 导入子组件
import NewList from './newList'
import FoodList from './foodList'
import NoFound from './nofound'
import NewsDetail from './newsdetail'

class IndexRouter extends Component {
    render() {
        return <Router>
            <div>
                {/* 路由跳转 */}
                <p>
                    <Link to='./newList'>新闻列表</Link>&nbsp;&nbsp;
                    <Link to='./foodList'>食品列表</Link>
                </p>

                {/* 路由规则 */}
                <div>
                    <Switch>
                        {/* 新闻列表路由 */}
                        <Route path='/newList'>
                            <NewList />
                        </Route>

                        {/* 食物列表路由 */}
                        <Route path='/foodList'>
                            <FoodList />
                        </Route>

                        {/* 新闻详情 */}
                        {/* 错误写法 无法打印props值*/}
                        {/* <Route path='/newsdetail'>
                            <NewsDetail />
                        </Route> */}
                        {/* query方式 */}
                        {/* <Route path="/newsdetail" component={NewsDetail}/> */}

                        {/* params 方式 */}
                        <Route path="/newsdetail/:id" component={NewsDetail}/>

                        {/* 重定向  exact 精确路径*/}
                        <Redirect exact from='/' to='/newList'/>
                        
                        {/* 404 一定要放在最后 */}
                        <Route>
                            <NoFound />
                        </Route>
                    </Switch>
                </div>
            </div>

        </Router>
    }
}

export default IndexRouter