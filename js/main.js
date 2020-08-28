const tabs = document.querySelectorAll(".tabs__item");

tabs.forEach(elem => {
    elem.addEventListener("click", () => {
        tabs.forEach(otherItem => {
            if (otherItem.classList.contains("tabs__item_active")) {
                otherItem.classList.remove("tabs__item_active");
            }
        })
        elem.classList.add("tabs__item_active")
    });
});

//Show first tab by default
document.querySelector(".tabs__item").click();

//Slick
$('.carousel').slick({
    autoplay: true,
    autoplayspeed: 2000,
    prevArrow: '<div class="carousel__arrow carousel__prev"><img src="/img/arrow/prev.png" alt="arrow prev" ></div>',
    nextArrow: '<div class="carousel__arrow carousel__next"><img src="/img/arrow/next.png" alt="arrow next" ></div>',
});