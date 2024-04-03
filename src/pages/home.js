import { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversations,
  updateMessagesAndConversations,
} from "../features/chatSlice";
import { ChatContainer, WhatsappHome } from "../components/Chat";
import { useSocket } from "../context/socketContext";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  const [onlineUsers, setOnlineUsers] = useState([]);
  //typing
  const [typing, setTyping] = useState(false);

  const socket = useSocket();
  // join user into the socket io
  useEffect(() => {
    socket.emit("join", user._id);
    //get online users
    socket.on("get-online-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);
  //get Conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user]);
  //Listening to received messages
  useEffect(() => {
    //listening to receiving a message
    socket.on("receive message", (message) => {
      dispatch(updateMessagesAndConversations(message));
    });
    //listening when a user is typing
    socket.on("typing", (conversation) => setTyping(conversation));
    socket.on("stop typing", () => setTyping(false));
  }, []);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/*container */}
      <div className="container h-screen flex">
        {/*Sidebar*/}
        <Sidebar onlineUsers={onlineUsers} typing={typing} />
        {activeConversation._id ? (
          <ChatContainer onlineUsers={onlineUsers} typing={typing} />
        ) : (
          <WhatsappHome />
        )}
      </div>
    </div>
  );
}

export default Home;
// const HomeWithSocket = (props) => (
//   <SocketContext.Consumer>
//     {(socket) => <Home {...props} socket={socket} />}
//   </SocketContext.Consumer>
// );

// export default HomeWithSocket;
