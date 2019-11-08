import React, {Component} from 'react'

class For extends Component {
    constructor () {
        super()
        this.state = {
            listName: [
                {id: 1001, name: '鲁班', skill: '短枪'},
                {id: 1002, name: '亚瑟', skill: '剑圣'},
                {id: 1003, name: '黄忠', skill: '远炮'}
            ]
        }
    }

    render() {
        return <div>
            <h3>列表渲染</h3>
            <ul>
                {
                    // 列表渲染
                    this.state.listName.map(item => {
                        return <li key={item.id}>{item.name}-----{item.skill}</li>
                    })
                }
            </ul>
        </div>
    }
}

export default For