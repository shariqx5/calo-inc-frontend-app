"use client";

import { useSocket } from "@/hooks/use-socket-hook";
import { createContext } from "react";

export const SocketContext = createContext();

const socketURL = "http://localhost:3000/";

export const SocketProvider = ({ children }) => {
  const { isConencted, emitEvent, socket } = useSocket(socketURL);

  return (
    <SocketContext.Provider value={{ isConencted, emitEvent, socket }}>
      {children}
    </SocketContext.Provider>
  );
};
