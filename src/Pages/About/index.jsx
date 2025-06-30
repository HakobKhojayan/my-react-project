import "./about.css"
import galaktika from "../../assets/yupiter.jpg"
import Title from "../../Components/Title/Title"
import Likes from "../../Components/Likes/Likes"


export default function About() {
    return (
        <div className="about">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={galaktika} alt="galaktika" />
                        <Title />
                        <Likes />
                    </div>
                </div>
            </div>
        </div>
    )
}