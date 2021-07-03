import React from 'react';
export class ProductForm extends React.Component{
    constructor(){
    super()
    this.nameRef=React.createRef();
    this.quantityRef=React.createRef();
    this.priceRef=React.createRef();
    }

    addProduct(){
        var id=this.props.products.length+1;
        let item= {"id":id,"name": this.nameRef.current.value,
        "quantity":this.quantityRef.current.value,"price":this.priceRef.current.value
    }

    this.props.getProductDetails(item);
    }
    
    render(){
        return <div><br/><br/><h2>Product Application</h2><center>
        <table><tbody><tr><th align="left">Name:</th><td> <input type="text" ref={this.nameRef}/></td></tr>
        <tr><th align="left"> Quantity: </th><td><input type="text" ref={this.quantityRef} /></td></tr>
        <tr><th align="left">Price: </th><td><input type="text" ref={this.priceRef}/></td></tr></tbody></table></center><br/>
        <button name="add" value="ADD PRODUCT" onClick={this.addProduct.bind(this)}>ADD PRODUCT</button><br/><br/>
        </div>
    }
}
  