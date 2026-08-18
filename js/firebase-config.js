/**
 * Configuración de Firebase
 * 
 * Reemplaza los valores de ejemplo por los datos de tu proyecto
 * de Firebase cuando estés listo para conectar Firestore/Auth.
 *
 * IMPORTANTE:
 * No coloques aquí contraseñas, claves privadas o credenciales de servidor.
 */

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROYECTO.firebasestorage.app",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Se deja disponible para app.js.
// La página continúa funcionando con localStorage mientras
// no se hayan configurado las credenciales reales.
window.firebaseConfig = firebaseConfig;
