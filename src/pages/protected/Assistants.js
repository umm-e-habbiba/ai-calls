import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlusICon from "@heroicons/react/24/outline/PlusCircleIcon";
import PhoneICon from "@heroicons/react/24/outline/PhoneIcon";
import ExclamationICon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import DollarICon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import { openRightDrawer } from "../../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../../utils/globalConstantUtil";
import { CProgress, CProgressStacked } from "@coreui/react";
const Assistants = () => {
  const dispatch = useDispatch();
  const [noAssistant, setNoAssistant] = useState(false);
  const [currentAssistant, setCurrentAssistant] = useState({
    id: "1",
    name: "first assistant",
  });
  const [assistantId, setAssistantId] = useState("1");
  const [assistants, setAssistants] = useState([
    {
      id: "1",
      name: "first assistant",
    },
    {
      id: "2",
      name: "second assistant",
    },
  ]);

  useEffect(() => {
    setCurrentAssistant(
      assistants.filter((assit) => assit.id == assistantId)[0]
    );
  }, [assistantId]);

  const openNotification = () => {
    dispatch(
      openRightDrawer({
        header: "CREATE ASSISTANT",
        bodyType: RIGHT_DRAWER_TYPES.CREATE_ASSISTANT,
      })
    );
  };
  return (
    <>
      {noAssistant && (
        <div className="h-screen flex justify-center items-center">
          <button
            type="button"
            onClick={() => openNotification()}
            className="w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Assistant
            <PlusICon className="w-5 h-5 ml-3" />
          </button>
        </div>
      )}
      {!noAssistant && (
        <div className="grid grid-cols-3 h-full">
          <div
            data-testid="assistant-menu"
            class="border-r border-border hide-scrollbar h-[200px] sm:h-full w-full sm:max-w-[320px]"
          >
            <div class="flex p-4 sticky top-0 border-b border-border bg-foreground/5 backdrop-blur-lg">
              <button
                type="button"
                onClick={() => openNotification()}
                className="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Assistant
                <PlusICon className="w-5 h-5 ml-3" />
              </button>
            </div>
            <div
              role="list"
              data-testid="assistants-list"
              class="flex-col w-full sm:max-w-[320px] p-4 hide-scrollbar gap-y-2 hidden sm:flex"
            >
              {assistants &&
                assistants.length > 0 &&
                assistants.map((assistant, index) => (
                  <div
                    class={`group flex flex-col p-2 rounded-lg w-full border border-transparent hover:bg-background/50 cursor-pointer transition-all duration-150 ease-in-out ${
                      currentAssistant.name == assistant.name
                        ? "bg-primary/10"
                        : ""
                    }`}
                    onClick={() => setAssistantId(index + 1)}
                  >
                    <div class="flex justify-between items-center  transition-all duration-150 ease-in-out">
                      <div class="flex flex-col justify-between items-start">
                        <div class="ellipsis-text font-semibold text-sm text-text">
                          {assistant.name}
                        </div>
                        <div class="flex gap-1.5 items-center overflow-hidden">
                          <p class="ellipsis-text text-sm text-text/40"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-2 p-3 w-full">
            <div className="flex justify-between items-center mb-3">
              <div class="ellipsis-text font-bold text-xl">
                {currentAssistant.name}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => openNotification()}
                  className="w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <PhoneICon className="w-5 h-5 mr-3" />
                  Talk with Assistant
                </button>
              </div>
            </div>
            <div class="hidden lg:flex lg:items-center flex-wrap flex-auto gap-x-4 mb-3">
              <div class="flex items-center mb-1 gap-1">
                <div class="rounded-full w-2 h-2 bg-[#5dfeca]"></div>
                <div class="text-xs text-text">Vapi Fixed Cost</div>
              </div>
              <div class="flex items-center mb-1 gap-1">
                <div class="rounded-full w-2 h-2 bg-[#db2777]"></div>
                <div class="text-xs text-text">untitled</div>
              </div>
              <div class="flex items-center mb-1 gap-1">
                <div class="rounded-full w-2 h-2 bg-[#0ea5e9]"></div>
                <div class="text-xs text-text">gpt 3.5 turbo</div>
              </div>
              <div class="flex items-center mb-1 gap-1">
                <div class="rounded-full w-2 h-2 bg-[#fcd34d]"></div>
                <div class="text-xs text-text">cartesia</div>
              </div>
              <div class="flex items-center mb-1 gap-1">
                <div class="rounded-full w-2 h-2 bg-[#c026d3]"></div>
                <div class="text-xs text-text">web</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div class="group h-auto flex-1 border border-border p-[12px] rounded-2xl transition-all duration-150 ease-in-out bg-[#27272A]">
                <div class="flex flex-col gap-2">
                  <div class="flex flex-col xl:flex-row justify-between items-start gap-2 mb-2  text-base md:text-md lg:text-lg ">
                    <div class="flex items-center gap-2">
                      <div class="bg-foreground border border-border rounded-xl p-[6px] shadow-sm shadow-black/10">
                        <DollarICon className="w-5 h-5" />
                      </div>
                      <h3 class=" font-bold text-text/70">Cost</h3>
                      <ExclamationICon className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div class="font-bold font-mono text-primary bg-background/40 rounded-xl p-[6px] px-3 border border-border">
                      ~$0.09
                      <span class="text-text/20"> /min</span>
                    </div>
                  </div>
                  <CProgressStacked className="flex">
                    <CProgress
                      value={54}
                      className="bg-[#5dfeca] h-[13px] rounded-l-full"
                    />
                    <CProgress value={11} className="bg-[#db2777] h-[13px]" />
                    <CProgress value={11} className="bg-[#0ea5e9] h-[13px]" />
                    <CProgress
                      value={24}
                      className="bg-[#fcd34d] h-[13px] rounded-r-full"
                    />
                  </CProgressStacked>
                </div>
              </div>
              <div class="group h-auto flex-1 border border-border p-[12px] rounded-2xl transition-all duration-150 ease-in-out bg-[#27272A]">
                <div class="flex flex-col gap-2">
                  <div class="flex flex-col xl:flex-row justify-between items-start gap-2 mb-2  text-base md:text-md lg:text-lg ">
                    <div class="flex items-center gap-2">
                      <div class="bg-foreground border border-border rounded-xl p-[6px] shadow-sm shadow-black/10">
                        <DollarICon className="w-5 h-5" />
                      </div>
                      <h3 class=" font-bold text-text/70">Latency</h3>
                      <ExclamationICon className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div class="font-bold font-mono text-primary bg-background/40 rounded-xl p-[6px] px-3 border border-border">
                      ~700
                      <span class="text-text/20"> ms</span>
                    </div>
                  </div>
                  <CProgressStacked className="flex">
                    <CProgress
                      value={54}
                      className="bg-[#5dfeca] h-[13px] rounded-l-full"
                    />
                    <CProgress value={11} className="bg-[#db2777] h-[13px]" />
                    <CProgress value={11} className="bg-[#0ea5e9] h-[13px]" />
                    <CProgress
                      value={24}
                      className="bg-[#fcd34d] h-[13px] rounded-r-full"
                    />
                  </CProgressStacked>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistants;
