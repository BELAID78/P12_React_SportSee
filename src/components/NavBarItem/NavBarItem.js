import PropType from 'prop-types';

/**
 * Component for render navbar item
 * 
 * @param {object} 
 * @returns {React.ReactElement}
 */
function NavBarItem({children, link = '#', logo = null , classname = '', alt = ''}) {
    return (
        <li>
            <a href={link}>
                { logo && <img className={classname} src={logo} alt={alt} /> }
                {children}
            </a>
        </li>
    )
}

//set NavBarItem propTypes
NavBarItem.propTypes = {
    children: PropType.string,
    link: PropType.string,
    logo: PropType.string,
    classname: PropType.string,
    alt: PropType.string
}

//set NavBarItem defaultProps
NavBarItem.defaultProps = {
    link: '#',
    logo: null,
    classname: '',
    alt: ''
}

//export NavBarItem component
export default NavBarItem