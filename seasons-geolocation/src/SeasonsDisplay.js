//File has code to determine
//text/icons based on props

import React from 'react';

//function to determine season based on current latitude
// and current month

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'Summer' : 'Winter';
    } else {
        return latitude > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonsDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const displayText = season === 'winter' ? "It's cold, son!" : "It's summer time!";
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return ( 
    <div>
        <i className={`${icon} icon`}/>
        <h1>{displayText}</h1>
        <i className={`${icon} icon`}/>
    </div>
    );
}

export default SeasonsDisplay;