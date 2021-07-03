import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import AddProduct from '../url_restapi_actions/add_product'
import { useHistory } from "react-router";

const FProductForm =(props)=>{
    let history=useHistory();
    let dispatcher=useDispatch();
    let productlist = useSelector((state)=>state.products);

    const fnameRef=useRef(null);
    const fquantityRef=useRef(null);
    const fpriceRef=useRef(null);
    const faddProduct=()=>{
        var id=productlist.length+1;
        let item= {"id":id,"name": fnameRef.current.value,
        "quantity":fquantityRef.current.value,"price":fpriceRef.current.value
    };
    dispatcher(AddProduct(productlist,item));
    history.push('/');
    //props.faddProduct(item);
}
           
        return <div><br/><br/><h2>Product Application</h2><center>
        <table><tbody><tr><th align="left">Name:</th><td> <input type="text" ref={fnameRef}/></td></tr>
        <tr><th align="left"> Quantity: </th><td><input type="text" ref={fquantityRef} /></td></tr>
        <tr><th align="left">Price: </th><td><input type="text" ref={fpriceRef}/></td></tr></tbody></table></center><br/>
        <button name="add" value="ADD PRODUCT" onClick={faddProduct}>ADD PRODUCT</button><br/><br/>
        </div>
    }

  export default FProductForm;
  