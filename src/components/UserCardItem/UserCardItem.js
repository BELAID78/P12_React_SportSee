import PropType from 'prop-types';

/**
 * Component for render user card item
 * 
 * @param {object} 
 * @returns {React.ReactElement}
 */
function UserCardItem({icon, value, text, unit}) {
    return (
        <div className='user-card-infos'>
            <div>
                <img alt={text} src={icon} />
            </div>
            <div>
                <p>{value}{unit}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

//set UserCardItem proptypes
UserCardItem.propTypes = {
    icon: PropType.string,
    value: PropType.number,
    text: PropType.string,
    unit: PropType.string,
}

//export UserCardItem component
export default UserCardItem