import React,{Component} from 'react'

import Context from './context'

class GrandSon extends Component {
    render() {
        return <div>
            {/* Consumer: 消费者 */}
            <Context.Consumer>
                {
                    data => {
                        return (
                            <div>
                                <p style={{color: data}}>这是孙子</p>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        </div>
    }
}

export default GrandSon