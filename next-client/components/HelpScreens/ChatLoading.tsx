import {
  CheckCircleIcon,
  InformationCircleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ChatLoading = ({ advance }: { advance: () => void }) => {
  const [status, setStatus] = useState(0);
  if (status === 18) {
    console.log("mooooo");
    advance();
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((status) => (status >= 17 ? 18 : status + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="m-auto">
      {[0, 1, 2, 3, 4, 5].includes(status) && (
        <div
          className={`alert alert-success max-w-sm m-auto transition-opacity ease-in-out duration-300 ${
            [1, 2, 3, 4].includes(status) ? "opacity-100" : "opacity-0"
          } `}
        >
          <div className="w-full h-12">
            <CheckCircleIcon className="h-full" />
            <span>Request Delivered</span>
          </div>
        </div>
      )}
      {[6, 7, 8, 9, 10, 11].includes(status) && (
        <div
          className={`alert alert-info max-w-sm m-auto transition-opacity ease-in-out duration-300  ${
            [7, 8, 9, 10].includes(status) ? "opacity-100" : "opacity-0"
          } `}
        >
          <div className="w-full h-12">
            <InformationCircleIcon className="h-full" />
            <span>You are next in the Queue</span>
          </div>
        </div>
      )}
      {[12, 13, 14, 15, 16, 17].includes(status) && (
        <div
          className={`alert alert-warning max-w-sm m-auto transition-opacity ease-in-out duration-300  ${
            [13, 14, 15, 16].includes(status) ? "opacity-100" : "opacity-0"
          } `}
        >
          <div className="w-full h-12">
            <BellAlertIcon className="h-full" />
            <span>Connecting to Agent</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatLoading;
