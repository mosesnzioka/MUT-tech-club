import "./leaders.css";
import products from "../../data/product";
import Title from "../title/Title";
import { FaLinkedinIn } from "react-icons/fa";

function Sociallinks({children}){
    return(
        {children}
    )
}

function LeadersCard({ thumbnail, title, description }) {
    return (
        <div className="leaders-card">
            <div className="leaders-img">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="leader-body">
                <h3 className="leader-card-title">{title}</h3>
                <p className="leader-description">{description}</p>
            </div>
        </div>
    );
}

function Leaders() {
    return (
        <section className="leaders-section">
            <Title maintitle="this are our leaders"/>
            <div className="leaders-card-container">
                {products.map((product, i) => (
                    <LeadersCard
                        thumbnail={product.thumbnail}
                        title={product.title}
                        description={product.description}

                        key={i} 

                        
                    />
                ))}

                
            </div>

            <a href="#" className="leaders-more-btn">more leaders</a>
        </section>
    );
}

export default Leaders;
