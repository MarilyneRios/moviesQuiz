import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const FormContainer = ({ children }) => {
  return (
    <div className=" p-5 my-5">
    <Container className='d-flex justify-content-center ' >
      <Row className="justify-content-md-center my-5" >
        <Col xs={12} sm={8} md={6} lg={4} className='card p-2 custom-bg' style={{ minWidth: '200px', maxWidth: '1000px',  }}>
          {children}
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default FormContainer;
