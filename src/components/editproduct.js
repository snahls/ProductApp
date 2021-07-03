import React from 'react';
export class EditProductForm extends React.Component{
    constructor(){
    super()
    this.idRef=React.createRef();
    this.nameRef=React.createRef();
    this.quantityRef=React.createRef();
    this.priceRef=React.createRef();
    }
    updateProduct(props) {
        this.props.product.id = this.idRef.current.value;
        this.props.product.name = this.nameRef.current.value;
        this.props.product.quantity = this.quantityRef.current.value;
        this.props.product.price = this.priceRef.current.value;
        this.props.renderAddForm(this.product);
    }


    render(){
        return <div><br/><br/><h2>Edit Product</h2><center>
        <table><tbody><tr><th align='left'>Id: </th><td><input type="text" ref={this.idRef} defaultValue={this.props.product.id} /></td></tr>
        <tr><th align='left'> Name: </th><td><input type="text" ref={this.nameRef} defaultValue={this.props.product.name} /></td></tr>
        <tr><th align='left'> Quantity:</th><td> <input type="text" ref={this.quantityRef} defaultValue={this.props.product.quantity} /></td></tr>
       <tr><th align='left'>Price: </th><td><input type="text" ref={this.priceRef} defaultValue={this.props.product.price} /></td></tr>
        <tr><td colSpan='2' align='center'> <button value="UPDATE" onClick={this.updateProduct.bind(this)}>UPDATE</button>
        <button value="CANCEL" onClick={this.props.renderAddForm.bind(this)} >CANCEL</button></td></tr></tbody></table></center>                 
        </div>
    }
    
}
  