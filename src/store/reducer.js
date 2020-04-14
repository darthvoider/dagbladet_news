import { REMOVE_ARTICLE, SET_NEWS, UPD_ARTICLE_TITLE } from './types';

export const initialState = {
    news: []
};

export function reducer(state, payload) {
    switch (payload.type) {
        case SET_NEWS:
            return {...state, news: payload.news};
        case UPD_ARTICLE_TITLE:
            return {
                ...state,
                news: state.news.map(oneNew => {
                    if (oneNew.title === payload.oldTitle) {
                        return {
                            ...oneNew,
                            title: payload.newTitle
                        }
                    }

                    return oneNew;
                })
            };
        case REMOVE_ARTICLE:
            return {
                ...state,
                news: state.news.filter(oneNew => oneNew.title !== payload.title)
            };
        default:
            return state;
    }
}
