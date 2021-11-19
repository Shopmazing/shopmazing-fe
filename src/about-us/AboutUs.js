import React, {Component} from 'react';
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
              <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
            </div>
          </div>
          <div className="about-us__cards-card">
            <img src={ed} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Edris Berg</h2>
              <p> Software developer, have background in Network Administration and Security. Passionate about software engineering, computer security and entrepreneurship</p>
            </div>
          </div>
          <div className="about-us__cards-card">
            <img src={jordan} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Jordan Fleming</h2>
              <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
            </div>
          </div>
          <div className="about-us__cards-card">
            <img src={soni} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Rushabh Soni</h2>
              <p>Software developer, background as an airline captain for over 11 years.
                Having spent over a decade and a half in a high skill, high risk industry where timely decision making is of utmost importance I hope to bring all of these valuable past experiences along with my thirst for knowledge and the need for constant innovation/self improvement into my new</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
