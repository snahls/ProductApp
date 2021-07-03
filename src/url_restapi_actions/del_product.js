import axios from 'axios';
const DelProduct = (productid)=>{
    return async function(dispatcher){
        await axios.delete(`http://localhost:8080/myapp/product/${productid}`);
       
        dispatcher({
            type:'DEL_PRODUCT',
            payload:productid
        })

    }
}
export default DelProduct;