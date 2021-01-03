import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState/';

const App = () => {
    const initialState = useInitialState(API);
    return (
        <div className="App">
            <Header />
            <Search />
            {
                initialState.mylist.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                        <Item />
                    </Carousel>
                </Categories>
            }

            <Categories title="Trends">
                <Carousel>
                    {initialState.trends.map(item =>
                        <Item key={item.id} {...item} />       
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                    {initialState.originals.map(item =>
                        <Item key={item.id} {...item} />       
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
}

export default App;