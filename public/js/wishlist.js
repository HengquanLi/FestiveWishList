/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const currentPage = 0;
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
  $('#saveWishList').on('click', (event) => {
    event.preventDefault();
    const itemArray = [];
    const wishListName = $('#wishlistName');
    const items = $('.item');
    console.log(items);
    console.log(items.val());

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].value);
      const itemValue = items[i].value.trim();
      console.log(itemValue);
      if (itemValue !== '') {
        itemArray.push(itemValue);
      }
    }
    console.log('clicked');
    console.log(itemArray);

    if (!wishListName) {
      return;
    }

    const newWishList = {
      wishName: wishListName.val().trim(),
      item: JSON.stringify(itemArray),
    };
    // console.log(newWishList);
    // $.post('/api/wishlist', newWishList);
    $.ajax({
      url: '/api/wishlist',
      type: 'POST',
      data: newWishList,
      cache: false,
      datatype: 'json',
      success(returns) {
        if (returns) alert('Wish list has been saved!!');
        else alert('Oops, something is WRONG!!');
      },
    });
  });

  $('#upDataList').on('click', (event) => {
    event.preventDefault();
    const itemArray = [];
    const wishListName = $('#wishlistName');
    const items = $('.item');

    for (let i = 0; i < items.length; i++) {
      console.log(items[i].value);
      const itemValue = items[i].value.trim();
      console.log(itemValue);
      if (itemValue !== '') {
        itemArray.push(itemValue);
      }
    }
    
    if (!wishListName) {
      return;
    }
    const url = window.location.href
    const newWishList = {
      // wishName: wishListName.val().trim(),
      item: JSON.stringify(itemArray),
      id: url[url.length - 2],
    };
    console.log(newWishList);
    $.ajax({
      url: '/api/wishlist/',
      type: 'PUT',
      data: newWishList,
      cache: false,
      datatype: 'json',
      success(returns) {
        if (returns) alert('Wish list has been updated!!');
        else alert('Oops, something is WRONG!!');
      },
    });
  })
});
