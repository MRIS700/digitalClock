function updateClock() {
    var date = new Date();
    var day = date.getDay(),
    month = date.getMonth(),
    dateOfMonth = date.getDate(),
    year = date.getFullYear(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    period = "AM";

    // Code for the period (AM/PM)
    
    if(hour == 0){
        hour = 12;
        period = "AM";
    }
    else if (hour == 12){
        //hour = hour - 12;
        period ="PM";
    }
    else if (hour > 12){
        hour = hour - 12;
        period ="PM";
    }

    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var ids = ["dayname","month","numberofday","year","hour","minute","second","period"];
    var values = [week[day],months[month],dateOfMonth.pad(2),year,hour.pad(2),minute.pad(2),second.pad(2), period];
    for(var i =0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1000);
}