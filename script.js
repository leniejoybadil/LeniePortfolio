document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function (event) {
            event.preventDefault();

            const opened = navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active", opened);

            menuToggle.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
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
       REAL IMAGE:
       assets/girl-icon.png
    ========================================== */

    const girlWelcome = document.getElementById("girlWelcome");
    const girlIcon = document.getElementById("girlIcon");

    if (girlWelcome && girlIcon) {

        // Make absolutely sure the correct image is used
        girlIcon.setAttribute(
            "src",
            "assets/girl-icon.png"
        );

        girlIcon.setAttribute(
            "alt",
            "Welcome to Lenie Joy Badil's Portfolio"
        );

        girlWelcome.classList.remove("hidden");

        let girlTimer = setTimeout(function () {
            girlWelcome.classList.add("hidden");
        }, 10000);

        girlIcon.addEventListener("click", function () {

            clearTimeout(girlTimer);

            girlWelcome.classList.toggle("hidden");

        });
    }


    /* =========================================
       LIGHTBOX ELEMENTS
    ========================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxClose =
        document.getElementById("lightboxClose");


    /* =========================================
       OPEN LIGHTBOX
    ========================================== */

    function openLightbox(image, title) {

        if (!lightbox || !lightboxImage || !image) {
            return;
        }

        lightboxImage.src = image;

        lightboxImage.alt =
            title || "Portfolio image";

        if (lightboxTitle) {
            lightboxTitle.textContent =
                title || "";
        }

        lightbox.classList.add("active");

        document.body.classList.add("no-scroll");

    }


    /* =========================================
       CLOSE LIGHTBOX
    ========================================== */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove("active");

        document.body.classList.remove("no-scroll");

        setTimeout(function () {

            if (
                !lightbox.classList.contains("active") &&
                lightboxImage
            ) {
                lightboxImage.src = "";
            }

        }, 200);

    }


    /* =========================================
       ALL LIGHTBOX TRIGGERS
    ========================================== */

    const lightboxTriggers =
        document.querySelectorAll(
            ".lightbox-trigger"
        );


    lightboxTriggers.forEach(function (item) {

        item.style.cursor = "pointer";

        item.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const image =
                    item.getAttribute(
                        "data-image"
                    );

                const title =
                    item.getAttribute(
                        "data-title"
                    );


                if (image) {

                    openLightbox(
                        image,
                        title
                    );

                }

            }
        );

    });


    /* =========================================
       MAKE IMAGES WITH data-image CLICKABLE
       EVEN IF CLASS IS MISSING
    ========================================== */

    document.querySelectorAll(
        "[data-image]"
    ).forEach(function (item) {

        if (
            !item.classList.contains(
                "lightbox-trigger"
            )
        ) {

            item.style.cursor = "pointer";

            item.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    const image =
                        item.getAttribute(
                            "data-image"
                        );

                    const title =
                        item.getAttribute(
                            "data-title"
                        );

                    if (image) {

                        openLightbox(
                            image,
                            title
                        );

                    }

                }
            );
        }

    });


    /* =========================================
       CLOSE BUTTON
    ========================================== */

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                closeLightbox();

            }
        );

    }


    /* =========================================
       CLICK BACKGROUND TO CLOSE
    ========================================== */

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* =========================================
       ESCAPE KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLightbox();

            }

        }
    );


    /* =========================================
       TECHNICAL / IoT GALLERY
    ========================================== */

    const technicalMainImage =
        document.getElementById(
            "technicalMainImage"
        );

    const galleryMain =
        document.querySelector(
            ".gallery-main"
        );

    const thumbnails =
        document.querySelectorAll(
            ".thumbnail"
        );


    if (
        technicalMainImage &&
        thumbnails.length
    ) {

        thumbnails.forEach(
            function (thumbnail) {

                thumbnail.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                        event.stopPropagation();

                        const newImage =
                            thumbnail.getAttribute(
                                "data-main"
                            );

                        if (!newImage) {
                            return;
                        }


                        /* Change main image */

                        technicalMainImage.src =
                            newImage;


                        /* Update active thumbnail */

                        thumbnails.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );

                        thumbnail.classList.add(
                            "active"
                        );


                        /* Update lightbox */

                        if (galleryMain) {

                            galleryMain.setAttribute(
                                "data-image",
                                newImage
                            );

                            galleryMain.setAttribute(
                                "data-title",
                                thumbnail.getAttribute(
                                    "data-title"
                                ) ||
                                "Technical & IoT Project"
                            );

                        }

                    }
                );

            }
        );
    }


    /* =========================================
       TECHNICAL MAIN IMAGE CLICK
    ========================================== */

    if (technicalMainImage) {

        technicalMainImage.style.cursor =
            "pointer";

        technicalMainImage.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const image =
                    technicalMainImage.getAttribute(
                        "src"
                    );

                if (image) {

                    openLightbox(
                        image,
                        "Technical & IoT Project"
                    );

                }

            }
        );

    }


    /* =========================================
       AUTOMATICALLY MAKE NORMAL PORTFOLIO
       IMAGES CLICKABLE
       
       Excludes:
       - girl icon
       - lightbox image
       - thumbnails
    ========================================== */

    document.querySelectorAll(
        "img"
    ).forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                console.warn(
                    "Image could not be loaded:",
                    image.src
                );

            }
        );

    });


    /* =========================================
       NO SCROLL WHILE LIGHTBOX IS OPEN
    ========================================== */

    if (!document.getElementById(
        "lightboxNoScrollStyle"
    )) {

        const style =
            document.createElement("style");

        style.id =
            "lightboxNoScrollStyle";

        style.textContent = `
            body.no-scroll {
                overflow: hidden !important;
            }
        `;

        document.head.appendChild(style);

    }


    /* =========================================
       PAGE LOAD
       START AT TOP
    ========================================== */

    if ("scrollRestoration" in history) {

        history.scrollRestoration =
            "manual";

    }

    window.scrollTo(0, 0);

});