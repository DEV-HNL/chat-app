import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import ChatRoom from "./page/ChatRoom";
import AuthProvider from "./contexts/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/chatroom" element={<ChatRoom />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
