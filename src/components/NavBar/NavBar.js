import NavBarItem from '../NavBarItem/NavBarItem';
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
                <NavBarItem link='/' logo={Logo} classname='navbar-logo' alt='sportSee logo' />

                <NavBarItem>Accueil</NavBarItem>
        
                <NavBarItem>Profil</NavBarItem>
        
                <NavBarItem>Réglage</NavBarItem>

                <NavBarItem>Communauté</NavBarItem>
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