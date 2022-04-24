import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

// Logo and sub-logo will be replaced to lucky logo
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Logo-subtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#9fd1bb" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#9fd1bb" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#9fd1bb" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/luckykim/"
          >
            <FontAwesomeIcon icon={faLinkedin} color='#9fd1bb' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lucky-hw-kim"
          >
            <FontAwesomeIcon icon={faGithub} color='#9fd1bb' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/lucky_hw_kim"
          >
            <FontAwesomeIcon icon={faTwitter} color='#9fd1bb' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.discord.com/users/895605978429550622"
          >
            <FontAwesomeIcon icon={faDiscord} color='#9fd1bb' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
