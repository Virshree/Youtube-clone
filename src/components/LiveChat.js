import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const t = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(20),
        })
      );
    }, 2000);

    return () => clearInterval(t);
  }, []);
  return (
    <div>
      <div
        className="ml-5 mt-5 p-3  w-[450px]  bg-gray-50 border border-black
     rounded-lg  h-[700px] overflow-y-scroll  flex flex-col-reverse"
      >
        <div>
          {chatMessage.map((c, index) => (
            <div key={index}>
              <ChatMessage name={c.name} message={c.message} />
            </div>
          ))}
        </div>
      </div>
      <form
        className="w-[455px] p-3 ml-2 mt-5 border border-gray-500
      from-black rounded-full "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "User", message: liveMessage }));

          setLiveMessage([]);
        }}
      >
        <input
          type="text"
          className="w-80 text-xl "
          value={liveMessage}
          placeholder="Chat ..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-6 mx-3 bg-green-200 text-md">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
