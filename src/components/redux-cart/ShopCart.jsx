import React, { Component } from 'react'

// 导入connect
import {connect} from 'react-redux'

// 导入修改方法
import { updateGoods,asyncDeleteGoods } from './store/actionCreators'

// 导入antd
import { Table, InputNumber, Button, Modal } from "antd"
const { Column } = Table
const { confirm } = Modal


class ShopCart extends Component {
  // 删除
  deleteGoods = id => {
    confirm({
      title: '提示',
      content: '确认删除该商品吗?',
      okText:'确定',
      cancelText:'取消',
      onOk:() => {
        this.props.deleteGoods(id)
      }
    })
  }

    render() {
        return (
            <div>
                <Table dataSource={this.props.goodsList} pagination={false}>
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
                            return <InputNumber min={1} defaultValue={num} onChange={data => this.props.changeNum(id, data)} />;
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

//  state 初始化及仓库中的值变化了都会执行
const mapStateToProps = state => {

    const generateKey = () => {
      // 深拷贝
      const oldState = JSON.parse(JSON.stringify(state))
  
     // 添加自定义属性key(antd 使用) 
      oldState.forEach(item => {
        item.key = item.id
      })
  
      return oldState
    }
    // props
    return {
      goodsList: generateKey()
    }
}


// mapStateToProps 获取值
// mapDispatchToProps 修改值
const mapDispatchToProps = dispatch => {
    // props
    return {
      // 修改仓库的方法
      changeNum:function(id,num){
        // 触发action
        dispatch(updateGoods({id,num}))
      },
      // 删除仓库的方法
      deleteGoods: function(id){
        // 触发action
        dispatch(asyncDeleteGoods(id))
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(ShopCart)