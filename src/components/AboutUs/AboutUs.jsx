import React from 'react'
import nosotroOne from './../../img/nosotros-1.jpg'
import nosotroTwo from './../../img/nosotros-2.jpg'
import './AboutUs.css'

export const AboutUs = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="about__container">
                    <div className="about__content">
                        <div className="about__title">
                            NOSOTROS
                        </div>
                        <div className="about__box-1">
                            <div className="about__img"><img src={nosotroOne} alt="Zapatillas" /></div>
                            <div className="about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        </div>
                        <div className="about__box-2">
                            <div className="about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                            <div className="about__img"><img src={nosotroTwo} alt="Runner" /></div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )   
}
