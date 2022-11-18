import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// Better put your these secret keys in .env file
const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
