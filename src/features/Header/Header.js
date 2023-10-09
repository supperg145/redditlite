import React, { useState, useEffect } from "react";
import "./Header.css"


const Header = () => {

    return (
        <header>
            <div className="logo">
                <p>RedditLite</p>
            </div>
            <form className="search">
                <input
                type="text"
                placeholder="Search"

                />
            </form >
            <button type="submit"></button>
        </header>
    )
}

export default Header;