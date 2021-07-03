import { useDispatch,useSelector } from "react-redux";
import DelProduct from "../restapi_actions/del_product";
import EditProduct from "../restapi_actions/edit_product";
import { useEffect } from "react";
import GetAllProductsAction from "../restapi_actions/get_all_products";

const FProductTable=(props)=>{
    let dispatcher=useDispatch();
    let products = useSelector((state)=>state.products);
    useEffect(()=>dispatcher(GetAllProductsAction()));
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
                        <button value="EDIT" onClick={()=>dispatcher(EditProduct(product))} >EDIT</button>
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
  