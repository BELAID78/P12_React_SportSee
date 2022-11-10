import { useContext } from "react"
import { ShowNavBarContext } from "../App"
import Logo from '../assets/images/logo.svg'

/**
 * Component for render the home page
 * 
 * @returns {React.ReactElement} 
 */
function Home() {

    //context to use the show nav bar global state
    const showNavBar = useContext(ShowNavBarContext);

    //hide the nav bar and side bar by set the state to false
    showNavBar.setShow(false);

    return (
        <div className="home">
            <p className="infos">👋 Bienvenue dans l'application  <img src={Logo} alt='sportSee logo' /></p>
            <p className="infos">Sélectionner un utilisateur ⬇️ pour tester l'application </p>
            <p className="user">- <a href="/user/12">Karl Dovineau</a></p>
            <p className="user">- <a href="/user/18">Cecilia Ratorez</a></p>
        </div>
    )
}

//export the App component
export default Home