const openLetter = document.getElementById("openLetter");
const letterPanel = document.getElementById("letterPanel");
const showSurprise = document.getElementById("showSurprise");
const endingPanel = document.getElementById("endingPanel");
const readAgain = document.getElementById("readAgain");

// Membuka surat pagi
openLetter.addEventListener("click", () => {
    letterPanel.classList.remove("hidden");

    openLetter.textContent = "Surat sudah terbuka 💗";
    openLetter.disabled = true;

    letterPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Membuat animasi hati
function createHeartRain() {
    const rain = document.getElementById("heartRain");

    rain.replaceChildren();

    const symbols = ["💗", "💕", "💖", "♥", "✨"];

    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");

        heart.className = "rain-heart";
        heart.textContent = symbols[i % symbols.length];

        heart.style.left = (Math.random() * 96) + "%";

        heart.style.animationDelay =
            (Math.random() * 1.2) + "s";

        heart.style.fontSize =
            (13 + Math.random() * 12) + "px";

        rain.appendChild(heart);

        window.setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Membuka kejutan terakhir
showSurprise.addEventListener("click", () => {
    letterPanel.classList.add("hidden");

    endingPanel.classList.remove("hidden");

    // Memulai ulang animasi pelukan
    const hugScene = endingPanel.querySelector(".hug-scene");

    hugScene.style.animation = "none";

    void hugScene.offsetWidth;

    hugScene.style.animation = "";

    createHeartRain();

    endingPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Kembali membaca surat
readAgain.addEventListener("click", () => {
    endingPanel.classList.add("hidden");

    letterPanel.classList.remove("hidden");

    letterPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
