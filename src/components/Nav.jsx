import { Link } from "react-router-dom";
import "../styles/Nav.scss";

function Nav() {
    return <nav className="nav">
        <ul className="nav-ul">
            <li className="nav-elements"><Link className="links" to={'/'}>Home</Link></li>
            <li className="nav-elements"><Link className="links" to={'/about'}>About</Link></li>
            <li className="nav-elements"><Link className="links" to={'/game'}>Game</Link></li>
        </ul>
    </nav>
}
export default Nav;