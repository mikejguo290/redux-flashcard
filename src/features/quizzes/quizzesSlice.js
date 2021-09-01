import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'quizzes', 
    initialState: {
        quizzes: {}
    },
    reducers:{
        addQuiz:(state, action)=>{
            const {id, name, topicId} = action.payload; 
            const quiz = {
                id:id,
                name:name,
                topicId:topicId,
                cardIds:[], // associate cards with quiz, initialise with empty array. 
            }
            state.quizzes[id] = quiz;
        }
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;

const quizzesSlice = createSlice(options);
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;