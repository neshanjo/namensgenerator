/*
 * Copyright (c) 2025 Johannes Schneider
 * Licensed under the MIT License.
 */

const firstNames = [
    "Alex",
    "Chris",
    "Flo",
    "Uli",
    "Yves",
    "Maxi",
    "Toni",
    "Kim",
    "Sam",
    "Sascha",
    "Jamie",
    "Robin",
    "Charlie",
    "Andrea",
    "Dominique",
    "Nicola"
];

const lastNames = [
  "Schwarz",
  "Weiss",
  "Klein",
  "Gross",
  "Winter",
  "Sommer",
  "Vogel",
  "Fuchs",
  "Wald",
  "Berg",
  "Stein",
  "Wolff",
  "Engel",
  "Herbst",
  "Frühling",
  "Blume",
  "Rose",
  "Stern",
  "Himmel",
  "Bach",
  "Seidel",
  "Brand",
  "Kühn",
  "Treu",
  "Lind",
  "Birke",
  "Feld",
  "Heide",
  "Rain",
  "Sonne",
  "Glanz",
  "Sand",
  "Holz",
  "Wiese",
  "Loos",
  "Grün",
  "Bernstein",
  "Rose"
];

let unusedFirstNames = [...firstNames];

function getRandomName() {
    if (unusedFirstNames.length === 0) {
        unusedFirstNames = [...firstNames];
    }
    const firstIndex = Math.floor(Math.random() * unusedFirstNames.length);
    const firstName = unusedFirstNames.splice(firstIndex, 1)[0];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const nameDisplay = document.getElementById('name-display');
    nameDisplay.textContent = getRandomName();
    navigator.clipboard.writeText(nameDisplay.textContent).then(() => {
        console.log('Name copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy name: ', err);
    });
});

const infoIcon = document.getElementById('info-icon');
const infoBox = document.getElementById('info-box');
infoIcon.addEventListener('click', () => {
    infoBox.classList.toggle('visible');
});