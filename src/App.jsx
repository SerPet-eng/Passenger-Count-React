import Hero from "./components/Hero"
import icon from "./images/train-station.jpg"

export default function App() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="container--bg-image"></div>
                    <img src={icon} alt="An Image of a Train Station" className="container--image" />
                    <Hero />
                </div>
            </div>
        </>
    )
}