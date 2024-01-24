import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import "./register.css"
import axios from "axios"

const Register = () => {

    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
    })

    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = (e) =>{
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}));
    }

    const handleRegister = async e =>{
        try {
            const res = await axios.post("http://localhost:8800/auth/register", credentials);
            navigate("/login")
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }

    return (
        <div className='register'>
            <div className="registerWrapper">
                <img src={require("../login/bamboo.png")} alt="" className="registerImg" />
                <div className="registerColumn">
                    <h1 className="title">Bamboo Bookings</h1>
                    <div className="registerContainer">
                        <b>Username</b>
                        <input type="text" placeholder="username" id='username' onChange={handleChange} className="registerInput"/>
                        <b>Email</b>
                        <input type="text" placeholder="email" id='email' onChange={handleChange} className="registerInput"/>
                        <b>Password</b>
                        <input type="password" placeholder='password' id='password' onChange={handleChange} className="registerInput" />
                        <button onClick={handleRegister} className="registerButton">Register</button>
                        {error && <span>{error.message}</span>}
                    </div>
                </div>
                <img src={require("../login/bamboo1.png")} alt="" className="registerImg" />
            </div>
        </div>
    )
}

export default Register