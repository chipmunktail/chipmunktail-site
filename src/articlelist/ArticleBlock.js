import React, {Component} from 'react'
import './ArticleBlock.css'
// import axios from 'axios'

class ArticleBlock extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {title: this.props.title,
    //     //     content:this.props.content,
    //     //     aat:this.props.aat,
    //     //     img:this.props.img,
    //     //     href:this.props.href,};
    //
    // }


    componentWillMount() {

    }

    render() {
        const {title,content,aat,img,/*href*/}=this.props;
        return (
            <div className="article-block">
                <img alt="img" src={img}/>
                {/*https://pic2.zhimg.com/80/75d12a08c189cc7bf2ceeeb9779282b4_hd.jpg*/}
                <div className="info">
                    <div>{title}</div>
                    <div>{content}</div>
                    <div>{aat}</div>
                </div>
            </div>
        )
    }
}

export default ArticleBlock
