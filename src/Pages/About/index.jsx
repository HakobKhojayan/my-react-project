import "./about.css"
import galaktika from "../../assets/yupiter.jpg"
import Title from "../../Components/Title/Title"


export default function About() {
    return (
        <div className="about">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={galaktika} alt="galaktika"/>
                        <Title/>
                    </div>
                </div>
            </div>
        </div>
    )
}