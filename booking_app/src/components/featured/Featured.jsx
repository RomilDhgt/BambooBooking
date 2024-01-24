import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = ()=>{

    const {data, loading, error } = useFetch("hotels/countByCity?cities=Mumbai,Prague,Los Angeles,Busan")

    return (
        <div className='featured'>
            {loading ? ("Loading please wait") : (<>
                <div className="featuredItem">
                    <img src='https://i.redd.it/c4s2j9lfpjj61.jpg' alt='' className='featuredImg'/>
                    <div className="featuredTitles">
                        <h1>Mumbai</h1>
                        <h2>{data[0]} Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src='https://i.redd.it/prague-the-beautiful-historic-city-v0-426ihkgdw5ia1.jpg?s=c17a930014ed5efda256f7b848043a4b55769fda' alt='' className='featuredImg'/>
                    <div className="featuredTitles">
                        <h1>Prague</h1>
                        <h2>{data[1]} Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src='https://i.redd.it/los-angeles-california-v0-hxxc6l3yqima1.jpg?s=5491f553997058bfc62eadfedf1f87d197e3b891' alt='' className='featuredImg'/>
                    <div className="featuredTitles">
                        <h1>Los Angeles</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src='https://i.redd.it/continuing-layers-of-mountains-cityscapes-and-the-sea-in-v0-9bjrojz8q6za1.jpg?s=82d1b203b9abaa9b9c3fe4f7e0e982ef13fe578f' alt='' className='featuredImg'/>
                    <div className="featuredTitles">
                        <h1>Busan</h1>
                        <h2>{data[3]} Properties</h2>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Featured