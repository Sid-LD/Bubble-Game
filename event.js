var timer=20;
var score=0;
var rn;
function makebubble(){
var clutter="";
for(var i=1;i<=150;i++){
    var nums=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${nums}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").innerHTML=score
}
function runtimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#Timervalue").innerHTML=timer;
        }
        else{
            clearInterval(timer)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over.    Final Score:${score}`;
        }

    },1000);
}
function getnewhit(){
    rn= Math.floor(Math.random()*10);
   document.querySelector("#Hitval").innerHTML=rn

}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum==rn){
        increasescore()
        makebubble()
        getnewhit()
    
    }
    else{
        document.querySelector("#panel").innerHTML=`<h1>Game over.Better luck next time`
    }

    
});
getnewhit()
runtimer();
makebubble();