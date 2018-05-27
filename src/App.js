import React, {Component} from 'react';
import './App.css';
import Menu from './menu/Menu'
import ArticleList from './articlelist/ArticleList'
import SiderBar from './siderbar/SiderBar'

class App extends Component {
    constructor (props) {
        super(props)
        this.state={
            type:0
        }
        this.handChildChange = this.handChildChange.bind(this)
    }

    handChildChange (e) {
        this.setState({
            type:e
        })
    }

    render () {
        return (
            <div className="App">
                <Menu onChange={this.handChildChange}/>
                <ArticleList type={this.state.type}/>
                <SiderBar/>
            </div>
        );
    }
}

export default App;
