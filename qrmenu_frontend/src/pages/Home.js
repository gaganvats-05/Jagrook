import { Button, Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Home = () => (
  <MainLayout>
    <Jumbotron className="bg-light">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1>
              <b>Jagrook</b>
            </h1>
            <h5 className="mt-4 mb-4">
              Purchase Smart. Save Time. Save The World.
            </h5>
            <br />
            <Button href="/places" variant="standard" size="lg">
              Enter Catalogue
            </Button>
          </Col>
          <Col md={6}>
            <Image
              style={{ background: "#fc285d" }}
              src="https://res.cloudinary.com/dgg6izgtw/image/upload/v1649550211/jagrook-logos_white_nxkmph.png"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </MainLayout>
);

export default Home;
