import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='bg-dark bg-gradient text-white w-100  py-3 position-fixed bottom-0'>
      <Container >
        <p className='text-center'>
          © {new Date().getFullYear()} Movie Quiz App | Exercice d&apos;entrainement frontend avec Vite et React
        </p>
        <p>https://github.com/MarilyneRios/moviesQuiz</p>
        <p >
          Made with ❤️ by Marilyne
        </p>
      </Container>
    </div>
  )
}

export default Footer;
