// import { createContext } from "react";

// const SocketContext = createContext();

// export default SocketContext;

import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children, serverUrl }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(serverUrl);
    console.log("Socket initialized:", newSocket);
    setSocket(newSocket);

    return () => newSocket.close();
  }, [serverUrl]);

  return (
    <SocketContext.Provider value={socket}>
      {socket && children}
    </SocketContext.Provider>
  );
};
