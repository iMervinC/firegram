import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyCHrkMg-ydCXyxTqv7ky5VDhDAy--QVxj0',
  authDomain: 'firegram-748b9.firebaseapp.com',
  projectId: 'firegram-748b9',
  storageBucket: 'firegram-748b9.appspot.com',
  messagingSenderId: '113865964834',
  appId: '1:113865964834:web:eaa23b59dfb3c02a20797b',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
