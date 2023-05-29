import { auth } from "./firebase.utils";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// Initialize auth provder Google and custom parameters.
const googleProvider = new GoogleAuthProvider(auth);
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => result)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode: errorCode, errorMessage: errorMessage });
    });

// Initialize auth provder Google and custom parameters.
const gitHubProvider = new GithubAuthProvider(auth);
gitHubProvider.setCustomParameters({ allow_signin: "false" });

export const signInWithGitHub = () =>
  signInWithPopup(auth, gitHubProvider)
    .then((result) => result)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode: errorCode, errorMessage: errorMessage });
    });
