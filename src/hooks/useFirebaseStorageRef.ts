import React from 'react'
import firebase from 'firebase/app'
import 'firebase/storage'
import { FIREBASE } from '../config'

const useFirebaseStorageRef = () => {
  const [firebaseApp, setFirebaseApp] = React.useState<firebase.app.App>()
  React.useEffect(() => {
    try {
      setFirebaseApp(firebase.app(FIREBASE.name))
    } catch {
      setFirebaseApp(firebase.initializeApp(FIREBASE.options, FIREBASE.name))
    }
  }, [])
  return firebaseApp ? firebaseApp.storage().ref() : null
}

export default useFirebaseStorageRef
