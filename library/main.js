(function() {
    const inputLibraryCardsName = document.querySelector('.name-input');
    let regexLibraryCardsName = /[0-9!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]/g;

    inputLibraryCardsName.oninput = function() {
        this.value = this.value.replace(regexLibraryCardsName, '');
    }
}())