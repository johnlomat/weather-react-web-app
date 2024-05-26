import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Button, Placeholder } from "react-bootstrap";
import WeatherService from "../services/WeatherService";
import JsonQuery from "json-query";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    WeatherService.getInitialCountryWeather().then((res) => {
      this.setState({
        currentWeather: res.data,
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <Container>
        <Row className="gy-sm-0 gy-4">
          {/* <Placeholder animation="wave" className="col-auto pe-0">
            <Placeholder sm={1} bg="bg-gray-500" className="px-8 h-100 rounded-3" />
          </Placeholder> */}
          <Col sm="auto" className="pe-sm-0">
            <div className="py-2 px-3 bg-gray-200 rounded-3 d-sm-flex d-inline-block align-items-center">
              <Image
                src={
                  JsonQuery("current.condition.icon", {
                    data: this.state.currentWeather,
                  }).value
                }
                fluid
                width="32"
                height="32"
              />
              <span className="ms-1">
                {
                  JsonQuery("location.country", {
                    data: this.state.currentWeather,
                  }).value
                }
              </span>
            </div>
          </Col>
          <Col>
            <Form inline="true" className="h-100">
              <Row className="h-100 gy-sm-0 gy-4">
                <Col>
                  <Form.Control type="text" placeholder="Search city name, IP address or Latitude/Longitude (decimal degree)" className="mr-sm-2 h-100 py-sm-2 py-4" />
                </Col>
                <Col sm="auto" className="ps-sm-0">
                  <Button variant="primary" type="submit" className="h-100 px-6 w-sm-auto w-100">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NavbarComponent;
