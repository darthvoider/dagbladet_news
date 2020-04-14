import React, { useCallback } from 'react';
import './styles/index.scss';
import { useAsync } from 'react-async';
import { connect } from 'react-redux';
import { getData } from './api/get-data';
import { Header } from './components/header';
import { Home } from './components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Listing } from './components/listing';
import { Loader } from './components/loader';
import { excludeOnlyArticles } from './helpers';
import { setNews } from './store/actions';

function AppConnected({setNews}) {
    const { isPending } = useAsync({
        promiseFn: getData,
        onResolve: useCallback(resp => {
            if (!resp) return;
            const updNews = excludeOnlyArticles(resp[0]);
            setNews(updNews);
        }, [setNews])
    });

    if (isPending) {
        return (
            <Loader />
        );
    }
    return (
        <Router>
            <Header />
            <main className='site-main'>
                <Switch>
                    <Route path='/listing'>
                        <Listing />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

const mapDispatchToProps = {
    setNews
};

export const App = connect(null, mapDispatchToProps)(AppConnected);
