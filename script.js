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
       WELCOME GIRL
    ========================================== */

    const girlWelcome =
        document.getElementById("girlWelcome");

    const girlIcon =
        document.getElementById("girlIcon");


    if (girlWelcome && girlIcon) {

        girlWelcome.classList.remove("hidden");


        const timer = setTimeout(function () {

            girlWelcome.classList.add("hidden");

        }, 8000);


        girlIcon.addEventListener("click", function () {

            clearTimeout(timer);

            girlWelcome.classList.add("hidden");

        });

    }


    /* =========================================
       LIGHTBOX
    ========================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxClose =
        document.getElementById("lightboxClose");


    const lightboxTriggers =
        document.querySelectorAll(".lightbox-trigger");


    function openLightbox(image, title) {

        if (!lightbox || !lightboxImage) {
            return;
        }


        lightboxImage.src = image;

        lightboxImage.alt = title || "Portfolio image";

        if (lightboxTitle) {
            lightboxTitle.textContent = title || "";
        }


        lightbox.classList.add("active");

        document.body.classList.add("no-scroll");

    }


    function closeLightbox() {

        if (!lightbox) {
            return;
        }


        lightbox.classList.remove("active");

        document.body.classList.remove("no-scroll");

    }


    lightboxTriggers.forEach(function (item) {

        item.addEventListener("click", function () {

            const image =
                item.getAttribute("data-image");

            const title =
                item.getAttribute("data-title");


            if (image) {

                openLightbox(
                    image,
                    title
                );

            }

        });

    });


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === lightbox) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );


    /* =========================================
       TECHNICAL GALLERY
    ========================================== */

    const technicalMainImage =
        document.getElementById("technicalMainImage");

    const thumbnails =
        document.querySelectorAll(".thumbnail");


    if (technicalMainImage && thumbnails.length) {

        thumbnails.forEach(function (thumbnail) {

            thumbnail.addEventListener(
                "click",
                function () {

                    const newImage =
                        thumbnail.getAttribute("data-main");


                    if (!newImage) {
                        return;
                    }


                    technicalMainImage.src =
                        newImage;


                    thumbnails.forEach(function (item) {

                        item.classList.remove("active");

                    });


                    thumbnail.classList.add("active");


                    const galleryMain =
                        document.querySelector(".gallery-main");


                    if (galleryMain) {

                        galleryMain.setAttribute(
                            "data-image",
                            newImage
                        );

                    }

                }
            );

        });

    }

});