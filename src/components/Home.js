import { login } from '../lib/fireFunction.js';

export const home = (on) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('class', 'HomeDiv');
  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('class', 'logoDiv');
  const logo = document.createElement('img');
  logo.setAttribute('src', '/img/logo.png');
  logo.setAttribute('alt', 'logoAlt');
  logo.setAttribute('class', 'logo');
  // Inputs
  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  title.textContent = 'PETGRAM';
  const welcome = document.createElement('p');
  welcome.textContent = `¡Bienvenido! Nos alegra que 
  estés aquí. Petgram es una 
  comunidad enorme en la que 
  puedes compartir contenido 
  diverso sobre tu mascota.`;
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'containerLogin');
  const labelEmail = document.createElement('label');
  labelEmail.setAttribute('class', 'labels');
  labelEmail.textContent = 'Correo';
  const labelPass = document.createElement('label');
  labelPass.setAttribute('class', 'labels');
  labelPass.textContent = 'Contraseña';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('class', 'inputs');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('type', 'text');
  inputPass.setAttribute('class', 'inputs');
  // Botones
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('class', 'buttonLogin');
  buttonLogin.textContent = 'Inicia Sesión';


  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('class', 'buttonRegister');
  buttonRegister.textContent = 'Registrate';

  buttonLogin.addEventListener('click', () => login(inputEmail.value, inputPass.value));
  buttonRegister.addEventListener('click', () => on('/register'));
  logoDiv.append(logo, title);
  containerLogin.append(labelEmail, inputEmail, labelPass, inputPass, buttonLogin, buttonRegister);
  HomeDiv.append(logoDiv, welcome, containerLogin);

  return HomeDiv;
};
