import UserActivityChart from "../components/UserActivityChart/UserActivityChart";
import UserCardInformations from "../components/UserCardInformations/UserCardInformations";

function Profile() {
    const userName = 'Thomas';
    const userActivity = [
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 80,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 81,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 81,
            calories: 290
        },
        {
            day: '2020-07-05',
            kilogram: 80,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 78,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 76,
            calories: 390
        }
    ];

    const userCardInfos = {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
    };

    return (
        <div className="profile">
            <h1 className="username">Bonjour <span>{userName}</span></h1>
            <p className="welcome-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className="profile-container">
                <div className="user-chart-container">
                    <UserActivityChart data={userActivity} />
                </div>
                <div className="user-card">
                    <UserCardInformations userCardInfos={userCardInfos}/>
                </div>
            </div>
        </div>
    )
}

export default Profile