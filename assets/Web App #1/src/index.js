import consts from './consts'

window.addEventListener('load', () => {
  document.querySelector('body').innerHTML = `<h1>${consts.welcomeText}</h1>`;
})