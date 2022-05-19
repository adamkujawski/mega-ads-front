import React, {useState} from 'react';
import './App.css'
import {Header} from "./components/layout/Header";
import {Map} from "./components/map/Map";
import {SearchContext} from "./contex/searchContext";
import {Route, Routes} from "react-router-dom";
import {AddForm} from "./components/AdForm/AddForm";

export const App = () => {

    const [search, setSearch] = useState('')

    return (
        <SearchContext.Provider value={{search,setSearch}}>
            <Header/>
            <Routes>
                <Route path ="/" element ={<Map/>}/>
                <Route path ="/add" element ={<AddForm/>}/>
            </Routes>
        </SearchContext.Provider>
    );
}

