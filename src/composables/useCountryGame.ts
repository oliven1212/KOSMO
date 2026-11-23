// Import the Vue helpers and the types we use in the returned object
import { computed, ref, type ComputedRef, type Ref } from 'vue';
// Import the shared reward formula and payout
import { calculateReward, giveReward } from '@/data/rewards';
// Import the phases every minigame shares
import type { GamePhase } from '@/data/types/gamePhase';

// Default number of turns in one game; can be overridden through the options
export const DEFAULT_TOTAL_TURNS = 10;

// A country as the game sees it: just a code and a name
export interface Country {
    // Unique code (ADM0_A3) used to compare answers
    code: string;
    // Name shown to the player
    name: string;
    // The id of the region the country belongs to
    regionId: string;
}

// How a country should be coloured on the map
export type Highlight = 'selected' | 'correct' | 'wrong';

// Settings a game can be started with (more can be added later, like a region id)
export interface CountryGameOptions {
    // How many countries the player must find in total
    totalTurns?: number;
}

// Everything the view can use from the game
export interface CountryGame {
    // Current phase of the game
    phase: Ref<GamePhase>;
    // The country the player must find right now (null before the game starts)
    target: ComputedRef<Country | null>;
    // Current turn, starting at 1
    turnNumber: ComputedRef<number>;
    // Number of turns in this game
    totalTurns: ComputedRef<number>;
    // How many answers were correct so far
    correctCount: Ref<number>;
    // Whether the latest answer was correct
    lastAnswerCorrect: Ref<boolean>;
    // Which countries should be coloured, keyed by country code
    highlights: Ref<Record<string, Highlight>>;
    // Coins earned, based on the share of correct answers
    coins: ComputedRef<number>;
    // XP earned, based on the share of correct answers
    xp: ComputedRef<number>;
    // Start a new game with the countries that are playable
    startGame: (playable: Country[]) => void;
    // The player clicked a country on the map
    selectCountry: (code: string) => void;
    // The player chose another country in the confirmation modal
    cancelSelection: () => void;
    // The player confirmed the selected country
    confirmSelection: () => void;
    // Move on after the result modal (next turn, or finish the game and pay out)
    nextTurn: () => void;
}

// Return a shuffled copy of a list (Fisher-Yates), leaving the original untouched
function shuffle<T>(items: T[]): T[] {
    // Work on a copy so the input list is not changed
    const copy = [...items];

    // Walk backwards through the list, swapping each item with a random earlier one
    for (let i = copy.length - 1; i > 0; i--) {
        // Pick a random position between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Read both items (they can be undefined as far as TypeScript knows)
        const a = copy[i];
        const b = copy[j];

        // Skip the swap if either one is missing
        if (a === undefined || b === undefined) {
            continue;
        }
        // Swap the two items
        copy[i] = b;
        copy[j] = a;
    }
    // Hand back the shuffled copy
    return copy;
}

// Pick the countries to find, a random region first and then a country in it
function buildTargets(countries: Country[], turns: number): Country[] {
    // Group the countries by region
    const groups = new Map<string, Country[]>();

    // Go through every country
    for (const country of countries) {
        // Get the group of this country's region, or start a new one
        const group = groups.get(country.regionId) ?? [];

        // Add the country to the group
        group.push(country);
        // Store the group
        groups.set(country.regionId, group);
    }
    // Shuffle each group, so that taking the last item gives a random country
    const pools = [...groups.values()].map((group) => shuffle(group));
    // The countries to find, in order
    const picked: Country[] = [];
    // Keep picking until we have enough turns or run out of countries

    while (picked.length < turns) {
        // Only regions that still have unused countries can be picked
        const available = pools.filter((group) => group.length > 0);

        // Stop early if every country has been used
        if (available.length === 0) {
            break;
        }
        // Pick a random region first, so every region is equally likely whatever its size
        const group = available[Math.floor(Math.random() * available.length)];
        // Take a country from that region
        const country = group?.pop();

        // Add it to the list
        if (country) {
            picked.push(country);
        }
    }
    // Hand back the countries to find
    return picked;
}

