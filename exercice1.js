// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let time = 0;
let run = true;
let countUp = function() {
    seconds.innerHTML = time;
    time++;
    if (run === true) {
        setTimeout(countUp, 1000)
    }
};
countUp();

// How can you make it stop counting?

let stopCountUp = function() {
    run = false;
};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);



