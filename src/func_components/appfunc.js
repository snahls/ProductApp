//import logo from './logo.svg';
import React, { useState } from 'react';
import FProductForm from './formfunc';
import FProductTable from './tablefunc';
import EditProductForm from './editfunc';

const FProductApp=(props)=>{

    let [renderForm,setRenderForm]=useState('ADD_PRODUCT');
    let [selected,setSelected]=useState({});
    let [products,setProducts]=useState([{id:1,name:'Chair',quantity:20,price:800},
        {id:2,name:'Bag',quantity:110,price:2400},
        {id:3,name:'Laptop',quantity:40000,price:12}]);  

    const faddProduct=(product)=>{
        products.push(product);
        let productlist=[...products];
        setProducts(productlist);
        setRenderForm('ADD_PRODUCT');
    }

    const delProduct=(index)=>{
        products.splice(index,1);
        let productlist=[...products];
        setProducts(productlist);
        setRenderForm('ADD_PRODUCT');
    }
    
    const renderEditForm=(product)=>{
        setRenderForm('EDIT_PRODUCT');
        selected=product;
        setSelected(product);
    }

    const renderAddForm=()=>{
        setRenderForm('ADD_PRODUCT');
    }
      
      if(renderForm==='ADD_PRODUCT'){
       return <div>
      <FProductForm products={products} faddProduct={faddProduct} />
      <FProductTable delProduct={delProduct} products={products} renderEditForm={renderEditForm} />
    </div>
      }

      else if(renderForm==='EDIT_PRODUCT'){
        return <div>
        <EditProductForm product={selected} renderAddForm={renderAddForm} />
       </div>
      }
      
      else{
          return null;
      } 
}


export default FProductApp;