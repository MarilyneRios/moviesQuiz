//chrono
import { useState, useEffect } from "react";

const Chrono = ({ timeLeft }) => {
  const [count, setCount] = useState(timeLeft);

  useEffect(() => {
    setCount(timeLeft); // Réinitialiser le compteur chaque fois que timeLeft change
  }, [timeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  let color;
  if (count > 20) {
    color = "green";
  } else if (count > 10) {
    color = "orange";
  } else {
    color = "red";
  }

  return (
    <div>
      <h2 style={{ color: color }}>Time : {count} s</h2>
    </div>
  );
};

export default Chrono;



