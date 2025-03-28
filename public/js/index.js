
$(document).ready(function () {
    // navbar aktif
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "") currentPage = "index.html";
    // console.log(currentPage);

    $("nav li a").each(function () {
        let linkHref = $(this).attr("href").split("/").pop();
        if (currentPage === linkHref) {
            $(this).addClass("text-[#46C6CE]");
        }
    });

    // menu pages blog
    const pagesBtn = document.querySelector(".pages-btn");
    const menuBtn = document.querySelector(".menu-btn-blog");

    if (pagesBtn && menuBtn) {
        pagesBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Mencegah klik menutup langsung
            menuBtn.classList.toggle("hidden");
        });

        document.addEventListener("click", function () {
            menuBtn.classList.add("hidden");
        });

        menuBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Agar klik di dalam menu tidak menutup menu
        });
    }


    //humberger menu
    document.getElementById("menu-toggle")?.addEventListener("click", function () {
        document.getElementById("menu").classList.toggle("hidden");
    });

    // carousel hero
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoPlayInterval;

    function updateSlide() {
        carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    document.querySelector(".next")?.addEventListener("click", function () {
        stopAutoPlay();
        nextSlide();
        setTimeout(startAutoPlay, 3000);
    });

    document.querySelector(".prev")?.addEventListener("click", function () {
        stopAutoPlay();
        prevSlide();
        setTimeout(startAutoPlay, 3000);
    });

    startAutoPlay();

    

    // carousel testimonial
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
            }
        }
    });
    $(".play").on("click", function () {
        owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
        owl.trigger("stop.owl.autoplay");
    });
    
    //end carousel

    // btn up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".btn-up").fadeIn();
        } else {
            $(".btn-up").fadeOut();
        }
    });
    $(".btn-up").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
});

window.addEventListener("resize", function () {
    let wrapper = document.querySelector(".carousel-wrapper");
    if (window.innerWidth >= 1000) {
        wrapper.classList.remove("carousel-wrapper");
    } else {
        wrapper.classList.add("carousel-wrapper");
    }
});
