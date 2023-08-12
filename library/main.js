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
    const burgerMenuContainer = document.querySelector('.burger-menu-container');
    burgerIcon.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu_active');
        burgerIcon.classList.toggle('burger-icon-active');
        }
    )

    burgerMenuContainer.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu_active');
        burgerIcon.classList.remove('burger-icon-active');  
    })

    window.addEventListener('scroll', () => {
        burgerMenu.classList.remove('burger-menu_active');
        burgerIcon.classList.remove('burger-icon-active');
    })
}

burgerFunction();