import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './article.scss';
import { useToggle } from '../../hooks/useToggle';
import { Button } from '../button';

export const Article = ({ article, updateArticleTitle, removeArticle }) => {
    const { url, width, title, imageUrl } = article;
    const { isOpen, toggle } = useToggle();
    const { isOpen: isShownPrompt, toggle: setIsShownPrompt } = useToggle();
    const [inputValue, setInputValue] = useState(title);
    const [timeLeft, setTimeLeft] = useState(5);
    const articleClasses = classNames('article', `col-${width}`);

    const removeArticleWithCallback= useCallback(() => removeArticle(title), [removeArticle, title]);

    useEffect(() => {
        if (!isShownPrompt) {
            setTimeLeft(5);
            return;
        }
        if (!timeLeft) {
            removeArticleWithCallback();
            return;
        }
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft, isShownPrompt, removeArticleWithCallback]);

    const setInputValueHandler = event => {
        setInputValue(event.target.value);
    };

    const updateArticleTitleHandler = () => updateArticleTitle({ newTitle: inputValue, oldTitle: title });

    const toggleHandler = () => {
        if (isOpen) {
            toggle();
            setInputValue(title);
        }
        toggle();
    };

    const renderArticleInner = () => (
        <a href={url} className='article-link'>
            <figure>
                <img className='article-image' src={imageUrl} alt={title} />
            </figure>
            {!isOpen && <h3 className='article-name'>{title}</h3>}
        </a>
    );

    const renderForm = () => (
        <form onSubmit={updateArticleTitleHandler} className='change-title-form'>
            <input value={inputValue} onChange={setInputValueHandler} />
            <Button title='Save' type='submit' />
        </form>
    );

    const renderBtnGroup = () => (
        <div className="btn-group">
            <Button title='Edit' action={toggleHandler} />
            <Button title='Remove' action={setIsShownPrompt} />
        </div>
    );

    const renderPromptForm = () => (
        <div className='prompt-wrapper'>
            <p>Are you sure to remove this article?</p>
            <div className="btn-group">
                <Button
                    title={`Yes(${timeLeft})`}
                    action={removeArticleWithCallback} />
                <Button
                    title='No'
                    action={setIsShownPrompt}
                />
            </div>
        </div>
    );

    return (
        <article className={articleClasses}>
            {!isShownPrompt && renderArticleInner()} {!isShownPrompt && isOpen && renderForm()} {!isShownPrompt && renderBtnGroup()} {isShownPrompt && renderPromptForm()}
        </article>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
    updateArticleTitle: PropTypes.func.isRequired,
    removeArticle: PropTypes.func.isRequired
};
