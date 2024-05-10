// Footer.jsx
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='bg-dark bg-gradient text-white w-100  py-3 position-fixed bottom-0'>
      <Container>
        <p className='text-center'>
          © {new Date().getFullYear()} Movie Quiz App | Exercice d&apos;entrainement frontend avec Vite et React
        </p>
        <p className='text-center'>
          Made with ❤️ by Marilyne
        </p>
      </Container>
    </div>
  )
}

export default Footer;
