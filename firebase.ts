import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKziWrW7Q1SiqbY91kYRgKkbXHWUoYAyk',
  authDomain: 'theater-project-b4a81.firebaseapp.com',
  projectId: 'theater-project-b4a81',
  storageBucket: 'theater-project-b4a81.appspot.com',
  messagingSenderId: '703089065267',
  appId: '1:703089065267:web:9da7a282d9524bd77c9246',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
