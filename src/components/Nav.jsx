import { Link } from "react-router-dom";
import "../styles/Nav.scss";

function Nav() {
    return <nav className="nav">
        <ul className="nav-ul">
            <li className="nav-elements"><Link to={'/'}>Home</Link></li>
            <li className="nav-elements"><Link to={'/about'}>About</Link></li>
            <li className="nav-elements"><Link to={'/game'}>Game</Link></li>
        </ul>
    </nav>
}
export default Nav;