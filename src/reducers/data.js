import { RECEIVE_API_DATA, DELETE_USER } from '../actions';

export default (state= [], action) => {

    console.log('reducer invoked', action);
    switch(action.type){

        case RECEIVE_API_DATA :
            return action.data

        case DELETE_USER :
        console.log('Reducer >>>>>>>>>>>>>>>>>>>>>', action.data)
            return action.data

        default :
        return state;
    }
    
}