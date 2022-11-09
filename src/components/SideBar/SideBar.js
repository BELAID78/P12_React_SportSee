import CopyRight from './../CopyRight/CopyRight';
import Muscul from './../../assets/images/muscul.svg';
import Swim from './../../assets/images/swim.svg';
import Sycl from './../../assets/images/sycl.svg';
import Yoga from './../../assets/images/yoga.svg';

/**
 * Component for render the side bar
 * 
 * @returns {React.ReactElement}
 */
function SideBar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-icon-container'>
                <div><img alt='yoga icon' src={Yoga} className='sidebar-icon' /></div>
                <div><img alt='swim icon' src={Swim} className='sidebar-icon' /></div>
                <div><img alt='sycl icon' src={Sycl} className='sidebar-icon' /></div>
                <div><img alt='muscul icon' src={Muscul} className='sidebar-icon' /></div>
            </div>
            <CopyRight />
        </div>
    )
}

//export SideBar component
export default SideBar