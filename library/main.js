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
    const burgerMenuClose = document.querySelector('.burger-menu-close');

    
    burgerIcon.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu_active');
        burgerIcon.classList.toggle('burger-icon-active')
        burgerMenuClose.classList.toggle('burger-menu-close-active');
    })
}

burgerFunction();