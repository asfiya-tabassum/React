import httpClient from '../http-common';


const getAll=()=>{

    return httpClient.get('/userdata');

}

const create = (data) =>{
    return httpClient.post("/userdata",data)

}
const all={getAll,create}
export default all;