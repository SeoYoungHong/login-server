import admin, { initializeApp, credential as _credential } from "firebase-admin";

import serviceAccount from "./severAccountKey.json";

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: "https://testapp-760da-default-rtdb.firebaseio.com"
});

export default admin;
