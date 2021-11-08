import { ActionTypes } from "../Action/Action"

const initialState = {
    products : []
}

const Reducer=(state=initialState, {type, payload})=>{
        switch (type) {
            case ActionTypes.SET_PRODUCT:
                return {...state, products : payload}
        
            default:
                return state
        }
}

export default Reducer