import { useState } from "react";
import "./weather.css"
import { IoMdSearch } from "react-icons/io";

const key = "246f60bc1395402160f6ec7e5688497c"


export default function FormWeather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})

    const onClickWeather = async (e) => {
        e.preventDefault()
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const data = await res.json()
        setWeather(data);
    }

    return (
        <div className="forma">
            <div className="divs">
                <h1 className="wh">Weather</h1>
                <div className="wf">
                    <input className="winp" onChange={(e) => setCity(e.target.value)} />
                    <button className="wbut" onClick={onClickWeather}><IoMdSearch /></button>
                </div>
                {weather.name !== undefined ?
                    <div className="wff">
                        <h2 className="wcity">{weather.name}</h2>
                        <h3 className="wtemp">{Math.round(weather.main.temp - 273)}°C</h3>
                    </div>
                    : null}
            </div>
        </div>
    )
}