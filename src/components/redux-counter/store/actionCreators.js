import {ADD, MINUS} from './actionTypes'

// 按需导出创建 新增 的action
export const add = count => {
    return {
        type: ADD,
        count
    }
}

// 按需导出创建 减少 的action
export const min = count => {
    return {
        type: MINUS,
        count
    }
}

// 异步操作(减少)
export const asyncmin = count => {
    return dispatch => {
        // 异步操作
        setTimeout(() => {
            // 最终必须通过dispatch触发同步的action才能更改成功
            dispatch(min(count))
        }, 2000)
    }
}