import React, {Component} from 'react'

class Ref extends Component {
    constructor () {
        super()
        this.inputRef = React.createRef()
        this.fileRef = React.createRef()
    }

    handleSubmit = e => {
        e.preventDefault()

        console.log(this.fileRef.current.files[0]);
        
    }
    
    render() {
        return (
            <div>
                {/* 旧的写法 */}
                {/* <input type="text" ref="inputRef" /> */}


                {/* 获取ref 新的写法 */}
                <input type="text" ref={this.inputRef} />

                {/* 上传文件 */}
                <form onSubmit={this.handleSubmit}>
                    <input type="file" ref={this.fileRef} />
                    <br />
                    <button type='submit'>上传</button>
                </form>

            </div>
        )
    }
    // 钩子内可以发送网络请求、DOM操作
    componentDidMount() {
    //   验证旧的ref写法
    // console.log(this.refs.inputRef)
    // this.refs.inputRef.focus()
    
    //    验证新的ref写法 
    //    console.log(this.inputRef.current)
       this.inputRef.current.focus() 
    }

}

export default Ref