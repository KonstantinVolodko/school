document.addEventListener("DOMContentLoaded", () => {


    //= components/


    let ourTeachersSwiper = new Swiper(".ourTeachersSwiper", {
        grabCursor: true,
        slidesPerView: 1.7,
        spaceBetween: 30,
        navigation: {
            nextEl: ".ourTeachers-content__rightArrow",
            prevEl: ".ourTeachers-content__leftArrow",
        },

        breakpoints: {
            500: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4.3,
            },
        },
    });

    let reviewsSwiper = new Swiper(".reviewsSwiper", {
        grabCursor: true,
        slidesPerView: 1.15,
        spaceBetween: 20,
        pagination: {
            el: ".reviewsSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // 640: {
            //     slidesPerView: 4,
            // },
            // 768: {
            //     slidesPerView: 4,
            // },
            500: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 4,
            },
        },
    });

    let studentsSwiper = new Swiper(".students-swiper", {
        slidesPerView: 1.2,
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
        breakpoints: {
            // 640: {
            //     slidesPerView: 4,
            // },
            // 768: {
            //     slidesPerView: 4,
            // },
            500: {
                slidesPerView: 2,
            },
            850: {
                slidesPerView: 3,
            },
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




    class Modal {
        constructor(modalId, openButtonId) {
            this.modal = document.getElementById(modalId);
            this.openButton = document.getElementById(openButtonId);

            this.openButton.addEventListener('click', () => {
                this.open();
            });

            window.addEventListener('click', (event) => {
                if (event.target === this.modal) {
                    this.close();
                }
            });

            const closeButton = this.modal.querySelector('.close');
            closeButton.addEventListener('click', () => {
                this.close();
            });
        }

        open() {
            this.modal.style.display = 'block';
            setTimeout(() => {
                this.modal.classList.add('open');
            }, 10);
        }

        close() {
            this.modal.classList.remove('open');
            setTimeout(() => {
                this.modal.style.display = 'none';
            }, 300);
        }
    }

    const myModal = new Modal('burgerModal', 'burgerBtn');

    let menuContainer = document.querySelector('.header-content__menuContainer ul')
    let modalMenuContent = document.querySelector('.header-modal__content ul')

    if (window.matchMedia("(max-width: 1024px)").matches) {
        modalMenuContent.innerHTML = menuContainer.innerHTML
    }

    // let form = document.querySelector('.trialForm-content form')

    // form.addEventListener("submit", function(event) {
    //     event.preventDefault(); 
    // });


    var scrollableContainer = document.querySelector('.schedule-content table');
    var isDragging = false;
    var startPosition = 0;
    var scrollLeft = 0;

    scrollableContainer.addEventListener('mousedown', function (event) {
        isDragging = true;
        startPosition = event.clientX;
        scrollLeft = scrollableContainer.scrollLeft;
    });

    scrollableContainer.addEventListener('mousemove', function (event) {
        if (isDragging) {
            var distance = event.clientX - startPosition;
            scrollableContainer.scrollLeft = scrollLeft - distance;
        }
    });

    scrollableContainer.addEventListener('mouseup', function () {
        isDragging = false;
    });

    scrollableContainer.addEventListener('mouseleave', function () {
        isDragging = false;
    });

})



