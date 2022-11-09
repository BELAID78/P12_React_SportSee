import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserActivityChart from "../components/UserActivityChart/UserActivityChart";
import UserAverageSession from "../components/UserAverageSession/UserAverageSession";
import UserCardInformations from "../components/UserCardInformations/UserCardInformations";
import UserFullName from "../components/UserFullName/UserFullName";
import UserPerformanceChart from "../components/UserPerformanceChart/UserPerformanceChart";
import UserScoreChart from "../components/UserScoreChart/UserScoreChart";
import UserActivityService from "../services/UserActivityService";
import UserActivityTypeService from "../services/UserActivityTypeService";
import UserService from "../services/UserService";
import UserSessionService from "../services/UserSessionService";

export const UserInformationContext = React.createContext();
export const UserActivityContext = React.createContext();
export const UserCardContext = React.createContext();
export const UserScoreContext = React.createContext();
export const UserAverageSessionContext = React.createContext();
export const UserPerformanceContext = React.createContext();

function Profile() {
    const userId = useParams().id;

    const [userName, setUserName] = useState('');
    const [userActivity, setUserActivity] = useState([]);
    const [userCardInfos, setUserCardInfos] = useState({});
    const [userScore, setUserScore] = useState(0);
    const [userAverageSession, setUserAverageSession] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);

    useEffect(() => {
        (new UserService(userId)).getUserInformations().then(data => setUserName(`${data.firstName} ${data.lastName}`) );

        (new UserActivityService(userId).getActivity().then(data => setUserActivity(data) ));

        (new UserService(userId)).getKeyData().then(data => setUserCardInfos(data) );

        (new UserService(userId)).getCompletetionObjectif().then(data => setUserScore(data) );

        (new UserSessionService(userId)).getSessionTime().then(data => setUserAverageSession(data) );

        (new UserActivityTypeService(userId)).getActivityType().then(data => setUserPerformance(data) );
    }, [userId]);

    return (
        <div className="profile">

            <UserInformationContext.Provider value={userName}>
                <UserFullName />
            </UserInformationContext.Provider>

            <p className="welcome-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="profile-container">
                <div className="user-chart-container">

                    <UserActivityContext.Provider value={userActivity}>
                        <UserActivityChart />
                    </UserActivityContext.Provider>

                    <div className="user-chart-other-data">
                        <UserAverageSessionContext.Provider value={userAverageSession}>
                            <UserAverageSession />
                        </UserAverageSessionContext.Provider>

                        <UserPerformanceContext.Provider value={userPerformance}>
                            <UserPerformanceChart />
                        </UserPerformanceContext.Provider>

                        <UserScoreContext.Provider value={userScore}>
                            <UserScoreChart />
                        </UserScoreContext.Provider>
                    </div>
                </div>
                <div className="user-card">

                    <UserCardContext.Provider value={userCardInfos}>
                        <UserCardInformations />
                    </UserCardContext.Provider>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile