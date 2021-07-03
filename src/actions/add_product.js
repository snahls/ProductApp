const AddProduct = (productlist,new_product)=>{
    productlist.push(new_product);
    let copy=[...productlist];
    return{
        type:'ADD_PRODUCT',
        payload:copy
    }
}

export default AddProduct;
