import firebase from 'firebase'

import { firebaseConfig } from './firebaseConfig'

export const app = firebase.initializeApp(firebaseConfig)
