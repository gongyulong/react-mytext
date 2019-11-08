import React,{Component} from 'react'

import Broter1 from './Broter1'
import Broter2 from './Broter2'

export default class Index extends Component{
    render() {
        return <div>
            <Broter1 />
            <hr/>
            <Broter2 />
        </div>
    }
}