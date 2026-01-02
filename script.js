const slides = [
  { image: "WhatsApp Image 2025-12-25 at 11.08.33 AM.jpeg",
     text: ` Ek toh ye itni pyari smile ,
      kan me itne sundarr jhumke ,
       orrr ye nashili ankhe ,
     orrr uspe ye kali bindi ,
     ayeee hayeeee ♥️🥰..` },

  { image: "WhatsApp Image 2025-12-25 at 11.08.34 AM.jpeg", 
    text: `kon kehta hai ki angel srif white gown me aati hai 
    areeee mainee toh kali saariii me dekhi hai ` },

  { image: "WhatsApp Image 2025-12-25 at 11.08.35 AM (1).jpeg", 
    text: `you are the defination off cuteness 💕😍` },

  { image: "WhatsApp Image 2025-12-25 at 11.08.35 AM.jpeg", 
    text: `tere aage phike-phike sare shingar hai 
    mai toh ky farishte bhi tujhpe nisar hai 💓🫣 ` },

  { image: "WhatsApp Image 2025-12-25 at 11.08.36 AM (1).jpeg",
     text: `justtt perfecctttt!!!!!!!
     😍💓🥰♥️` },

  { image: "WhatsApp Image 2025-12-25 at 11.08.36 AM.jpeg",
     text: `jaadu tona ek traf 
     teri ankhe ek tafar bhaiii 👀❤️` },

  { image: "WhatsApp Image 2026-01-02 at 5.20.25 PM.jpeg",
     text: `bichariiii meko posee sikhate sikhate thakh gai 
     heheheheh 😁😁😁😁😁`},

  { image: "WhatsApp Image 2026-01-02 at 5.20.27 PM.jpeg", 
    text: `huhhh koi tohh meko khaduss samjhta tha iss time pe 😏😏
    mai toh jeevan bhar teko chidhane wali hu haa ` },

  { image: "WhatsApp Image 2026-01-02 at 6.00.39 PM.jpeg",
     text: `majhiiii marathi mulgiiii 
     kitiiii sundarr disteeeeee 🥰` },

  { image: "WhatsApp Image 2026-01-02 at 5.20.24 PM.jpeg", 
    text: `I lovee youu shettyyyy ❤️❤️
    mahadev apki sarii wishes puri kare 
  `}
];

const bgMusic = new Audio("Ishq Wala Love Soty-(Mr-Jat.in).mp3");
bgMusic.loop = true;
bgMusic.volume = 0.6;
let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

document.addEventListener("click", startMusicOnce);
document.addEventListener("keydown", startMusicOnce);
document.addEventListener("touchstart", startMusicOnce);

window.addEventListener("beforeunload", () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;
});

let index = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);

// CLICK HEARTS + GLOW (FIXED)
document.addEventListener("click", (e) => {
  const overlay = document.getElementById("glow-overlay");
  if (overlay) {
    overlay.classList.add("active");
    setTimeout(() => overlay.classList.remove("active"), 1200);
  }

  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    const colors = ["#ff4d6d", "#ff85a1", "#ffb3c6"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    heart.style.left = e.clientX + Math.random() * 50 - 25 + "px";
    heart.style.top = e.clientY + Math.random() * 50 - 25 + "px";
    heart.style.fontSize = Math.random() * 18 + 18 + "px";

    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
});

function showSlide() {
  const img = document.getElementById("sliderImage");
  img.src = slides[index].image;
  document.getElementById("message").innerText = slides[index].text;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
}

showSlide();

// INTRO SCREEN CLICK TO SHOW MAIN CONTENT
const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  mainContent.classList.remove("hidden");
  startMusicOnce();
});
