import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gameService from './gameService';

const initialState = {
  dictionary: [],
  isDictionaryLoaded: false,
  puzzleWord: '',
  gameBoard: Array(8).fill(Array(5).fill({ char: '', color: 'B' })),
  numOfGuesses: 0,
  isSolved: false,
  hasLost: false,
  error: '',
};

export const loadDictionary = createAsyncThunk('game/loadDictionary', async (_, thunkAPI) => {
  try {
    return await gameService.loadDictionary();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state) => {
      state.puzzleWord = '';
      state.gameBoard = Array(8).fill(Array(5).fill({ char: '', color: 'B' }));
      state.numOfGuesses = 0;
      state.isSolved = false;
      state.hasLost = false;
      state.error = '';
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    solvePuzzle: (state) => {
      state.isSolved = true;
    },
    createNewPuzzleWord: (state) => {
      if (state.dictionary) {
        const index = (Math.random() * state.dictionary.length + 1).toFixed(0);
        state.puzzleWord = state.dictionary[index];
      }
    },
    addGuess: (state, action) => {
      state.gameBoard[state.numOfGuesses] = action.payload;
      state.numOfGuesses = state.numOfGuesses + 1;
      if (state.numOfGuesses === 8) {
        state.hasLost = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDictionary.pending, (state) => {
        console.log('loading dictionary...');
      })
      .addCase(loadDictionary.fulfilled, (state, action) => {
        console.log('dictionary loaded: ');
        state.dictionary = action.payload;
        state.isDictionaryLoaded = true;
      })
      .addCase(loadDictionary.rejected, (state) => {
        console.log('Dictionary could not load');
      });
  },
});

export const {
  resetGame,
  increaseNumOfGuesses,
  setError,
  solvePuzzle,
  createNewPuzzleWord,
  addGuess,
} = gameSlice.actions;
export default gameSlice.reducer;
