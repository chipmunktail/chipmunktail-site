import React, {Component} from 'react'
import './SiderBar.css'

//组件事件绑定有三种方式
//1.constructor里 .bind(this)
//2.Component方法里使用箭头函数 fun=()=>{}
//3.标签里使用箭头函数 ()=>{}
//4.标签里 .bind(this)     this.handleClick.bind(this)

class SiderBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            date: new Date(),
            isLogin: false
        }
        //this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount () {
        this.tick = setInterval(() => {
            this.getNewDate()
        }, 1000)
    }
    
    componentWillUnmount () {
        clearInterval(this.tick)
    }
    
    getNewDate () {
        this.setState({
            date: new Date()
        })
    }
    
    handleClick () {
        this.setState({isLogin:!this.state.isLogin})
    }
    
    render () {
        function Ele(props){
            // return props.el
           return props.isLogin?<h1>Welcome back!</h1>:<h1> stringer</h1>
        }
        return (
            <div className="sider-bar">
                <Ele isLogin={this.state.isLogin} /*el={this.state.isLogin?<h1>Welcome back!</h1>:<h1> stringer</h1>}*//>
                {this.state.date.toLocaleTimeString()}
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isLogin ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default SiderBar