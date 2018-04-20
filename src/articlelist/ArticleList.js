import React,{Component} from 'react'
import './ArticleList.css'
import ArticleBlock from './ArticleBlock'
import axios from 'axios'

class ArticleList extends Component{
    constructor(props) {
        super(props);
        this.state = {articleList: []};
    }
    
    
    componentWillMount(){
        axios.get('https://www.easy-mock.com/mock/5ad94f6eb3c0752c6acdcd2d/example/articles')
            .then((res)=>{
                this.setState({articleList:res.data.list})
            })
            .catch((err)=>{
                console.log(err)
            });
    }
    
    render(){
        return(
            <div className="article-list">
                <ul>
                    {
                        this.state.articleList.map((item)=>{
                            return(
                                <li key={item.title}>
                                    <ArticleBlock/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ArticleList