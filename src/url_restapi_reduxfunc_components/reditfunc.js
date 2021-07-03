import {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import CancelEdit from '../url_restapi_actions/cancel_edit';
import UProduct from '../url_restapi_actions/update_product';
import {useHistory} from 'react-router';

let fidRef;
let fnameRef;
let fquantityRef;
let fpriceRef;

const EditProductForm=(props)=>{
    let history=useHistory();
    let dispatcher=useDispatch();
    let selected=useSelector((state)=>state.selected);
    let products=useSelector((state)=>state.products);
  
    fidRef=useRef(null);
    fnameRef=useRef(null);
    fquantityRef=useRef(null);
    fpriceRef=useRef(null);

    
   const updateProduct=(product)=>{
    product.name=fnameRef.current.value;
    product.quantity=fquantityRef.current.value;
    product.price=fpriceRef.current.value;
    dispatcher(UProduct(products,product));
    history.push('/');
    }

    const cancelEdit=()=>{
        //dispatcher(CancelEdit());
        history.push('/');
    }
   
        return <div><br/><br/><h2>Edit Product </h2><center>
        <table><tbody><tr><th align='left'>Id: </th><td><input type="text" ref={fidRef} readOnly={true} value={selected.id} /></td></tr>
        <tr><th align='left'> Name: </th><td><input type="text" ref={fnameRef} defaultValue={selected.name} /></td></tr>
        <tr><th align='left'> Quantity:</th><td> <input type="text" ref={fquantityRef} defaultValue={selected.quantity} /></td></tr>
       <tr><th align='left'>Price: </th><td><input type="text" ref={fpriceRef} defaultValue={selected.price} /></td></tr>
        <tr><td colSpan='2' align='center'> <button value="UPDATE" onClick={()=>updateProduct(selected)}>UPDATE</button>
        <button value="CANCEL" onClick={cancelEdit} >CANCEL</button></td></tr></tbody></table></center>                 
        </div>
    }

    
    
export default EditProductForm;
  