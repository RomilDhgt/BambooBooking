import { useContext, useState } from 'react'
import { AuthContext } from "../../context/AuthContext"
import "./login.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined,
    })

    const [admin, setAdmin] = useState()

    const navigate = useNavigate()

    const {user, loading, error, dispatch} = useContext(AuthContext);

    const handleChange = (e) =>{
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}));
    }

    const handleLogin = async e =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});

        try {
            await fetch("http://localhost:8800/auth/login", {
                method: "POST",
                body: JSON.stringify(credentials),
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                }
            });
            const res = await axios.post("http://localhost:8800/auth/login", credentials)
            console.log(res)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data.details});
            if (res.data.isAdmin) {
                setAdmin(res.data.isAdmin)
            } else {
                navigate("/")
            }
            
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE", payload:error.response.data});
        }
    }

    const handleRegister = (e) =>{
        navigate("/register")
    }

    

    return (
        <div className='login'>
            <div className="loginWrapper">
                <img src={require("./bamboo.png")} alt="" className="loginImg" />
                <div className="loginColumn">
                    <h1 className="title">Bamboo Bookings</h1>
                    <div className="loginContainer">
                        <b>Username</b>
                        <input type="text" placeholder="username" id='username' onChange={handleChange} className="loginInput"/>
                        <b>Password</b>
                        <input type="password" placeholder='password' id='password' onChange={handleChange} className="loginInput" />
                        <button onClick={handleLogin} className="loginButton">Login</button>
                        <button onClick={handleRegister} className="loginButton">Register</button>
                        {error && <span>{error.message}</span>}
                    </div>
                    {admin && 
                    <div className='question'>
                        <div className="qContainer">
                            <div className="query">
                                Would you like to use the admin portal?
                            </div>
                            <div className="buttons">
                                <button className="loginButton" onClick={()=>navigate('/admin', {state:user})}>Yes</button>
                                <Link to="/" ><button className="loginButton">No</button></Link>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <img src={require("./bamboo1.png")} alt="" className="loginImg" />
            </div>
        </div>
    )
}

export default Login