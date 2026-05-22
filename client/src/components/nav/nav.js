import './nav.css';

function Nav(){
    return(
        <nav className="nav_bar">
            <a href="/">
                <img src="/logo.png" alt="Logo" className="logo" />
            </a>
            <ul className="nav_list">
                <li className="nav_item"><a href="/">Home</a></li>
                <li className="nav_item"><a href="#about">About</a></li>
                <li className="nav_item"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav