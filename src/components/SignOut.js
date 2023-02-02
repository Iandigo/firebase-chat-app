import React from "react";
import { auth } from "../firebase";

function SignOut() {
  return (
    <div className="signout">
      <button className="btn-signout" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
