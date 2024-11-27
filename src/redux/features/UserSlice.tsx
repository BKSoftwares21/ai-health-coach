import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    age: number;
    weight: number;
    height: number;
    goals: string[];
}

const initialState: UserState = {
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    goals: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<Partial<UserState>>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
