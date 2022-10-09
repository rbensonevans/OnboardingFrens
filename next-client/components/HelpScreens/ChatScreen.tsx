import {
  CheckCircleIcon,
  InformationCircleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ChatScreen = ({ advance }: { advance: () => void }) => {
  return (
    <div className="m-auto flex flex-col">
      <div className="w-full m-auto bg-[#D7D7FA] h-16 p-4 mb-8 flex text-black rounded-full">
        <img src="images/push.png" className="h-full ml-2 " />
        <p className="grow-1 w-full text-center text-l mr-6 ml-2 mt-1">
          <span className=" italic">Powered by</span> Push Protocol
        </p>
      </div>

      <div>
        <img className="h-[57vh] m-auto" src="/images/chat.png" />
      </div>
      <button className="btn btn-primary m-auto mt-4" onClick={advance}>
        End Conversation
      </button>
    </div>
  );
};

export default ChatScreen;
