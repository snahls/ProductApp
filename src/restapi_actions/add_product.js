import axios from "axios";

const AddProduct = (products,newProduct)=>{
    return async function(dispatcher){
        let serverResponse=await axios.post('http://localhost:8080/myapp/product',newProduct,
        {
            'Content-type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
        }
        );
        products.push(serverResponse.data);
        let productlist=[...products];
       // console.log('AddProductServerResponse',serverResponse.data);
        dispatcher({
            type:'ADD_PRODUCT',
            payload:productlist
        })

    }
}

export default AddProduct;
