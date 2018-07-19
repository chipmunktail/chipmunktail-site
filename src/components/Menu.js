import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'
//https://www.cnblogs.com/zhanghuiming/p/7592132.html
//https://reacttraining.com/react-router/web/example/custom-link
// export default class Menu extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             menu: [{text: 'todo', path: '/todo'}, {text: 'history', path: '/history'}]
//         }
//     }
    
//     render () {
//         const {menu} = this.state
//         return (
//             <ul>
//                 {menu.map((item) => {
//                     const {text, path} = item
//                     return (
//                         <li key={text + Date.now()}>
//                             <Link to={path} className={item}>{text}</Link>
//                         </li>)
//                 })}
//             </ul>
//         )
//     }
// }
const menu = [{ text: 'todo', path: '/todo' }, { text: 'history', path: '/history' }]
const Menu =({match})=>(
    <ul>
        {menu.map((item) => {
            const { text, path } = item
            return (
                <li key={text + Date.now()}>
                    <Link to={path} className={item.path === match.url?'active':''}>{text}</Link>
                </li>)
        })}
    </ul>
)
export default Menu