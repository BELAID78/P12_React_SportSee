import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShowNavBarContext } from "../App";
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

/**
 * Component for render the profile page
 * 
 * @returns {React.ReactElement}
 */
function Profile() {
    //get user id from url
    const userId = useParams().id;

    //state handle user name
    const [userName, setUserName] = useState('');

    //state handle user activity
    const [userActivity, setUserActivity] = useState([]);

    //state handle user infos 
    const [userCardInfos, setUserCardInfos] = useState({});

    //state handle user score
    const [userScore, setUserScore] = useState(0);

    //state handle user average session
    const [userAverageSession, setUserAverageSession] = useState([]);

    //state handle user performance
    const [userPerformance, setUserPerformance] = useState([]);

    //state handle show nav bar and side nav bar
    const showNavBar = useContext(ShowNavBarContext);
    
    //redirect function to use it for redirection
    const redirect = useNavigate();

    //fetch the user data when user_id change
    useEffect(() => {

        //fetch user informations
        (new UserService(userId)).getUserInformations()
        .then(data => {
            //set the user full name
            setUserName(`${data.firstName} ${data.lastName}`);
        })
        .catch(error => {
            //hide the navbar and side bar
            showNavBar.setShow(false);

            //redirect to error page
            redirect('/error');
        });

        //fetch user activity
        (new UserActivityService(userId).getActivity()
        .then(data => {
            //set user activity
            setUserActivity(data);
        }))
        .catch(error => {
            //hide the navbar and side bar
            showNavBar.setShow(false);

            //redirect to error page
            redirect('/error');
        });

        //fetch user key data
        (new UserService(userId)).getKeyData().then(data => {
            //set user key data
            setUserCardInfos(data);
        })
        .catch(error => {
            //hide the navbar and side bar
            showNavBar.setShow(false);

            //redirect to error page
            redirect('/error');
        });

        //fetch user completetion objectif
        (new UserService(userId)).getCompletetionObjectif()
        .then(data => {
            //set user completetion objectif
            setUserScore(data);
        })
        .catch(error => {
            //hide the navbar and side bar
            showNavBar.setShow(false);

            //redirect to error page
            redirect('/error');
        });

        //fetch user session time
        (new UserSessionService(userId)).getSessionTime()
        .then(data => {
            //set user session time
            setUserAverageSession(data);
        })
        .catch(error => {
            //hide the navbar and side bar
            showNavBar.setShow(false);

            //redirect to error page
            redirect('/error');
        });

        //fetch user activity type
        (new UserActivityTypeService(userId)).getActivityType()
        .then(data => {
            //set user activity type
            setUserPerformance(data);
        })
        .catch(error => {
            //hide the navbar and side bar
            showNavBar.setShow(false);

            //redirect to error page
            redirect('/error');
        });

    }, [userId, redirect, showNavBar]);

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

//export Profile component
export default Profile