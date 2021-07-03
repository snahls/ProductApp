import axios from 'axios';
const UProduct = (products,newProduct)=>{
    return async function(dispatcher){
        let serverResponse=await axios.put(`http://localhost:8080/myapp/product/${newProduct.id}`,newProduct,
        {
            'Content-type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
        }
        );
        //console.log(serverResponse.data);

    products.map((product)=> {
        return (product.id===newProduct.id)?serverResponse.data:product;
    });
   
        dispatcher({
            type:'UPDATE_PRODUCT',
            payload:{ renderForm: 'ADD_PRODUCT', products:[...products]}
        })
    }
}

export default UProduct;

