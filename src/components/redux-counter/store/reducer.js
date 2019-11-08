import {ADD, MINUS} from './actionTypes'

// 1.0 state 仓库中的默认值或是上一次的状态
// 2.0 action 触发的动作，它是一个对象(里面必须要有一个属性)
export default (state=100, action)=> {
    switch (action.type) {
        case ADD:
            // return state + 1
            return state + action.count
        
        case MINUS:
            return state - action.count
    
        default:
            return state
    }
}