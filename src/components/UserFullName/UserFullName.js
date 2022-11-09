import React, { useContext } from 'react'
import { UserInformationContext } from '../../pages/Profile';
import Spinner from './../Spinner/Spinner';

/**
 * Component for render the user full name
 * 
 * @returns {React.ReactElement}
 */
function UserFullName() {
    //get user full name from the context
    const userFullName = useContext(UserInformationContext);

    //if the user full name is empty render the spinner component
    if(userFullName === '') {
        return <Spinner />
    }

    return (
        <h1 className="username">Bonjour <span>{userFullName}</span></h1>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {

}

//export UserFullName component
export default UserFullName;