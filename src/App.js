import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { io } from "socket.io-client";
// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { SocketProvider } from "./context/socketContext";
//Socket io
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]);

function App() {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { files } = useSelector((state) => state.chat);
  console.log("files", files);
  const token = user;

  return (
    <div className="dark">
      <SocketProvider
        serverUrl={process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]}
      >
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                token ? <Home socket={socket} /> : <Navigate to="/login" />
              }
            />
            <Route
              exact
              path="/login"
              element={!token ? <Login /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/register"
              element={!token ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </SocketProvider>
    </div>
  );
}

export default App;
