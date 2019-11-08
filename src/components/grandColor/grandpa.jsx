import React,{Component} from 'react'

import Son from './son'

import Context from './context'

// react 样式私有化
// import style from "./grandpa.module.css"

class GrandPa extends Component {
    state  = {
        color: 'red'
    }
    render() {
        return <div>
            {/* <p className={style.text}>父级颜色</p> */}

            <button onClick={()=>this.setState({color: 'red'})}>红色</button>&nbsp;
            <button onClick={()=>this.setState({color: 'purple'})}>紫色</button>

            <div>   
                <p style={{ color: this.state.color }}>这是爷爷</p>

                {/* Provider 提供者 */}
                <Context.Provider value={this.state.color}>
                    <Son />
                </Context.Provider>
            </div>
        
        </div>
    }
}

export default GrandPa