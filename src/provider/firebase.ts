import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: 'AIzaSyC_26cAMJqrasD0Zz_R-_X1rAUCpaRHAk4',
  authDomain: 'maggico-e81b7.firebaseapp.com',
  databaseURL: 'https://maggico-e81b7.firebaseio.com',
  projectId: 'maggico-e81b7',
  storageBucket: 'maggico-e81b7.appspot.com',
  messagingSenderId: '64230510067',
  appId: '1:64230510067:web:a37075127e889daa1b9686',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
