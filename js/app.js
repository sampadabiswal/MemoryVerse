/* ==========================================
   MemoryVerse v1.0
   app.js
========================================== */

// ----------------------------
// Galaxy Stars
// ----------------------------

const galaxy = document.getElementById("galaxy");

if (galaxy) {

    for (let i = 0; i < 400; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDuration =
            (2 + Math.random() * 5) + "s";

        galaxy.appendChild(star);

    }

}

// ----------------------------
// Background Music
// ----------------------------

const music = document.getElementById("bgMusic");

if (music) {

    music.volume = 0.5;

}

// ----------------------------
// Enter Button
// ----------------------------

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        if (music) {

            music.play().catch(() => {});

        }

        enterBtn.innerHTML = "Loading...";

        enterBtn.disabled = true;

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1200);

    });

}

// ----------------------------
// Image Hover Animation
// ----------------------------

const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ----------------------------
// Smooth Fade In
// ----------------------------

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ----------------------------
// Keyboard Navigation
// ----------------------------

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {

        const nextButton = document.querySelector(".buttons a:last-child");

        if (nextButton) {

            window.location = nextButton.href;

        }

    }

    if (e.key === "ArrowLeft") {

        const prevButton = document.querySelector(".buttons a:first-child");

        if (prevButton) {

            window.location = prevButton.href;

        }

    }

});

// ----------------------------
// Scroll to Top
// ----------------------------

window.scrollTo({

    top: 0,

    behavior: "smooth"

});

console.log("✨ MemoryVerse Loaded Successfully ✨");