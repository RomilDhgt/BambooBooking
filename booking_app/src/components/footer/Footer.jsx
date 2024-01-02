import "./footer.css"

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footerList">
                <ul className="fList">
                    <li className="listItem">Countries</li>
                    <li className="listItem">Cities</li>
                    <li className="listItem">Hotels</li>
                    <li className="listItem">Stays of interest</li>
                </ul>
                <ul className="fList">
                    <li className="listItem">Villas</li>
                    <li className="listItem">Hotels</li>
                    <li className="listItem">Resorts</li>
                    <li className="listItem">Lodges</li>
                    <li className="listItem">Tiny Homes</li>
                </ul>
                <ul className="fList">
                    <li className="listItem">Login</li>
                    <li className="listItem">Register</li>
                    <li className="listItem"></li>
                </ul>
            </div>
            <div className="fText">Not copyrighted at all © 2023. All rights not reserved</div>
        </div>
    )
}

export default Footer