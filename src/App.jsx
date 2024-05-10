// App.jsx
import bgBlue from './assets/bg-bluegold.png'
import {Outlet} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header'; 
import './App.css'

function App() {
  return (
    <div className="d-flex flex-column justify-content-between vh-100"
    style={{ backgroundImage: `url(${bgBlue})`, backgroundSize:'cover'}}>
      <Header /> 
      <Container fluid className="px-5 py-3 overflow-auto">
        <Outlet  /> {/* Le composant Outlet affiche le contenu de la page actuelle */}
      </Container>
      <Footer/> 
    </div>
  )
}

export default App;
