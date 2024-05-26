import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="pt-6">
                <Container>
                    <Row>
                        <Col className="text-center">
                            Powered by <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank">
                                <Image src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png" alt="Weather data by WeatherAPI.com" width="107" height="50" /></a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default FooterComponent;