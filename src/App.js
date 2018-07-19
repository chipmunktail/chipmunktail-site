import React, {Component} from 'react'
import './App.css'
import Menu from './components/Menu'
import Input from './components/Input'
import List from './components/List'
import History from './components/History'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            inputValue: '',
            addValue: [],
            history: []
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDel = this.handleDel.bind(this)
    }
    
    handleAdd (value) {
        const {addValue} = this.state
        this.setState({addValue: [...addValue, value]})
        this.log({value: value, type: 'add'})
    }
    
    handleDel (index) {
        const {addValue} = this.state,
            delItem = addValue.splice(index, 1)
        this.setState({addValue: addValue})
        this.log({value: delItem, type: 'delete'})
    }
    
    log (info) {
        const {history} = this.state
        info.time = new Date()
        this.setState({history: [...history, JSON.stringify(info)]})
    }
    
    render () {
        const {inputValue, addValue, history} = this.state
        
        const historys=(props)=>{
            // console.log(props)
            return (<div>
                <History history={history} props={props} />
            </div>)}
        const todos=()=>(<div>
            <Input inputValue={inputValue} calAdd={this.handleAdd}/>
            <List list={addValue} calDel={this.handleDel}/>
        </div>)
        
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        {/* <Menu /> */}
                        <Route path='*' component={Menu} />
                        <Route exact path="/" component={todos} />
                        <Route path='/todo' component={todos}/>
                        <Route path='/history' component={historys}/>
                    </header>
                </div>
            </Router>
        )
    }
}
