import { createSlice } from '@reduxjs/toolkit';

const options = {
    name:'topics',
    initialState: {
        topics:{}
    },
    reducers:{
        addTopic:(state,action)=>{
            const {id, name, icon} = action.payload;
            const topic = { // ...action.payload is more succint but less clear. 
                id: id,
                name: name,
                icon: icon, 
                quizIds:[], // list of quiz ids that belong to this topic.
            }
            state.topics[id]=topic;
        },
        addQuizId:(state, action)=>{
            const { topicId, quizId } = action.payload; 
            // find the topic with topicId, then push quizId onto property quizIds.
            state.topics[topicId].quizIds.push(quizId);
        }
    }
}

const topicsSlice=createSlice(options);

export const selectTopics = state => state.topics.topics; 

export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;


