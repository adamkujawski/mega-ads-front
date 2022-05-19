import React, {useState} from 'react';
import './App.css'
import {Header} from "./components/layout/Header";
import {Map} from "./components/map/Map";
import {SearchContext} from "./contex/searchContext";

export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search,setSearch}}>
            <Header/>
            <Map/>
        </SearchContext.Provider>
    );
}

