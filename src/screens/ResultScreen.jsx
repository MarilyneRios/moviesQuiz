import FormContainer from "../components/FormContainer";
import { Card, Button } from "react-bootstrap";
import { FaRegCheckCircle } from "react-icons/fa";
import { useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext';
import { useNavigate } from "react-router-dom"; 

const ResultScreen = () => {
  const { score } = useContext(ScoreContext);
  const navigate = useNavigate();

  let color;
  if (score > 6) {
    color = "green";
  } else if (score > 4) {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <FormContainer>
      <Card className="p-5 d-flex flex-column align-items-center bg-light">
        <Card.Body className="text-center">
          <Card.Title className="text-success"><FaRegCheckCircle size={50} /></Card.Title>
          <Card.Title className="mb-3 fs-3 text-success"> Félicitation !</Card.Title>
          <Card.Text className="pt-3 ">
            Votre Score :
          </Card.Text>
          <Card.Text className="pb-3 fs-4" style={{ color: color }}> {score} /10</Card.Text>
          <Card.Text>A bientôt.</Card.Text>
          <Button className="btn btn-warning" onClick={() => navigate('/quiz')}>Recommencer</Button>
        </Card.Body>
      </Card>
    </FormContainer>
  )
};

export default ResultScreen;
