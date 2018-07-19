import React from 'react'
import Datecounter from 'datecounter'
const counter = new Datecounter()

const History=({history,props})=>(
    <ul>
        {/* <li>{JSON.stringify(props)}</li> */}
        {history.map((item, index) => {
            const { type, value, time } = JSON.parse(item)
            return (
                <div key={item + index}>
                    {type}-{value}-{JSON.stringify(counter(time))}
                </div>)
        })}
    </ul>
)

export default History