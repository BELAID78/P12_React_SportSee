import axios from "axios";

/**
 * class representing a user fetch infos data
 */
export default class UserService {

    /**
     * provide the userId
     * 
     * @param {number} userId 
     * @returns {void}
     */
    constructor(userId) {
        //user informations end point
        this.endpoint = `http://localhost:3000/user/${userId}`;

        //user informations data
        this.data = [];
    }

    /**
     * fetch the user data
     * 
     * @returns {void}
     */
    async request() {
        const { data } = await axios({
			method: 'get',
			url: this.endpoint,
			data: {
				id: this.userId
			}
		});

        this.data = data.data;
    }

    /**
     * get the user informations
     * 
     * @returns {Promise}
     */
    async getUserInformations() {
        await this.request();

        return await this.data.userInfos;
    }

    /**
     * get the user completetion objectif 
     * 
     * @returns {Promise}
     */
    async getCompletetionObjectif() {
        await this.request();

        return await this.data.todayScore;
    }

    /**
     * get the user key data
     * 
     * @returns {Promise}
     */
    async getKeyData() {
        await this.request();

        return await this.data.keyData;
    }
}