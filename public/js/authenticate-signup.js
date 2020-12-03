// /* eslint-disable no-undef */
// /* eslint-disable object-shorthand */
// $(document).ready(() => {
// //   const signUpForm = $('form.signup');
//   const emailInput = $('#usernameSignup');
//   const passwordInput = $('#passwordSignup');
//   const confirmPW = $("#confirmPWsignup");

//   $('#signupSubmit').click((event) => {
//     // eslint-disable-next-line no-console
//     console.log('Signup btn cliked');
//     event.preventDefault();
//     const userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim(),
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }

//     if (confirmPW.val() === passwordInput.val()) {
//       console.log("passwords match");
//     // eslint-disable-next-line no-use-before-define
//       signUpUser(userData.email, userData.password);
//       emailInput.val('');
//       passwordInput.val('');
//     } else {
//       console.log("passwords DO NOT match");
//     }
//   });

//   function signUpUser(email, password) {
//     console.log("calling signupuser function");
//     // eslint-disable-next-line no-undef
//     $.post('/api/signup', {
//       email: email,
//       password: password,
//     })
//       .then((data) => {
//         // eslint-disable-next-line no-alert
//         window.location.replace('/');
//       })
//       // eslint-disable-next-line no-use-before-define
//       .catch(handleLoginErr);
//   }

//   function handleLoginErr(err) {
//     $('#alert .msg').text(err.responseJSON);
//     $('#alert').fadeIn(500);
//   }
// });