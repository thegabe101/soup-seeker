// import wordBank from '../word-bank.txt';

// export const emptyBoard = [
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
// ];

// export const genWordSet = async () => {
//     let wordSet;
//     let todaysWord;
//     await fetch(wordBank)
//         .then((response) => response.text())
//         .then((result) => {
//             const wordArray = result.split('\n');
//             todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
//             wordSet = new Set(wordArray);
//         });
//     return { wordSet, todaysWord };
// };