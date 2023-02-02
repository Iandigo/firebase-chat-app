import React from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState } from "react";

function SendMessages({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            type="text"
            placeholder="Message..."
          />
          <button className="btn-submit" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessages;
