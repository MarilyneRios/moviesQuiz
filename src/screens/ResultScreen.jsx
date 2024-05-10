//ResultScreen
import FormContainer from "../components/FormContainer";
import { Card, Button } from "react-bootstrap";
import { FaRegCheckCircle } from "react-icons/fa";
import { useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';
import { useNavigate } from "react-router-dom"; 

const ResultScreen = () => {
  const { score } = useContext(ScoreContext);
  const navigate = useNavigate();

  return (
    <FormContainer>
    <Card className="p-5 d-flex flex-column align-items-center bg-light">
      <Card.Body className="text-center">
      <Card.Title className="text-success"><FaRegCheckCircle size={50} /></Card.Title>
        <Card.Title className="mb-3 fs-3 text-success"> Félicitation !</Card.Title>
        <Card.Text className="py-3 ">
          Votre Score : {score} /10
        </Card.Text>
        <Card.Text>A bientôt.</Card.Text>
        <Button className="btn btn-warning" onClick={() => navigate('/quiz')}>Recommencer</Button>
      </Card.Body>
    </Card>
  </FormContainer>
  )

};

export default ResultScreen;
