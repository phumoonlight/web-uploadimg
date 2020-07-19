import firebase from 'firebase/app'
import 'firebase/storage'
import { FIREBASE } from '../config'

const initFirebaseAppStorageServerSide = (): firebase.storage.Reference => {
  let firebaseApp: firebase.app.App
  try {
    firebaseApp = firebase.app(FIREBASE.serverSideName)
  } catch {
    firebaseApp = firebase.initializeApp(FIREBASE.options, FIREBASE.serverSideName)
  }
  return firebaseApp.storage().ref()
}

export default initFirebaseAppStorageServerSide
