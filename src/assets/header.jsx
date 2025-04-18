function Header(){
    return(
        <header className="flex-container">
        <img src="./react-logo.png" className="react-logo" alt="react-logo"></img>

        <nav> 
            <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
    </header>
    )
}
export default Header