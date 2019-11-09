import React, {Component} from 'react'

// 导入子组件
import GoodsList from './GoodsList'
import ShopCart from './ShopCart'

// 导入connect
import {connect} from 'react-redux'

// 导入redux
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom'


// 导入样式
import Style from './index.module.css'

class Index extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        // 监听窗口的关闭和刷新事件
        window.onbeforeunload = () => {
          
            // 把购物车刷新、关闭之前的最新数据保存到本地
            window.localStorage.setItem('mycart',JSON.stringify(this.props.goodsList))
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
                            <Link to='/ShopCart'>购物车{this.props.count > 0 && `（${this.props.count}）`}</Link>
                        </p>
                    </h2>
                   
                    {/* 路由配置 */}
                    <div>
                        <Switch>
                            <Route path='/GoodsList' component={ GoodsList }/>
                            <Route path='/ShopCart' component={ ShopCart }/>

                            {/* 重定向 */}
                            <Redirect  exact to='/' from='/GoodsList' />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

// state 仓库中最新值，该函数在每次仓库的值发生变化之后调用
const mapStateToProps = state =>{

    // 计算购物车总量
    const calcTotalCount = () => {
        let totalCount = 0

        state.forEach(item => {
            totalCount += item.num
        })

        return totalCount
    }

    // 这个对象就是传递给组件的props
    return {
        count: calcTotalCount(),
        goodsList: state
    }
} 

export default connect(
    mapStateToProps
)(Index);