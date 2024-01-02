import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./mailList.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const MailList = ()=>{
    return (
        <div className="mail">
            <h1 className="mailTitle">Save money! Live Life!</h1>
            <span className="mailDesc">Sign up and get a discount</span>
            <div className="mailInputContainer">
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                <input type="text" placeholder="Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList