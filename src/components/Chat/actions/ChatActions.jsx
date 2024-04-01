import { useState } from "react";
import { SendIcon } from "../../../svg";
import Attachments from "./Attachments";
import EmojiPicker from "./EmojiPicker";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../features/chatSlice";
import { ClipLoader } from "react-spinners";

export default function ChatActions() {
  const dispatch = useDispatch();
  const { activeConversation, status } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  const [message, setMessage] = useState("");
  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token,
  };
  const SendMessageHandler = async (e) => {
    e.preventDefault();
    await dispatch(sendMessage(values));

    setMessage("");
  };
  return (
    <form
      onSubmit={(e) => SendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 px-4 py-2 select-none"
    >
      {/*Container */}
      <div className="w-full flex items-center gap-x-2">
        {/*Emojis and attachments */}
        <ul className="flex gap-x-2">
          <EmojiPicker />
          <Attachments />
        </ul>
        {/*Input */}
        <Input message={message} setMessage={setMessage} />
        {/*Send button */}
        <button type="submit" className="btn">
          {status === "loading" ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
}
