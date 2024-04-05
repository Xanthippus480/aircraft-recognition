const Utilities = {}

Utilities.capitalise = capitalise;
Utilities.shuffle = shuffle;
Utilities.sortObjectBy = sortObjectBy;

function capitalise(phrase) {
    const words = phrase.split(" ");
    let result;

    words.forEach((word, i, arr) => {
        const first = word[0].toUpperCase();
        const body = word.slice(1);
        const newWord = first + body;

        arr[i] = newWord;
    });

    return words.join(" ");
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function sortObjectBy(obj, prop) {
    return obj.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1
        } else if (a[prop] > b[prop]) {
            return 1
        }
        return 0
    });
}

export default Utilities