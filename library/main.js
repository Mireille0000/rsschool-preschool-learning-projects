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

// validation forms

function validation () {
    const myEmail = document.querySelector('.register-mail');
    const passward = document.querySelector('.register-password')
    const passwardValue = document.querySelector('.register-password').value;
    const signUpButtonRegister = document.querySelector('.register-button-name');
    const emailValidation = /{}/;
    const passwardValidation = /[0-9a-zA-z]{8,}/;

    passward.oninput = () => {
        if (passwardValidation.test(passwardValue)) {
         return passwardValue;
    } else {
         return 0;
    }
    }
   
    signUpButtonRegister.addEventListener('click', () => {
        console.log('Hey');
    })

    signUpButtonRegister.addEventListener('click', buttonClick, false);

    function buttonClick(event) {
        event.preventDefault();
    }
}

validation();

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
        console.log('Hi');
        menuBeforeAutorization.classList.toggle('drop-menu-no-authorization_active');
        burgerMenu.classList.remove('burger-menu_active');
        burgerIcon.classList.remove('burger-icon-active');  
        })

        main.addEventListener('click', () => {
            menuBeforeAutorization.classList.remove('drop-menu-no-authorization_active');
        })
}

dropMenus ();

function registerModalWindow() {
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
        console.log('Hey');
    })

    itemRegisterWindow.addEventListener('click', () => {
        registerWindow.classList.add('register_active');
        background.classList.add('background-modals_active');
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


console.log('50/50: бургер меню не исчезает при нажатии на header, в ТЗ - при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран. У меня - только при нажатии на main. Возможно, стоит снять балл')
console.log('section favorites, разобраться; добавить связь между кнопками и сменой картинок, about us section')