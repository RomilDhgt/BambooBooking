import "./admin.css"
import {useNavigate} from 'react-router-dom';

const Admin = ()=>{

    const navigate = useNavigate()

    return (
        <div className='admin'>
            <div className="adminWrapper">
                <img src={require("../login/bamboo.png")} alt="" className="adminImg" />
                <div className="adminColumn">
                    <div className="query">
                        What table are looking for?
                    </div>
                    <div className="buttons">
                        <button className="adminButton" onClick={()=>navigate('/adminUser')}>User</button>
                        <button className="adminButton" onClick={()=>navigate("/adminHotel")}>Hotel</button>
                    </div>
                </div>
                <img src={require("../login/bamboo1.png")} alt="" className="adminImg" />
            </div>
        </div>
    )
}

export default Admin