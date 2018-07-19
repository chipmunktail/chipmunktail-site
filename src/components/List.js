import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props)
        const { list } = this.props
        this.state = { list: list }
        this.handleDel.bind(this)
    }
    handleDel(index) {
        const { calDel } = this.props
        calDel(index)
    }
    render() {
        const { list } = this.props
        return (
            <ul>
                {list.map((item, index) => {
                    return (<li key={item + index}>
                        {item}
                        <input type="button" value="-" onClick={() => this.handleDel(index)} />
                    </li>)
                }
                )}
            </ul>
        )
    }
}