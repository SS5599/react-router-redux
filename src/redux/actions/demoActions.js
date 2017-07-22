import * as types from './actionType';

export function setCount(){
    return{
        type: types.INCREASE_ACTION,
    }
}

export function getCount(){
    console.log("getCount Action==>>");
    return (dispatch) => {
        dispatch(setCount());
    }
}
