import "./featuredHomes.css"

const FeaturedHomes = ()=>{
    return (
        < div className="fp">
            <div className="fpItem">
                <img src="https://www.okcmoa.com/wp-content/uploads/2016/11/The-Grand-Budapest-Hotel-2-1150x586.jpg" alt="" className="fpImg"/>
                <span className="fpName">Grand Budapest Hotel</span>
                <span className="fpCity">Budapest</span>
                <span className="fpPrice">Starting from $302</span>
                <div className="fpRating">
                    <button className="btnRating">9.0</button>
                    <span>Excellent</span>
                </div>
                
            </div>
            <div className="fpItem">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPMnJ9lIohhsELTr0rgVa6W1xSnY7vaPbqQE-yrpAiexvoXIXtjJIC8OQfnw5X4U56SqMRkAlw3-EibHR5s_GHgYUUaqArJ2kcZ0QuBjwqt2ACmqSqO73aRN3SIJkwmxTMJ5HmkaAE_DFlRQvl_kcecinz9XCv89Y1qCnb0M4uhZ8JxQ/s1600/00.jpg" alt="" className="fpImg"/>
                <span className="fpName">Continental Hotel</span>
                <span className="fpCity">New York</span>
                <span className="fpPrice">Starting from $123</span>
                <div className="fpRating">
                    <button className="btnRating">8.9</button>
                    <span>Amazing</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://i0.wp.com/martinturnbull.com/wp-content/uploads/2017/11/Interior-set-of-Ricks-Cafe-Americain-on-the-set-of-Casablanca-1942.jpg?w=800&ssl=1" alt="" className="fpImg"/>
                <span className="fpName">Rick's Americana Hotel</span>
                <span className="fpCity">Casablanca</span>
                <span className="fpPrice">Starting from $345</span>
                <div className="fpRating">
                    <button className="btnRating">9.5</button>
                    <span>Tragically Beautiful</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedHomes