import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { CardState } from '../types';

const _url = 'https://my-json-server.typicode.com/licettte/db.json.server/headphones';

export const fetchProductCards = createAsyncThunk<
    CardState,
    undefined,
    { state: { asyncTodos: CardState } }
>('cards/fetchData', async () => {
    const data = await fetch(_url);
    if (!data.ok) {
        throw new Error(`Could not ${_url}, status:${data.status}`);
    }
    return await data.json();
});

const initialState: CardState = {
    wiredHeadphones: [],
    wirelessHeadphones: [],
    status: 'idle',
};

const productCards = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductCards.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(fetchProductCards.fulfilled, (state, action) => {
                state.status = 'finished';
                state.wiredHeadphones = action.payload.wiredHeadphones;
                state.wirelessHeadphones = action.payload.wirelessHeadphones;
            });
    },
});

export const selectWiredHeadphones = (state: RootState) =>
    state.cards.wiredHeadphones;
export const selectWirelessHeadphones = (state: RootState) =>
    state.cards.wirelessHeadphones;
export const selectStatus = (state: RootState) => state.cards.status;

export default productCards.reducer;