// Create the state and rules for one country game (call it inside a component's setup, because it uses the stores)
export function useCountryGame(options: CountryGameOptions = {}): CountryGame {
    // Use the given number of turns, or the default
    const turnsPerGame = options.totalTurns ?? DEFAULT_TOTAL_TURNS;

    // Current phase of the game
    const phase = ref<GamePhase>('loading');
    // All countries the player can click in this round
    const playable = ref<Country[]>([]);
    // The countries to find, in order, one per turn
    const targets = ref<Country[]>([]);
    // Index of the current turn in the targets list
    const turnIndex = ref(0);
    // The country the player has clicked but not yet confirmed
    const pending = ref<Country | null>(null);
    // Whether the latest confirmed answer was correct
    const lastAnswerCorrect = ref(false);
    // Number of correct answers so far
    const correctCount = ref(0);
    // Colours to show on the map right now
    const highlights = ref<Record<string, Highlight>>({});

    // Number of turns in this game (fewer than turnsPerGame if the region is small)
    const totalTurns = computed((): number => targets.value.length);
    // Turn number for display, counting from 1
    const turnNumber = computed((): number => turnIndex.value + 1);
    // The country to find on the current turn
    const target = computed((): Country | null => targets.value[turnIndex.value] ?? null);

    // Coins and XP both come from the shared formula
    const reward = computed(() => calculateReward(correctCount.value, totalTurns.value));
    // Coins earned so far
    const coins = computed((): number => reward.value.coins);
    // XP earned so far
    const xp = computed((): number => reward.value.xp);

    // Reset everything and start a new game
    function startGame(countries: Country[]): void {
        // Remember which countries can be clicked
        playable.value = countries;
        // Pick random countries to find, never the same one twice
        targets.value = buildTargets(countries, turnsPerGame);
        // Go back to the first turn
        turnIndex.value = 0;
        // Clear the score
        correctCount.value = 0;
        // Clear any selection
        pending.value = null;
        // Clear any colours
        highlights.value = {};
        // Start playing, or stay in loading if there was nothing to play
        phase.value = targets.value.length > 0 ? 'playing' : 'loading';
    }

    // The player clicked a country
    function selectCountry(code: string): void {
        // Read the country the player is looking for
        const goal = target.value;

        // Ignore clicks unless we are waiting for an answer
        if (phase.value !== 'playing' || !goal) {
            return;
        }
        // Find the clicked country, but only among the countries of this round's region
        const country = playable.value.find((c) => c.code === code && c.regionId === goal.regionId);

        // Ignore countries that are not part of this round
        if (!country) {
            return;
        }
        // Remember the choice until it is confirmed
        pending.value = country;
        // Colour it in the neutral 'selected' colour
        highlights.value = { [code]: 'selected' };
        // Ask the player to confirm
        phase.value = 'confirming';
    }

    // The player wants to choose something else
    function cancelSelection(): void {
        // Only valid while confirming (the confirmation modal also emits close after confirm, which must do nothing)
        if (phase.value !== 'confirming') {
            return;
        }
        // Forget the choice
        pending.value = null;
        // Remove the neutral colour
        highlights.value = {};
        // Back to waiting for a click
        phase.value = 'playing';
    }

    // The player confirmed the choice
    function confirmSelection(): void {
        // Read the chosen country and the correct one
        const chosen = pending.value;
        const goal = target.value;

        // Only valid while confirming, and only if both exist
        if (phase.value !== 'confirming' || !chosen || !goal) {
            return;
        }
        // Compare by code, never by name
        const correct = chosen.code === goal.code;

        // Store the result for the result modal
        lastAnswerCorrect.value = correct;
        // Count correct answers for the final score
        if (correct) {
            correctCount.value += 1;
        }
        // Right: only the clicked country turns green.
        // Wrong: the clicked country turns red, and the correct country turns green so the player can see it
        highlights.value = correct
            ? { [chosen.code]: 'correct' }
            : { [chosen.code]: 'wrong', [goal.code]: 'correct' };
        // Show the result modal (this line was missing, and it also stops the close event from cancelling the choice)
        phase.value = 'result';
    }

    // Called when the result modal is closed
    function nextTurn(): void {
        // Only valid after an answer
        if (phase.value !== 'result') {
            return;
        }
        // Forget the previous choice
        pending.value = null;
        // Clear the colours for the next turn
        highlights.value = {};
        // If that was the last turn, the game is over
        if (turnIndex.value + 1 >= totalTurns.value) {
            // Pay out the rewards, exactly once, because the phase guard above blocks a second call
            giveReward(reward.value);
            // Show the summary instead of a new turn
            phase.value = 'finished';
            return;
        }
        // Otherwise move on to the next country
        turnIndex.value += 1;
        // And wait for a new click
        phase.value = 'playing';
    }

    // Expose the state and the actions
    return {
        phase, target, turnNumber, totalTurns, correctCount, lastAnswerCorrect,
        highlights, coins, xp, startGame, selectCountry, cancelSelection, confirmSelection, nextTurn,
    };
}