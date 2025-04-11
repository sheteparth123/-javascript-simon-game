let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector( "h2" );
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
      btn.classList.remove("flash");  
    },250);   
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function() {
      btn.classList.remove("userflash");  
    },250);   
}


function levelUp(){
    userSeq=[];//reset
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor( Math.random() *  3 ) ;
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`); 
    gameSeq.push(randomColor);
    console.log(gameSeq);//hints
    gameFlash(randombtn);
   
}

function checkAns(idx){
    console.log(`current level: ${level}`);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your Score was <b>${level}</b> </br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500);
        reset();
    }

}

function btnPress(){
//  console.log(this);
  let btn=this;
  userFlash(btn);
  userColor=btn.getAttribute("id");
//   console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener( "click", btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
//homework to print highest score!!!