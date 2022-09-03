import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    c: 0,
};

export const customReducer = createReducer(initialState, {

    increment: (state) => {   //action is not required since there is a constant change going on
        state.c += 1;
    },

    incrementByValue: (state, action) => {   //here action is required, since change is customized and it could be different all the time
        state.c += action.payload;
    },

    decrement: (state) => {
        state.c -= 1;
    },

});