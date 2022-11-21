import { createSlice } from '@reduxjs/toolkit';

export const checkingTokenSlice = createSlice({
    name: 'tokenChecking',
    initialState: {
        tokenIsValid: true,
    },
    reducers: {
        checkToken(state, action) {
            state.tokenIsValid = action.payload;
        },
    },
});

export const { checkToken } = checkingTokenSlice.actions;

export default checkingTokenSlice.reducer;
