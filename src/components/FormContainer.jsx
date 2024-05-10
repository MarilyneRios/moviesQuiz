import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const FormContainer = ({ children }) => {
  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh', margin: '0', padding: '0', minWidth: '100vw' }}>
      <Row >
        <Col xs={4} sm={6} md={8} lg={12} className='card p-2 custom-bg' style={{ minWidth: '200px', maxWidth: '1000px',  }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
