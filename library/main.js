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

console.log('100/100, все требования выполнены');