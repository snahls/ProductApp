//import logo from './logo.svg';
import React from 'react';
import {ProductForm} from './productform'
import {ProductTable} from './producttable'
import {EditProductForm} from './editproduct'

export class ProductApp extends React.Component{
    constructor(){
        super();
        this.state={products:[{id:1,name:'Chair',quantity:20,price:800},
        {id:2,name:'Bag',quantity:110,price:2400},
        {id:3,name:'Laptop',quantity:40000,price:12}],renderForm:'ADD_PRODUCT'};
    }

    productDetails(product){
        this.state.products.push(product);
        this.setState({products:this.state.products});
    }

    delProduct(index){
        this.state.products.splice(index,1);
        this.setState({products:this.state.products})
    }
    
    renderEditForm(product){
        this.setState({selected:product,renderForm:'EDIT_PRODUCT'})
    }

    renderAddForm(product){
        this.setState({renderForm:'ADD_PRODUCT'});
    }

    render(){
      var renderform=this.state.renderForm;
      if(renderform==='ADD_PRODUCT'){
       return <div>
      <ProductForm products={this.state.products} getProductDetails={this.productDetails.bind(this)}/>
      <ProductTable delProduct={this.delProduct.bind(this)} renderEditForm={this.renderEditForm.bind(this)} products={this.state.products}/>
    </div>
      }
      else if(renderform==='EDIT_PRODUCT'){
        return <div>
        <EditProductForm product={this.state.selected} renderAddForm={this.renderAddForm.bind(this)} />
       </div>
      }
      else{
          return null;
      }
  
}
}


