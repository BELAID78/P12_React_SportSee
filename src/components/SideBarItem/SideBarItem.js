import PropType from 'prop-types';

/**
 * Component for render the side bar item
 * 
 * @param {object}
 * @returns {React.ReactElement}
 */
function SideBarItem({link, alt, logo}) {
    return (
        <div>
            <a href={link}>
                <img alt={alt} src={logo} className='sidebar-icon' />
            </a>
        </div>
    )
}

//set SideBarItem propTypes
SideBarItem.propTypes = {
    link: PropType.string,
    alt: PropType.string,
    logo: PropType.string
}

//export SideBarItem component
export default SideBarItem