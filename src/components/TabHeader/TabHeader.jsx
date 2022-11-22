import React, { useState } from 'react'
import './TabHeader.css'

const TabHeader = () => {
    const [todaysDate, setTodaysDate] = useState("");

    const date = new Date();

    setInterval(function () {
        today();
    }, 1000);

    const today = () => {
        setTodaysDate(
            `${date.toLocaleString("en-us", {
                weekday: "short",
            })} ${date.getDate()}, ${date.toLocaleString("en-us", {
                month: "short",
            })} ${date.getFullYear()}  ${date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            })}`
        );
    };

    return (
        <>
            <div className="tabheader-container">
                <div className="left-section">
                    <div className="home">
                        HOME
                    </div>
                    <div className="favourite">
                        FAVOURITE
                    </div>
                    <div className="recent-search">
                        RECENT SEARCH
                    </div>
                </div>
                <div className="right-section">{todaysDate}</div>
            </div>
            <div className="date-section-mobile">{todaysDate}</div>
        </>
    )
}

export default TabHeader