
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {

  apiKey: "AIzaSyD_CThW-IYz15fB80NVoQ7lZ1UzsJF2yuI",

  authDomain: "projeto-3-bim.firebaseapp.com",

  projectId: "projeto-3-bim",

  storageBucket: "projeto-3-bim.appspot.com",

  messagingSenderId: "929042981998",

  appId: "1:929042981998:web:b844fcef15025495a9327f"

};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);

export { app, auth, db }