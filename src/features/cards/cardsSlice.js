import { createSlice } from '@reduxjs/toolkit';

const options = {
    name:'cards',
    initialState: {
        cards:{}
    },
    reducers:{
        addCard:(state,action)=>{
            const { id, front, back } = action.payload;
            const card = {
                id:id,
                front:front,
                back:back,
            }
            state.cards[id]=card;
        }
    }
}

const cardsSlice = createSlice(options);

export const selectCards = state => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;