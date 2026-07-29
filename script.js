// =========================
// Floating Stars
// =========================

const stars = document.getElementById("stars");

for(let i=0;i<60;i++){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.fontSize=(8+Math.random()*12)+"px";

    star.style.animationDuration=(8+Math.random()*8)+"s";

    stars.appendChild(star);

}

// =========================
// Floating Hearts
// =========================

const hearts=document.getElementById("hearts");

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

},500);

// =========================
// Music
// =========================

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        playing=false;

    }

});

// =========================
// Wiggle
// =========================

document.getElementById("wiggleBtn").onclick=()=>{

    alert("💃🕺 Wiggle Wiggle! I Love You ❤️");

};

// =========================
// Popup
// =========================

const popup=document.getElementById("proposalPopup");

document.getElementById("proposalButton").onclick=()=>{

    popup.style.display="flex";

};

document.querySelector(".close").onclick=()=>{

    popup.style.display="none";

};

// =========================
// No Button
// =========================

const noBtn=document.getElementById("noBtn");

noBtn.onmouseover=()=>{

    noBtn.style.position="absolute";

    noBtn.style.left=Math.random()*250+"px";

    noBtn.style.top=Math.random()*180+"px";

};

// =========================
// YES
// =========================

document.getElementById("yesBtn").onclick=()=>{

    popup.style.display="none";

    document.getElementById("successMessage").style.display="flex";

    confetti();

};

// =========================
// Confetti
// =========================

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

function confetti(){

    let pieces=[];

    for(let i=0;i<200;i++){

        pieces.push({

            x:Math.random()*canvas.width,

            y:-20,

            size:5+Math.random()*8,

            speed:2+Math.random()*5,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

    let animation=setInterval(()=>{

        ctx.clearRect(0,0,canvas.width,canvas.height);

        pieces.forEach(p=>{

            ctx.fillStyle=p.color;

            ctx.fillRect(p.x,p.y,p.size,p.size);

            p.y+=p.speed;

        });

    },20);

    setTimeout(()=>{

        clearInterval(animation);

        ctx.clearRect(0,0,canvas.width,canvas.height);

    },5000);

}

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});
