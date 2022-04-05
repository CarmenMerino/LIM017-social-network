/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */

// import { onNavigate } from '../lib/ViewController.js';
// import { signOutFun } from '../authentication.js';
import { getData } from '../database.js';

/* eslint-disable indent */
export const home = () => {
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('id', 'section-home');

  const divTitleHome = document.createElement('div');
  divTitleHome.setAttribute('class', 'div-nav');

  const divPhotoPerfil = document.createElement('div');
  divPhotoPerfil.setAttribute('class', 'div-photo-perfil');

  const imageProfile = document.createElement('img');
  imageProfile.setAttribute('class', 'img-profile'); // Le añadí temporalmente la misma clase
  imageProfile.setAttribute('src', '../img/ejemplo-foto-perfil.jpg');

  const titleHome = document.createElement('p');
  titleHome.textContent = 'Margarita Contreras';

  divPhotoPerfil.appendChild(imageProfile);
  divPhotoPerfil.appendChild(titleHome);

  const navMenu = document.createElement('nav');
  navMenu.setAttribute('class', 'navResponsive');
  const navBtn = document.createElement('button');
  navBtn.setAttribute('class', 'btnBars');
  const imgMenu = document.createElement('img');
  imgMenu.setAttribute('src', '../img/menu.png');
  imgMenu.setAttribute('class', 'img-menu');

  navBtn.appendChild(imgMenu);

  navMenu.appendChild(navBtn);

  divTitleHome.appendChild(divPhotoPerfil);
  divTitleHome.appendChild(navMenu);

  const postsContainer = document.createElement('div');
  postsContainer.setAttribute('class', 'div-posts');

  sectionHome.appendChild(divTitleHome);
  sectionHome.appendChild(postsContainer);

  getData().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      postsContainer.innerHTML += `<section class = "section-post" id = "${doc.id}">
      <div class = "div-category-post">
        <p class = "category-post ${doc.data().Categoría}">${doc.data().Categoría}</p>
      </div>
        <div class ="container-post">
          <div class = "title-and-icons">
            <div class ="div-title">
              <p>${doc.data().Título}</p>
            </div>
            <div class = "div-icons">
              <img class = "img-profile-post" src = "../img/ejemplo-foto-perfil.jpg">
              <img class = "icon-contact-post" src = "../img/dato-de-contacto.png">
            </div>
          </div>
          <div class = "div-img-post">
            <img class = "img-post" src = ${doc.data().Foto}>
          </div>
          <div class = "description-like-post">
            <div class = "description-post">
              <p>${doc.data().Description}</p>
            </div>
            <div class ="state-like-post">
              <p>Estado</p>
              <p>${doc.data().Estado}</p>
              <img class = "icon-like-post" src="../img/heart.png">
            </div>
          </div>
        </div>
      </section>`;
    });
  });
  return sectionHome;
};
