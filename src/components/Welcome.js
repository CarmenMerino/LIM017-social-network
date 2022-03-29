/* eslint-disable import/no-cycle */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { onNavigate } from "../lib/ViewController.js";

export const welcome = () => {

    const welcomeSection = document.createElement('section');
    welcomeSection.setAttribute('id', 'welcome-section');

    const divLogo = document.createElement('div');
    divLogo.setAttribute('id', 'div-logo');
    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', '../img/logoblanco.png');
    imgLogo.setAttribute('alt', 'Imagen de bienvenida');
    imgLogo.setAttribute('class', 'logo'); //Cambiar por clase o id, temporal
    divLogo.appendChild(imgLogo);

    const divTextWelcome = document.createElement('div');
    divTextWelcome.setAttribute('id', 'div-text-welcome');
    divTextWelcome.textContent = 'Únete a esta comunidad y dale una segunda oportunidad a las prendas que ya no uses.';

    const divBtn = document.createElement('div');
    divBtn.setAttribute('class', 'div-btn');

    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Inicia sesión';
    loginBtn.setAttribute('class', 'button');

    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Regístrate';
    registerBtn.setAttribute('class', 'button');

    divBtn.appendChild(loginBtn);
    divBtn.appendChild(registerBtn);

    welcomeSection.appendChild(divLogo);
    welcomeSection.appendChild(divTextWelcome);
    welcomeSection.appendChild(divBtn);

    loginBtn.addEventListener('click', () => onNavigate('/login'));
    registerBtn.addEventListener('click', () => onNavigate('/register'));

    return welcomeSection;
}