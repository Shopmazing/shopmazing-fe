import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ben from './images/ben.jpg';
import kirk from './images/kirk.jpg';
import soni from './images/soni.jpg';
import ed from './images/Ed.png';
import jordan from './images/jordan.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <h1> Shopmazing team members </h1>
        <Container id="mainDiv">
          <Row xs={1} sm={2} md={3} lg={4}>
            <Col>
              <div id="benDiv">
                <h2>Ben Mills</h2>
                <img src={ben} alt="Ben" />
                <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
              </div></Col>
            <Col>
              <div id="kirkDiv">
                <h2>Kirk Garrison</h2>
                <img src={kirk} alt="Kirk" />
                <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
              </div></Col>
            <Col>
              <div id="edDiv">
                <h2>Edris Berg</h2>
                <img src={ed} alt="Edris" />
                <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
              </div></Col>
          </Row>
          <Row>
            <Col>
              <div id="jordanDiv">
                <h2>Jordan Fleming</h2>
                <img src={jordan} alt="Jordan" />
                <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
              </div></Col>
            <Col>
              <div id="soniDiv">
                <h2>Rushabh Soni</h2>
                <img src={soni} alt="Soni" />
                <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
              </div></Col>
          </Row>
        </Container>
        {/* // <div className="mainDiv">
            //     <h1> Shopmazing team members </h1>
            //     <div id="benDiv">
            //         <h2>Ben Mills</h2>
            //         <img src={ben} alt="Ben" />
            //         <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            //     </div>
            //     <div id="kirkDiv">
            //         <h2>Kirk Garrison</h2>
            //         <img src={kirk} alt="Kirk" />
            //         <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            //     </div>
            //     <div id="edDiv">
            //         <h2>Edris Berg</h2>
            //         <img src={ed} alt="Edris" />
            //         <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            //     </div>
            //     <div id="jordanDiv">
            //         <h2>Jordan Fleming</h2>
            //         <img src={jordan} alt="Jordan" />
            //         <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            //     </div>
            //     <div id="soniDiv">
            //         <h2>Rushabh Soni</h2>
            //         <img src={soni} alt="Soni" />
            //         <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
            //     </div>
            </div> */}
      </>
    )
  }
}
