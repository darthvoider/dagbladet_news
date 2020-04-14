import { REMOVE_ARTICLE, SET_NEWS, UPD_ARTICLE_TITLE } from './types';

export const setNews = news => ({
    type: SET_NEWS,
    news
});

export const updateArticleTitle = ({newTitle, oldTitle}) => ({
    type: UPD_ARTICLE_TITLE,
        newTitle, oldTitle
});

export const removeArticle = title => ({
    type: REMOVE_ARTICLE,
    title
});
