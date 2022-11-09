import React, { useContext } from 'react'
import { UserInformationContext } from '../../pages/Profile';
import Spinner from './../Spinner/Spinner';

function UserFullName() {
    const userFullName = useContext(UserInformationContext);

    if(userFullName === '') {
        return <Spinner />
    }

    return (
        <h1 className="username">Bonjour <span>{userFullName}</span></h1>
    )
}

export default UserFullName;