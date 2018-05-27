import React, {Component} from 'react'
import './ArticleList.css'
import ArticleBlock from './ArticleBlock'
import axios from 'axios'

class ArticleList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            articleList: [],
            page: 1,
            info:[{"comment_ID":"3820251","comment_post_ID":"26402","comment_author":"暧昧","comment_date":"2018-05-18 21:33:53","comment_date_gmt":"2018-05-18 13:33:53","comment_content":"<img src=\"https://wx4.sinaimg.cn/mw600/0076QpdAgy1frfrnp48q3j30bs8c04qp.jpg\" />","user_id":"0","vote_positive":"2","vote_negative":"45","sub_comment_count":"5","text_content":"","pics":["https://wx4.sinaimg.cn/mw600/0076QpdAgy1frfrnp48q3j30bs8c04qp.jpg"]}],
        };
    }


    componentWillMount () {

    }

    componentWillReceiveProps () {
        this.setState({page:1})
        this.getData()
    }

    getData () {
        let url = '';
        if (this.props.type === 0) {
            url = 'http://juhe.im/jandan/pics?page='+this.state.page
        }
        if (this.props.type === 1) {
            url = 'http://juhe.im/jandan/ooxx?page='+this.state.page
        }


        axios.get(url)
            .then((res) => {
                this.setState({info:res.data.data.comments})
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render () {
        return (
            <div className="article-list">
                <ul>
                    {
                        this.state.info.map((item) => {
                            return (
                                <li key={item.comment_ID}>
                                    {item.comment_ID}
                                    <img className="img" src={item.pics[0]} />
                                    <div className="action">
                                        <span>{item.vote_positive}oo</span>
                                        <span>{item.vote_negative}xx</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="page">
                    <div>{this.state.page===1?'':'<button>上一页</button>'}</div>
                    <button>{this.state.page}</button>
                    <button>下一页</button>
                </div>
            </div>
        )
    }
}

export default ArticleList
