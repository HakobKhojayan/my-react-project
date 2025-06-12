import "./home.css"
import Pinky_and_the_Brain from "../../assets/img1.jpg"

export default function Home() {
    return (
        <div>
            <div className="homediv">
                <h1 className="homeh">HOME</h1>
            </div>
            <img src={Pinky_and_the_Brain} alt="PInky-Brain" className="imghome"/>
        </div>
    )
}