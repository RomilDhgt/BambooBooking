import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import { useState } from "react"

const Hotel = ()=>{

    const [slideNum, setSlideNum] = useState(0)
    const [open, setOpen] = useState(0)

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/193378702.jpg?k=98609da2fd2d673cc37ba59a55f4352cdcb38c689f155a70aee694b6c8810861&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/193378693.jpg?k=d8eeaee4e181c8d2a41a6c0973c80b32ec4b2fea010ad1f48963c475132eb425&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/308611868.jpg?k=9f829f458e2309fe87516baa05c593174f964e392ba167c9e9fc7e97bf92223c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/308594382.jpg?k=3a08b2ea605853bc81da12e18bfec9e73430e1934eeb505a1b9bff74397fe92a&o=&hp=1"
        },
        {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Shops_in_the_Bellagio_casino%2C_Las_Vegas.jpg/1599px-Shops_in_the_Bellagio_casino%2C_Las_Vegas.jpg"
        },
        {
            src: "https://www.momondo.ca/rimg/himg/41/1e/c8/leonardo-64677-149433204-411926.jpg?width=968&height=607&crop=true"
        }
    ]

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

    return (
        <div>
            <Navbar/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="slideWrap">
                        <img src={photos[slideNum].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Book your stay now!</button>
                    <h1 className="hTitle">Ballagio</h1>
                    <div className="hAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>3600S Las Vegas Blvd, Las Vegas, NV 89109, United States</span>
                    </div>
                    <span className="hAttraction">Watch the beautiful Ballagio fountains from your room</span>
                    <span className="highlight">Book a stay at $114 per night and get a free $20 casino coupon</span>
                    <div className="hotelImg">
                        {photos.map((photo,i)=>(
                            <div className="imgWrapper">
                            <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hdTexts">
                            <h1 className="title">The classic Las Vagas exprience starts at the Ballagio</h1>
                            <p className="hDesc">
                            The Bellagio Hotel in Las Vegas is a luxurious and iconic destination that promises an unforgettable stay for its guests. Nestled on the famous Las Vegas Strip, the Bellagio is renowned for its opulent design, world-class amenities, and exceptional service. Guests are greeted by the breathtaking Fountains of Bellagio, a mesmerizing water and light show that sets the tone for the lavish experience that awaits inside. The hotel boasts elegantly appointed rooms and suites, each offering stunning views of the city or the iconic fountain display. With a diverse array of dining options, including renowned restaurants like Le Cirque and Picasso, guests can indulge in gourmet cuisine without leaving the premises. The Bellagio is also home to the famous Bellagio Conservatory and Botanical Gardens, showcasing exquisite seasonal displays. From its upscale casino and spa to the vibrant nightlife and entertainment options, the Bellagio Hotel provides a sophisticated and immersive escape, making it the perfect choice for those seeking an extraordinary Las Vegas experience.
                            </p>
                        </div>
                        <div className="hPrice">
                            <h1>The complete Las Vagas exprience</h1>
                            <span>Reviews average at an Excellent 8.9!</span>
                            <h2>
                                <b>$114</b> (per night)
                            </h2>
                            <button>Book your stay now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel