'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];


export const getDate = function(dateUnix , timezone){
    const date = new Date((dateUnix + timezone) * 1000 );
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];


    return `${weekDayName} ${date.getUTCDate()} , ${monthName}`;
}


export const getTime = function (timeUnix , timezone) {
    const date = new Date((timeUnix + timezone) * 1000 );
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";


    return `${hours % 12 || 12}:${String(minutes).padStart(2 , '0')} ${period}`;
}

//padStart ensures minutes are always 2 digits

export const getHours = function (timeUnix , timezone) {
    const date = new Date((timeUnix + timezone) * 1000 );
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";


    return `${hours % 12 || 12} ${period}`;
}

export const mps_to_kmh = mps => {
    const mph = mps * 3600 ;
    return mph / 1000;
}

export const aqiText = {
    1 : {
        level: "Good",
        message : "Air quality is considered satisfactory , and air pollution little to no risk."
    } ,

    2 : {
        level: "Fair",
        messgae: "Air quality is acceptable , however for some pollutants there may be a moderate health concern for people sensitive to air pollution."
    } , 

    3 : {
        level: "Moderate",
        messgae: "Members of sensitive group may experience health effects. The general population is not likely to be affected."
    } , 

    4 : {
        level: "Poor",
        messgae: "Everyone may begin to experience health effects , members of sensitive group may experience more serious health effects."
    } ,

    5 : {
        level: "Very Poor",
        messgae: "Health warnings of emergency conditions . The entire population is likely to be affected."
    }
};

