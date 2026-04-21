export function getRandomIndex(length, current) {
    let newIndex;

    do {
        newIndex = Math.floor(Math.random() * length);
    } while (newIndex === current);

    return newIndex;
}