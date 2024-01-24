import { AuthContext } from "../../context/AuthContext"
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"

const Navbar = ()=>{

    const navigate = useNavigate()

    const {user, dispatch} = useContext(AuthContext)

    const [admin, setAdmin] = useState()

    const handleLogin = (e) =>{
        navigate("/login")
    }

    const handleRegister = (e) =>{
        navigate("/register")
    }

    const handleLogout = (e) =>{
        e.preventDefault()
        dispatch({type:"LOGOUT"});
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">Bamboo Bookings</span>
                </Link>
                { user ? (
                    <div className="user">
                       <div className="name">Welcome, {user.username}</div>
                        <div className="navButton" onClick={handleLogout}>Logout</div> 
                    </div>
                    
                    
                ) : (
                <div className="navItems">
                    <button className="navButton" onClick={handleRegister}>Register</button>
                    <button className="navButton" onClick={handleLogin}>Login</button> 
                </div>
                )}
            </div>
            
        </div>
    )
}

export default Navbar