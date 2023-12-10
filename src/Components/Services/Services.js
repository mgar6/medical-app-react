import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    
    return (
        <div className= "services">
            <div className="services-header">
                <h2>Best Services</h2>
                <p>Love yourself enough to live a healthy lifestyle</p>
            </div>
            <div className="service-container">
                <Link to="/instant-consultation">
                    <div className="service-button">
                        <div className="service-image">
                            <img src=""></img>
                        </div>
                        <div className="service-title">
                            <h3>Instant Consultation</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/book-appointment">
                    <div className="service-button">
                        <div className="service-image">
                            <img src=""></img>
                        </div>
                        <div className="service-title">
                            <h3>Book an Appointment</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/self-checkup">
                    <div className="service-button">
                        <div className="service-image">
                            <img src=""></img>
                        </div>
                        <div className="service-title">
                            <h3>Self Checkup</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/health-tips">
                    <div className="service-button">
                        <div className="service-image">
                            <img src=""></img>
                        </div>
                        <div className="service-title">
                            <h3>Health Tips and Guidance</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Services;
