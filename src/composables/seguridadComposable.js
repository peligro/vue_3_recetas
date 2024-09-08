import axios from 'axios';
import { useAuthStore } from './../stores/authStore';
export function registroComposable(body) {


  let sendData = async (body) => {

    try {
      axios.post(`${import.meta.env.VITE_API_URL}seguridad/registro`, body, { headers: { 'content-type': 'application/json' } })
        .then((response) => {
          alert("Te haz registrado exitosamente!!\nTe hemos enviado un mail al correo que nos indicaste para activar tu cuenta.");
          window.location = "/registro";
        })
        .catch((err) => {
          alert("Ocurrió un error inesperado");
          window.location = "/registro";
        });
    } catch (err) {
      alert("Ocurrió un error inesperado");
      window.location = "/registro";
    }

  }


  return {
    sendData
  };
}
export function loginComposable(body) {


  let sendData = async (body) => {

    try {
      axios.post(`${import.meta.env.VITE_API_URL}seguridad/login`, body, { headers: { 'content-type': 'application/json' } })
        .then((response) => {
          let store = useAuthStore();
          store.iniciarSesion(response.data);
          window.location="/panel";
        })
        .catch((err) => {
          alert("Ocurrió un error inesperado");
          window.location = "/login";
        });
    } catch (err) {
      alert("Ocurrió un error inesperado");
      window.location = "/login";
    }

  }


  return {
    sendData
  };
}