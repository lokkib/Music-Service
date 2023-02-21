import { createSlice } from '@reduxjs/toolkit';

const changingDarkTheme = createSlice({
    name: 'changingTheme',
    initialState: {
        darkTheme: true,
    },
    reducers: {
        changeTheme(state, action) {
            state.darkTheme = action.payload;
        },
    },
});

export const { changeTheme } = changingDarkTheme.actions;
export default changingDarkTheme.reducer;
