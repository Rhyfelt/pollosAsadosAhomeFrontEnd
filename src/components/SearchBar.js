import React from 'react'
import {  AiOutlineSearch }  from "react-icons/ai";
import "../assets/style/SearchBar.css";

const SearchBar = ({placeholder,onSearch}) => {
    return (
        <div id="searchbar" className={`searchbar-container`}>
          <i className="searchbar-icon-container">
            <AiOutlineSearch />
          </i>
          <input
            onChange={(e)=>onSearch(e.target.value)}
            className="searchbar"
            placeholder={placeholder}
          />
        </div>
    )
}

export default SearchBar;