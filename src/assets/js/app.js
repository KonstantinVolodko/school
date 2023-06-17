document.addEventListener("DOMContentLoaded", () => {


    //= components/


    let ourTeachersSwiper = new Swiper(".ourTeachersSwiper", {
        slidesPerView: 4.3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".ourTeachers-content__rightArrow",
            prevEl: ".ourTeachers-content__leftArrow",
        },
    });

    var reviewsSwiper = new Swiper(".reviewsSwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
            el: ".reviewsSwiper-pagination",
        },
    });
})



