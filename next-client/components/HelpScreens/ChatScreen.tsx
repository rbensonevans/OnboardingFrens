import {
  CheckCircleIcon,
  InformationCircleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ChatScreen = ({ advance }: { advance: () => void }) => {
  return (
    <div className="m-auto flex flex-col">
      <div>
        <img className="h-[50vh]" src="/images/chat.png" />
      </div>
      <button className="btn btn-primary m-auto mt-4" onClick={advance}>
        End Conversation
      </button>
    </div>
  );
};

export default ChatScreen;
