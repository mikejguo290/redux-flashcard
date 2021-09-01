import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice'

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

//Conceptually, the actions of creating a new quiz and associating it with its topic are a part of a single process. 

export const addQuizAndTopicId = (payload)=>{
    return (dispatch)=>{
        // the thunk groups the acts of dispatching two action creators -  addQuiz and addQuizId(toTopic) A.C, together. 
        // (aside. the two action creators are from different slices here!)
        // dispatching thunk a.c. doesn't call it immediately. the execution is delayed because it is passed to middleware first.
        dispatch(addQuiz(payload));
        // adapt addQuiz's payload for addQuizId. 
        const { id, topicId } = payload;
        const input = {
            topicId: topicId, 
            quizId: id,
        }
        // expect { topicId, quizId } from payload
        dispatch(addQuizId(input)); //change  quizId to id on addQuizId on topicsSlice.js
    }
}

export default quizzesSlice.reducer;