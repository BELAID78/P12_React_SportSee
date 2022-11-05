import Logo from './../../assets/images/logo.svg';

function NavBar() {
    return (
        <div className="navbar">
            <ul className='navbar-content'>
                <li>
                    <img className='navbar-logo' src={Logo} alt='sportSee logo' />
                </li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    )
}

export default NavBar