// Config file
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDEC3K69yidmQKvdBXxZ1JT_CEd9meLPy8",
  authDomain: "wolf-49752.firebaseapp.com",
  databaseURL: "https://wolf-49752.firebaseio.com",
  projectId: "wolf-49752",
  storageBucket: "wolf-49752.appspot.com",
  messagingSenderId: "780894586127",
  appId: "1:780894586127:web:742a919b064b0ff693ea7a",
  measurementId: "G-PZ4TP6XGVR"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
