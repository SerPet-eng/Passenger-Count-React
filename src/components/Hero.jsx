import { useState } from "react"

export default function Hero() {
    const [count, setCount] = useState(0)
    const [previousCounts, setPreviousCounts] = useState([])

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function save() {
        setPreviousCounts(prevCount => [...prevCount, count])
        setCount(0)
    }

    function reset() {
        setPreviousCounts([])
        setCount(0)
    }


    return (
        <>
            <h1>Passenger Count</h1>
            <h4>{count}</h4>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={save}>SAVE</button>
            <button onClick={reset}>RESET</button>
            <p>Previous Count: {previousCounts.join(' - ')}</p>
        </>
    )
}