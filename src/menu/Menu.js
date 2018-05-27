import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {list: []};
        this.changeMenu=this.changeMenu.bind(this)
    }


    componentWillMount () {
        const menu = [{"text": "子图", "href": "1"},
            {"text": "聊图", "href": "2"}]
        this.setState({list: menu})
    }

    changeMenu=(event)=>{
        // event.persist()
        this.props.onChange(event._targetInst.index);
    }

    render () {
        return (
            <div className="menu">
                <ul>
                    {
                        this.state.list.map((item) => {
                            return (
                                <li key={item.text} onClick={this.changeMenu}>
                                    {item.text}
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Menu
