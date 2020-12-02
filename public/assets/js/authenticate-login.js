/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
$(document).ready(() => {
  const emailInput = $('#usernameID');
  const passwordInput = $('#passwordID');

  $('#buttonTextColor').click((event) => {
    // eslint-disable-next-line no-console
    console.log('login btn clicked');
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // eslint-disable-next-line no-use-before-define
    loginUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
  });

  function loginUser(email, password) {
    // eslint-disable-next-line no-undef
    $.post('/api/login', {
      email: email,
      password: password,
    })
      .then(() => {
        window.location.replace('/wishlist');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }
});
