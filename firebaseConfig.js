import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDbws7fdMPXwhzscut2B2omhU7NqERIDBs",
    authDomain: "todolist-14c18.firebaseapp.com",
    projectId: "todolist-14c18",
    storageBucket: "todolist-14c18.appspot.com",
    messagingSenderId: "179484431939",
    appId: "1:179484431939:web:7be6d98446e050851866f6"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;