import wordBank from '../word-bank.txt';

export const emptyBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
]

export const genWordSet = async () => {
    let wordSet;
    await fetch(wordBank).then((response) => response.text()).then((result) => {
        const wordArray = result.split('\n');
        wordSet = new Set(wordArray);
    });
    return { wordSet };
}