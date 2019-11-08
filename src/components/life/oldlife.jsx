import React,{Component} from 'react'

export default class OldLift extends Component {
    constructor (props) {
        console.log('-----------constructer()------------');
        
        super()
        this.state = {
            name: '小白'
        } 
    }

    componentWillMount () {
        console.log('--------componentWillMount(旧)---------');    
    }
      
    render () {
        console.log('----------render()执行多次-------------');
        
        return <div>
            {this.state.name}------{this.props.age}<br/>
            <button onClick={()=> this.setState({name: '小欧'})}>更改名字</button>
        </div>
    }

    componentDidMount () {
        console.log('--------------componentDidMount()--------------------')
        
    }
    // 初始化阶段 钩子执行顺序 constructor()  --> componentWillMount() --> render() --> componentDidMount()
   
    componentWillReceiveProps (nextProps) {
        // 父组件传来的props 值发生改变时执行
        console.log(nextProps);
        console.log('--------------componentWillReceiveProps()------------------');
    }

    shouldComponentUpdate () {
        console.log('------------shouldComponentUpdate()--------------');
        return true
    }

    componentWillUpdate () {
        console.log('----------componentWillUpdate(旧)--------------');  
    }

    componentDidUpdate () {
        console.log('----------componentDidUpdate()--------------');
    }

    // 执行阶段 钩子执行顺序 shouldComponentUpdate() --> componentWillUpdate() --> render() --> componentDidUpdate()

    // 条件渲染或者路由切换触发
    componentWillUnmount () {
        console.log('----------------componentWillUnmount()----------------'); 
    }
}