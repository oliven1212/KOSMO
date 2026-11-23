// Where a minigame currently is; shared by every game so they move through the same steps
// loading: waiting for data (a game without data starts in playing)
// playing: waiting for the player's answer
// confirming: the confirmation modal is open
// result: the result modal is open
// finished: the summary modal is open and the rewards are paid out
export type GamePhase = 'loading' | 'playing' | 'confirming' | 'result' | 'finished';
