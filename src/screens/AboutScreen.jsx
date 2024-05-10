//AboutScreen
import { Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const AboutScreen = () => {
  return (
    <FormContainer>
      <Card className="p-5 d-flex flex-column align-items-center bg-light">
        <Card.Body className="text-center">
          <Card.Title className="mb-3 fs-3 text-warning">La pause quiz</Card.Title>
          <Card.Text className="py-3 ">
            J&apos;espère que vous avez aprécié ce quiz autant que j&apos;ai aimé le créer.
            Ceci est un exercice pratique avec Vite + react avec bootstrap.
          </Card.Text>
          <Card.Text>Aprécier votre pause quiz!</Card.Text>
        </Card.Body>
      </Card>
    </FormContainer>
  );
};

export default AboutScreen;
