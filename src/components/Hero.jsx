import { Container, Card, Button, Image, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cup from "../assets/cup.png";

const Hero = () => {
  return (
    <div className=" p-5 my-5">
      <Container className="d-flex justify-content-center">
        <Row className="justify-content-md-center my-5">
          <Col xs={12} sm={8} md={6} lg={4} className="">
            <Card className="p-5 d-flex flex-column align-items-center bg-light">
              <h3 className="text-center mt-0">Coffee break&apos;s Quiz</h3>
              <Image src={Cup} className="w-100 rounded my-5" />

              <div className="d-flex">
                <LinkContainer to="/quiz">
                  <Button variant="btn btn-warning" className=" w-100 px-4 mb-0 ">
                  Commencer
                  </Button>
                </LinkContainer>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
