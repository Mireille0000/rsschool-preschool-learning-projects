// input values function, digital cards section

(function() {
    const inputLibraryCardsName = document.querySelector('.name-input');
    const inputLibraryCardNumber = document.querySelector('.number-card-input')
    let regexLibraryCardsName = /[0-9!"#$%&'()*+,./\\\]:;<=>?@[_`{|}~]/g;
    let regexLibraryCardNumber = /[^-0-9]/gm;

    inputLibraryCardsName.oninput = function() {
        this.value = this.value.replace(regexLibraryCardsName, '');
    };

    inputLibraryCardNumber.oninput = function() {
        this.value = this.value.replace(regexLibraryCardNumber, '');
    };
}())

// LocalStorage 

function localStorageFunction () {
    let formDataRegister = {};

    // variables 
    const registerForm = document.querySelector('.register-form');
    const localStorageInfo = localStorage;
    const signUpButtonRegister = document.querySelector('.register-button-name');
    const iconHeader = document.querySelector('.icon-header');
    const iconHeaderInitials = document.querySelector('.icon-header-initials');
    const dropDownMenuAfter = document.querySelector('.drop-menu-with-authorization');
    const menuBeforeAutorization = document.querySelector('.drop-menu-no-authorization');
    const main = document.querySelector('main');
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');
    const registerWindow = document.querySelector('.register');
    const logInWindow = document.querySelector('.log-in')
    const background = document.querySelector('.background-modals');
    const buyButton = document.querySelectorAll('.favorites-button');
    const card = document.querySelector('.buy-a-card')

    // register form, set items in local storage

    registerForm.addEventListener('input', function(event) {
        formDataRegister[event.target.name] = event.target.value;
        localStorageInfo.setItem('formDataRegister', JSON.stringify(formDataRegister));
        // console.log(formDataRegister);
    })

    // header after authorization, get items in local storage + (icon with initials, drop down menu (my profile, log out))

    if (localStorageInfo.getItem('formDataRegister')) {
        formDataRegister = JSON.parse(localStorageInfo.getItem('formDataRegister'));

        // console.log(registerForm.elements[name]);
        for (let key in formDataRegister) {
            registerForm.elements[key].value = formDataRegister[key]
        }
    }

    signUpButtonRegister.addEventListener('click', () => {
        iconHeader.classList.add('icon-header_active');
        iconHeaderInitials.classList.add('icon-header-initials_active');
        // menuBeforeAutorization.classList.toggle('drop-menu-no-authorization_active');
        registerWindow.classList.remove('register_active');
        background.classList.remove('background-modals_active');
        document.querySelector('.icon-header-initials').textContent = registerForm.elements['first-name'].value[0].toUpperCase() + registerForm.elements['last-name'].value[0].toUpperCase();
    })

        // initials icon

        iconHeaderInitials.addEventListener('mouseover', () => {
            const nameTitle = registerForm.elements['first-name'].value + " " + registerForm.elements['last-name'].value;
            const capitalizeName = nameTitle.split(" ");
            for (let i = 0; i < capitalizeName.length; i++) {
                capitalizeName[i] = capitalizeName[i].charAt(0).toUpperCase() + capitalizeName[i].slice(1);
            }

            const capitalizeInitials = capitalizeName.join(" ");
            document.querySelector('.icon-header-initials').title = capitalizeInitials;
        })

        let formDataLogIn = {};
        const logInForm = document.querySelector('.log-in-form');
        const logInMail = document.querySelector('.log-in-mail');
        const logInPassward = document.querySelector('.log-in-password');
        const logInButton =  document.querySelector('.log-in-button');

        const buyCardClose = document.querySelector('.buy-a-card-svg')

        logInForm.addEventListener('input', function(event) {
            formDataLogIn[event.target.name] = event.target.value;
            localStorageInfo.setItem('formDataLogIn', JSON.stringify(formDataLogIn));
            console.log(formDataLogIn); 
        })

        if (localStorageInfo.getItem('formDataLogIn')) {
            formDataLogIn = JSON.parse(localStorageInfo.getItem('formDataLogIn'));
    
            for (let key in formDataLogIn) {
                logInForm.elements[key].value = formDataLogIn[key]
            }
        }

        logInButton.addEventListener('click', () => {
            if (logInForm.elements[0].value == registerForm.elements[2].value && logInForm.elements[1].value == registerForm.elements[3].value) {
                iconHeader.classList.add('icon-header_active');
                iconHeaderInitials.classList.add('icon-header-initials_active');
                // menuBeforeAutorization.classList.remove('drop-menu-with-authorization_active');
                logInWindow.classList.remove('log-in_active');
                background.classList.remove('background-modals_active');
                document.querySelector('.icon-header-initials').textContent = registerForm.elements['first-name'].value[0].toUpperCase() + registerForm.elements['last-name'].value[0].toUpperCase();

                iconHeaderInitials.addEventListener('click', () => {
                    dropDownMenuAfter.classList.toggle('drop-menu-with-authorization_active');
                    burgerIcon.classList.remove('burger-icon-active');
                    burgerMenu.classList.remove('burger-menu_active');
                })
        
                main.addEventListener('click', () => {
                    dropDownMenuAfter.classList.remove('drop-menu-with-authorization_active');
                })
        
                burgerIcon.addEventListener('click', () => {
                    dropDownMenuAfter.classList.remove('drop-menu-with-authorization_active');
                })


                buyButton.forEach(item => {
                    item.addEventListener('click', () => {
                       card.classList.add('buy-a-card_active');
                       logInWindow.classList.remove('log-in_active');
                       background.classList.add('background-modals_active');
                   })
               }) 
            } else {
                logInMail.style = 'color: red';
                logInPassward.style = 'color: red';

            }
            
            console.log(logInForm.elements[0].value == registerForm.elements[2].value);
            console.log(logInForm.elements[1].value == registerForm.elements[3].value);
        })

        // close buy a card window

        buyCardClose.addEventListener('click', () => {
            card.classList.remove('buy-a-card_active');
            background.classList.remove('background-modals_active');
        })


        iconHeaderInitials.addEventListener('click', () => {
            menuBeforeAutorization.classList.toggle('drop-menu-no-authorization_active');
            burgerIcon.classList.remove('burger-icon-active');
            burgerMenu.classList.remove('burger-menu_active');
        })

        main.addEventListener('click', () => {
            menuBeforeAutorization.classList.remove('drop-menu-no-authorization_active');
        })

        burgerIcon.addEventListener('click', () => {
            menuBeforeAutorization.classList.remove('drop-menu-no-authorization_active');
        })

        // drop down menu after authorization (profile, log out)

        const myProfileItem =  document.querySelector('.my-profile-menu');
        const logOutItem = document.querySelector('.log-out-menu');
        const myProfileModalWindow = document.querySelector('.my-profile-modal-window');
        const closeProfileWindow = document.querySelector('.my-profile-svg');

        background.addEventListener('click', () => {
            myProfileModalWindow.classList.remove('my-profile-modal-window_active');
            background.classList.remove('background-modals_active');

            card.classList.remove('buy-a-card_active'); 
            // buy a card window
        })

        closeProfileWindow.addEventListener('click', () => {
            myProfileModalWindow.classList.remove('my-profile-modal-window_active');
            background.classList.remove('background-modals_active');
        })

        myProfileItem.addEventListener('click', () => {
            myProfileModalWindow.classList.add('my-profile-modal-window_active');
            background.classList.add('background-modals_active');
            dropDownMenuAfter.classList.remove('drop-menu-with-authorization_active');
        })

        // to accomplish the event listener !!!

        logOutItem.addEventListener('click', () => {
            iconHeaderInitials.classList.remove('icon-header-initials_active');
            iconHeader.classList.remove('icon-header_active');
            dropDownMenuAfter.classList.remove('drop-menu-with-authorization_active');
        })
    

    // button default off (register form)

    signUpButtonRegister.addEventListener('click', buttonClick, false);
    logInButton.addEventListener('click', buttonClick, false);
    function buttonClick(event) {
        event.preventDefault();
    }
}

localStorageFunction ()

// burger function

const burgerFunction = () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuItem = document.querySelector('li');
    const main = document.querySelector('main');

    const menuBeforeAutorization = document.querySelector('.drop-menu-no-authorization');


    burgerIcon.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu_active');
        burgerIcon.classList.toggle('burger-icon-active');

        menuBeforeAutorization.classList.remove('drop-menu-no-authorization_active');
    })

    burgerIcon.onclick = function(event) {
        let target = event.target;

            if (target.tagName == burgerMenuItem) {
                burgerMenu.classList.remove('burger-menu_active');
                burgerIcon.classList.remove('burger-icon-active');  
            }
        return;
    }

    main.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu_active');
        burgerIcon.classList.remove('burger-icon-active');  
    })

    window.addEventListener('scroll', () => {
        burgerMenu.classList.remove('burger-menu_active');
        burgerIcon.classList.remove('burger-icon-active');
    })
}

