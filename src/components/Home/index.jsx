import { useEffect, useState } from 'react';
import LogoL from '../../assets/images/Logo-LY.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';


//change logo later
const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['u', 'c', 'k', 'y', ' ', 'K', 'i', 'm'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
     }, 3000);
    return () => clearTimeout(timeout);
   },[]);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoL} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={23}
          />
        </h1>
        <h2>Full Stack Developer / Javascript Expert / Cat Mom</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Home;
