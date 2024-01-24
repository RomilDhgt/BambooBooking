import "./featuredHomes.css";
import useFetch from "../../hooks/useFetch"

const FeaturedHomes = ()=>{

    const {data, loading, error} = useFetch("hotels?featured=true&lim=3");

    return (
        <div className="fp">
            {loading ? ("Loading please wait") : (<>
                {data.map(item=>( 
                    <div className="fpItem" key={item._id}>
                        <img src={item.photos[0]} alt="" className="fpImg"/>
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">Starting from ${item.cheapest}</span>
                        <div className="fpRating">
                            <button className="btnRating">{item.rating}</button>
                            <span>{item.desc}</span>
                        </div>
                    </div>
                ))}
            </>)}
        </div>
    )
}

export default FeaturedHomes