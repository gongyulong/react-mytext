import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class NewList extends Component {
    render() {
        return <div>
            <ul>
                <li>
                    {/* query方式 */}
                    <Link to='/newsdetail?id=1001'>
                        罗永浩被限制高消费
                    </Link> 
                </li>
                <li>
                    {/* params 方式 */}
                    <Link to='/newsdetail/1002'>
                        桂林机长被停飞
                    </Link> 
                </li>
                <li>
                     {/* params 方式 */}
                     <Link to='/newsdetail/1003'>
                     朝鲜痛斥美国挑衅
                    </Link> 
                </li>
                <li>
                     {/* query方式 */}
                    <Link to='/newsdetail?id=1004'>
                        11岁女孩斗鳄鱼
                    </Link> 
                </li>
            </ul>
        </div>
    }
}

export default NewList