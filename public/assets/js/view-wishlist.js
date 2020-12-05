/* eslint-disable linebreak-style */

const zeroCard = document.querySelector('.card__inner0');

zeroCard.addEventListener('dblclick', () => {
  zeroCard.classList.toggle('is-flipped');
});
const oneCard = document.querySelector('.card__inner1');

oneCard.addEventListener('dblclick', () => {
  oneCard.classList.toggle('is-flipped');
});
const twoCard = document.querySelector('.card__inner2');
twoCard.addEventListener('dblclick', () => {
  twoCard.classList.toggle('is-flipped');
});
const threeCard = document.querySelector('.card__inner3');
threeCard.addEventListener('dblclick', () => {
  threeCard.classList.toggle('is-flipped');
});
const fourCard = document.querySelector('.card__inner4');
fourCard.addEventListener('dblclick', () => {
  fourCard.classList.toggle('is-flipped');
});
