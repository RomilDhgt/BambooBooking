import "./propertyList.css"
import useFetch from "../../hooks/useFetch"

const PropertyList = ()=>{

    const {data, loading, error } = useFetch("hotels/countByType")

    const images = [
        "https://en.bailypearl.com/wp-content/uploads/2021/05/villa-la-croix-valmer-facade-2-2-2560x1633.jpg",
        "https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg",
        "https://d1l57x9nwbbkz.cloudfront.net/files/s3fs-public/styles/banner_round/public/banners/2021-05/Killarney%20Mountain%20Lodge5.jpg?VersionId=aqRUDsgBDrm9TwhqTGk4r6RGXtBuO10p&h=a756173c&itok=hxsDxLkI",
        "https://assets.newatlas.com/dims4/default/f2509f0/2147483647/strip/true/crop/4461x2974+0+0/resize/1920x1280!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F38%2Fcc%2Fcb4aa02c4b0ab31f1e5a126d8c9b%2F01-5563-gawthorneshut-caarch-ambercreative.jpg",
        "https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg"
    ]

    return (
        <div className="pList">
            {loading ? ("Loading please wait") : (<>
                {data && images.map((img,i)=>(
                    <div className="pListItem" key={i}> 
                        <img src={img} alt="" className="pImg"/>
                        <div className="pTitle">
                            <h1>{data[i]?.type}</h1>
                            <h2>{data[i]?.count} Properties</h2>
                        </div>
                    </div>
                ))}
            </>)}
        </div>
    )
}

export default PropertyList