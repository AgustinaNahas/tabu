import axios from "axios";

export default {
    get: async (cantidad) => {
        return await axios.get(`https://api-tabu-symfony.herokuapp.com/get/words/${cantidad}`);
    },
    reportar: async (id) => {
        return await axios.get(`https://api-tabu-symfony.herokuapp.com/help/word/${id}`);
    }


}