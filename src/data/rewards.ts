// Coins for a perfect game; the real reward is scaled by the share of correct answers
export const REWARD_MONEY = 100;
// XP for a perfect game; scaled in the same way
export const REWARD_XP = 50;

// What a finished game pays out
export interface Reward {
    // Coins earned
    coins: number;
    // XP earned
    xp: number;
}

// Calculate the reward from the number of correct answers, so every game uses the same formula
export function calculateReward(correct: number, total: number): Reward {
    // Avoid dividing by zero before a game has started
    if (total <= 0) {
        return { coins: 0, xp: 0 };
    }
    // The share of answers that were correct, between 0 and 1
    const share = correct / total;
    
    // Scale both rewards by that share and round to whole numbers
    return { coins: Math.round(REWARD_MONEY * share), xp: Math.round(REWARD_XP * share) };
}