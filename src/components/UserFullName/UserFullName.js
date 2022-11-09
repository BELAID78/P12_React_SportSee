import React, { useContext } from 'react'
import { UserInformationContext } from '../../pages/Profile';

function UserFullName() {
    const userFullName = useContext(UserInformationContext);

    return (
        <h1 className="username">Bonjour <span>{userFullName}</span></h1>
    )
}

export default UserFullName;