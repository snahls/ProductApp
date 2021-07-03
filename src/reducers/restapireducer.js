const initialstate={
    products:[],
    renderForm:'ADD_PRODUCT',
    selected:{}
}
const restapiReducer=(state=initialstate,action)=>{
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
        case 'GET_ALL_PRODUCTS':
            state.products=action.payload;
            return state;
        case 'DEL_PRODUCT':
            state.products=state.products.filter((p)=>p.id!==action.payload);
            return state;
        case 'UPDATE_PRODUCT':
            state.renderForm=action.payload.renderForm;
            state.products=action.payload.products;
            return state;
        default:
            return state;
    }
}

export default restapiReducer;
