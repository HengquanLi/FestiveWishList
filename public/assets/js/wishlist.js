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
  $.get('/currentUser', (data) => {
  });

  $('#saveWishList').on('click', (event) => {
    event.preventDefault();

    const itemArray = [];
    const wishListName = $('#wishlistName');
    const items = $('.item');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      const itemValue = items[i].value;
      if (itemValue !== '') {
        itemArray.push(itemValue);
      }
    }
    // if (!wishListName) {
    //   return;
    // }
    // getItems();
    const newWishList = {
      wishName: wishListName.val().trim(),
      item: JSON.stringify(itemArray),
    };
    $.post('/api/wishlist', newWishList);
  });
});

// This is the auto popup

$(document).ready(() => {
  $('.modal-backdrop').remove();
  setTimeout(() => {
    $('#splashScreen').modal('show');

    setTimeout(() => {
      $('#splashScreen').modal('hide');
    }, 5000);
  }, 500);
});
