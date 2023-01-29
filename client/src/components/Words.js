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
        // console.log(result)
        const wordArray = result.split('\n');
        wordSet = new Set(wordArray);
        // console.log(wordSet);
    });
    return { wordSet };
}