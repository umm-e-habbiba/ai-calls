import React, { useEffect, useState } from "react";
import { TbZoomExclamation } from "react-icons/tb";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import { DATA } from "../../components/Call Logs/CallLogData";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";

const CallLogs = () => {
  const [isCallLogs, setIsCallLogs] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(DATA);
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
          <table className="text-sm w-full bg-[#FFFFFF] p-5 dark:bg-[#1D232A] rounded-2xl">
            <tr className="">
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
            {data.map((item, index) => {
              return (
                <>
                  <tr key={index} className="border-t border-t-gray-600">
                    <td
                      key={index}
                      className="text-left border-r border-r-gray-600 p-2"
                    >
                      <p className="dark:bg-[#191E24] bg-[#F2F2F2] text-center p-2 rounded-lg">
                        {item.type}
                      </p>
                    </td>
                    <td className="text-left border-r border-r-gray-600 p-2">
                      <div className="flex flex-row">
                        <input
                          type="type"
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
                </>
              );
            })}
          </table>
        </>
      ) : (
        <>
          <div className="h-5/6 flex flex-col justify-center">
            <div className="w-full flex justify-center">
              <TbZoomExclamation className="text-5xl" />
            </div>
            <div className="w-full flex flex-col items-center">
              <p className="w-1/2 font-semibold text-center">
                No results found in this batch of logs.
              </p>
              <p className="w-1/2 text-center">
                You can load another batch of logs and see if you can find what
                you are looking for or clear filters to go back.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CallLogs;
