import "./about.css"
import Tom_Jerry from "../../assets/img2.jpg"

export default function About() {
    return (
        <div>
            <div className="div">
                <h1 className="h">ABOUT</h1>
            </div>
            <img src={Tom_Jerry} alt="tomjerry" className="img"/>
        </div>
    )
}