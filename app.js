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
    mantra.volume =.22;
    mantra.currentTime = 0;
    mantra.play();
}
if(home){home.addEventListener('click',()=>{
    window.location.href="index.html";
})}


if(plus && minus && count && life){

function triggerEffects( element, duration){
    element.classList.add('active');
    setTimeout(()=>{
        element.classList.remove('active');
        element.blur();
    },duration);
}

let total = Number(localStorage.getItem('totalR'));
let m = Number(localStorage.getItem('num-m'));
let n = Number(localStorage.getItem('num-n'));
let o = Number(localStorage.getItem('total-t'));
if(window.location.pathname.includes("jap.html")){
    function updateUI() {
        plus.innerText = m;
        minus.innerText = n;
        count.innerText = `108 X ${total}`;
        life.innerText = o;   
    };

    document.addEventListener('DOMContentLoaded', updateUI);
};

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
localStorage.setItem('num-m',m);
localStorage.setItem('num-n',n);
localStorage.setItem('totalR',total);
localStorage.setItem('total-t',o);
   plus.innerText = m;
   minus.innerText = n;
   count.innerText = `108 X ${total}`;
   life.innerText = o;
   triggerEffects(plus,300);
})

minus.addEventListener('pointerdown',()=>{
     if(navigator.vibrate){
        navigator.vibrate(300);
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
localStorage.setItem('num-m',m);
localStorage.setItem('num-n',n);
localStorage.setItem('totalR',total);
localStorage.setItem('total-t',o);
   plus.innerText = m;
   minus.innerText = n;
   count.innerText = `108 X ${total}`;
   life.innerText = o;
   triggerEffects(minus,300);
});

}
