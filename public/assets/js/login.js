/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// eslint-disable-next-line linebreak-style
//  Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//  Items
const title = document.querySelector('.title');
const heart = document.querySelector('.heart img');
const info = document.querySelector('.info h3');
//  Moving animation event
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//  Animate in
// eslint-disable-next-line no-unused-vars
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //  popout
  title.style.transform = 'translateZ(125px)';
  heart.style.transform = 'translateZ(200px) rotateZ(-25deg) ';
  info.style.transform = 'translateZ(100px)';
});
//  Animate out
// eslint-disable-next-line no-unused-vars
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  title.style.transform = 'translateZ(0px)';
  heart.style.transform = 'translateZ(0px) rotateZ( 0deg)';
  info.style.transform = 'translateZ(0px)';
});
//  Show / hide password
function myFunction() {
  const x = document.getElementById('passwordID');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}
myFunction();

function myFunction2() {
  const x = document.getElementById('passwordSignup');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }

  const y = document.getElementById('confirmPWsignup');
  if (y.type === 'password') {
    y.type = 'text';
  } else {
    y.type = 'password';
  }
}
myFunction2();