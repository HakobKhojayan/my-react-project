import "./Menu.css"
import { NavLink } from "react-router-dom"

export default function Menu() {
    const menuName=[
        {
            id:1,
            to:"/",
            li:"Home"
        },
        {
            id:2,
            to:"/AboutPage",
            li:"About"
        },
        {
            id:3,
            to:"/Contact",
            li:"Contact"
        },
        {
            id:4,
            to:"/Weather",
            li:"Weather"
        },
        {
           id:5,
           to:"/Register",
           li:"Register"
        }
    ]
    return (
        <nav className="nav">
            <ul className="ul">
                {menuName.map((e) =>{
                  return  <NavLink key={e.id} to={e.to} className={({isActive})=>(isActive? "li1" : "li2")}><li>{e.li}</li></NavLink>
                })}
                {/* <NavLink to='/Home' className={({isActive})=>(isActive? "li1" : "li2")}><li>Home</li></NavLink>
                <NavLink to='/AboutPage' className={({isActive})=>(isActive? "li1" : "li2")}><li>About</li></NavLink>
                <NavLink to='/Contact' className={({isActive})=>(isActive? "li1" : "li2")}><li>Contact</li></NavLink>
                <NavLink to='/Corona' className={({isActive})=>(isActive? "li1" : "li2")}><li>Corona</li></NavLink>
                <NavLink to='/Register' className={({isActive})=>(isActive? "li1" : "li2")}><li>Register</li></NavLink> */}

            </ul>
        </nav>
    )
}