const body = document.querySelector("body");

//Goal to change the background on clicking change-button

//Select the target on which we want an event.
const changeBackground = document.querySelector(".change-back");

//subscribe to the event type
changeBackground.addEventListener("click",changeBackgroundBody);

function changeBackgroundBody(){
    // let index = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = randomColorGenerator();
}

let randomColorGenerator = function(){
    let values = "0123456789abcdef".split("")
    let color = "#";
    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += values[index];
    }
    // console.log(color);
    return color;
}