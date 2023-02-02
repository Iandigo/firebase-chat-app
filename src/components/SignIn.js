import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="signin">
      <button className="btn-signin" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
}

export default SignIn;
