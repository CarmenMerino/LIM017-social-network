/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { getStorage, ref, uploadBytes } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js';
import { app } from './authentication.js';

const storage = getStorage(app);
const storageRef = ref(storage);

export const storageFunction = (imageUpload) => {
  // Creamos una referencia para el nombre de la imagen que queremos subir a firestorage:
  const imageRef = ref(storage, `imagenes/${imageUpload}`);
};
