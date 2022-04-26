import React, { useEffect, useRef } from "react";
// import lottie from "lottie-web";
// import emailAnimation from "./email-lotti.json";
import email from "./email.json"
import Lottie from 'react-lottie';




const EmailLotti = () => {



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: email,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
        <div>
        <Lottie
          options={defaultOptions}
          height={450}
          width={450}
        />
      </div>
  )
};

export default EmailLotti;

