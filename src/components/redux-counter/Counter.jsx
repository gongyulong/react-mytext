import React, { Component } from 'react'
import store from './store/'

// import {ADD, MINUS} from './store/actionTypes'
import {add, asyncmin} from './store/actionCreators'

class Counter extends Component {
    add = () => {
        // store.dispatch({type: ADD})
        store.dispatch(add(2))
    }

    min = () => {
        // store.dispatch({type:MINUS})
        // store.dispatch(min(3))
        store.dispatch(asyncmin(5))
    }

    render() {
        return <div>
            <button onClick={this.min}>-</button>&nbsp;&nbsp;
            <button onClick={this.add}>+</button>
        </div>
    }
}

export default Counter