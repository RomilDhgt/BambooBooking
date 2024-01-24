import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import axios from "axios"

const Reserve = ({setReserve, hotelId}) => {
    
    const {data, loading, error} = useFetch(`hotels/room/${hotelId}`)
    const [selectedRm, setSelectedRm] = useState([])
    const {date} = useContext(SearchContext)

    const navigate = useNavigate()

    const getDateRange = (startDate, endDate)=>{
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime())

        let dates = []
        while(date <= end){
            dates.push(new Date(date))
            date.setDate(date.getDate()+1)
        }
        return dates
    }

    const allDates = getDateRange(date[0].startDate, date[0].endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((unavialdate) => (allDates.toString()).includes((new Date(unavialdate)).toString()))
        return !isFound;
    };

    const handleSelect = (e) =>{
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRm(checked ? [...selectedRm, value] : selectedRm.filter((item) => item !== value))
        console.log(selectedRm)
    }

    const handleClick = async () => {
        try {
          await Promise.all(
            selectedRm.map((roomId) => {
              const res = axios.put(`http://localhost:8800/rooms/avail/${roomId}`, {
                dates: allDates,
              });
              return res.data;
            })
          );
          setReserve(false);
          navigate("/");
        } catch (err) {}
      };

    return (
        <div className="reserve">
            <div className="reserveContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setReserve(false)}/>
                <span>Select your rooms</span>
                {data.map(item=>(
                    <div className="ritem">
                        <div className="rInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.description}</div>
                            <div className="maxPpl">Max People: {item.maxPeople}</div>
                            <div className="rPrice">Price: {item.price}</div>
                        </div>
                        <div className="selRm">
                            {item.roomNumber.map((roomNum) =>(
                                <div className="room">
                                    <label htmlFor="">{roomNum.number}</label>
                                    <input type="checkbox" value={roomNum._id} onChange={handleSelect} disabled={!isAvailable(roomNum)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button className="reserveButton" onClick={handleClick}>Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve