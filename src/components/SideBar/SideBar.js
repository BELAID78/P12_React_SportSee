import CopyRight from './../CopyRight/CopyRight';
import Muscul from './../../assets/images/muscul.svg';
import Swim from './../../assets/images/swim.svg';
import Sycl from './../../assets/images/sycl.svg';
import Yoga from './../../assets/images/yoga.svg';
import SideBarItem from '../SideBarItem/SideBarItem';

/**
 * Component for render the side bar
 * 
 * @returns {React.ReactElement}
 */
function SideBar() {
    return (
        <div className='sidebar'>

            <div className='sidebar-icon-container'>
                
                <SideBarItem link='#' alt='yoga icon' logo={Yoga} />

                <SideBarItem link='#' alt='swim icon' logo={Swim} />

                <SideBarItem link='#' alt='sycl icon' logo={Sycl} />
                
                <SideBarItem link='#' alt='muscul icon' logo={Muscul} />
            </div>

            <CopyRight />
        </div>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {
    
}

//export SideBar component
export default SideBar