const readline = require('readline');


let hrs = 23;

let min = 59;

let sec = 50;

function displayCounter(counter) {
    // Clear the console
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
  
    // Display the counter
    console.log(counter);
}
function disp(){
    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hrs++;
    }

    if(hrs == 24){
        hrs = 0;
    }

    let h = hrs;
    if(hrs <10){
        h = "0" + hrs;
    }

    let m = min;
    if(min < 10){
        m = "0" + min;
    }

    let s = sec;

    if(s < 10){
        s = "0" + sec;
    }
    // console.log();
    displayCounter(h + ":" + m + ":" + s);
    sec++;
}

const id = setInterval(disp , 1 *1000);