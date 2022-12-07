let button = document.querySelector("button");

function TimerFunction(){
    console.log("Timer has Began!")
    
    let endOfTimer = Date.parse("Dec 9, 2022 01:30:00");
    
    let nowTime = new Date();//Getting a copy of the entire date and time from user

    let timeDifference = endOfTimer - nowTime; //Future End time minus Now Time
    
    //console.log(timeDifference); //Test
    
    let days = Math.floor(timeDifference / (1000*60*60*24));
    let hours = Math.floor(timeDifference / (1000*60*60));
    let minutes = Math.floor(timeDifference / (1000*60));
    let seconds = Math.floor(timeDifference / 1000);
    //console.log(days + 'd', hours + 'h', minutes + 'min', seconds + 'sec');
    
    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes * 60;
    
    console.log(dayTime + 'd', hourTime + 'h', minuteTime + 'min', secondsTime + 'sec');
    
    document.querySelector('.timer').innerHTML = '<div>' +'Game Awards 2022: ' + dayTime + 'd ' + hourTime + 'h ' + minuteTime + 'min ' + secondsTime + 'sec ' + '</div>';
    
}

setInterval('TimerFunction()', 1000)


button.addEventListener("click", ()=>{
    TimerFunction();
})