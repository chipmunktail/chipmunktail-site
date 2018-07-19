import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props)
        const { inputValue } = this.props
        this.state = { inputValue: inputValue }
        this.handleAdd.bind(this)
    }
    handleChange(v) {
        this.setState({ inputValue: v.target.value })
    }
    handleAdd() {
        const { calAdd } = this.props,
            { inputValue } = this.state
        calAdd(inputValue)
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <input type="text" value={inputValue} onChange={v => this.handleChange(v)} />
                <input type="button" value="+" onClick={() => this.handleAdd()} />
            </div>
        )
    }
}