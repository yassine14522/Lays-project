import React from "react";
import messi1 from './messi1.mp4'
import './styleAbout.css'
import { Link } from "react-router-dom"
import { useState } from "react";
import lays from './lays.jpeg'
import { testimonials } from "./customer"


export default function About() {
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

            <header>
                <ul>
                    <Link to={'/accueil'}><li><img src={lays} style={{ width: '30px' }} alt='img' /> </li></Link>
                    <li>Products</li>
                    <Link to={'/about'}><li>About Us/video</li></Link>
                    <li>Recipes</li>
                    <li>Were To Buy</li>
                    <li><input type="search" placeholder="   lays....!" className="search" /></li>
                    <Link to={'/sign-up'}><li className="sign">Sign Up</li></Link>
                </ul>
            </header>
            <div>
                <h2 style={{ marginTop: "7%", marginBottom: "2%", textAlign: "center", fontSize: "50px", color: "#F5A623" }}> Messi and Lays</h2>
                <video controls autoPlay loop muted style={{ marginLeft: "21%" }} width="58%" height="600">
                    <source src={messi1} type="video/mp4" />
                </video><br />
                <h2 style={{ fontSize: "40px", textAlign: "center", color: "#F5A623", marginTop: "2%" }}>About Lays</h2>
                <p style={{ fontSize: "30px", textAlign: "center", marginTop: "1%" }}>
                    In 1934, salesman Herman Lay opened a snack food operation in Nashville,<br /> Tennessee. In 1938,
                    he purchased the Atlanta, Georgia-based potato chip manufacturer "Barrett Food Company",<br />
                    renaming it "H.W. Lay Lingo & Company".
                    Lay crisscrossed the southern United States, selling the product from the trunk of his car.

                </p>
                <br /><br /><br />

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
        </>


    )
}