burgerFunction();

// carousel function

function carousel() {
    const photosAboutUs = document.querySelector('.photos');
    const paginationButtons = document.querySelectorAll('.pagination-button');
    const previousPhoto = document.querySelector('.carret-left');
    const nextPhoto = document.querySelector('.carret-right');

    let position = 0;
    let paginationButtonsIndex = 0;

    function paginationButtonsActive (index) {
        paginationButtons.forEach(button => button.classList.remove('pagination-button_active'));
        paginationButtons[index].classList.add('pagination-button_active');
    }

    paginationButtons.forEach((item, index) => {
        item.addEventListener('click', () => {
            position = 474 * index;
            photosAboutUs.style.left = -position + 'px';
            paginationButtonsIndex = index;
            paginationButtonsActive(paginationButtonsIndex);
        }) 
    })

    // for tablet

    function tabletSliderNext() { 
        if (position < 1800) {
            position += 474;
            photosAboutUs.style.left = -position + 'px'; 
            paginationButtonsIndex++;
         }
         paginationButtonsActive(paginationButtonsIndex);
    }

    nextPhoto.addEventListener('click', tabletSliderNext)

    function tabletSliderPrevious() { 
        if (position > 0) {
            position -= 474;
            photosAboutUs.style.left = -position + 'px'; 
            paginationButtonsIndex--;
         }
         paginationButtonsActive(paginationButtonsIndex);
    }

    previousPhoto.addEventListener('click', tabletSliderPrevious)
}

