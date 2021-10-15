const string = 'Привет! Как дела?';

const vowels = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё']

const getVowels = lengthOfTheString => {
    let saveVowels = '';
    for (let i = 0; i < lengthOfTheString.length; i++) {
        const vowelsAmount = lengthOfTheString[i];

        if (vowels.indexOf(vowelsAmount) != -1) {
            saveVowels += vowelsAmount;
        }
    }

    return saveVowels;
}

console.log(getVowels(string));