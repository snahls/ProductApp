import axios from 'axios';

const GetAllProductsAction = () =>{
    return async function(dispatcher){
        let serverResponse=await axios.get('http://localhost:8080/myapp/product');
        //console.log('serverResponse',serverResponse.data);
        dispatcher({
            type:'GET_ALL_PRODUCTS',
            payload:serverResponse.data
        })
    }
}

export default GetAllProductsAction;