import React,{Component} from 'react'

import GrandSon from './grandson'

import Context from './context'

class Son extends Component {
    render() {
        return <div>
            {/* Consume： 消费者 */}
            <Context.Consumer>
                {
                    data => {
                        return (
                            <div>
                                <p style={{color:data}}>这是儿子</p>
                                <GrandSon />
                            </div>
                        )
                    }
                }
            </Context.Consumer> 
        </div>
    }
}

export default Son