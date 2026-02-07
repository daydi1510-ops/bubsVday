const yes = document.getElementById("yes");
const no = document.getElementById("no");
const popup = document.getElementById("popup");
const hearts = document.querySelector(".hearts");
const quote = document.getElementById("quote");
const dogSound = document.getElementById("dogSound");

// Cute love quotes for Shaili 💕
const quotes = [
 "Shaili, you are my cherry blossom 🌸",
 "Every day with you is my favorite block ⛏️",
 "You make my heart float like these hearts 💖",
 "My Minecraft world is empty without you 🥰",
 "You are my rarest diamond 💎",
 "With you, every level is perfect 💘"
];

// Change quotes every 3s
setInterval(()=>{
  quote.innerText = quotes[Math.floor(Math.random()*quotes.length)];
},3000);

// Floating hearts
setInterval(()=>{
  const h = document.createElement("span");
  h.innerText = "💖";
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (20+Math.random()*20) + "px";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},300);

// Naughty NO button 😏
no.addEventListener("mouseover", ()=>{
  no.style.left = Math.random()*70 + "%";
  no.style.top = Math.random()*60 + "px";
});

// Fireworks 🎆
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// YES clicked
yes.addEventListener("click", ()=>{
  popup.style.display="flex";
  dogSound.play();        // 🐶 cute bark
  startFireworks();
});

// Start fireworks loop
function startFireworks(){
  setInterval(createFirework,300);
  requestAnimationFrame(updateFireworks);
}

// Create fireworks burst
function createFirework(){
  let x = Math.random()*canvas.width;
  let y = Math.random()*canvas.height/2;
  for(let i=0;i<120;i++){
    particles.push({
      x,y,
      a:Math.random()*Math.PI*2,
      s:Math.random()*6+2,
      l:120
    });
  }
}

// Animate fireworks
function updateFireworks(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.x += Math.cos(p.a)*p.s;
    p.y += Math.sin(p.a)*p.s;
    p.l--;
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,3,0,Math.PI*2);
    ctx.fill();
    if(p.l<=0) particles.splice(i,1);
  });
  requestAnimationFrame(updateFireworks);
}
