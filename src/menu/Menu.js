import React, {Component} from 'react'
import './Menu.css'
import axios from 'axios'

class Menu extends Component {
    constructor (props) {
        super(props)
        this.state = {list: []}
    }
    
    
    componentWillMount () {
        axios.get('https://www.easy-mock.com/mock/5ad94f6eb3c0752c6acdcd2d/example/getMenus')
            .then((res) => {
                this.setState({list: res.data.list})
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    render () {
        return (
            <div className="menu">
                <ul>
                    {
                        this.state.list.map((item) => {
                            return (
                                <li key={item.text}>
                                    <a href={item.href}>{item.text}</a>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Menu