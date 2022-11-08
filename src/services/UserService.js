import axios from "axios";

/**
 * class representing a user fetch infos data
 */
export default class UserService {

    /**
     * fetch the user informations 
     * 
     * @param {number} userId 
     * @returns {void}
     */
    constructor(userId) {
        //user informations end point
        this.endpoint = `http://localhost:3000/user/${userId}`;

        //user informations data
        this.data = [];

        //fetch the user data
        this.request();
    }

    /**
     * fetch the user data
     * 
     * @returns {void}
     */
    request() {
        axios({
			method: 'get',
			url: this.endpoint,
			data: {
				id: this.userId
			}
		}).then(response => {
			this.data = response.data.data;
		});
    }

    /**
     * get the user informations
     * 
     * @returns {object}
     */
    getUserInformations() {
        return this.data.userInfos;
    }

    /**
     * get the user completetion objectif 
     * 
     * @returns {array}
     */
    getCompletetionObjectif() {
        return this.data.keyData;
    }
}