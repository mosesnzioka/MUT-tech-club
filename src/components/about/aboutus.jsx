import "./aboutus.css";
import Title from "../title/Title";

function AboutusCard({title, description}){
    return(
        <div className="About-us-card">
            <div className="leader-body">
                <h3 className="aboutus-card-title">{title}</h3>
                <p className="aboutus-description">{description}</p>
            </div>
        </div>
    )

}





function AboutUs(){
    return(
        <section className="about-us-section">
            <Title maintitle="about us"/>
            <div className="about-us-container">
            
            <AboutusCard title="mission" description="To advance knowledge and technological transfer through teaching, training, learning, research, and innovation for sustainable development"/>

            <AboutusCard title="vission" description="A Leading University in Technological Innovation, Research, and Training."/>

            <AboutusCard title="philosophy" description="Murang’a University of Technology is committed to knowledge creation and advancement through innovative strategies and technologies for prosperity."/>
            </div>
            
            
        </section>

        
    )
}
export default AboutUs;