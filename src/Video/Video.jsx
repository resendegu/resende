
import { useEffect, useState } from "react";
import MainWindowContainer from "./containers/MainWindow";
import socket from "../socket";

const Video = (props) => {
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    socket.on("init", (data) => setClientId(data.id)).emit("init");
  }, []);

  const startCall = (isCaller, friendId, config) => {
    socket.on("init", (data) => {
      console.log(data);
      setClientId(data.id);
    });
  };

  return (
    <div>
      <MainWindowContainer clientId={clientId} startCall={startCall} />
    </div>
  );
};

export default Video;