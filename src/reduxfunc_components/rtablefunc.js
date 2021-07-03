import { useDispatch,useSelector } from "react-redux";
import DelProduct from "../actions/del_product";
import EditProduct from "../actions/edit_product";

const FProductTable=(props)=>{
    let dispatcher=useDispatch();
    let products = useSelector((state)=>state.products);
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
                        <button value="DELETE" onClick={()=>dispatcher(DelProduct(products,index))} >DELETE</button>                        
                    </td>
                            </tr>)
            )}             
                </tbody>
            </table>
            </center>
       </div>
    }

export default FProductTable;
  