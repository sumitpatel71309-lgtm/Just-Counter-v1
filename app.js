if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js")
    .then(()=>{
        console.log("Service Worker Registered successfully");
    })
    .catch((error)=>{
        console.log("Service Worker registration failed:",error);
    });
}
const intro = new Audio('in.mp3');
const tap = new Audio('click.mp3');
const complete = new Audio('complete.mp3');
const mantra = new Audio('harekrishna.mp3');
const start = document.querySelector('.start');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let count = document.querySelector('.count');
let life = document.querySelector('.life');
let home = document.querySelector('.home');
let total =0;
if(start){start.addEventListener('click',()=>{
    window.location.href="own.html";
})}

if(document.location.pathname.includes('own.html')){
    intro.currentTime=0;
    intro.playbackRate=.65;
    intro.play();
    setTimeout(()=>{
        window.location.href="jap.html";
    },10000)
}
if(document.location.pathname.includes('jap.html')){
    mantra.loop = true;
    mantra.volume =.3;
    mantra.currentTime = 0;
    mantra.play();
}
if(home){home.addEventListener('click',()=>{
    window.location.href="index.html";
})}


if(plus && minus && count && life){

function triggerEvents(element,duration){
    element.classList.add('active');
    setTimeout(()=>{
        element.classList.remove('active');
        element.blur();
    },300);
}
    
let m = Number(plus.innerText);
let n = Number(minus.innerText);
let o = Number(life.innerText);

plus.addEventListener('pointerdown',()=>{
    if(navigator.vibrate){
        navigator.vibrate(300);
    }
    m = m+1;
    n = n+1;
    o = o+1;
    tap.currentTime=0;
    tap.play();
    if( m === 108 ){
        total = total +1; 
        m = 0;
        n = 0;
        if(navigator.vibrate){
            navigator.vibrate([400,100,400,100,600]);
        }
        complete.play();
   }
   plus.innerText = m;
   minus.innerText = n;
   count.innerText = `108 X ${total}`;
   life.innerText = o;
   triggerEvents(plus,300);
});

minus.addEventListener('pointerdown',()=>{
     if(navigator.vibrate){
        navigator.vibrate(270);
    }
    if(o <= 0){
        return;
    }
    o = o-1;
    tap.currentTime=0;
    tap.play();
    if(n === 1){
         complete.play();
         if(navigator.vibrate){
            navigator.vibrate([400,100,400,100,600]);
        }
    }
    if( n === 0 ){
        m = 107;
        n = 107;
        if(total>0){
            total = total-1;
        }
   }
   else{
     m = m-1;
     n = n-1;
   }
   plus.innerText = m;
   minus.innerText = n;
   count.innerText = `108 X ${total}`;
   life.innerText = o;
   triggerEvents(minus,270);
});

}
