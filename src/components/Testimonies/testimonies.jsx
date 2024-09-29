import Title from "../title/Title"
import "./testimonies.css"
import ifedha from "../../assets/ifedha.jpg"
import stanly from "../../assets/stanly.jpg"
import Carousel from 'react-elastic-carousel';
import testmonies from "../../data/testimonies";

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
               <Carousel enableAutoPlay={true} autoPlaySpeed={5000}>

               {
                    testmonies.map((testmony, i)=>(
                        <Testimoniescard
                        key={i}
                        studentavater={testmony.studentavater}
                        studentname={testmony.studentname}
                        title={testmony.text}
                        text={testmony.text}
                        />
                    ))
                }

               </Carousel>
                
            </div>

        </section>
    )
}
export default Testmonies;