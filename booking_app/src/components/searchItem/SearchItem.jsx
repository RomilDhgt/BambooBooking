import { Link } from "react-router-dom"
import "./searchItem.css"

const SearchItem = ({item})=>{
    return (
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="sImg"/>
            <div className="sDesc">
                <h1 className="sTitle">{item.name}</h1>
                <span className="sDist">{item.address}</span>
                <span className="sPerk">Free airport taxi service</span>
                <span className="subTitles">{item.desc}</span>
                <span className="sFeatures">• 2 Bedroom • 1 Bathroom • 2400m²</span>
                <span className="cancellation">Free Cancellation</span>
            </div>
            <div className="sDetails">
                <div className="sRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>
                <div className="featReview">
                    <span className="fTitle">Featured Review:</span>
                    <span className="fReview">"Amazing stay with great views, and fun casino enviroment"</span>
                </div>
                <div className="sDeets">
                    <span className="sPrice">${item.cheapest}</span>
                    <span className="priceDeets">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="sAvail">Check availability</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchItem