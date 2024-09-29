import "./hero.css"

function HeroSection(){
    return(
        <div className="herosector">
            <div className="hero-discription">
            <p className="welcoming-title">welcome to muranga university technology club</p>
            <a href="#" className="learnmore">learn more...</a>

            </div>
            

        </div>
    )
}

function Hero (){
    return(
        <div>
            <HeroSection/>
        </div>
    )
}
export default Hero;