export const ActionTypes = {
    SET_PRODUCT : "SET_PRODUCT"
}

export const setProducts = (products)=>{
    return {
        type : ActionTypes.SET_PRODUCT, 
        payload : products
    }
}