import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const iCount = () => {
        setCount((prev) => prev+1)
    }
    
    const dCount = () => {
        setCount((prev) => prev-1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={iCount}>+</button>
            <button onClick={dCount}>-</button>
        </div>
    )
}

export default Counter