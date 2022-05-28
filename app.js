const output = document.querySelector('.output');

const root = document.querySelector('.root');



let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let error = document.getElementById('error');
let add = document.getElementById('add');
let remove = document.getElementById('remove');
const alert = document.getElementById('alert');



let count = 0;

add.onclick = () => {
    count++

    if(count <= 10){
        output.innerHTML = count;
        a1.play();
        alert.innerHTML = "";
    }else{
        count = 10;
        error.play();
        alert.innerHTML = "Stop! It will not increase more";
        alert.style.color = "red"
    }

}

remove.onclick = () => {
    count--
    if (count >= 0) {
        a2.play();
        output.innerHTML = count;
        alert.innerHTML = "";
    }else{
        count = 0;
        error.play();
        alert.innerHTML = "Stop! It will not decrease more";
        alert.style.color = "red"
    }
    
}


// Timer

const mm = document.getElementById('mm');
const ss = document.getElementById('ss');


const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter')



count = 0;
let count2 = 0;
let countDown = "";

start.onclick = () => {
    countDown = setInterval(() => {
        count++;
        // add zero before single digit number
        count < 10 ? count = "0" + count: count;
        // If it exceeds 59 seconds, it will be converted to minutes
        if (count > 59){
            count2++;
            // add zero before single digit number
            count2 < 10 ? count2 = "0" + count2: count2;
            mm.innerHTML = count2;
        }
        count > 59 ? count = "0" + 0: count;
        ss.innerHTML = count;
        counter.play();
    }, 1000)

    start.style.pointerEvents = "none"
}


stop.onclick = () => {
    clearInterval(countDown);
    a2.play();

    start.style.pointerEvents = "inherit"
}

reset.onclick = () => {
    clearInterval(countDown);
    count = 0;
    count2 = 0;
    error.play();
    ss.innerHTML = "0" + count;
    mm.innerHTML = "0" + count2;
    
    start.style.pointerEvents = "inherit"
}

