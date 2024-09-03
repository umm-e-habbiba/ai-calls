import React from "react";
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { openModal } from "../../features/common/modalSlice";
// import { openModal } from "../common/modalSlice"
import { FaMobileRetro } from "react-icons/fa6";
import { LuAlertTriangle } from "react-icons/lu";
import PlusICon from "@heroicons/react/24/outline/PlusCircleIcon";

const PhoneNumbers = () => {
  const dispatch = useDispatch();

  const openImportNumberModal = () => {
    dispatch(
      openModal({
        title: "Import Number",
        bodyType: MODAL_BODY_TYPES.IMPORT_NUMBER,
      })
    );
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center relative z-0">
        <div class="flex justify-center items-center w-[330px]">
          <div class="text-left text-muted-foreground will-change-auto">
            <div
              class="flex justify-left will-change-auto transform-none"
              style={{ opacity: "1", filter: "blur(0px)" }}
            >
              <FaMobileRetro className="w-16 h-16" />
            </div>
            <h2
              class="text-xl font-medium text-text will-change-auto transform-none"
              style={{ opacity: "1", filter: "blur(0px)" }}
            >
              Phone Numbers
            </h2>
            <p
              class="text-md text-text/40 mb-4 will-change-auto transform-none"
              style={{ opacity: "1", filter: "blur(0px)" }}
            >
              Assistants are able to be connected to phone numbers for calls.{" "}
            </p>
            <p
              class="text-md text-text/40 will-change-auto transform-none"
              style={{ opacity: "1", filter: "blur(0px)" }}
            >
              You can import from Twilio, vonage, or by one directly from Vapi
              for use with your assistants.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center my-3 ml-28">
          <button
            type="button"
            disabled
            className="w-auto mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Number
            <PlusICon className="w-5 h-5 ml-3" />
          </button>
          <button
            type="button"
            onClick={() => openImportNumberModal()}
            className="w-auto mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Import
            <PlusICon className="w-5 h-5 ml-3" />
          </button>
          <button
            type="button"
            className="w-auto mr-3 bg-background focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center"
          >
            Documentation
          </button>
        </div>
        <div
          class="flex items-center p-3 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <LuAlertTriangle className="w-5 h-5 text-yellow-600 mr-3" />
          <div>
            Please add{" "}
            <a href="/" className="hover:underline">
              card detail
            </a>{" "}
            to buy a number
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneNumbers;
