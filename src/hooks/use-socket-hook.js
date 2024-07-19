import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { io } from "socket.io-client";

export const useSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [isConencted, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io(url, { query: { clientId: uuidv4() } });
    socketInstance.on("connect", () => {
      console.log("connected to server ", socketInstance.id);
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      console.log("disconnected to server ", socketInstance.id);
      setIsConnected(false);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [url]);

  const emitEvent = (name, data, callback) => {
    if (isConencted && socket) {
      socket.emit(name, data, callback);
    } else {
      console.log("socket not connected");
    }
  };

  return { socket, isConencted, emitEvent };
};
