//import logo from './logo.svg';
import React from 'react';
import FProductForm from './rformfunc';
import FProductTable from './rtablefunc';
import EditProductForm from './reditfunc';
import { useSelector } from 'react-redux';

const FRProductApp=(props)=>{
    
    let renderForm=useSelector((state)=>state.renderForm);
    let selected=useSelector((state)=>state.selected);

      if(renderForm==='ADD_PRODUCT'){
       return <div>
      <FProductForm/>
      <FProductTable/>
    </div>
      }

      else if(renderForm==='EDIT_PRODUCT'){
        return <div>
         <EditProductForm product={selected} />
       </div>
      }
      
      else{
          return null;
      } 
}


export default FRProductApp;