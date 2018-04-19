import React,{Component} from 'react'
import './ArticleList.css'
import ArticleBlock from './ArticleBlock'

class ArticleList extends Component{
    render(){
        return(
            <div className="article-list">
                <ul>
                    <li>
                        <ArticleBlock/>
                    </li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
        )
    }
}

export default ArticleList