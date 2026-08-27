document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       MOBILE MENU
    ========================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();

            const opened =
                navLinks.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                opened
            );

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
       LIGHTBOX ELEMENTS
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

        if (lightboxImage) {
            lightboxImage.src = "";
        }

    }



    /* =========================================================
       GLOBAL LIGHTBOX FUNCTION
    ========================================================= */

    window.openPortfolioLightbox =
        function (image, title) {

            openLightbox(image, title);

        };



    /* =========================================================
       PHOTOGRAPHY CLICKABLE IMAGES
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
       LIGHTBOX CLOSE X
       THE X IS FULLY CLICKABLE
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
       CLICK BACKGROUND TO CLOSE
    ========================================================= */

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



    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLightbox();

                if (navLinks) {

                    navLinks.classList.remove(
                        "active"
                    );

                }

                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );



    /* =========================================================
       TECHNICAL / IoT GALLERY
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


            mainImage.src = image;

            mainImage.alt =
                title ||
                "Technical & IoT Project";


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

                openLightbox(
                    technicalMainImage.src,
                    technicalMainImage.alt
                );

            }
        );

    }



    /* =========================================================
       TECHNICAL THUMBNAILS
    ========================================================= */

    document.querySelectorAll(
        ".thumbnail"
    ).forEach(function (thumbnail) {

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
       IMAGE ERROR CHECK
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

            .lightbox {
                position: fixed;
                inset: 0;
                z-index: 99999;
            }

            .lightbox-close {
                position: absolute;
                top: 25px;
                right: 25px;
                z-index: 100001;

                width: 50px;
                height: 50px;

                cursor: pointer;

                pointer-events: auto;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .lightbox img {
                position: relative;
                z-index: 100000;
            }

        `;

        document.head.appendChild(style);

    }



    /* =========================================================
       START PAGE AT TOP
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