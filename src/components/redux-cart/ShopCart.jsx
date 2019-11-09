import React, { Component } from 'react'

// 导入store
import store from "./store"

// 导入修改方法
import { updateGoods,asyncDeleteGoods } from './store/actionCreators'

// 导入antd
import { Table, InputNumber, Button, Modal } from "antd"
const { Column } = Table
const { confirm } = Modal


class ShopCart extends Component {
    constructor() {
        super()
        // 添加自定义属性key(antd中用到)
        const storeGoodsList = store.getState()
        storeGoodsList.forEach(item => {
            item.key = item.id
        })

        this.state = {
            // 初始化的时候给goodsList赋值
            goodsList: storeGoodsList
        }
    }
    // 更改商品的数量
    changeNum = (id, num) => {
        // console.log(id,num)
        // 触发修改的action
        store.dispatch(updateGoods({ id, num }))
    }
    // 获取购物车中的数据
    componentDidMount() {
        // 监听仓库中的变化，并且重新给goodsList赋值
        this.unsubscribe = store.subscribe(() => {
          const storeGoodsList = store.getState()
            //  添加自定义属性key(antd中用到) 
          storeGoodsList.forEach(item => {
            item.key = item.id
          })
    
          this.setState({
            goodsList: storeGoodsList
          })
        })
    }

    // 取消监听(解决subscribe 监听后的BUG)
    componentWillUnmount () {
        console.log('----unsubscribe-------')
        this.unsubscribe()
    }

    // 删除
  deleteGoods = id => {
    confirm({
      title: '提示',
      content: '确认删除该商品吗?',
      okText:'确定',
      cancelText:'取消',
      onOk:() => {
        // 触发异步的修改action
        store.dispatch(asyncDeleteGoods(id))
      }
    })
  }

    render() {
        return (
            <div>
                <Table dataSource={this.state.goodsList} pagination={false}>
                    <Column title="名字" dataIndex="name" key="name" />
                    <Column
                        title="图片"
                        dataIndex="url"
                        key="url"
                        render={url => {
                            // eslint-disable-next-line jsx-a11y/alt-text
                            return <img style={{ width: 100, height: 100 }} src={url} />;
                        }}
                    />
                    <Column
                        title="数量"
                        key="num"
                        render={({ id, num }) => {
                            return <InputNumber min={1} defaultValue={num} onChange={data => this.changeNum(id, data)} />;
                        }}
                    />
                    <Column title="单价" dataIndex="price" key="price" />
                    <Column
                        title="总价"
                        key={Math.random()}
                        render={({ num, price }) => {
                            return <span>{num * price}</span>;
                        }}
                    />
                    <Column
                        title="操作"
                        dataIndex="id"
                        key="id"
                        render={id => {
                            return <Button onClick={() => this.deleteGoods(id)} type="danger">删除</Button>;
                        }}
                    />
                </Table>
            </div>
        )
    }
}

export default ShopCart