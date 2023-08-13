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

const burgerFunction = () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuItem = document.querySelector('li');
    const main = document.querySelector('main');


    burgerIcon.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu_active');
        burgerIcon.classList.toggle('burger-icon-active');
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
console.log('50/50: бургер меню не исчезает при нажатии на header, в ТЗ - при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран. У меня - только при нажатии на main. Возможно, стоит снять балл')