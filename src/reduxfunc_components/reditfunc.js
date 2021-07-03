import {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CancelEdit from '../actions/cancel_edit';
import UProduct from '../actions/update_product';

let fidRef;
let fnameRef;
let fquantityRef;
let fpriceRef;

const EditProductForm=(props)=>{

    let dispatcher=useDispatch();
    let products=useSelector((state)=>state.products);
  
    fidRef=useRef(null);
    fnameRef=useRef(null);
    fquantityRef=useRef(null);
    fpriceRef=useRef(null);

    
   const updateProduct=(product)=>{
    props.product.id=fidRef.current.value;
    props.product.name=fnameRef.current.value;
    props.product.quantity=fquantityRef.current.value;
    props.product.price=fpriceRef.current.value;
    dispatcher(UProduct(products,product));
    }

    const cancelEdit=()=>{
        dispatcher(CancelEdit());
    }
   
        return <div><br/><br/><h2>Edit Product </h2><center>
        <table><tbody><tr><th align='left'>Id: </th><td><input type="text" ref={fidRef} readOnly={true} value={props.product.id} /></td></tr>
        <tr><th align='left'> Name: </th><td><input type="text" ref={fnameRef} defaultValue={props.product.name} /></td></tr>
        <tr><th align='left'> Quantity:</th><td> <input type="text" ref={fquantityRef} defaultValue={props.product.quantity} /></td></tr>
       <tr><th align='left'>Price: </th><td><input type="text" ref={fpriceRef} defaultValue={props.product.price} /></td></tr>
        <tr><td colSpan='2' align='center'> <button value="UPDATE" onClick={updateProduct}>UPDATE</button>
        <button value="CANCEL" onClick={cancelEdit} >CANCEL</button></td></tr></tbody></table></center>                 
        </div>
    }

    
    
export default EditProductForm;
  