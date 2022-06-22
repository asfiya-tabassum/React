import axios from "axios";

const USER_RESTAPI_URL='http://localhost:8080/api/userdata';

class UserService{
    
    getusers(){
        return axios.get(USER_RESTAPI_URL);
    }
}

export default new UserService();