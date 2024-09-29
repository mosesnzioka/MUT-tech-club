import React from "react"
import Hero from "../../components/hero/hero"
import Aboutus from "../../components/about/aboutus"
import Testmonies from "../../components/Testimonies/testimonies"


function Home(){
    return(
        <div>
           
            <Hero/>
            <Aboutus/>
            <Testmonies/>
        </div>
    )
}
export default Home;