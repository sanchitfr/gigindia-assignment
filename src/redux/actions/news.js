import { ADD_NEWS, REMOVE_NEWS, ADD_UPVOTE } from './types';

export const addNews = news => dispatch => {
    news.points = 0;
    dispatch({
        type: ADD_NEWS,
        payload : news
    })
}

export const removeNews = newsId => dispatch => {
    dispatch({
        type: REMOVE_NEWS,
        payload : newsId
    })
};

export const addUpvote = newsId => dispatch => {
    dispatch({
        type: ADD_UPVOTE,
        payload : newsId
    })
}