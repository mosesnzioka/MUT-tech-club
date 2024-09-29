import {Link} from 'react-router-dom';

import "./header.css";

function HeaderNavigation () {
    return(
        <div className="headernavigations">
            <h1 className="logotext">MUT Tech Club</h1>
            <nav>
                <ol className="navigation-list">
                    <li className="navigation-items"><Link to="/" className="navigation-link">home</Link></li>
                    <li className="navigation-items"><Link to="/Leaders" className="navigation-link">leaders</Link></li>
                    <li className="navigation-items"><Link to="#" className="navigation-link">events</Link></li>
                    <li className="navigation-items"><Link to="#" className="navigation-link">tracks</Link></li>
                </ol>
            </nav>
        </div>
    )
}



function Header() {
    return(
        <header>
            <HeaderNavigation />
        </header>
    )
}

export default Header;




