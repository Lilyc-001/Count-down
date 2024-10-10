let hour =document.getElementById('hour');
let mins = document.getElementById('mins');
let sec = document.getElementById('secs');

let secs = 0
let min =0
let hr =0


setInterval(()=>{

    // secs >= 60? secs = 0 :secs+=1
    // secs = 60? min++ :
    sec.innerHTML =secs 
    mins.innerHTML = min
    hour.innerHTML = hr

    if(secs >= 60){
        secs === 60? secs = 0 :secs+=1
        min ===60? hr+= 1: hr
        secs =0
    }
    else{
        secs += 1

    }

    
},700)