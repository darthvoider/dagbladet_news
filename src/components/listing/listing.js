import React from 'react';
import { connect } from 'react-redux';
import './listing.scss';

export const ListingConnected = ({news}) => {
    return (
        <div className='page-listing'>
            <ul className='news-listing'>
                {news.map(oneNew => (
                    <li key={oneNew.title} className='news-listing-item'>
                        <a href={oneNew.url}>
                            {oneNew.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    news: state.news
});

export const Listing = connect(mapStateToProps)(ListingConnected);
