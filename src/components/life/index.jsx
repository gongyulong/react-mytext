import React, {Component} from 'react'

// import OldLife from './oldlife'
import NewLife from './newlife'

class Index extends Component {
    state = {
        age: 18,
        isShow: true
    }
    render(){
        return <div>
            <button onClick={()=>this.setState({age: 28})}>+10</button>
            {/* <button onClick={()=>this.setState({isShow: false})}>隐藏</button> */}
            {/* <OldLife age={this.state.age}/> */}

            {/* {this.state.isShow && <OldLife age={this.state.age}/>} */}

            <NewLife age={20}/>
        </div>
    }
}

export default Index