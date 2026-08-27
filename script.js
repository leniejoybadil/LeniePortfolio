document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const opened =
                navLinks.classList.toggle("active");


            menuToggle.classList.toggle(
                "active",
                opened
            );


            menuToggle.setAttribute(
                "aria-expanded",
                opened
            );

        });


        /* Close menu after clicking a link */

        const navigationLinks =
            navLinks.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* Close menu with ESC */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =========================================
       GIRL WELCOME
    ========================================== */

    const girlWelcome =
        document.getElementById("girlWelcome");

    const girlIcon =
        document.getElementById("girlIcon");


    if (girlWelcome && girlIcon) {

        /* Show when Home loads */

        girlWelcome.classList.remove("hidden");


        /* Automatically hide after 8 seconds */

        const timer = setTimeout(function () {

            girlWelcome.classList.add("hidden");

        }, 8000);


        /* Clicking girl closes it */

        girlIcon.addEventListener("click", function () {

            clearTimeout(timer);

            girlWelcome.classList.add("hidden");

        });

    }


});