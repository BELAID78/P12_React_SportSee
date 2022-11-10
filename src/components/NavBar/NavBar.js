import Logo from './../../assets/images/logo.svg';

/**
 * Component for render the navbar
 * 
 * @returns {React.ReactElement}
 */
function NavBar() {
    return (
        <div className="navbar">
            <ul className='navbar-content'>
                <li>
                    <a href='/'><img className='navbar-logo' src={Logo} alt='sportSee logo' /></a>
                </li>
                <li><a href='#'>Accueil</a></li>
                <li><a href='#'>Profil</a></li>
                <li><a href='#'>Réglage</a></li>
                <li><a href='#'>Communauté</a></li>
            </ul>
        </div>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {

}

//export Navbar component
export default NavBar