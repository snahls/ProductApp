const initialstate={
    products:[{id:1,name:'Chair',quantity:20,price:800},
    {id:2,name:'Bag',quantity:110,price:2400},
    {id:3,name:'Laptop',quantity:40000,price:12}],
    renderForm:'ADD_PRODUCT',
    selected:{}
}
const productReducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            state.products=action.payload;           
            return state;
        case 'CANCEL_EDIT':
            state.renderForm=action.payload;
            return state;
        case 'EDIT_PRODUCT':
            state.selected=action.payload;
            state.renderForm='EDIT_PRODUCT';
            return state;
        case 'DEL_PRODUCT':
            state.products=action.payload;
            return state;
        case 'UPDATE_PRODUCT':
            state.renderForm=action.payload.renderForm;
            state.products=action.payload.products;
            return state;
        default:
            return state;
    }
}

export default productReducer;
