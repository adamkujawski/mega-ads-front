import React, {EventHandler, SyntheticEvent, useContext, useState} from "react";
import {Btn} from "../common/Btn";
import './Header.css'
import {SearchContext} from "../../contex/searchContext";
export const Header = () => {

    const {search, setSearch} = useContext(SearchContext);
    const [inputValue, setInputValue] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) =>{
        e.preventDefault();
        setSearch(inputValue);
    }

    return (
        <header>
            <h1><strong>Mega</strong><span> Ogłoszenia</span></h1>
            <Btn text={"Dodaj Ogloszenie"}/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
                <Btn text={"Szukaj"}/>
            </form>
        </header>
    )
}