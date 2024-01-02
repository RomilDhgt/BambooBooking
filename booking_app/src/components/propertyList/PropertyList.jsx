import "./propertyList.css"

const PropertyList = ()=>{
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://en.bailypearl.com/wp-content/uploads/2021/05/villa-la-croix-valmer-facade-2-2-2560x1633.jpg" alt="https://www.amaviacollection.com/wp-content/uploads/2022/05/Villa-Gaia-1-scaled.jpeg" className="pImg"/>
                <div className="pTitle">
                    <h1>Villas</h1>
                    <h2>20 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Liseberg_HotelCuriosa_600x600_MINT_CMSTemplat.width-1650.jpg" alt="" className="pImg"/>
                <div className="pTitle">
                    <h1>Hotels</h1>
                    <h2>20 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://d1l57x9nwbbkz.cloudfront.net/files/s3fs-public/styles/banner_round/public/banners/2021-05/Killarney%20Mountain%20Lodge5.jpg?VersionId=aqRUDsgBDrm9TwhqTGk4r6RGXtBuO10p&h=a756173c&itok=hxsDxLkI" alt="" className="pImg"/>
                <div className="pTitle">
                    <h1>Lodges</h1>
                    <h2>20 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://assets.newatlas.com/dims4/default/f2509f0/2147483647/strip/true/crop/4461x2974+0+0/resize/1920x1280!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F38%2Fcc%2Fcb4aa02c4b0ab31f1e5a126d8c9b%2F01-5563-gawthorneshut-caarch-ambercreative.jpg" alt="" className="pImg"/>
                <div className="pTitle">
                    <h1>Tiny Homes</h1>
                    <h2>20 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.beaches.com/blog/content/images/2021/03/Beaches-Turks-Caicos-Overview.jpg" alt="" className="pImg"/>
                <div className="pTitle">
                    <h1>Resorts</h1>
                    <h2>20 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList