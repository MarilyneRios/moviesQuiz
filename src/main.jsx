import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.jsx';
import QuizScreen from './screens/QuizScreen.jsx';
import ResultScreen from './screens/ResultScreen';
import AboutScreen from './screens/AboutScreen.jsx';
import { ScoreContext } from './context/ScoreContext.jsx';

// Création du routeur
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route index={true} path='/about' element={<AboutScreen />} />
      <Route index={true} path='/quiz' element={<QuizScreen />} />
      <Route index={true} path="/result" element={<ResultScreen/>} />
    </Route>
  )
);

const Main = () => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ScoreContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
