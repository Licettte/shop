import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { BasketList, BasketItem } from '../types/';

const initialState: BasketList = {
    order: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemIndex = state.order.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex < 0) {
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                };
                state.order = [...state.order, newItem];
            } else {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
                state.order = newOrder;
            }
        },
        deleteItem: (state, action) => {
            state.order = state.order.filter(
                (itemOrder: BasketItem) => itemOrder.id !== action.payload.id
            );
        },

        incrementItem: (state, action) => {
            const newOrder = state.order.map((el) => {
                if (el.id === action.payload.id) {
                    const newQuantity = el.quantity + 1;
                    return {
                        ...el,
                        quantity: newQuantity,
                    };
                } else {
                    return el;
                }
            });
            state.order = newOrder;
        },
        decrementItem: (state, action) => {
            const newOrder = state.order.map((itemOrder) => {
                if (
                    itemOrder.id === action.payload.id &&
                    itemOrder.quantity > 1
                ) {
                    const newQuantityItemOrder = itemOrder.quantity - 1;
                    return {
                        ...itemOrder,
                        quantity: newQuantityItemOrder,
                    };
                } else {
                    return itemOrder;
                }
            });
            state.order = newOrder;
        },
    },
});

export const { addItem, deleteItem, incrementItem, decrementItem } =
    basketSlice.actions;
export const selectOrder = (state: RootState) => state.basket.order;
export default basketSlice.reducer;
