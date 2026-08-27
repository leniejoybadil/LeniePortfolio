document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       MOBILE MENU
    ========================================================= */

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

    }


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            if (menuToggle) {
                menuToggle.classList.remove("active");
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            closeLightbox();

        }

    });


    /* =========================================================
       WELCOME GIRL
       IMAGE:
       assets/girl-icon.png
    ========================================================= */

    const girlWelcome =
        document.getElementById("girlWelcome");

    const girlIcon =
        document.getElementById("girlIcon");


    if (girlWelcome && girlIcon) {

        girlIcon.src =
            "assets/girl-icon.png";

        girlIcon.alt =
            "Welcome to Lenie Joy Badil's Portfolio";

        girlWelcome.classList.remove("hidden");


        let girlTimer =
            setTimeout(function () {

                girlWelcome.classList.add("hidden");

            }, 10000);


        girlIcon.addEventListener("click", function () {

            clearTimeout(girlTimer);

            girlWelcome.classList.toggle("hidden");

        });

    }


    /* =========================================================
       LIGHTBOX
    ========================================================= */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxClose =
        document.getElementById("lightboxClose");


    /* =========================================================
       OPEN LIGHTBOX
    ========================================================= */

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


    /* =========================================================
       CLOSE LIGHTBOX
    ========================================================= */

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


    /* =========================================================
       GLOBAL LIGHTBOX FUNCTION
       Allows HTML onclick to use it
    ========================================================= */

    window.openPortfolioLightbox =
        function (image, title) {

            openLightbox(image, title);

        };


    /* =========================================================
       LIGHTBOX TRIGGERS
    ========================================================= */

    document.querySelectorAll(
        ".lightbox-trigger"
    ).forEach(function (item) {

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


    /* =========================================================
       ANY ELEMENT WITH data-image
    ========================================================= */

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

                    /*
                       Don't interfere with buttons
                       or normal links.
                    */

                    if (
                        item.tagName === "A" ||
                        item.tagName === "BUTTON"
                    ) {
                        return;
                    }


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


    /* =========================================================
       LIGHTBOX CLOSE BUTTON
    ========================================================= */

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


    /* =========================================================
       CLICK OUTSIDE IMAGE TO CLOSE
    ========================================================= */

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


    /* =========================================================
       TECHNICAL / IoT GALLERY
       
       Matches:
       
       onclick="changeTechnicalImage(
           'assets/technical/tomatrix-1.jpg',
           'Tomatrix 1',
           this
       )"
    ========================================================= */

    window.changeTechnicalImage =
        function (image, title, thumbnail) {

            const mainImage =
                document.getElementById(
                    "technicalMainImage"
                );


            const mainLink =
                document.getElementById(
                    "technicalMainLink"
                );


            if (!mainImage || !image) {
                return;
            }


            /* -----------------------------------------
               CHANGE MAIN IMAGE
            ----------------------------------------- */

            mainImage.src = image;

            mainImage.alt =
                title || "Technical & IoT Project";


            /* -----------------------------------------
               UPDATE MAIN CLICKABLE LINK
            ----------------------------------------- */

            if (mainLink) {

                mainLink.href = image;

                mainLink.setAttribute(
                    "data-image",
                    image
                );

                mainLink.setAttribute(
                    "data-title",
                    title ||
                    "Technical & IoT Project"
                );

            }


            /* -----------------------------------------
               UPDATE ACTIVE THUMBNAIL
            ----------------------------------------- */

            document.querySelectorAll(
                ".thumbnail"
            ).forEach(function (item) {

                item.classList.remove(
                    "active"
                );

            });


            if (thumbnail) {

                thumbnail.classList.add(
                    "active"
                );

            }

        };


    /* =========================================================
       TECHNICAL MAIN IMAGE
       
       Clicking the big image opens the CURRENT image.
    ========================================================= */

    const technicalMainImage =
        document.getElementById(
            "technicalMainImage"
        );


    const technicalMainLink =
        document.getElementById(
            "technicalMainLink"
        );


    if (
        technicalMainImage &&
        technicalMainLink
    ) {

        technicalMainLink.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const image =
                    technicalMainImage.src;


                const title =
                    technicalMainImage.alt ||
                    "Technical & IoT Project";


                openLightbox(
                    image,
                    title
                );

            }
        );

    }


    /* =========================================================
       TECHNICAL THUMBNAILS
       
       Supports the new BUTTON version.
       
       The onclick already calls:
       changeTechnicalImage(...)
       
       This section also supports thumbnails that
       use data-main instead.
    ========================================================= */

    document.querySelectorAll(
        ".thumbnail"
    ).forEach(function (thumbnail) {

        /*
           If the thumbnail already has an
           onclick="changeTechnicalImage(...)",
           do not add another click handler.
        */

        if (
            thumbnail.hasAttribute(
                "onclick"
            )
        ) {
            return;
        }


        const image =
            thumbnail.getAttribute(
                "data-main"
            );


        if (!image) {
            return;
        }


        thumbnail.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const title =
                    thumbnail.getAttribute(
                        "data-title"
                    ) ||
                    "Technical & IoT Project";


                window.changeTechnicalImage(
                    image,
                    title,
                    thumbnail
                );

            }
        );

    });


    /* =========================================================
       MAKE NORMAL PORTFOLIO IMAGES
       ERROR CHECK
    ========================================================= */

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


    /* =========================================================
       NO SCROLL WHEN LIGHTBOX IS OPEN
    ========================================================= */

    if (
        !document.getElementById(
            "lightboxNoScrollStyle"
        )
    ) {

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


    /* =========================================================
       PAGE LOAD
       START AT TOP
    ========================================================= */

    if (
        "scrollRestoration" in history
    ) {

        history.scrollRestoration =
            "manual";

    }


    window.scrollTo(
        0,
        0
    );

});