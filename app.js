// Generate random color

const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const body=document.querySelector('body');

const start=document.querySelector('#start');
const stop=document.querySelector('#stop');

let IntervalID;

function startChangingColor(){
    IntervalID=setInterval(changeColor,1000);

    function changeColor(){
        body.style.backgroundColor=randomColor();
    }
}

function stopChangingColor(){
    clearInterval(IntervalID);
    IntervalID=null;
}




start.addEventListener('click', startChangingColor);
stop.addEventListener('click' , stopChangingColor);