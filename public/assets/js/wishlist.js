/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// const currentPage = 0;
function prevPage() {
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function nextPage() {
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
}
$('.book').on('dblclick', '.active', nextPage).on('dblclick', '.flipped', prevPage);
$('.book').hammer().on('swipeleft', nextPage);
$('.book').hammer().on('swipeleft', prevPage);
