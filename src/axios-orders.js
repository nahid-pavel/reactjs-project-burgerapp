import axios from 'axios';


const instance =axios.create({
    
    baseURL: 'https://burgerapp-575e7.firebaseio.com/'
    
});


export default instance;

