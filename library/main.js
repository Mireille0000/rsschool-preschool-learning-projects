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

// burger function

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

// carousel function

function carousel() {
    const photosAboutUs = document.querySelector('.photos');
    const photosCollection = Array.from(photosAboutUs.children);
    photosCollection.forEach((photo, index) => {
        if ((index !== 0) && (index !== 1) && (index !== 2)) {
            photo.classList.add('photos-hidden');
        }  
    })

    const paginationButtons = document.querySelectorAll('.pagination-button');
    const paginationButtonsItems = Array.from(paginationButtons);
    
    paginationButtonsItems.forEach((button, index) => {
        paginationButtonsItems[index].setAttribute('data-active', '');
        button.addEventListener('click', () => {
            let position = 0;
            let count = 1;
            let width = 540;

            position += width * count;
            position = Math.min(position, 3);
            photosCollection.style.width = position + 'px';
        })
    })
}

carousel();

// favotites function 

function favorites () {
    const seasonBooks = document.querySelector('.favorites-section-descriptions');
    const seasonBooksArray = Array.from(seasonBooks.children);
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
        setTimeout(() => (winter.style = 'position: absolute; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

    radioButtonsArray[1].addEventListener('click', () => {
        winter.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        summer.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        autumn.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (spring.style = 'position: absolute; opacity: 1; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

    radioButtonsArray[2].addEventListener('click', () => {
        winter.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        spring.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        autumn.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (summer.style = 'position: absolute; opacity: inherit; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

    radioButtonsArray[3].addEventListener('click', () => {
        winter.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        spring.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        summer.style = 'display: flex; flex-wrap: wrap; opacity: 0; transition-duration: 1s';
        setTimeout(() => (autumn.style = 'position: absolute; opacity: inherit; display: flex; column-gap: 259px; flex-wrap: wrap; transition-duration: 1s'), "1000");
    })

        
}

favorites();


console.log('50/50: бургер меню не исчезает при нажатии на header, в ТЗ - при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран. У меня - только при нажатии на main. Возможно, стоит снять балл')