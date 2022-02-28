import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import gameService from './gameService';

const initialState = {
  dictionary: [],
  isDictionaryLoaded: false,
  puzzleWord: '',
  gameBoard: [],
  numOfGuesses: 0,
  isSolved: false,
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
      state.gameBoard = '';
      state.numOfGuesses = 0;
      state.isSolved = false;
      state.error = '';
    },
    increaseNumOfGuesses: (state) => {
      state.numOfGuesses = state.numOfGuesses + 1;
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

export const { resetGame, increaseNumOfGuesses, setError, solvePuzzle, createNewPuzzleWord } =
  gameSlice.actions;
export default gameSlice.reducer;
