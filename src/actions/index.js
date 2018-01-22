export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = (guesses, feedback, auralStatus, correctAnswer) => ({
	type: RESTART_GAME,
	guesses: [],
	feedback: 'Make your guess!',
	auralStatus: '',
	correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const FEEDBACK_GUESSES = 'FEEDBACK_GUESSES';
export const setFeedbackAndGuesses = (feedback, guesses) => ({
	type: FEEDBACK_GUESSES,
	guesses,
	feedback
});
