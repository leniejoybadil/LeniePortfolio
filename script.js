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
       WELCOME GIRL ICON
       
       Shows for 8 seconds.
       Disappears automatically.
       Appears again when the page is refreshed/reloaded.
    ========================================================= */

    const girlWelcome = document.getElementById("girlWelcome");
    const girlIcon = document.getElementById("girlIcon");

    if (girlWelcome && girlIcon) {

        girlIcon.src = "assets/girl-icon.png";

        girlIcon.alt =
            "Welcome to Lenie Joy Badil's Portfolio";

        /* Show when page loads */
        girlWelcome.classList.remove("hidden");

        /* Hide after exactly 8 seconds */
        setTimeout(function () {

            girlWelcome.classList.add("hidden");

        }, 8000);

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
       
       Clicking the photography picture opens it
       exactly like the Technical & IoT image.
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
       PHOTOGRAPHY IMAGE DIRECT SUPPORT
       
       Also supports:
       data-image="assets/photography/photo-1.jpg"
    ========================================================= */

    document.querySelectorAll(
        "[data-image]"
    ).forEach(function (item) {

        if (
            item.classList.contains(
                "lightbox-trigger"
            )
        ) {
            return;
        }

        if (
            item.tagName === "A" ||
            item.tagName === "BUTTON"
        ) {
            return;
        }

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
       
       FULLY CLICKABLE
       LARGE CLICK AREA
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

        /*
           Make sure the X is above everything
           and can always receive clicks.
        */

        lightboxClose.style.pointerEvents = "auto";
        lightboxClose.style.cursor = "pointer";
        lightboxClose.style.zIndex = "100002";

    }


    /* =========================================================
       CLICK BACKGROUND TO CLOSE
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


            /* CHANGE MAIN IMAGE */

            mainImage.src = image;

            mainImage.alt =
                title ||
                "Technical & IoT Project";


            /* UPDATE MAIN IMAGE LINK */

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


            /* UPDATE ACTIVE THUMBNAIL */

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
       
       Clicking the large image opens the current image.
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
                event.stopPropagation();

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

        /*
           If the HTML already has onclick,
           leave it alone.
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
       LIGHTBOX / X FIX
       
       Ensures the close button stays clickable.
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
                position: absolute !important;

                top: 20px !important;
                right: 20px !important;

                width: 55px !important;
                height: 55px !important;

                display: flex !important;
                align-items: center !important;
                justify-content: center !important;

                cursor: pointer !important;

                pointer-events: auto !important;

                z-index: 100002 !important;

                border: none;

                font-size: 32px;

                line-height: 1;

                touch-action: manipulation;
            }

            .lightbox img {
                position: relative;
                z-index: 100000;
            }

            .lightbox-title {
                position: relative;
                z-index: 100001;
            }

            /*
               Photography images behave like
               the Technical & IoT gallery.
            */

            .photo-floating-card {
                cursor: pointer;
            }

            .photo-preview {
                cursor: pointer;
            }

            .photo-preview img {
                cursor: pointer;
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

/* =====================================================
   PROFILE / COVER PHOTO VIEWER
===================================================== */

function openPhoto(imageSrc, imageAlt) {

    const viewer = document.getElementById("photoViewer");
    const image = document.getElementById("viewerImage");

    if (!viewer || !image) return;

    image.src = imageSrc;
    image.alt = imageAlt;

    viewer.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closePhoto(event) {

    /* Don't close when clicking directly on the image */
    if (
        event &&
        event.target &&
        event.target.id === "viewerImage"
    ) {
        return;
    }

    const viewer = document.getElementById("photoViewer");
    const image = document.getElementById("viewerImage");

    if (!viewer) return;

    viewer.classList.remove("show");

    if (image) {
        image.src = "";
    }

    document.body.style.overflow = "";
}


/* ESC KEY TO CLOSE */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePhoto();
    }

});