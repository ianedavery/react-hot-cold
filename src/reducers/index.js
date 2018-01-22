import {RESTART_GAME, FEEDBACK_GUESSES} from '../actions';

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	auralStatus: '',
	correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotColdReducer = (state=initialState, action) => {
	if(action.type === RESTART_GAME) {
		return Object.assign({}, state, {
			guesses: [],
			feedback: 'Make your guess!',
			auralStatus: '',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		});
	}
	if(action.type === FEEDBACK_GUESSES) {
		return Object.assign({}, state, {
			guesses: action.guesses,
			feedback: action.feedback
		});
	}
	return state;
};