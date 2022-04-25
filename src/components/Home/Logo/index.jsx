import './index.scss';
import LogoL from '../../../assets/images/Logo-main.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {

  return (
    <div className="logo-container" >
      <img 
      className="solid-logo"
      src={LogoL} 
      alt="Javascript, Developer" />
    </div>
  );
};

export default Logo;
