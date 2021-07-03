const FProductTable=(props)=>{
        
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
                {props.products.map((product, index) =>
                         (<tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.quantity}</td><td>{product.price}</td>
                    <td>
                        <button value="EDIT" onClick={()=>props.renderEditForm(product)} >EDIT</button>
                        <button value="DELETE" onClick={()=>props.delProduct(index)} >DELETE</button>                        
                    </td>
                            </tr>)
            )}             
                </tbody>
            </table>
            </center>
       </div>
    }

export default FProductTable;
  