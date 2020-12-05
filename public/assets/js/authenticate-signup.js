/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
$(document).ready(() => {
//   const signUpForm = $('form.signup');
  const emailInput = $('#usernameSignup');
  const passwordInput = $('#passwordSignup');
  const confirmPW = $('#confirmPWsignup');

  $('#signupSubmit').click((event) => {
    // eslint-disable-next-line no-console
    console.log('Signup btn cliked');
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      $('#err_messages').text('Username and password fields cannot be blank.');
    }

    // eslint-disable-next-line no-use-before-define
    if (confirmPW.val() === passwordInput.val()) {
      console.log('passwords match');
      // eslint-disable-next-line no-use-before-define
      signUpUser(userData.email, userData.password);
      emailInput.val('');
      passwordInput.val('');
    } else {
      // eslint-disable-next-line no-console
      console.log('Passwords DO NOT match');
      // eslint-disable-next-line no-alert
      $('#err_messages').text('Passwords DO NOT match.');
    }
  });

  function signUpUser(email, password) { 
    // eslint-disable-next-line no-undef
    $.post('/api/signup', {
      email: email,
      password: password,
    })
      .then((data) => {
        // eslint-disable-next-line no-alert
        window.location.replace('/wishlist');
      })
      // eslint-disable-next-line no-use-before-define
      .catch(handleLoginErr);

    function handleLoginErr(err) {
      $('#err_messages').text('Please enter a valid email address.');
      $('#alert .msg').text(err.responseJSON);
      $('#alert').fadeIn(500);
    }
  }
});
