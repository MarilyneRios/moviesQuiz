import { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import { Card, ListGroup } from "react-bootstrap";
import questions from "../data/DataQuestions";
import Quit from "./btn/Quit";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ScoreContext } from '../context/ScoreContext.jsx';
import Score from "./Score";
import Chrono from "./Chrono";

const QuestionsContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(null);
  const { score, setScore } = useContext(ScoreContext);
  const [timeLeft, setTimeLeft] = useState(30);
  const [forceUpdate, setForceUpdate] = useState(false);

  const navigate = useNavigate();

  // Réinitialiser le score à zéro lorsque le quiz commence
  useEffect(() => {
        setScore(0);
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  
    // Ajoutez un délai avant de passer à la question suivante
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedAnswer(null); 
      } else {
        navigate('/result'); 
      }
    }, 1000); // Attendre 1 seconde avant de passer à la question suivante pour voir la couleur de la réponse
  };
  

// Gestion du décompte du temps
useEffect(() => {
  //console.log('Setting time left to 30');
  setTimeLeft(30); 

  const countdown = setInterval(() => {
    setTimeLeft((prevTimeLeft) => {
      if (prevTimeLeft > 0) {
        return prevTimeLeft - 1;
      } else {
        clearInterval(countdown); // Arrêter le décompte du temps
        if (currentQuestion < questions.length - 1) {
          //console.log('Time is up, moving to next question');
          setSelectedAnswer(questions[currentQuestion].correctAnswer);
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          setSelectedAnswer(null);
        } else {
          //console.log('Time is up, navigating to result'); 
          navigate('/result');
        }
        return 0;
      }
    });
  }, 1000);

  return () => {
    clearInterval(countdown);
  };
}, [currentQuestion]);

// Gestion du passage à la question suivante
useEffect(() => {
  if (timeLeft === 0) {
    if (currentQuestion < questions.length - 1) {
     // console.log('Time left is 0, moving to next question'); 
      setSelectedAnswer(questions[currentQuestion].correctAnswer);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
     // console.log('Time left is 0, navigating to result'); 
      navigate('/result');
    }
  }
}, [timeLeft, currentQuestion]);


  const handleQuitClick = () => {
    navigate('/');
  };


  return (
    <FormContainer>
      <Card
        className="p-5 d-flex flex-column align-items-center  bg-light"

      >
        <div className="w-100 d-flex justify-content-end" style={{position: 'absolute', top:'5px ', right: '5px'}}>
          <Quit onClick={handleQuitClick} />
        </div>
     
        <Score score={score} />
        <Chrono timeLeft={timeLeft} setTimeLeft={setTimeLeft} style={{position: 'absolute', top:'10px ', right: '10px'}}/>
    
        <h3 className="text-center text-black mt-0 my-3">
          {questions[currentQuestion].question}
        </h3>
        {questions[currentQuestion].imageUrl ? (
          <img
            src={questions[currentQuestion].imageUrl}
            alt="Question"
            className="rounded mb-3 border "
            style={{ height: "250px" }}
          />
        ) : (
          <iframe
            width="560"
            height="315"
            className="mb-3 rounded"
            src={questions[currentQuestion].videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
        <ListGroup variant="flush" className="rounded w-75">
  {questions[currentQuestion].answers.map((answer, index) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    const isSelected = selectedAnswer === answer;

    let backgroundColor = "";
    if (isSelected) {
      backgroundColor = isCorrect ? "green" : "red";
    }

    return (
      <ListGroup.Item
        key={index}
        action
        onClick={() => handleAnswerClick(answer)}
        style={{ backgroundColor }}
      >
        {answer}
      </ListGroup.Item>
    );
  })}
</ListGroup>


      </Card>
    </FormContainer>
  );
};

export default QuestionsContainer;
