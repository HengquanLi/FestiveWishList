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
// $('.book').hammer().on('swipeleft', nextPage);
// $('.book').hammer().on('swipeleft', prevPage);

$(document).ready(() => {

  $.get('/currentUser', function(data) {
    console.log(data);
  });

  $('#saveWishList').on('click', (event) => {
    console.log('save btn clicked');
    event.preventDefault();

    const itemArray = [];
    const wishListName = $('#wishlistName');
    console.log(wishListName.val());
    const items = $('.item');
    console.log(items);
    console.log(items.val());

    if (!wishListName.val()) {
      // eslint-disable-next-line no-alert
      $('.modal').modal();
      $('#needWLtitle').modal('open');
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < items.length; i++) {
        console.log(items[i].value);
        const itemValue = items[i].value;
        console.log(itemValue);
        if (itemValue !== '') {
          itemArray.push(itemValue);
        }
      }
      console.log(itemArray);

      if (!wishListName) {
        return;
      }
      // getItems();
      const newWishList = {
        wishName: wishListName.val().trim(),
        item: JSON.stringify(itemArray),
      };
      console.log(newWishList);
      $.post('/api/wishlist', newWishList);
    }
  });
});
