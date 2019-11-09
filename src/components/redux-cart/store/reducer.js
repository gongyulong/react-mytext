// 导入常量(actionTypes.js)文件
import {ADD_GOODS,UPDATE_GOODS,DELETE_GOODS} from './actionTypes'

// 每次仓库初始化的时候，从本地获取数据，然后赋值给仓库的默认值
const goodsList = JSON.parse(window.localStorage.getItem('mycart') || '[]')

// 导出-->newState 给Store 使用
export default (state = goodsList, action) => {
    switch (action.type) {
        // 1.0 新增操作
         case ADD_GOODS:
                // 1.1 深拷贝
                const addGoodsList = [...state]

                // 1.2 调用数组中 find() 方法 遍历数组元素
                const addGoodsObj = addGoodsList.find(item => item.id === action.payload.id)

                // 1.3 判断
                if(addGoodsObj) {
                    // 更改数量
                    addGoodsObj.num += 1
                } else {
                    // 新增
                    addGoodsList.push(action.payload)
                }
                // 1.4 必须返回
                return addGoodsList

        // 2.0 修改操作
        case UPDATE_GOODS:
                // 2.1 深拷贝
                const updateGoodsList = [...state]

                // 2.2 拿着传递过来的id去数组中找，找到那个对象之后，重新给num赋值即可
                const updateObj = updateGoodsList.find(item => item.id === action.payload.id)
                updateObj.num = action.payload.num

                // 2.3 必须返回
                return updateGoodsList

        // 3.0 删除操作
        case DELETE_GOODS:
            // 3.1 深拷贝上一次的数据
            const deleteGoodsList = [...state]
    
            // 3.2 根据传递过来的id，找到数组中的索引
            const deleteIndex = deleteGoodsList.findIndex(item => item.id === action.payload)
            deleteGoodsList.splice(deleteIndex,1)

            // 3.3 必须返回
            return deleteGoodsList
            
        default:
            return state
    }
}