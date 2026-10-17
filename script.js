const leaves = document.getElementById("leaves");
const treeMessage = document.getElementById("tree-message");

const openLetter = document.getElementById("open-letter");
const letter = document.getElementById("letter");

const showSurprise = document.getElementById("show-surprise");
const ending = document.getElementById("ending");

const readAgain = document.getElementById("read-again");

function growTree() {
    if (leaves.dataset.grown === "yes") {
        return;
    }

    leaves.dataset.grown = "yes";

    const decorations = [
        "💗",
        "🌸",
        "💕",
        "🌷",
        "💖",
        "♡"
    ];

    for (let i = 0; i < 35; i++) {
        const leaf = document.createElement("span");

        leaf.className = "leaf";

        leaf.textContent =
            decorations[
                Math.floor(Math.random() * decorations.length)
            ];

        leaf.style.left = (Math.random() * 90) + "%";
        leaf.style.top = (Math.random() * 75) + "%";

        leaf.style.fontSize =
            (12 + Math.random() * 10) + "px";

        leaf.style.animationDelay =
            (1.5 + Math.random() * 2) + "s";

        leaves.appendChild(leaf);
    }

    treeMessage.textContent =
        "Pohon cinta ini berbunga untukmu! 💗";
}

window.setTimeout(growTree, 500);

openLetter.addEventListener("click", function () {
    letter.classList.remove("hidden");

    openLetter.textContent = "Surat Sudah Terbuka 💗";
    openLetter.disabled = true;

    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

function showHearts() {
    const heartRain = document.getElementById("heart-rain");

    heartRain.replaceChildren();

    const hearts = ["💗", "💕", "💖", "♥", "✨"];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("span");

        heart.className = "rain-heart";
        heart.textContent = hearts[i % hearts.length];

        heart.style.left = (Math.random() * 95) + "%";

        heart.style.animationDelay =
            (Math.random() * 1.5) + "s";

        heart.style.fontSize =
            (14 + Math.random() * 12) + "px";

        heartRain.appendChild(heart);

        window.setTimeout(function () {
            heart.remove();
        }, 5000);
    }
}

showSurprise.addEventListener("click", function () {
    letter.classList.add("hidden");
    ending.classList.remove("hidden");

    showHearts();

    ending.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

readAgain.addEventListener("click", function () {
    ending.classList.add("hidden");
    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
