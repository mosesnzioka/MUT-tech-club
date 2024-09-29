import Title from "../title/Title"
import "./testimonies.css"
import ifedha from "../../assets/ifedha.jpg"
import stanly from "../../assets/stanly.jpg"

function Testimoniescard({studentavater,studentname, title, text}){
    return(
        <div className="testimonies-card">
            <div className="testimonies-card-student-details">
                <img src={studentavater} alt={studentname} />
                <h4 className="testmonie-card-student-name">{studentname}</h4>
            </div>
            <h4 className="testimony-title">{title}</h4>
            <p className="testimony-text">{text}</p>
        </div>
    )
}



function Testmonies(){
    return(
        <section>
            <Title maintitle="testimonies from our aluminies"/>
            <div className="testimony-container">
                <Testimoniescard
                studentavater={ifedha}
                studentname="magdaline kamau"
                title="students chairperson"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
            </div>

        </section>
    )
}
export default Testmonies;