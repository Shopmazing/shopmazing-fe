import React, { Component } from 'react';
import ben from './images/ben.jpg';
import kirk from './images/kirk.jpg';
import soni from './images/soni.jpg';
import ed from './images/Ed.png';
import jordan from './images/jordan.jpg';
import './about-us.css'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <h1 className="about-us__heading"> Shopmazing team </h1>
                <div className="about-us__cards">
                    <div className="about-us__cards-card">
                        <img src={ben} alt="" />
                        <div className="about-us__cards-card-text">
                            <h2>Ben Mills</h2>
                            <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>
                    </div>
                    <div className="about-us__cards-card">
                        <img src={kirk} alt="" />
                        <div className="about-us__cards-card-text">
                            <h2>Kirk Garrison</h2>
                            <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>
                    </div>
                    <div className="about-us__cards-card">
                        <img src={ed} alt="" />
                        <div className="about-us__cards-card-text">
                            <h2>Edris Berg</h2>
                            <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>
                    </div>
                    <div className="about-us__cards-card">
                        <img src={jordan} alt="" />
                        <div className="about-us__cards-card-text">
                            <h2>Jordan Fleming</h2>
                            <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>
                    </div>
                    <div className="about-us__cards-card">
                        <img src={soni} alt="" />
                        <div className="about-us__cards-card-text">
                            <h2>Rushabh Soni</h2>
                            <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
