import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { faCss3, faGitAlt, faHtml5, faJs, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
     }, 3000);
    return () => clearTimeout(timeout);
   },[]);

  return (
  
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['A','b','o','u','t',' ','m','e']}
              idx={15}
            />
          </h1>
          <p>I'm a full stack developer based in Vancouver, BC. Recently graduated from Lighthouse Labs, 3 months immersive coding bootcamp and ended up wowing myself with what I was able to achieve with some hard work and determination.</p>
          <p> Within those 3 months, I was able to be proficient in:  <b>JavaScript, Git, Ruby, React, NodeJS, SQL, HTML5/CSS6/SASS Mocha & Chai, Storybook, Cypress </b> and more to go.</p>
          <p>  Now I am ready to work for you and help you build the smoothest and most awesome application possible.</p>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faNodeJs} color='#215732' />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
   </>
   )
}

export default About