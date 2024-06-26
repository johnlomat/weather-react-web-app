import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="pt-6">
        <Container>
          <Row className="gy-4 row-cols-1">
            <Col className="text-center">
              <span className="me-2">Powered by</span>{" "}
              <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noreferrer noopener">
                <Image src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" width="107" height="50" />
              </a>
            </Col>
            <Col className="text-center">
              Developed by{" "}
              <a href="https://johnlomat.vercel.app/" className="text-black" target="_blank" rel="noreferrer noopener">
                John Lomat
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default FooterComponent;
