
import httpClient from '../http-common';
// import App from '../App';

// var cors = require('cors')
const getAll = () => {
    return httpClient.get('/employees');
}

const create = (data) => {
    return httpClient.post("/employees",data)
}

const get = id =>{
    return httpClient.get(`/employees/${id}`);
}


const update =(data)=>{
    return httpClient.put("/employees",data)
}

const all={getAll,create,get,update};
export default all;

// App.use(cors());
