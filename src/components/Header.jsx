import logoImage from '../assets/plantnow.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';


function Header () {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  }
  return (
    <header>
      <div className="navigation">
        <nav>
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>

          <div className={`nav-list ${showMenu ? 'show' : ''}`}>
            <ul className="menu">
              <li><Link to="/" onClick={()=> scrollToSection('home')}>Home</Link></li>
              <li><Link to="/#about" onClick={()=> scrollToSection('about')}>About Us</Link></li>
              <li><Link to="/#contact" onClick={()=> scrollToSection('contact')}>Contact Us</Link></li>
            </ul>

            <div className="right-nav">
                <Link to="/purchase">Make Purchase</Link>
                <button className='btn' style={{display:'inline'}}>
              <Link to="/login">Login</Link>
              </button>
         
            </div>
          </div>

          <button className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>

      </div>
    </header>

    
  );
}

export default Header;
