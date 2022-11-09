import axios from "axios";

/**
 * class representing a user activity fetch data
 */
export default class UserActivityTypeService {
    /**
     * init the needed data 
     * 
     * @param {number} userId 
     * @returns {void}
     */
    constructor(userId) {
        //user informations end point
        this.endpoint = `http://localhost:3000/user/${userId}/performance`;

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
     * return the user sessions data
     * 
     * @returns {Promise}
     */
    async getActivityType() {
        return await this.prepareActivityType();
    }

    /**
     * prepare the data for use 
     * 
     * @returns {array}
     */
    async prepareActivityType() {
        await this.request();

        const kindData = await this.data.kind;

        const data = [];

        this.data.data.forEach(performance => {
            data.push({
                value: performance.value,
                kind: kindData[performance.kind]
            })
        })

        return data;
    }
}