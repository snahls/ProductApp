const UProduct = (products,newproduct)=>{
    
    products.map((product)=>{
        return (product.id===newproduct.id)?newproduct:product;
    })
    return{
        type:'UPDATE_PRODUCT',
        payload:{renderForm:'ADD_PRODUCT',products:[...products]}
    }
}

export default UProduct;