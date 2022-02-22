import { NavLink } from "react-router-dom";

import './NeonNav.css';

const NeonSocialNav = () => {
  return (
    <nav>
        <ul className='social-list'>
          <li className='twitter'>
            <NavLink to="/">
              <i className="fa-brands fa-twitter"></i>
            </NavLink>
          </li>
          <li className='instagram'>
            <NavLink to="/recent">
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
          </li>
          <li className='facebook'>
            <NavLink to="/library">
              <i className="fa-brands fa-facebook-f"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default NeonSocialNav;