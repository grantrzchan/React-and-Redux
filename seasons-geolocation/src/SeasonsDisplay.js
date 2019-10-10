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
    console.log(season);
    return ( 
    <div> Season Display </div>
    );
}

export default SeasonsDisplay;