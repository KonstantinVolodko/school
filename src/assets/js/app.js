document.addEventListener("DOMContentLoaded", () => {


    //= components/


    let ourTeachersSwiper = new Swiper(".ourTeachersSwiper", {
        grabCursor: true,
        slidesPerView: 4.3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".ourTeachers-content__rightArrow",
            prevEl: ".ourTeachers-content__leftArrow",
        },
    });

    let reviewsSwiper = new Swiper(".reviewsSwiper", {
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
            el: ".reviewsSwiper-pagination",
            clickable: true,
        },
    });

    let studentsSwiper = new Swiper(".students-swiper", {
        slidesPerView: 3,
        spaceBetween: 23,
        grabCursor: true,
        navigation: {
            nextEl: ".students__rightArrow",
            prevEl: ".students__leftArrow",
        },
        pagination: {
          el: ".studentsSwiper-pagination",
          clickable: true,
        },
      });
})



