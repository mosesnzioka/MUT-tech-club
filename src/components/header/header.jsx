import "./header.css";

function HeaderNavigation () {
    return(
        <div className="headernavigations">
            <h1 className="logotext">MUT Tech Club</h1>
            <nav>
                <ol className="navigation-list">
                    <li className="navigation-items"><a href="#" className="navigation-link">home</a></li>
                    <li className="navigation-items"><a href="#" className="navigation-link">about us</a></li>
                    <li className="navigation-items"><a href="#" className="navigation-link">Testimonials</a></li>
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




