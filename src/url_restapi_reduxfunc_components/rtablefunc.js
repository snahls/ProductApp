import { useDispatch,useSelector } from "react-redux";
import DelProduct from "../url_restapi_actions/del_product";
import EditProduct from "../url_restapi_actions/edit_product";
import { useEffect } from "react";
import GetAllProductsAction from "../url_restapi_actions/get_all_products";
import { useHistory } from "react-router";

const FProductTable=(props)=>{
    let history=useHistory();
    let dispatcher=useDispatch();
    let products = useSelector((state)=>state.products);

    useEffect(()=>dispatcher(GetAllProductsAction()));

    const editProduct = (product) => {
        dispatcher(EditProduct(product));
        history.push(`/edit/${product.id}`);
    }

        return <div>
            <center>
            <table border='5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product, index) =>
                         (<tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.quantity}</td><td>{product.price}</td>
                    <td>
                        <button value="EDIT" onClick={editProduct.bind(this,product)} >EDIT</button>
                        <button value="DELETE" onClick={()=>dispatcher(DelProduct(product.id))} >DELETE</button>                        
                    </td>
                            </tr>)
            )}             
                </tbody>
            </table>
            </center>
       </div>
    }

export default FProductTable;
  