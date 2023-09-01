import { useState } from "react"

export default function App() {
    const [count, setCount] = useState(4)

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </>
    )
}