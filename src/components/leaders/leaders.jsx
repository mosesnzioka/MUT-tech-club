import "./leaders.css";
import products from "../../data/leaders";
import Title from "../title/Title";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";






function LeadersCard({ thumbnail, title, description, linkedinlink, facebookLink, twitterLink, instagramlink }) {
    return (
        <div className="leaders-card">
            <div className="leaders-img">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="leader-body">
                <h3 className="leader-card-title">{title}</h3>
                <p className="leader-description">{description}</p>
                <div className="links">
                {linkedinlink && (
                        <a  href={linkedinlink} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    )}
                    {facebookLink && (
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    )}
                    {twitterLink && (
                        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    )}

                     {instagramlink && (
                        <a href={instagramlink} target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare />
                        </a>
                    )}

                    
                </div>
                
                
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
                        instagramlink={product.instagramlink}
                        linkedinlink={product.linkedinlink} 
                        facebookLink={product.facebookLink}
                        twitterLink={product.twitterLink}

                        key={i} 

                        
                    />
                    
                ))}
                

                

                
            </div>

           
        </section>
    );
}

export default Leaders;
