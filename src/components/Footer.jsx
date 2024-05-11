import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-dark bg-gradient text-white w-100 py-3 bottom-0'>
      <Container className='text-center'>
        <p className='mb-0'>
          © {new Date().getFullYear()} Movie Quiz App | Exercice d&apos;entrainement frontend avec Vite et React
        </p>
         <p className='mb-2'>
          Made with ❤️ by Marilyne
        </p>
        <div className="d-flex justify-content-center  link-white link-offset-2 link-underline-opacity-100-hover">
        <Link
          href="mailto:Roads<rios.marilyne@gmail.com"
          className="text-decoration-none text-light text-primary-hover mx-3"
        >
          <FaEnvelope /> Contact
        </Link>
        <Link
          href="https://github.com/MarilyneRios/moviesQuiz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-light text-primary-hover mx-1"
          >
         <FaGithub /> GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/marilyne-rios-59a13015b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-light text-primary-hover mx-3"
        >
          <FaLinkedin /> Linkedin
        </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;

//<p>https://github.com/MarilyneRios/moviesQuiz</p>