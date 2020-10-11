import { ADD_NEWS, REMOVE_NEWS, ADD_UPVOTE } from '../actions/types';

const initialState = {
    newsCollection : [],
    loading : true,
}


const News = (state=initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case  ADD_NEWS: 
        return{
            ...state,
            newsCollection : [...state.newsCollection, payload],
            loading: false
            }
        case REMOVE_NEWS : 
            return {
                ...state,
                newsCollection : state.newsCollection.filter(news => news.id !== payload),
                loading: false
            }
        case ADD_UPVOTE:
            return {
                ...state,
                newsCollection : state.newsCollection.map(news => 
                    news.id === payload ? {...news, points : news.points + 1} : news
                ),
                loading: false
            }
        default :
            return state;
    }
}

export default News;