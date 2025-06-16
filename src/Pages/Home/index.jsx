import "./home.css"
import Classic from "../../assets/ballet1.jpg"
import Neo from "../../assets/ballet2.jpg"
import Modern from "../../assets/ballet3.jpg"
import { useState } from "react"

export default function Home() {
    const [isactive, setIsactive] = useState(false)
    const [active, setActive] = useState(false)
    const [dactive, setDactive] = useState(false)
    return (
        <div className="globh">
            <div className="div1">
                <img src={Classic} alt="classic" className="ballet" onClick={() => setIsactive((ballet) => !ballet)} />
                {isactive && <a className="a" target="_blank" href="https://en.wikipedia.org/wiki/Classical_ballet">Classic Ballet</a>}
            </div>
            <div className="div1">
                <img src={Neo} alt="neo" className="ballet" onClick={() => setActive((ballet) => !ballet)} />
                {active && <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D0%B0%D0%BB%D0%B5%D1%82" target="_blank" className="a">Neo Ballet</a>}

            </div>
            <div className="div1">
                <img src={Modern} alt="modern" className="ballet" onClick={() => setDactive((ballet) => !ballet)} />
                {dactive && <a href="https://en.wikipedia.org/wiki/Contemporary_ballet" target="_blank" className="a">Modern</a>}
            </div>
        </div>
    )
}