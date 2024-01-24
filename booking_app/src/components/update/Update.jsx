import "./update.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import React, {useState} from "react"
import axios from "axios"

const Update = ({setUpdating, id}) =>{
    const {data, loading, error} = useFetch(`users/${id}`)
    const [err, setErr] = useState()
    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
        isAdmin:undefined,
    })

    const handleChange = (e) =>{ 
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}));
    }

    const handleUpdate = async e =>{
        console.log(credentials)
        try {
            await axios.put(`http://localhost:8800/users/${id}`, credentials);
            setUpdating(false)
        } catch (err) {
            console.log(err)
            setErr(err)
        }
    }
    
    return (
        <div className="addUser">
            <div className="addContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setUpdating(false)}/>
                <b>Username</b>
                <input type="text" placeholder={data.username} id='username' onChange={handleChange} className="registerInput"/>
                <b>Email</b>
                <input type="text" placeholder={data.email} id='email' onChange={handleChange} className="registerInput"/>
                <b>Password</b>
                <input type="password" placeholder={data.password} id='password' onChange={handleChange} className="registerInput" />
                <b>Admin</b>
                
                {data.isAdmin? 
                    <select id='isAdmin'  onChange={handleChange} className="registerInput">
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    : 
                    <select id='isAdmin'  onChange={handleChange} className="registerInput">
                        <option value={false}>False</option>
                        <option value={true}>True</option>
                    </select>
                }
                    
                
                <button onClick={handleUpdate} className="registerButton">Update User</button>
                {error && <span>{error.message}</span>}
                {err && <span>{err.message}</span>}
            </div>
        </div>
    )
}

export default Update;