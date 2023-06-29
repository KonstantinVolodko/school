document.addEventListener("DOMContentLoaded", () => {

    //= components/

    SmoothScroll({
        animationTime    : 800,
        stepSize         : 75,
        accelerationDelta : 30,
        accelerationMax   : 2,
        keyboardSupport   : true,  
        arrowScroll       : 50,
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,
        touchpadSupport   : true,
    })

    Fancybox.bind(document.querySelector(".students-swiper"), "[data-fancybox]", {});

    let ourTeachersSwiper = new Swiper(".ourTeachersSwiper", {
        grabCursor: true,
        slidesPerView: 1.7,
        spaceBetween: 30,
        loop: true,
        touch: {
            touchRatio: 1,
            threshold: 30,
            edgeSwipeDetection: true,
            followFinger: true,
            touchEventsTarget: 'container',
        },
        direction: 'horizontal',
        navigation: {
            nextEl: ".ourTeachers-content__rightArrow",
            prevEl: ".ourTeachers-content__leftArrow",
        },

        breakpoints: {
            501: {
                slidesPerView: 3.4,

                pagination: {
                    el: ".ourTeachers-pagination",
                    clickable: true,
                },
            },

            850: {
                pagination: false,
                slidesPerView: 3.4,
            },

            1024: {
                slidesPerView: 4.3,
            },
        },
    });

    let reviewsSwiper = new Swiper(".reviewsSwiper", {
        slidesPerView: 1.15,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        threshold: 50,
        watchSlidesProgress: true,
        direction: 'horizontal',
        pagination: {
            el: ".reviewsSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            501: {
                slidesPerView: 2.2,
            },
            850: {
                slidesPerView: 2.3,
            },
            1024: {
                slidesPerView: 3.4,
            },
        },
    });



    let studentsSwiper = new Swiper(".students-swiper", {
        slidesPerView: 1.2,
        spaceBetween: 12,
        grabCursor: true,
        loop: true,
        // autoHeight: true,
        watchSlidesProgress: true,
        touch: {
            touchRatio: 1,
            threshold: 30,
            edgeSwipeDetection: true,
            followFinger: true,
        },
        navigation: {
            nextEl: ".students__rightArrow",
            prevEl: ".students__leftArrow",
        },
        pagination: {
            el: ".studentsSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            502: {
                slidesPerView: 2.3,
                spaceBetween: 23,
            },
            850: {
                slidesPerView: 3.3,
            },
        },
    });

    let blogSwiper = new Swiper(".blogSwiper", {
        slidesPerView: 1.2,
        spaceBetween: 12,
        grabCursor: true,
        loop: true,
        touch: {
            touchRatio: 1,
            threshold: 30,
            edgeSwipeDetection: true,
            followFinger: true,
        },
        pagination: {
            el: ".blogSwiper-pagination",
            clickable: true,
        },
        breakpoints: {
            501: {
                slidesPerView: 2,
                spaceBetween: 22,
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

    if (selectTrigger) {
        selectTrigger.addEventListener('click', function () {
            if (selectOptions.style.display === 'block') {
                selectOptions.style.display = 'none';
                arrow.classList.remove('activeArrow');
            } else {
                selectOptions.style.display = 'block';
                arrow.classList.add('activeArrow');
            }
        });
    }

    if (selectOptionsList) {
        selectOptionsList.forEach(function (option) {
            option.addEventListener('click', function () {
                const value = option.getAttribute('data-value');
                selectTriggerSpan.textContent = option.textContent;
                select.value = value;
                selectOptions.style.display = 'none';
                arrow.classList.remove('activeArrow');
            });
        });
    }

    if (selectTrigger) {
        document.addEventListener('click', function (event) {
            const target = event.target;
            if (!selectTrigger.contains(target) && !selectOptions.contains(target)) {
                selectOptions.style.display = 'none';
                arrow.classList.remove('activeArrow');
            }
        });
    }

    let acc = document.getElementsByClassName("answers-content__accordion");
    let i;

    if (acc) {
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    panel.style.paddingBottom = "0px"
                    this.querySelector('.arrow').classList.remove('activeArrow')

                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    panel.style.paddingBottom = "40px"
                    this.querySelector('.arrow').classList.add('activeArrow')
                }
            });
        }
    }

    class Modal {
        constructor(modalId, openButtons) {
            this.modal = document.getElementById(modalId);
            this.openButtons = [];

            if (typeof openButtons === 'string') {
                this.openButtons = Array.from(document.getElementsByClassName(openButtons));
            } else if (Array.isArray(openButtons)) {
                this.openButtons = openButtons.map(buttonId => document.getElementById(buttonId));
            }

            this.openButtons.forEach(button => {
                button.addEventListener('click', () => {
                    this.open();
                    this.disableBodyScroll();
                });
            });

            window.addEventListener('click', (event) => {
                if (event.target === this.modal) {
                    this.close();
                    this.enableBodyScroll();
                }
            });

            const closeButton = this.modal.querySelector('.close');
            closeButton.addEventListener('click', () => {
                this.close();
                this.enableBodyScroll();
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

        disableBodyScroll() {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (window.matchMedia("(min-width: 1024px)").matches) {
                document.body.style.paddingRight = scrollBarWidth + 'px';
            }
            document.body.style.overflow = 'hidden';
        }

        enableBodyScroll() {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        }
    }


    const burgerModal = new Modal('burgerModal', ['burgerBtn']);

    let ourTeachersSwiperContainer = document.querySelector('.ourTeachersSwiper')

    const personalModal = ourTeachersSwiperContainer ? new Modal('stanislavModal', 'ourTeachers-content__swiperContainer') : null;

    let trialForm = document.querySelector('.trialForm')

    const compliteSendModal = trialForm ? new Modal('compliteSend', ['compliteSendBtn']) : null;

    let reviews = document.querySelector('.reviews')

    const reviewModal = reviews ? new Modal('reviewModal', ['reviewBtn']) : null;


    let burgerModalBtn = document.querySelector('.header-modal__content .whiteBtn')
    let burgerModalClose = document.querySelector('.header-modal__content .close')

    if (burgerModalBtn) {
        burgerModalBtn.addEventListener('click', () => {
            burgerModalClose.click()
        })
    }

    let menuContainer = document.querySelector('.header-content__menuContainer ul')
    let modalMenuContent = document.querySelector('.header-modal__content ul')

    if (window.matchMedia("(max-width: 1024px)").matches) {
        modalMenuContent.innerHTML = menuContainer.innerHTML
    }

    const phoneNumberRegex = /^(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?(\d{1,4}[\s.-])?(\d{1,4}[\s.-])?(\d{1,9})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const form = document.querySelector('.trialForm-content form');
    const phoneNumberInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    let formData;

    if (form) {
        form.addEventListener('submit', function (event) {
            const phoneNumber = phoneNumberInput.value;
            const email = emailInput.value;
            let isValid = true;

            if (!phoneNumberRegex.test(phoneNumber) || phoneNumber === '') {
                phoneNumberInput.style.border = "0.1rem solid #ED7070";
                phoneNumberInput.nextElementSibling.style.display = "block";
                isValid = false;
            }

            if (!emailRegex.test(email) || email === '') {
                emailInput.style.border = "0.1rem solid #ED7070";
                emailInput.nextElementSibling.style.display = "block";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                formData = new FormData(this);
                const selectedOption = this.querySelector('.trialForm-content__selectTrigger').textContent.trim();
                formData.append('selectedOption', selectedOption);
                const formName = this.getAttribute('name');
                formData.append('formName', formName);

                doAPIcall('POST', formData, './send.php', function (data) {
                    compliteSendModal.open();
                    phoneNumberInput.style.border = "none";
                    phoneNumberInput.nextElementSibling.style.display = "none";
                    emailInput.style.border = "none";
                    emailInput.nextElementSibling.style.display = "none";
                });
            }
        });
    }

    let videoContainer = document.querySelector('.ourSchool')
    const videoElement = document.querySelector('.ourSchool-videoBlock__video video');

    let scrollableContainer = document.querySelector('.schedule-content table');
    let isDragging = false;
    let startPosition = 0;
    let scrollLeft = 0;

    if (scrollableContainer) {
        scrollableContainer.addEventListener('mousedown', function (event) {
            isDragging = true;
            startPosition = event.clientX;
            scrollLeft = scrollableContainer.scrollLeft;
            scrollableContainer.style.scrollBehavior = 'auto';
        });

        scrollableContainer.addEventListener('mousemove', function (event) {
            if (isDragging) {
                let distance = event.clientX - startPosition;
                scrollableContainer.scrollLeft = scrollLeft - distance;
            }
        });

        scrollableContainer.addEventListener('mouseup', function () {
            isDragging = false;
            scrollableContainer.style.scrollBehavior = 'smooth';
        });

        scrollableContainer.addEventListener('mouseleave', function () {
            isDragging = false;
            scrollableContainer.style.scrollBehavior = 'smooth';
        });
    }

    function doAPIcall(type, data = '', url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    var data = xmlhttp.responseText;
                    if (callback) callback(data);
                } else {
                    console.log('Ошибка отправки формы');
                }
            }
        };
        xmlhttp.open(type, url, true);
        if (data) {
            xmlhttp.send(data);
            return;
        }
        xmlhttp.send(data);
    }

    for (const form of document.forms) {
        form.addEventListener('submit', function (event) {
            if (this.dataset.id) {
                if (this.dataset.id === 'search') {
                    return;
                }
            }

            event.preventDefault();
            

            const parent = this.closest('.regModal');
            const feedback = document.querySelector('#feedback');

            if (formData) {
                for (const key of formData.entries()) {
                    console.log(key);
                }
            }

            this.reset();

            if (parent) {
                modalHandler.apply(parent);
            } else {
            }

            if (feedback) {
                modalHandler.apply(feedback);
            }
        });
    }

    let compliteSendModalBtn = document.querySelectorAll('.compliteSend .whiteBtn')

    if (compliteSendModalBtn) {
        compliteSendModalBtn.forEach(e => {
            e.addEventListener('click', () => {
                compliteSendModal.close()
                reviewModal.close()
                document.body.style.overflow = "inherit"
                document.body.style.paddingRight = "0rem"
            })
        })
    }

    let headerModalLinks = document.querySelectorAll('.header-modal li')

    if (headerModalLinks) {
        headerModalLinks.forEach(e => {
            e.addEventListener('click', () => {
                burgerModal.close()
                document.body.style.overflow = "inherit"
                document.body.style.paddingRight = "0rem"
            })
        })
    }

    let teachersModalContent = document.querySelector('.personalModal-content')
    let teachers = document.querySelectorAll('.ourTeachers-content__swiperContainer')

    if (teachers) {
        teachers.forEach(e => {
            e.addEventListener('click', () => {
                teachersModalContent.innerHTML = e.querySelector('.ourTeachersSwiper-modalContent').innerHTML
                teachersModalContent.querySelector('.close').addEventListener('click', () => {
                    personalModal.close()

                    document.body.style.overflow = "inherit"
                    document.body.style.paddingRight = "0rem"
                })

                Fancybox.bind(document.querySelector(".personalModal-content"), "[data-fancybox]", {});

                let personalPartfolioSwiper = new Swiper(".personalPartfolioSwiper", {
                    slidesPerView: 1.6,
                    spaceBetween: 16,
                    grabCursor: true,
                    loop: true,
                    watchSlidesProgress: true,
                    touch: {
                        touchRatio: 1,
                        threshold: 30,
                        edgeSwipeDetection: true,
                        followFinger: true,
                    },
                    breakpoints: {
                        501: {
                            slidesPerView: 2,
                        },
                        850: {
                            slidesPerView: 3,
                        },
                    },

                    navigation: {
                        nextEl: ".personalPartfolioSwiper__rightArrow",
                        prevEl: ".personalPartfolioSwiper__leftArrow",
                    },

                    pagination: {
                        el: ".personalPartfolioSwiper-pagination",
                        clickable: true,
                    },
                });
            })
        })
    }

    if (videoElement) {

        if (window.matchMedia('(min-width: 502px)').matches) {
            videoElement.src = './assets/videos/desctopVideo.mp4';
        } else {
            videoElement.src = './assets/videos/mobileVideo.mp4';
        }
    }

    function getRandomDirection() {
        let angle = Math.random() * 360;
        return angle;
    }

    function getRandomVelocity() {
        let minVelocity = 1;
        let maxVelocity = 3;
        let velocity = Math.random() * (maxVelocity - minVelocity) + minVelocity;
        return velocity;
    }

    function checkCollision(element, otherElements) {
        let elementRect = element.getBoundingClientRect();

        for (let i = 0; i < otherElements.length; i++) {
            let otherRect = otherElements[i].getBoundingClientRect();

            if (
                element !== otherElements[i] &&
                elementRect.right >= otherRect.left &&
                elementRect.left <= otherRect.right &&
                elementRect.bottom >= otherRect.top &&
                elementRect.top <= otherRect.bottom
            ) {
                return true;
            }
        }

        return false;
    }

    function animateElement(element, otherElements) {
        let container = document.querySelector('.trialLesson-content');
        let elementRect = element.getBoundingClientRect();
        let containerRect = container.getBoundingClientRect();

        let containerWidth = containerRect.width - elementRect.width;
        let containerHeight = containerRect.height - elementRect.height;

        let posX = elementRect.left - containerRect.left;
        let posY = elementRect.top - containerRect.top;

        let direction = getRandomDirection();
        let velocity = getRandomVelocity();

        let isColliding = false;

        let animationInterval = setInterval(function () {
            let radians = direction * Math.PI / 180;
            let deltaX = velocity * Math.cos(radians);
            let deltaY = velocity * Math.sin(radians);

            posX += deltaX;
            posY += deltaY;

            if (posX < 0 || posX > containerWidth) {
                direction = (180 - direction) % 360;
            }
            if (posY < 0 || posY > containerHeight) {
                direction = (360 - direction) % 360;
            }

            if (checkCollision(element, otherElements)) {
                if (!isColliding) {
                    direction = (direction + 180) % 360;
                }
                isColliding = true;
            } else {
                isColliding = false;
            }

            element.style.left = posX + 'px';
            element.style.top = posY + 'px';
        }, 30);
    }



    let contentItems = document.querySelectorAll('.trialLesson-content .musicalSchool-services__contentItem');
    contentItems.forEach(function (item) {
        animateElement(item, contentItems);
    });

    let textElement = document.querySelector(".musicalSchool h1");

    if (textElement) {
        let textToType = "Школа Мюзикла\nстаса чунихина";
        textElement.innerText = "";
    
        function typeText(text, i) {
            if (i < text.length) {
                textElement.innerText += text.charAt(i);
                textElement.innerHTML += '<span class="cursor"></span>';
                setTimeout(function () {
                    typeText(text, i + 1);
                }, 100);
            }
    
            if (window.innerWidth < 501) {
                if (text.charAt(i) === ' ') {
                    textElement.innerHTML += '<br>';
                }
            }
        }
    
        setTimeout(function() {
            typeText(textToType, 0);
        }, 3200)
    }
    


    const imgElements = document.querySelectorAll('.mission-content__img');

    function handleScroll() {
        imgElements.forEach((imgElement) => {
            const rect = imgElement.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.6 && rect.bottom >= 0;

            if (isVisible) {
                const scrollProgress = Math.max(0, Math.min((window.innerHeight * 0.6 - rect.top) / (window.innerHeight * 0.6 + rect.height), 1));
                const initialRotation = parseFloat(imgElement.dataset.initialRotation);
                const targetRotation = parseFloat(imgElement.dataset.targetRotation);
                const rotateValue = initialRotation + (targetRotation - initialRotation) * scrollProgress;
                imgElement.style.transform = `rotate(${rotateValue}deg)`;
            }
        });
    }

    function updateRotationData() {
        imgElements.forEach((imgElement) => {
            const rect = imgElement.getBoundingClientRect();
            const initialRotation = parseFloat(imgElement.dataset.initialRotation);
            const targetRotation = parseFloat(imgElement.dataset.targetRotation);
            imgElement.dataset.initialRotation = initialRotation || 0;
            imgElement.dataset.targetRotation = targetRotation || 0;
        });
    }

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('load', () => {
        handleScroll();
        updateRotationData();
    });

    window.addEventListener('resize', updateRotationData);
})