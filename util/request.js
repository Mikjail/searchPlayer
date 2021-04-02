const axios = require('axios');
const errorHandler = require('./errorHandler');

const request = async ( method, url, params) => {
  try{

    const {data} = await axios({method, url, params});
    
    return data;
   
  }catch(error){
    return errorHandler(error)
  }

}



module.exports = request;