import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
    return (
        <>
            <section className='about'>
                <Back name='About Us' title='About Us - Who We Are?' cover={img} />
                <div className='container flex mtop'>
                    <div className='left row'>
                        <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

                        <p>we are dedicated to helping you find your dream home or make the most of your real estate investment. With years of experience in the industry, our team of expert agents provides personalized guidance, market insights, and seamless transactions. Whether you're buying, selling, or investing, we ensure a smooth and successful journey.</p>
                        <p> We believe in building lasting relationships by understanding your unique needs and offering tailored solutions. From cozy family homes to high-value investments, our team is here to guide you with expert advice and a personal touch</p>
                        <button className='btn2'>More About Us</button>
                    </div>
                    <div className='right row'>
                        <img src='./immio.jpg' alt='' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
