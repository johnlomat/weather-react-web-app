import React, { Component } from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import WeatherService from "../services/WeatherService";
import JsonQuery from "json-query";

class TodayOverviewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeatherBulk: [],
    };
  }

  async componentDidMount() {
    this.setState({ currentWeatherBulk: await WeatherService.getCurrentWeatherBulk() });
  }

  render() {
    return (
      <Container>
        <Row className="pt-4">
          <Col sm={12}>
            <h1 className="fs-12 fw-bold">Today Overview</h1>
          </Col>
        </Row>
        <Row className="gy-5">
          {this.state.currentWeatherBulk.map((item) => (
            <Col sm={12} md={6} lg={3} key={JsonQuery("location.name", { data: item }).value}>
              <Card className="bg-gray-200 h-100">
                <Card.Body className="text-center d-flex flex-column justify-content-center">
                  <Card.Title>
                    {`
                      ${
                        JsonQuery("location.region", {
                          data: item,
                        }).value
                      }, 
                      ${
                        JsonQuery("location.country", {
                          data: item,
                        }).value
                      }
                    `}
                  </Card.Title>
                  <Row xs={1}>
                    <Col>
                      <Image
                        src={
                          JsonQuery("current.condition.icon", {
                            data: item,
                          }).value
                        }
                        fluid
                        width="64"
                        height="64"
                      />
                    </Col>
                    <Col>
                      <span className="fs-18 fw-bold">
                        {
                          JsonQuery("current.temp_c", {
                            data: item,
                          }).value
                        }
                      </span>
                      <span>°C</span>
                    </Col>
                    <Col>
                      {
                        JsonQuery("current.condition.text", {
                          data: item,
                        }).value
                      }
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TodayOverviewComponent;
