import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import ChatRoom from "./page/ChatRoom";
import AuthProvider from "./contexts/AuthProvider";
import ChatListItems from "./components/layoutChat/ChatListItems";
import Friends from "./components/layoutChat/Friends";
import Archived from "./components/layoutChat/Archived";
import AuthListFridens from "./contexts/AuthListFridens";
function App() {
  return (
    <AuthProvider>
      <AuthListFridens>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/chatroom" element={<ChatRoom />}>
              <Route path="/chatroom/chat" element={<ChatListItems />}></Route>
              <Route
                path="/chatroom/chat/:chatID"
                element={<ChatListItems />}
              ></Route>
              <Route path="/chatroom/fridens" element={<Friends />}></Route>
              <Route path="/chatroom/archived" element={<Archived />}></Route>
            </Route>
          </Routes>
        </div>
      </AuthListFridens>
    </AuthProvider>
  );
}

export default App;
