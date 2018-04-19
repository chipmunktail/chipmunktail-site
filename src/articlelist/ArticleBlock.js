import React, {Component} from 'react'
import './ArticleBlock.css'

class ArticleBlock extends Component {
    render() {
        return (
            <div className="article-block">
                <img src="https://pic2.zhimg.com/80/75d12a08c189cc7bf2ceeeb9779282b4_hd.jpg"/>
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