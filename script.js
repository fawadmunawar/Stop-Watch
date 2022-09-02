let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let sec = document.getElementById("seconds").innerText;
let min = document.getElementById("mins").innerText;

let myinterval;

start.addEventListener("click" ,() =>{
    myinterval = setInterval(updateseconds, 1000);
    
})

stop.addEventListener("click", () =>{
    document.getElementById("seconds").innerText = zero(); 
    document.getElementById("mins").innerText = zeromin();

    clearInterval(myinterval);
})

reset.addEventListener("click", () =>{
    sec = 0;
    min = `0${0}`;
    document.getElementById("seconds").innerText = zero(); 
    document.getElementById("mins").innerText = zeromin();
})

function updateseconds() {
    sec++;
    if(sec < 60){
        document.getElementById("seconds").innerText = zero(); 
    }
    else{
        document.getElementById("seconds").innerText = zero(); 
        sec = 0;
        min++;
        document.getElementById("mins").innerText = zeromin();
    }
}

function zero() {
        if(sec < 10){
            return `0${sec}`
        }
        else{
            return sec; 
        }

}

function zeromin() {
        if(min < 10 && min > 0){
            return `0${min}`
        }
        else{
            return min; 
        }

}

