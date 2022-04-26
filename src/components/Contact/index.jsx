import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import EmailLotti from '../Lottie';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init('OvQMSjSkduLoJ44uV');
    emailjs.send('lucky.hw.kim', 'template_913ummj').then(
      function (response) {
        alert('Message succefully sent!');
        window.location.reload(false);
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        alert('Failed to send the message, please try again');
        console.log('FAILED...', error);
      }
    );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            Connect with me! I would love to hear about what you think of my
            projects. Looking for awesome job opportunities & human connection!!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div id="email-lotti">
        <EmailLotti/>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
