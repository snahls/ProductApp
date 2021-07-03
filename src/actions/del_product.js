const DelProduct = (products,index)=>{
    products.splice(index,1);
    let copy=[...products];
    return{
        type:'DEL_PRODUCT',
        payload:copy
    }
}

export default DelProduct;