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
            <div className="hero">
                <h1 className="hero--title">Passenger Count</h1>
                <h3 className="hero--count">{count}</h3>
                <div className="buttons">
                    <button onClick={increment} className="hero--increment-btn">INCREMENT</button>
                    <button onClick={save} className="hero--save-btn">SAVE</button>
                    <button onClick={reset} className="hero--reset-btn">RESET</button>
                </div>
                <p>Previous Count: {previousCounts.join(' - ')}</p>
            </div>
        </>
    )
}