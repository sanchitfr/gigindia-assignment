import React, {Fragment, useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';
import { addNews } from '../redux/actions/news';
import Spinner from './Spinner';

import './ShowNews.css';
import { loadState } from '../localStorage';

const ShowNews = ({ addNews, news: {newsCollection, loading} }) => {


    const fetchNews = async index => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://hn.algolia.com/api//v1/items/${index}`);
        const data = await response.json();
        addNews(data);
    }

    useEffect(() => {
        const state = JSON.parse(localStorage.getItem('state'));
        if(state === null || state.News.newsCollection.length === 0){
            for(var i =2; i<15; i++){
                fetchNews(i);
            }
        }

    }, []);
    
    return (
        <div className='show-news'>
          <ListGroup>
          {
              loading ? <Fragment><Spinner/></Fragment>
              :
              newsCollection.map(curr => <ListGroup.Item><NewsItem  key={curr.id} news={curr}/></ListGroup.Item>)
          } 
          </ListGroup>
        </div>
    )
}

const mapStateToProps = state => ({
    news : state.News
})

export default connect(mapStateToProps, { addNews })(ShowNews);
