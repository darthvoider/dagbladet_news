import React from 'react';
import { connect } from 'react-redux';
import { removeArticle, updateArticleTitle } from '../../store/actions';
import { Article } from '../article/article';
import './home.scss';

const HomeConnected = ({ news, updateArticleTitle, removeArticle }) => {
    return (
        <div className='home-page'>
            <div className='row'>
                {news.map(article => (
                    <Article
                        article={article}
                        key={article.title}
                        updateArticleTitle={updateArticleTitle}
                        removeArticle={removeArticle}
                    />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    news: state.news
});

const mapDispatchToProps = {
    updateArticleTitle,
    removeArticle
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeConnected);
