import axios from "axios";
import { Env } from "../config/env";
import data from "./../data/user_data";

/**
 * class representing a user activity fetch data
 */
export default class UserActivityService {
    /**
     * init the needed data
     * 
     * @param {number} userId 
     * @returns {void}
     */
    constructor(userId) {
        //set user id
        this.userId = userId;

        //user informations end point
        this.endpoint = `http://localhost:3000/user/${userId}/activity`;

        //user informations data
        this.data = [];
    }

    /**
     * fetch the user data
     * 
     * @returns {void}
     */
    async request() {
        //request by using api call
        if(Env.envirement === 'api') {
            const { data } = await axios({
                method: 'get',
                url: this.endpoint,
                data: {
                    id: this.userId
                }
            });

            this.data = data.data;
        }else{
            //request data by import it from data file
            const {foundedData} = await Promise.resolve({ foundedData: data.user_activity.find(item => item.userId === this.userId)});

            this.data = foundedData
        }
    }

    /**
     * return the user sessions data
     * 
     * @returns {Promise}
     */
    async getActivity() {

        await this.request();

        return await this.data.sessions;
    }
}