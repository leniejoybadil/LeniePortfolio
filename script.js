/* =========================================
   GIRL INTRO
   ========================================= */

const introCharacter = document.getElementById("introCharacter");
const bubbleMessage = document.getElementById("bubbleMessage");

const introMessage =
    "TAKE A LOOK AT MY PROJECTS, SKILLS, AND EXPERIENCES!";

let messageIndex = 0;
let typingTimer;


/* =========================================
   TYPE THE INTRO MESSAGE
   ========================================= */

function typeIntroMessage() {

    if (!bubbleMessage) return;

    if (messageIndex < introMessage.length) {

        bubbleMessage.textContent +=
            introMessage.charAt(messageIndex);

        messageIndex++;

        typingTimer = setTimeout(
            typeIntroMessage,
            55
        );

    }
}


/* =========================================
   START INTRO
   ========================================= */

function startIntro() {

    if (!bubbleMessage) return;

    bubbleMessage.textContent = "";
    messageIndex = 0;

    clearTimeout(typingTimer);

    setTimeout(() => {
        typeIntroMessage();
    }, 900);
}


/* =========================================
   CLOSE GIRL INTRO
   ========================================= */

function closeCharacter() {

    if (!introCharacter) return;

    introCharacter.style.display = "none";

    clearTimeout(typingTimer);
}


/* =========================================
   START WHEN PAGE LOADS
   ========================================= */

window.addEventListener("load", function () {

    startIntro();

});


/* =========================================
   SMOOTH SCROLL
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar nav a").forEach(function (link) {

    const linkPage =
        link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});


/* =========================================
   BACKGROUND ORB MOVEMENT
   ========================================= */

window.addEventListener("mousemove", function (event) {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    const orb1 = document.querySelector(".orb1");
    const orb2 = document.querySelector(".orb2");

    if (orb1) {

        orb1.style.transform =
            `translate(${x}px, ${y}px)`;

    }

    if (orb2) {

        orb2.style.transform =
            `translate(${-x}px, ${-y}px)`;

    }

});


/* =========================================
   IMAGE ERROR CHECK
   ========================================= */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});