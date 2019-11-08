import React, { Component } from 'react'

class NewsDetail extends Component {
    constructor (props) {
        super()
        console.log(props) //history{} location{} match{}

        // query 方式
        // const searchParams = new URLSearchParams(props.location.search)

        this.state = {
            // newsId: searchParams.get('id')

            // params 方式
            newsId: props.match.params.id
        }    
    }   
    render() {
        return <div>
           <h3>详情页面</h3>
        </div>
    }
}

export default NewsDetail