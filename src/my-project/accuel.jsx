import { Link } from "react-router-dom"
import { useState } from "react"
import './btn.css'
import './footer.css'
import lays from './lays.jpeg'
import lays6 from './lays6.jpg'
import lays10 from './download.jpeg'
import lays2 from './lays2.png'
import { testimonials } from "./customer"
import { data1, data } from "./data"


export default function Accueil() {

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentTestimonialIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setCurrentTestimonialIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };
    const currentTestimonial = testimonials[currentTestimonialIndex];


    return (
        <>
            <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <ul>
                    <Link to={'/accueil'}><li><img src={lays} alt="font" style={{ width: '30px' }} /> </li></Link>
                    <li>Products</li>
                    <Link to={'/about'}><li>About Us / Video</li></Link>
                    <li>Recipes</li>
                    <li>Were To Buy</li>
                    <li><input type="search" placeholder="   lays....!" className="search" /></li>
                    <Link to={'/sign-up'}><li className="sign">Sign Up</li></Link>
                    <Link to={'/Cards'}><li > Cards</li></Link>

                </ul>
            </header>

            <div className="lays1">
                <img className="imageFit" src={lays2} alt="imageFit" />

                <h1 style={{ backgroundColor: 'transparent', fontSize: '90px', padding: '90px' }}>Feel the best <br />
                    Taster With Lays <br />
                    Crisps</h1>
                <p style={{ backgroundColor: 'transparent', marginLeft: "90px", fontSize: '30px' }}>
                    Feel the best and awesome taste with lays crips . There has <br />
                    been variose kind of crisps you can eat and feel the wonder <br />
                    taste of this awesome product .
                </p>
                <button className="Snap">Shop Now</button>

            </div>
            <div>
                <h1 style={{ marginLeft: '90px', fontSize: "50px", marginTop: "50px" }}>We Provide the Tasty and <br />
                    best Chips for you !</h1>
                <img style={{ marginLeft: "1000px", width: "350px" }} src={lays10} alt="lays10" />
                <img className="lays5" src={lays6} alt="lays6" />
                <div className="nav">
                    <h3>LAY`S BLT Flavored </h3>
                    <p style={{ color: "gray" }}>Price</p><br />
                    <h3>$3.93</h3><br />
                    <p style={{ fontStyle: "oblique", color: "gray" }}>
                        it all starts with fram-grown potatos . cocked and seasoned to <br />
                        perfection . Then we add the sweet taste of honey and the spicy<br />
                        kick og BBQ sauce . So every LAYS potato chips is perfeectly crispy<br />
                        and delicious . Happiness in Every Bite
                    </p>
                    <button className="buy">Buy Now</button>  <button className="see-more">See More </button>

                </div>

            </div>

            <div>
                <h1 style={{ textAlign: "center", marginTop: "90px" }}>Find Best Taster Here</h1>
                <br />
                <p style={{ textAlign: "center", fontSize: "20px", color: "gray" }}>
                    Feel the best and awesome taste with lays crisps . there has been <br />
                    various kind of crisps you can eat and feel !
                </p>
                <br /><br />
                <div className="display">
                    {
                        data1.map(item =>
                            <>
                                <div>
                                    <img style={{ width: "400px", marginRight: "10px", borderRadius: "10px 10px 10px 80px" }} alt="sourceImage" src={item.ImageSrc} />
                                    <h4 style={{ marginTop: "15px" }}>{item.Price}</h4>
                                    <p style={{ marginTop: "10px", color: "gray" }}>{item.Description}</p>
                                    <img style={{ width: "130px" }} src={item.starsSrc} alt="srcImage" />
                                    <div style={{ display: "flex" }}>
                                        <div data-tooltip="Add to Card" className="button">
                                            <div className="button-wrapper">

                                                <div className="text">Buy Now</div>
                                                <span className="icon">
                                                    <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                                    </svg>

                                                </span>
                                            </div>
                                        </div>

                                        <button className="cta">
                                            <span>See More</span>
                                            <svg width="15px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>



                                </div>

                            </>
                        )
                    }
                </div>

                <button className="see-moreDetails1">See All</button>


            </div>

            <div>
                <h1 style={{ textAlign: "center", fontSize: "50px", margin: "60px" }}>Our populaires chips</h1>
                <div className="display">

                    {
                        data.map(item =>
                            <>
                                <div>
                                    <img style={{ width: "400px" }} src={item.ImageSrc} alt="product" />
                                    <p style={{ marginTop: "10px", color: "gray" }}>{item.Description}</p>
                                    <img style={{ width: "130px" }} src={item.starsSrc} alt="rating" />
                                </div>
                            </>
                        )
                    }
                </div>

            </div>

            <div style={{ backgroundColor: "orange", width: "100%", height: "700px" }}>
                <h1 className="title1">What's Our Customer Say</h1>
                <p className="paragraph">{currentTestimonial.message}</p>
                <hr style={{ width: "50%", marginLeft: "250px", marginTop: "90px" }} />
                <h1 style={{ backgroundColor: "transparent", marginLeft: "250px", marginTop: "30px" }}>{currentTestimonial.name}</h1>
                <p style={{ backgroundColor: "transparent", marginLeft: "250px", marginTop: "20px", fontSize: "30px" }}>{currentTestimonial.age}</p>
                <button onClick={handleLeftClick} className="sign1">Left</button>
                <button onClick={handleRightClick} className="sign2">Right</button>
            </div>
            <footer className="footer">
                <div className="socialIcons">
                    <a href="https://www.facebook.com/lays?mibextid=ZbWKwL"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/lays?igsh=MXRtdGF4bjBkYTQ4cw=="><i className="fab fa-instagram"></i></a>
                    <a href="https://x.com/LAYS?s=20"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/@Lays"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><a href="https://www.youtube.com/@Lays">Home</a></li>
                        <li><a href="https://www.youtube.com/@Lays">News</a></li>
                        <li><a href="https://www.youtube.com/@Lays">About</a></li>
                        <li><a href="https://www.youtube.com/@Lays">Contact Us</a></li>
                        <li><a href="https://www.youtube.com/@Lays">Our Team</a></li>
                    </ul>
                </div>
                <div className="footerBottom">
                    <p>Copyright &copy; 2024; Designed by <span className="designer">Mouna Rouissate, Yassine Chadani, Oussama Essalhi</span></p>
                </div>
            </footer>

        </>
    )
}