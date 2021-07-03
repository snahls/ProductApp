import React from 'react';
export class ProductTable extends React.Component{
   
    render(){
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
                {this.props.products.map((product, index) =>
                         (<tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.quantity}</td><td>{product.price}</td>
                    <td>
                        <button value="EDIT" onClick={this.props.renderEditForm.bind(this,product)} >EDIT</button>
                        <button value="DELETE" onClick={this.props.delProduct.bind(this,index)} >DELETE</button>                        
                    </td>
                            </tr>)
            )}             
                </tbody>
            </table>
            </center>
       </div>
    }
}
  