carousel();

// favorites function 

function favorites () {
    // books
    const winter = document.querySelector('.winter.active');
    const spring = document.querySelector('.spring');
    const summer = document.querySelector('.summer');
    const autumn = document.querySelector('.autumn');

    const radioButtons = document.querySelector('.radio-buttons-form');
    const radioButtonsArray = Array.from(radioButtons.children);

    radioButtonsArray[0].addEventListener('click', () => {
        spring.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        summer.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        autumn.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (winter.style = 'display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

    radioButtonsArray[1].addEventListener('click', () => {
        winter.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        summer.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        autumn.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (spring.style = 'opacity: 1; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

    radioButtonsArray[2].addEventListener('click', () => {
        winter.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        spring.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        autumn.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (summer.style = 'opacity: inherit; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

    radioButtonsArray[3].addEventListener('click', () => {
        winter.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        spring.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        summer.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (autumn.style = 'opacity: inherit; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })       

    // buy before authorization
    const buyButton = document.querySelectorAll('.favorites-button');
    const logInWindow = document.querySelector('.log-in');
    const background = document.querySelector('.background-modals');

    buyButton.forEach((item) => item.addEventListener('click', () => {
        logInWindow.classList.add('log-in_active');
        background.classList.add('background-modals_active')
    }))
}

favorites();

// modal windows

function dropMenus () {
    const iconHeader = document.querySelector('.icon-header');
    const menuBeforeAutorization = document.querySelector('.drop-menu-no-authorization');

    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');     

    const main = document.querySelector('main');


    iconHeader.addEventListener('click', () => {
        menuBeforeAutorization.classList.toggle('drop-menu-no-authorization_active');
        burgerMenu.classList.remove('burger-menu_active');
        burgerIcon.classList.remove('burger-icon-active');  
        })

        main.addEventListener('click', () => {
            menuBeforeAutorization.classList.remove('drop-menu-no-authorization_active');
        })

        // const iconHeaderInitials = document.querySelector('.icon-header-initials');
        // const buyButton = document.querySelectorAll('.favorites-button');
        // const card = document.querySelector('.buy-a-card')

        //  if ('icon-header-initials_active') {
        //     buyButton.forEach(item => {
        //         item.addEventListener('click', () => {
        //             console.log('hey');
        //             card.classList.add('buy-a-card_active');
        //         })
        //     })  
        // }
}

dropMenus ();

function registerModalWindow() {
    const dropDownMenuBefore = document.querySelector('.drop-menu-no-authorization')
    const registerWindow = document.querySelector('.register');
    const itemRegisterWindow = document.querySelector('.drop-menu-item-register');
    const logInWindow = document.querySelector('.log-in');
    const itemLogInWindow = document.querySelector('.drop-menu-item-log-in');
    const closeRegisterWindow = document.querySelector('.register-svg');
    const signUpButton = document.querySelector('.card-block-button-sign-up');
    const background = document.querySelector('.background-modals');

    itemLogInWindow.addEventListener('click', () => {
        logInWindow.classList.add('log-in_active');
        background.classList.add('background-modals_active')
        dropDownMenuBefore.classList.remove('drop-menu-no-authorization_active')
    })

    itemRegisterWindow.addEventListener('click', () => {
        registerWindow.classList.add('register_active');
        background.classList.add('background-modals_active');
        dropDownMenuBefore.classList.remove('drop-menu-no-authorization_active')
    })

    signUpButton.addEventListener('click', () => {
        registerWindow.classList.toggle('register_active');
        background.classList.add('background-modals_active');
    })

    signUpButton.addEventListener('click', buttonClick, false);

    function buttonClick(event) {
        event.preventDefault();
    }

    closeRegisterWindow.addEventListener('click', () => {
        registerWindow.classList.remove('register_active');
        background.classList.remove('background-modals_active');
    })

    background.addEventListener('click', () => {
        registerWindow.classList.remove('register_active');
        logInWindow.classList.remove('log-in_active');
        background.classList.remove('background-modals_active');
    })
}
registerModalWindow();

function logInWindow () {
    const dropDownMenuBefore = document.querySelector('.drop-menu-no-authorization')
    const logInLink = document.querySelector('.register-spans-link');
    const logInWindow = document.querySelector('.log-in');
    const registerWindow = document.querySelector('.register');
    const closeLogInWindow = document.querySelector('.log-in-svg');
    const background = document.querySelector('.background-modals');
    const registerLink = document.querySelector('.log-in-register-link');

    const logInButton = document.querySelector('.card-block-button-log-in');


    background.addEventListener('click', () => {
        registerWindow.classList.remove('log-in_active');
        background.classList.remove('background-modals_active');
    })

    logInLink.addEventListener('click', () => {
        logInWindow.classList.add('log-in_active');
        registerWindow.classList.remove('register_active');
        dropDownMenuBefore.classList.remove('drop-menu-no-authorization_active')
        // 
    })

    registerLink.addEventListener('click', () => {
        logInWindow.classList.remove('log-in_active');
        registerWindow.classList.add('register_active');
        background.classList.add('background-modals_active');
    })

    closeLogInWindow.addEventListener('click', () => {
        logInWindow.classList.remove('log-in_active');
        background.classList.remove('background-modals_active');
    })

    logInButton.addEventListener('click', () => {
        logInWindow.classList.add('log-in_active');
        background.classList.add('background-modals_active');
    })

    logInButton.addEventListener('click', buttonClick, false);
    function buttonClick(event) {
        event.preventDefault();
    }
}
logInWindow (); 

// library card form (add to any function binded with the form later)
const checkTheCardButton = document.querySelector('.dlcards-section-button');
 
function buttonClick(event) {
    event.preventDefault();
}
checkTheCardButton.addEventListener('click', buttonClick, false);

// (function () {
//         const passward = document.querySelector('.register-input');
//         let passwardValue = passward.value;
//         const signUpButtonRegister = document.querySelector('.register-button-name');
//         let passwardValidation = /[0-9a-zA-z]{8,}/;
    
        
//         passward.addEventListener('input', () => {
//             this.value = this.value.replace(passwardValidation, '');
//             console.log('hey')
//         })

//         signUpButtonRegister.addEventListener('click', buttonClick, false);
    
//         function buttonClick(event) {
//             event.preventDefault();
//         }
//     }())

console.log('50/50: бургер меню не исчезает при нажатии на header, в ТЗ - при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран. У меня - только при нажатии на main. Возможно, стоит снять балл')