import React,{Component} from 'react'


import GrandPa from './grandpa'
// react 样式私有
import style from "./index.module.css"

// const StyleObj = {
//     color: 'green'
// }

class Index extends Component {
    render () {
        return <div>
            {/* <p style={{color: 'red'}}>这是一个寂寞的天</p> */}

            {/* <p style={StyleObj}>这是一个寂寞的天</p> */}

            <p className={style.text}>下着有点伤心的雨</p>

            <hr/>
            <GrandPa />
        </div>
    }
}

export default Index