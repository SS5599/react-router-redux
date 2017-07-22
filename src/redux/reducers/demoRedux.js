import * as types from '../actions/actionType';
export default function demoAction(state = { count: 0 }, action){
    switch(action.type) {
        case types.INCREASE_ACTION:
            return Object.assign(
				{}, state, { count: state.count + 1}
			);
        default:
            return state;
    }
}
