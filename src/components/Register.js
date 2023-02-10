import { registerEvent, loginGoogle } from '../lib/fireFunction.js';

export const register = () => {
  const HomeDiv = document.createElement('div');
  const logoDiv = document.createElement('div');
  const RegTitleDiv = document.createElement('div');
  const containerRegister = document.createElement('div');
  containerRegister.setAttribute('class', 'containerRegis');
  containerRegister.setAttribute('id', 'containerRegis');
  const divError = document.createElement('div');
  const form = document.createElement('form');
  form.setAttribute('class', 'form');
  form.setAttribute('id', 'form');
  logoDiv.setAttribute('class', 'logoDiv');
  const logo = document.createElement('img');
  logo.setAttribute('src', '/img/logo.png');
  logo.setAttribute('alt', 'logoAlt');
  logo.setAttribute('class', 'logo');
  const title = document.createElement('h2');
  title.setAttribute('class', 'title');
  title.textContent = 'PETGRAM';
  RegTitleDiv.textContent = 'Registro';
  // formulario etiquetas
  const labelUser = document.createElement('label');
  const labelEmail = document.createElement('label');
  const labelPass = document.createElement('label');
  // formulario inputs
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  // texcontent de etiquetas e inputs
  labelUser.textContent = 'Usuario';
  labelEmail.textContent = 'Correo';
  labelPass.textContent = 'Contraseña';
  // abributos label
  labelUser.setAttribute('class', 'labels');
  labelEmail.setAttribute('class', 'labels');
  labelPass.setAttribute('class', 'labels');
  // atributos inputs
  inputUser.setAttribute('type', 'text');
  inputUser.setAttribute('class', 'inputs');
  inputUser.setAttribute('id', 'user');
  // inputUser.required = 'true';
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('class', 'inputs');
  inputEmail.setAttribute('id', 'email');
  // inputEmail.required = 'true';
  inputPass.setAttribute('type', 'text');
  inputPass.setAttribute('class', 'inputs');
  inputPass.setAttribute('id', 'pass');
  // inputPass.required = 'true';
  // botones
  const buttonCreate = document.createElement('button');
  buttonCreate.setAttribute('class', 'buttonCreate');
  // poner un href o a tyope button para redirigir el código
  buttonCreate.textContent = 'Crear cuenta';
  const buttonGmail = document.createElement('button');
  buttonGmail.setAttribute('class', 'buttonGmail');
  buttonGmail.textContent = 'Ingresar con Google';

  // promesas
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userValue = inputUser.value;
    const mailValue = inputEmail.value;
    const passValue = inputPass.value;
    const exprReg = /[A-z]/g;

    function showError(userValue, divError) {
      if (exprReg.test(userValue)) {
        divError.innerHTML('válido');
        inputUser.style.borderColor = 'green';
      } else {
        divError.innerHTML('inválido');
        inputUser.style.borderColor = 'red';
      }
    }
    if (userValue === '' || userValue.length < 5) {
      alert('El usuario debe ser mayor a 5 caracteres');
    } else if (userValue && mailValue && passValue) {
      registerEvent(mailValue, passValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // si la promesa es positiva debería redirigirme al login router
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('errorcode', errorCode, 'errormessage', errorMessage);
          // ..
          if (errorCode) {
            if (errorCode === 'auth/invalid-email') {
              alert('Correo inválido');
            } else if (errorCode === 'auth/email-already-in-use') {
              alert('Correo inválido, ya esta en uso');
            } else if (errorCode === 'auth/weak-password') {
              alert('su contraseña es débil, ponga al menos 6 caracteres');
            }
          }
        });
    }
  });

  buttonGmail.addEventListener('click', () => loginGoogle('/'));


  logoDiv.append(logo, title);
  form.append(labelUser, inputUser, divError, labelEmail, inputEmail);
  form.append(labelPass, inputPass, buttonCreate, buttonGmail);
  containerRegister.append(form);
  HomeDiv.append(logoDiv, RegTitleDiv, containerRegister);
  return HomeDiv;
};


/* optiones sexo y fecha de nac. 
const labelDate = document.createElement('label');
const labelSex = document.createElement('label');
const inputDate = document.createElement('input');
const inputSex = document.createElement('select');
labelDate.setAttribute('class', 'labels');
  labelSex.setAttribute('class', 'labels');
inputDate.setAttribute('type', 'text');
  inputDate.setAttribute('class', 'inputs');
  inputDate.setAttribute('id', 'date');
  inputDate.setAttribute('placeholder', 'DD / MM / AA');
// select para el sexo
  inputSex.setAttribute('class', 'inputs');
  inputSex.setAttribute('id', 'sex');
  // opción vacía
  const optionSexEmpy = document.createElement('option');
  optionSexEmpy.setAttribute('value', '');
  optionSexEmpy.setAttribute('selected', 'true');
  const textSexEmpy = document.createTextNode('seleccione');
  optionSexEmpy.appendChild(textSexEmpy);
  inputSex.appendChild(optionSexEmpy);
  // opción macho
  const optionSexM = document.createElement('option');
  optionSexM.setAttribute('value', 'macho');
  optionSexM.setAttribute('selected', 'true');
  const textSexM = document.createTextNode('Macho');
  optionSexM.appendChild(textSexM);
  inputSex.appendChild(optionSexM);
  // opción hembra
  const optionSexH = document.createElement('option');
  optionSexH.setAttribute('value', 'hembra');
  optionSexH.setAttribute('selected', 'true');
  const textSexH = document.createTextNode('Hembra');
  optionSexH.appendChild(textSexH);
  inputSex.appendChild(optionSexH);
  // inputSex.required = 'true';
  HomeDiv.appendChild(labelDate);
  HomeDiv.appendChild(inputDate);
  HomeDiv.appendChild(labelSex);
  HomeDiv.appendChild(inputSex); */
