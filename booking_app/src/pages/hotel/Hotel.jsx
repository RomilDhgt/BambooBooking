import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContext"
import Reserve from "../../components/reservation/Reserve"

const Hotel = ()=>{

    const [slideNum, setSlideNum] = useState(0)
    const [open, setOpen] = useState(0)
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [booking, setBooking] = useState(false)
    
    const { data, loading, error } = useFetch(`hotels/find/${id}`);

    const {date, options} = useContext(SearchContext)

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function numDays(date1, date2) {
        const time = Math.abs(date2.getTime()-date1.getTime());
        const numDays = Math.ceil(time / MILLISECONDS_PER_DAY);
        return numDays;
    }

    const days = numDays(date[0].endDate, date[0].startDate)

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleOpen = (i) =>{
        setSlideNum(i);
        setOpen(true)
    }

    const handleMove = (dir) =>{
        let newSlideNum;

        if (dir === "l"){
            newSlideNum = slideNum === 0 ? 5 : slideNum-1;
        } else {
            newSlideNum = slideNum === 5 ? 0 : slideNum+1;
        }
        setSlideNum(newSlideNum)
    }

    const handleBooking = () =>{
        if(user){
            setBooking(true);
        } else{
            navigate("/login")
        }
    }

    return (
        <div>
            <Navbar/>
            {loading ? ("loading"): (
                <div className="hotelContainer">
                    {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                        <div className="slideWrap">
                            <img src={data.photos[slideNum]} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                    </div>}
                    <div className="hotelWrapper">
                        <h1 className="hTitle">{data.name}</h1>
                        <div className="hAddress">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span>{data.address}</span>
                        </div>
                        <span className="hAttraction">Watch the beautiful Moroccan landscape from your room</span>
                        <span className="highlight">Book a stay at ${data.cheapest} per night and get a free taxi service</span>
                        <div className="hotelImg">
                            {data.photos?.map((photo,i)=>(
                                <div className="imgWrapper" key={i}>
                                <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hImg" />
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hdTexts">
                                <h1 className="tall">The classic Moroccan exprience starts at the Hotel Casablanca</h1>
                                <p className="hDesc">
                                Hotel Casablanca, nestled in the heart of the vibrant city of Casablanca, Morocco, epitomizes the perfect blend of luxury and cultural richness. With its striking architecture inspired by traditional Moroccan design, the hotel offers a captivating atmosphere that reflects the charm of this North African gem. The rooms are elegantly furnished, providing a comfortable retreat after exploring the bustling streets and historic sites of Casablanca. Hotel Casablanca boasts a rooftop terrace with panoramic views of the city skyline and the Atlantic Ocean, allowing guests to savor the breathtaking sunset over the coastal landscape. The culinary experience at the hotel is a journey through Moroccan flavors, with a diverse menu that showcases the country's rich gastronomic heritage. With its central location, warm hospitality, and a perfect blend of tradition and contemporary luxury, Hotel Casablanca is an ideal haven for travelers seeking an immersive and memorable stay in Morocco.
                                </p>
                            </div>
                            <div className="hPrice">
                                <h1>Perfect for your {days}-night stay</h1>
                                <span>Reviews average at {data.rating}!</span>
                                <h2>
                                    <b>${data.cheapest * days * options.room}</b> ({days} nights)   
                                    <b className="smallTxt">     ${data.cheapest} per night</b>
                                </h2>
                                <button onClick={handleBooking}>Book your stay now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {booking && <Reserve setReserve={setBooking} hotelId={id}/>}
            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel