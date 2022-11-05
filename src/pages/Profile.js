function Profile() {
    const userName = 'Thomas';

    return (
        <div className="profile">
            <h1 className="username">Bonjour <span>{userName}</span></h1>
            <p className="welcome-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Profile