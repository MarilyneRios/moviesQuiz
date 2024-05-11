// App.jsx
import bgBlue from './assets/bg-bluegold.png'
import {Outlet} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header'; 
import './App.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"
    style={{ backgroundImage: `url(${bgBlue})`, backgroundSize:'cover'}}>
      <Header /> 
      <Container fluid className="flex-grow-1 d-flex align-items-center justify-content-center overflow-auto ">
        <Outlet  /> {/* Le composant Outlet affiche le contenu de la page actuelle */}
        
      </Container>
      <Footer className="w-100" /> 
    </div>
  )
}

export default App;
