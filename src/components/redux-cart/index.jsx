import React, {Component} from 'react'

// 导入子组件
import GoodsList from './GoodsList'
import ShopCart from './ShopCart'

// 导入redux
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom'

// 导入store
import store from './store/'

// 导入样式
import Style from './index.module.css'

class Index extends Component {
    constructor() {
        super()
        // 开始进来获取一次
        this.state = {
            count: 0
        }
    }
    // 计算仓库中的总数量
    calcTotalCount = () => {
        let totalCount = 0
        store.getState().forEach(item => {
            totalCount += item.num
        })

        // 把仓库的最新值取出来
        this.setState({
            count: totalCount
        })
    }
    // 监听仓库的变化
    componentDidMount() {
        this.calcTotalCount()

        // 监听仓库的变化
        store.subscribe(() => {
            this.calcTotalCount()
        })

        // 监听窗口的关闭和刷新事件
        window.onbeforeunload = () => {
            // 把购物车刷新、关闭之前的最新数据保存到本地
            window.localStorage.setItem('mycart',JSON.stringify(store.getState()))
        }
    }

    render(){
        return(
            <Router>
                <div>
                    <h2 className={Style.title}>水果批发-商城
                        {/* 路由切换 */}
                        <p className={Style.links}>
                            <Link to='/GoodsList'>商品列表</Link>&nbsp;&nbsp;
                            <Link to='/ShopCart'>购物车{this.state.count > 0 && `（${this.state.count}）`}</Link>
                        </p>
                    </h2>
                   
                    {/* 路由配置 */}
                    <div>
                        <Switch>
                            <Route path='/GoodsList' component={ GoodsList }/>
                            <Route path='/ShopCart' component={ ShopCart }/>

                            {/* 重点向 */}
                            <Redirect  exact to='/' from='/GoodsList' />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Index