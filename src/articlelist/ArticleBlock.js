import React, {Component} from 'react'
import './ArticleBlock.css'
import axios from 'axios'

class ArticleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {articleList: []};
    }
    
    
    componentWillMount(){
        // axios.get('https://www.easy-mock.com/mock/5ad94f6eb3c0752c6acdcd2d/example/articles')
        //     .then((res)=>{
        //         this.setState({articleList:res.data.list})
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     });
    }
    
    render() {
        return (
            <div className="article-block">
                <img alt="img" src="https://pic2.zhimg.com/80/75d12a08c189cc7bf2ceeeb9779282b4_hd.jpg"/>
                <div className="info">
                    <div>title</div>
                    <div>content</div>
                    <div>author.time</div>
                </div>
            </div>
        )
    }
}

export default ArticleBlock