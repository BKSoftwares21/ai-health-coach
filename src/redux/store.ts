import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/UserSlice';
import metricsReducer from './features/metricsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        metrics: metricsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
