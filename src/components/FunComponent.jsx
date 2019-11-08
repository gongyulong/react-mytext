import React from 'react'
import PropTypes from 'prop-types'

function FunComponent ({name, age}) {
    return (
        <h3>捣蛋射手{name} {age}</h3>
    )
} 

// 设置检查类型
FunComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

// 设置默认值
FunComponent.defaultProps = {
    age: 3
}

// 导出组件
export default FunComponent;