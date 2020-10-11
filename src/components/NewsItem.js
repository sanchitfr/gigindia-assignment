import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


import './NewsItem.css';

import {removeNews, addUpvote } from '../redux/actions/news';

const NewsItem = ({news, removeNews, addUpvote}) => {


    return (
        <div className='news-item'>
            <Row className='first-row'>
                <Col xs={1}>
                    <button onClick={e => addUpvote(news.id)}>^</button>
                </Col>
                <Col xs={10}>
                    <p>{news.title} (<a href={news.url}>Full article</a>)</p>
                </Col>
                <Col xs={1}>
                    <button onClick={e => removeNews(news.id)}><strong>X</strong></button>
                </Col>
            </Row>
            <Row className='second-row'>
                <span>{news.points} points | Author: {news.author}</span>
            </Row>
        </div>
    )

}


export default connect(null, { removeNews, addUpvote })(NewsItem);