import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PlusICon from "@heroicons/react/24/outline/PlusCircleIcon";
import { openRightDrawer } from "../../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../../utils/globalConstantUtil";
const Assistants = () => {
  const dispatch = useDispatch();
  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "CREATE ASSISTANT",
        bodyType: RIGHT_DRAWER_TYPES.CREATE_ASSISTANT,
      })
    );
  };
  return (
    <div class="h-screen flex justify-center items-center">
      <button
        type="button"
        onClick={() => openNotification()}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Assistant
        <PlusICon />
      </button>
    </div>
  );
};

export default Assistants;
