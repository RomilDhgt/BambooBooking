import "./home.css"
import Navbar from "../../components/navbar/Navbar.jsx"
import Header from "../../components/header/Header.jsx"
import Featured from "../../components/featured/Featured.jsx"
import PropertyList from "../../components/propertyList/PropertyList.jsx"
import FeaturedHomes from "../../components/featuredHomes/FeaturedHomes.jsx"
import MailList from "../../components/mailList/MailList.jsx"
import Footer from "../../components/footer/Footer.jsx"

const Home = ()=>{
    return (
        <div className="homepage">
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Highly admired properties</h1>
                <FeaturedHomes/>
            </div>
            <div className="homeMail"><MailList/></div>
            
            <Footer/>
        </div>
    )
}

export default Home