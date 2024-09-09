import React, { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import { DATA } from "../../components/Call Logs/CallLogData";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import CallLogsNoResult from "../../components/Call Logs/CallLogsNoResult";

const CallLogs = () => {
  const [isCallLogs, setIsCallLogs] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(DATA);
    if (data) {
      setIsCallLogs(true);
    }
  }, []);

  useEffect(() => {
    dispatch(setPageTitle({ title: "Call Logs" }));
  }, []);

  const handleCopyButton = (callID) => {
    let isCopy = navigator.clipboard.writeText(callID);
    if (isCopy) {
      toast.success(`Call ID Copied to Clipboard`);
    }
  };

  return (
    <>
      {isCallLogs ? (
        <>
          <table className="text-sm w-128 bg-[#FFFFFF] p-5 dark:bg-[#1D232A] rounded-2xl">
            <thead>
              <tr>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Type
                </th>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Call ID
                </th>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Call Cost
                </th>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Ended Reason
                </th>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Assistant
                </th>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Phone Number
                </th>
                <th className="font-semibold text-left border-r border-r-gray-600 p-2">
                  Customer
                </th>
                <th className="font-semibold text-left p-2">
                  Call Times & Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t border-t-gray-600">
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                      {item.type}
                    </p>
                  </td>
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <div className="flex flex-row">
                      <input
                        type="text"
                        readOnly
                        name="callID"
                        value={item.callID}
                        className="dark:bg-[#191E24] bg-[#F2F2F2] text-center py-2 rounded-l-lg"
                      />
                      <button
                        className="dark:bg-[#191E24] bg-[#F2F2F2] rounded-r-lg pr-1"
                        onClick={() => handleCopyButton(item.callID)}
                      >
                        <IoCopy />
                      </button>
                    </div>
                  </td>
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                      {item.callCost}
                    </p>
                  </td>
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <p className="bg-green-800 text-white text-center p-1 rounded-xl">
                      {item.endedReason}
                    </p>
                  </td>
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                      {item.assistant}
                    </p>
                  </td>
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                      {item.phoneNumber}
                    </p>
                  </td>
                  <td className="text-left border-r border-r-gray-600 p-2">
                    <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                      {item.customerNumber}
                    </p>
                  </td>
                  <td className="text-left p-2">
                    <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                      {item.callTimeDuration}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <CallLogsNoResult />
        </>
      )}
    </>
  );
};

export default CallLogs;
