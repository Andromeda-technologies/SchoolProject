import { GET_STUDENT } from '../actions/types';
import { CREATE_STUDENT } from '../actions/types';
import { UPDATE_STUDENT } from '../actions/types';
import { DELETE_STUDENT } from '../actions/types';

const initialState = {
	studentProfile: null,
	status: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_STUDENT:
			return {
				...state,
				studentProfile: action.payload,
			};
		case CREATE_STUDENT:
			return {
				...state,
				status: action.payload,
			};
		case UPDATE_STUDENT:
			return {
				...state,
				studentProfile: action.payload,
			};
		case DELETE_STUDENT:
			return {
				...state,
				studentProfile: action.payload,
			};

		default:
			return state;
	}
}
