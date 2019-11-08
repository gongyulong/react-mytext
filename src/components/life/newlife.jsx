import React, {Component} from 'react'

class NewLift extends Component {   
    constructor () {
        console.log('--------constructor--------')
        super() 
        this.state = {
            name: '小欧',
            age: 18
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log(props)
        console.log(state)

        // 修改state 中的属性值
        return {
            age:props.age
        }
    }  

    render() {
        console.log('--------render---------');
        return <div>
            {this.state.name}-------{this.state.age}
            <button onClick={() => this.setState({age:this.state.age + 1})}>更改age</button>&nbsp;&nbsp;
            <button onClick={() => this.forceUpdate()}>强制更新</button>
        </div>
    }

    shouldComponentUpdate() {
        console.log('---shouldComponentUpdate---')

        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps,prevState)

        return {
            test:'myTest'
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('---componentDidMount---')

        console.log(prevProps,prevState,snapshot)
    }
}
export default NewLift




