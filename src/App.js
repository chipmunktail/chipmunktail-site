import React, {Component} from 'react';
import './App.css';
import Menu from './menu/Menu'
import ArticleList from './articlelist/ArticleList'
import SiderBar from './siderbar/SiderBar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu/>
                <ArticleList/>
                <SiderBar/>
            </div>
        );
    }
}

export default App;
