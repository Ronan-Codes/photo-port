import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        // class is already a keyword in JS
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            {/* {} in JSX to use Javascript */}
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
        </section>
    );
}

export default About;