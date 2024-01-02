import "./searchItem.css"

const SearchItem = ()=>{
    return (
        <div className="searchItem">
            <img src="https://cdn.kiwicollection.com/media/property/PR002356/xl/002356-13-exterior%20fountain%20night-Bellagio.jpg?cb=1668561229" alt="" className="sImg"/>
            <div className="sDesc">
                <h1 className="sTitle">The Ballagio</h1>
                <span className="sDist">3600S Las Vegas Blvd, Las Vegas, NV 89109, United States</span>
                <span className="sPerk">Free airport taxi service</span>
                <span className="subTitles">Two bedroom with Las Vegas strip views</span>
                <span className="sFeatures">• 2 Bedroom • 1 Bathroom • 2400m²</span>
                <span className="cancellation">Free Cancellation</span>
            </div>
            <div className="sDetails">
                <div className="sRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="featReview">
                    <span className="fTitle">Featured Review:</span>
                    <span className="fReview">"Amazing stay with great views, and fun casino enviroment"</span>
                </div>
                <div className="sDeets">
                    <span className="sPrice">$50</span>
                    <span className="priceDeets">Includes taxes and fees</span>
                    <button className="sAvail">Check availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem