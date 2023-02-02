import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
