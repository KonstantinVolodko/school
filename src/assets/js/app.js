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



    const select = document.getElementById('my-select');
    const selectTrigger = document.querySelector('.trialForm-content__selectTriggerContainer');
    const selectTriggerSpan = document.querySelector('.trialForm-content__selectTrigger')
    const selectOptions = document.querySelector('.trialForm-content__selectOptions');
    const arrow = document.querySelector('.arrow');
    const selectOptionsList = document.querySelectorAll('.trialForm-content__selectOptions li');

    selectTrigger.addEventListener('click', function () {
        if (selectOptions.style.display === 'block') {
            selectOptions.style.display = 'none';
            arrow.classList.remove('activeArrow');
        } else {
            selectOptions.style.display = 'block';
            arrow.classList.add('activeArrow');
        }
    });

    selectOptionsList.forEach(function (option) {
        option.addEventListener('click', function () {
            const value = option.getAttribute('data-value');
            selectTriggerSpan.textContent = option.textContent;
            select.value = value;
            selectOptions.style.display = 'none';
            arrow.classList.remove('activeArrow');
        });
    });

    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!selectTrigger.contains(target) && !selectOptions.contains(target)) {
            selectOptions.style.display = 'none';
            arrow.classList.remove('activeArrow');
        }
    });


    let acc = document.getElementsByClassName("answers-content__accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                // panel.style.paddingBottom = "0px"
                panel.style.maxHeight = null;

            } else {
                // panel.style.paddingBottom = "19px"
                panel.style.maxHeight = panel.scrollHeight + "px";

            }
        });
    }
})



