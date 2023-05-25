import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="sub-div">
    <div className="for-flex">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img"
      />
      <p className="paragraph">Wave</p>
    </div>
    <div className="for-flex1">
      <Link to="/" className="paragraph1">
        Home
      </Link>
      <Link to="/about" className="paragraph1">
        About
      </Link>
      <Link to="/contact" className="paragraph1">
        Contact
      </Link>
    </div>
  </nav>
)
export default Header
