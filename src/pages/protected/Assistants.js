import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlusICon from "@heroicons/react/24/outline/PlusCircleIcon";
import PhoneICon from "@heroicons/react/24/outline/PhoneIcon";
import ExclamationICon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import DollarICon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import PuzzleICon from "@heroicons/react/24/outline/PuzzlePieceIcon";
import BarsIcon from "@heroicons/react/24/outline/Bars3BottomLeftIcon";
import MicrophoneIcon from "@heroicons/react/24/outline/MicrophoneIcon";
import CodeIcon from "@heroicons/react/24/outline/CodeBracketIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ChartIcon from "@heroicons/react/24/outline/ChartBarIcon";
import PublishIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import ChatIcon from "@heroicons/react/24/outline/ChatBubbleLeftRightIcon";
import SpeakerIcon from "@heroicons/react/24/outline/SpeakerXMarkIcon";
import PhoneXIcon from "@heroicons/react/24/outline/PhoneXMarkIcon";
import { openRightDrawer } from "../../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../../utils/globalConstantUtil";
import { BiDialpad, BiInjection } from "react-icons/bi";
import {
  CCard,
  CCardBody,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormRange,
  CFormSelect,
  CFormSwitch,
  CInputGroup,
  CNav,
  CNavItem,
  CNavLink,
  CProgress,
  CProgressStacked,
  CTabContent,
  CTabPane,
  CTooltip,
} from "@coreui/react";
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
  const [activeKey, setActiveKey] = useState("model");
  const [temperature, setTemperature] = useState("1.2");

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
        <div className="flex justify-start h-full">
          <div
            data-testid="assistant-menu"
            className="border-r border-border hide-scrollbar h-[200px] sm:h-full w-full sm:max-w-[320px]"
          >
            <div className="flex p-4 sticky top-0 border-b border-border bg-foreground/5 backdrop-blur-lg">
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
              className="flex-col w-full sm:max-w-[320px] p-4 hide-scrollbar gap-y-2 hidden sm:flex"
            >
              {assistants &&
                assistants.length > 0 &&
                assistants.map((assistant, index) => (
                  <div
                    className={`group flex flex-col p-2 rounded-lg w-full border border-transparent hover:bg-background/50 cursor-pointer transition-all duration-150 ease-in-out ${
                      currentAssistant.name == assistant.name
                        ? "bg-primary/10"
                        : ""
                    }`}
                    onClick={() => setAssistantId(index + 1)}
                  >
                    <div className="flex justify-between items-center  transition-all duration-150 ease-in-out">
                      <div className="flex flex-col justify-between items-start">
                        <div className="ellipsis-text font-semibold text-sm text-text">
                          {assistant.name}
                        </div>
                        <div className="flex gap-1.5 items-center overflow-hidden">
                          <p className="ellipsis-text text-sm text-text/40"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="ellipsis-text font-bold text-xl">
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
            <div className="hidden lg:flex lg:items-center flex-wrap flex-auto gap-x-4 mb-3">
              <div className="flex items-center mb-1 gap-1">
                <div className="rounded-full w-2 h-2 bg-[#5dfeca]"></div>
                <div className="text-xs text-text">Vapi Fixed Cost</div>
              </div>
              <div className="flex items-center mb-1 gap-1">
                <div className="rounded-full w-2 h-2 bg-[#db2777]"></div>
                <div className="text-xs text-text">untitled</div>
              </div>
              <div className="flex items-center mb-1 gap-1">
                <div className="rounded-full w-2 h-2 bg-[#0ea5e9]"></div>
                <div className="text-xs text-text">gpt 3.5 turbo</div>
              </div>
              <div className="flex items-center mb-1 gap-1">
                <div className="rounded-full w-2 h-2 bg-[#fcd34d]"></div>
                <div className="text-xs text-text">cartesia</div>
              </div>
              <div className="flex items-center mb-1 gap-1">
                <div className="rounded-full w-2 h-2 bg-[#c026d3]"></div>
                <div className="text-xs text-text">web</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="group h-auto flex-1 border border-[#27272A] dark:border-gray-200 p-[12px] rounded-2xl transition-all duration-150 ease-in-out bg-gray-200 dark:bg-[#27272A]">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col xl:flex-row justify-between items-start gap-2 mb-2  text-base md:text-md lg:text-lg ">
                    <div className="flex items-center gap-2">
                      <div className="bg-foreground border border-[#27272A] dark:border-gray-200 rounded-xl p-[6px] shadow-sm shadow-black/10">
                        <DollarICon className="w-5 h-5" />
                      </div>
                      <h3 className=" font-bold text-text/70">Cost</h3>
                      <CTooltip
                        content="These calculation are estimates. They may not reflect the actual cost of the assistant."
                        placement="top"
                        className="bg-black w-[250px] rounded-xl p-2 text-wrap text-xs"
                      >
                        <ExclamationICon className="w-4 h-4 text-yellow-500" />
                      </CTooltip>
                    </div>
                    <div className="font-bold font-mono text-primary bg-background/40 rounded-xl p-[6px] px-3 border border-[#27272A] dark:border-gray-200">
                      ~$0.09
                      <span className="text-text/20"> /min</span>
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
              <div className="group h-auto flex-1 border border-[#27272A] dark:border-gray-200 p-[12px] rounded-2xl transition-all duration-150 ease-in-out bg-gray-200 dark:bg-[#27272A]">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col xl:flex-row justify-between items-start gap-2 mb-2  text-base md:text-md lg:text-lg ">
                    <div className="flex items-center gap-2">
                      <div className="bg-foreground border border-[#27272A] dark:border-gray-200 rounded-xl p-[6px] shadow-sm shadow-black/10">
                        <DollarICon className="w-5 h-5" />
                      </div>
                      <h3 className=" font-bold text-text/70">Latency</h3>
                      <CTooltip
                        content="These calculation are estimates. They may not reflect the actual latency of the assistant."
                        placement="top"
                        className="bg-black w-[250px] rounded-xl p-2 text-wrap text-xs"
                      >
                        <ExclamationICon className="w-4 h-4 text-yellow-500" />
                      </CTooltip>
                    </div>
                    <div className="font-bold font-mono text-primary bg-background/40 rounded-xl p-[6px] px-3 border border-[#27272A] dark:border-gray-200">
                      ~700
                      <span className="text-text/20"> ms</span>
                    </div>
                  </div>
                  <CProgressStacked className="flex">
                    <CProgress
                      value={11}
                      className="bg-[#5dfeca] h-[13px] rounded-l-full"
                    />
                    <CProgress value={40} className="bg-[#db2777] h-[13px]" />
                    <CProgress value={11} className="bg-[#0ea5e9] h-[13px]" />
                    <CProgress value={24} className="bg-[#fcd34d] h-[13px]" />
                    <CProgress
                      value={14}
                      className="bg-[#c026d3] h-[13px] rounded-r-full"
                    />
                  </CProgressStacked>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <CNav
                variant="tabs"
                role="tablist"
                className="mr-2 items-center justify-start text-muted-foreground overflow-x-auto p-1.5 gap-x-2 bg-background/80 backdrop-blur-lg border border-border rounded-xl shadow-sm shadow-black/20 xl:flex hidden w-fit"
              >
                <CNavItem>
                  <CNavLink
                    href="#!"
                    active={activeKey === "model"}
                    onClick={() => setActiveKey("model")}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-hover disabled:pointer-events-none disabled:opacity-50 focus:border ${
                      activeKey == "model"
                        ? "shadow bg-primary/10 text-primary border"
                        : ""
                    } border-transparent group rounded-[8px] gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] text-text/50 hover:text-text/90`}
                  >
                    <PuzzleICon className="w-3 h-3" />
                    Model
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#!"
                    active={activeKey === "transcriber"}
                    onClick={() => setActiveKey("transcriber")}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-hover disabled:pointer-events-none disabled:opacity-50 focus:border ${
                      activeKey == "transcriber"
                        ? "shadow bg-primary/10 text-primary border"
                        : ""
                    } border-transparent group rounded-[8px] gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] text-text/50 hover:text-text/90`}
                  >
                    <BarsIcon className="w-3 h-3" />
                    Transcriber
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#!"
                    active={activeKey === "voice"}
                    onClick={() => setActiveKey("voice")}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-hover disabled:pointer-events-none disabled:opacity-50 focus:border ${
                      activeKey == "voice"
                        ? "shadow bg-primary/10 text-primary border"
                        : ""
                    } border-transparent group rounded-[8px] gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] text-text/50 hover:text-text/90`}
                  >
                    <MicrophoneIcon className="w-3 h-3" />
                    Voice
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#!"
                    active={activeKey === "functions"}
                    onClick={() => setActiveKey("functions")}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-hover disabled:pointer-events-none disabled:opacity-50 focus:border ${
                      activeKey == "functions"
                        ? "shadow bg-primary/10 text-primary border"
                        : ""
                    } border-transparent group rounded-[8px] gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] text-text/50 hover:text-text/90`}
                  >
                    <CodeIcon className="w-3 h-3" />
                    Functions
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#!"
                    active={activeKey === "advanced"}
                    onClick={() => setActiveKey("advanced")}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-hover disabled:pointer-events-none disabled:opacity-50 focus:border ${
                      activeKey == "advanced"
                        ? "shadow bg-primary/10 text-primary border"
                        : ""
                    } border-transparent group rounded-[8px] gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] text-text/50 hover:text-text/90`}
                  >
                    <CalendarIcon className="w-3 h-3" />
                    Advanced
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    href="#!"
                    active={activeKey === "analysis"}
                    onClick={() => setActiveKey("analysis")}
                    className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium hover:bg-hover disabled:pointer-events-none disabled:opacity-50 focus:border ${
                      activeKey == "analysis"
                        ? "shadow bg-primary/10 text-primary border"
                        : ""
                    } border-transparent group rounded-[8px] gap-x-2 m-0 transition-all duration-100 ease-in-out active:scale-[0.95] text-text/50 hover:text-text/90`}
                  >
                    <ChartIcon className="w-3 h-3" />
                    Analysis
                  </CNavLink>
                </CNavItem>
              </CNav>
              <div className="flex ">
                <button
                  type="button"
                  className="w-auto mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <PublishIcon className="w-5 h-5 mr-2" />
                  Publish
                </button>
                {/* <button
                  type="button"
                  className="w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <TrashIcon className="w-5 h-5" />
                </button> */}
                <button
                  type="button"
                  class="py-2.5 px-3 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {" "}
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <CTabContent className="bg-gray-200 dark:bg-[#14171A] p-3 mt-3 rounded-xl border">
              {activeKey == "model" && (
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="model-tab"
                  visible={activeKey === "model"}
                >
                  <CCard>
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">Model</h1>
                      <p>
                        This section allows you to configure the model for the
                        assistant.
                      </p>
                      <div className="rounded-xl p-3 bg-gray-200 dark:bg-[#1A1C1F] border-[#1A1C1F] dark:border-bg-gray-300 shadow border mt-3">
                        <div className="flex justify-start items-center">
                          <div className="w-full mr-3">
                            <div>
                              <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                                First Message{" "}
                                <CTooltip
                                  content="The first message that the assistant will say. This can also be a URL to a containerized audio file (mp3, wav, etc.)."
                                  placement="top"
                                  className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                                >
                                  <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                                </CTooltip>
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                class="text-sm rounded-lg block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                            <div>
                              <label
                                for="message"
                                class="mb-2 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center"
                              >
                                System Prompt{" "}
                                <CTooltip
                                  content="The system prompt can be used to configure the context, role, personality, instructions and so on for the assistant."
                                  placement="top"
                                  className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                                >
                                  <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                                </CTooltip>
                              </label>
                              <textarea
                                id="message"
                                rows="10"
                                class="text-sm rounded-lg block w-full p-2.5"
                                placeholder="Add your prompt here..."
                              ></textarea>
                            </div>
                          </div>
                          <div className="hide-scrollbar h-[200px] sm:h-full w-full sm:max-w-[240px]">
                            <div>
                              <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                                Provider
                              </label>
                              <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3" disabled>
                                  Three
                                </option>
                              </CFormSelect>
                            </div>
                            <div>
                              <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                                Model{" "}
                                <CTooltip
                                  content="We benchmark and rank ~20 models and instances across Azure and OpenAI for GPT 3.5 picking fastest at any one moment."
                                  placement="top"
                                  className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                                >
                                  <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                                </CTooltip>
                              </label>
                              <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3" disabled>
                                  Three
                                </option>
                              </CFormSelect>
                            </div>
                            <div>
                              <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                Knowledge base
                              </label>
                              <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3" disabled>
                                  Three
                                </option>
                              </CFormSelect>
                            </div>
                            <div>
                              <div className="flex justify-between items-center">
                                <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                                  Temperature{" "}
                                  <CTooltip
                                    content="The temperature is used to control the randomness of the output. When you set it higher, you'll get more random outputs. When you set it lower, towards 0, the values are more deterministic."
                                    placement="top"
                                    className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                                  >
                                    <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                                  </CTooltip>
                                </label>
                                <span className="text-sm rounded-lg block p-2.5">
                                  {temperature}
                                </span>
                              </div>
                              <CFormRange
                                min={1}
                                max={2}
                                step={0.1}
                                value={temperature}
                                defaultValue={temperature}
                                onChange={(e) => setTemperature(e.target.value)}
                                class="w-full h-1"
                              />
                            </div>
                            <div>
                              <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                                Max Tokens{" "}
                                <CTooltip
                                  content="This is the max number of tokens that the assistant will be allowed to generate in each turn of the conversation."
                                  placement="top"
                                  className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                                >
                                  <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                                </CTooltip>
                              </label>
                              <CFormInput
                                class="text-sm rounded-lg block w-full p-2.5 mb-2"
                                type="number"
                              />
                            </div>

                            <label class="flex justify-between items-center cursor-pointer">
                              <span class="text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                                Direct Emotion{" "}
                                <CTooltip
                                  content="Enable this property to detect user's emotion such as anger, joy etc. and feed it as an additional context to the model"
                                  placement="top"
                                  className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                                >
                                  <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                                </CTooltip>
                              </span>
                              <input
                                type="checkbox"
                                value=""
                                class="sr-only peer"
                              />
                              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </CCardBody>
                  </CCard>
                </CTabPane>
              )}
              {activeKey == "transcriber" && (
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="transcriber-tab"
                  visible={activeKey === "transcriber"}
                >
                  <CCard>
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">Transcription</h1>
                      <p>
                        This section allows you to configure the transcription
                        settings for the assistant.
                      </p>
                      <div className="rounded-xl p-3 bg-gray-200 dark:bg-[#1A1C1F] border-[#1A1C1F] dark:border-bg-gray-300 shadow border mt-3">
                        <div className="grid grid-cols-2 gap-2 my-3">
                          <div>
                            <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                              Provider
                            </label>
                            <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3" disabled>
                                Three
                              </option>
                            </CFormSelect>
                          </div>
                          <div>
                            <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                              Language
                            </label>
                            <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3" disabled>
                                Three
                              </option>
                            </CFormSelect>
                            <p className="text-xs">
                              Pro tip: If you want to support both English and
                              Spanish, you can set the language to multi and use
                              ElevenLabs Turbo 2.5 in the Voice tab.
                            </p>
                          </div>
                        </div>
                        <div>
                          <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                            Model
                          </label>
                          <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3" disabled>
                              Three
                            </option>
                          </CFormSelect>
                        </div>
                      </div>
                    </CCardBody>
                  </CCard>
                </CTabPane>
              )}
              {activeKey == "voice" && (
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="voice-tab"
                  visible={activeKey === "voice"}
                >
                  <CCard>
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">Voice Configuration</h1>
                      <p>
                        Choose from the list of voices, or sync your voice
                        library if you aren't able to find your voice in the
                        dropdown. If you are still facing any error, you can
                        enable custom voice and add a voice ID manually.
                      </p>
                      <div className="rounded-xl p-3 border bg-gray-200 dark:bg-[#1A1C1F] border-[#1A1C1F] dark:border-bg-gray-300 shadow mt-3">
                        <div className="grid grid-cols-2 gap-2 my-3">
                          <div>
                            <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                              Provider
                            </label>
                            <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3" disabled>
                                Three
                              </option>
                            </CFormSelect>
                          </div>
                          <div>
                            <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                              Voice
                            </label>
                            <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3" disabled>
                                Three
                              </option>
                            </CFormSelect>
                          </div>
                        </div>
                        <div>
                          <CFormCheck
                            id="flexCheckChecked"
                            label="Add Voice ID Manually"
                          />
                        </div>
                      </div>
                    </CCardBody>
                  </CCard>
                  <CCard className="mt-5">
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">
                        Additional Configuration
                      </h1>
                      <p>
                        Configure additional settings for the voice of your
                        assistant.
                      </p>
                      <div className="rounded-xl p-3 border bg-gray-200 dark:bg-[#1A1C1F] border-[#1A1C1F] dark:border-bg-gray-300 shadow mt-3">
                        <div className="grid grid-cols-2 gap-2 my-3">
                          <div>
                            <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                              Background Sound
                              <CTooltip
                                content="This is the background sound in the call. Default for phone calls is 'office' and default for web calls is 'off'."
                                placement="top"
                                className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                              >
                                <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                              </CTooltip>
                            </label>
                            <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3" disabled>
                                Three
                              </option>
                            </CFormSelect>
                          </div>
                          <div>
                            <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                              Input Min Characters
                              <CTooltip
                                content="This is the minimum number of characters that will be passed to the voice provider. This helps decides the minimum chunk size that is sent to the voice provider for the voice generation as the LLM tokens are streaming in."
                                placement="top"
                                className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                              >
                                <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                              </CTooltip>
                            </label>
                            <CFormInput
                              class="text-sm rounded-lg block w-full p-2.5 mb-2"
                              placeholder="10"
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="mt-2">
                          <label class="mb-1 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center">
                            Punctuation Boundaries
                          </label>
                          <p className="text-xs">
                            These are the punctuations that are considered valid
                            boundaries or delimiters. This helps decides the
                            chunks that are sent to the voice provider for the
                            voice generation as the LLM tokens are streaming in.
                          </p>
                          <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3" disabled>
                              Three
                            </option>
                          </CFormSelect>
                        </div>
                        <hr />
                        <div className=" flex justify-between items-center py-3">
                          <div className="flex justify-start items-center">
                            <BiInjection className="w-7 h-7 mr-3" />
                            <div className="flex flex-col">
                              <span className="font-bold text-sm capitalize">
                                Filler Injection enabled
                              </span>
                              <span className="text-xs">
                                This determines whether fillers are injected
                                into the Model output before inputting it into
                                the Voice provider.
                              </span>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                          />
                          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </div>
                        <hr />
                        <div className=" flex justify-between items-center py-3">
                          <div className="flex justify-start items-center">
                            <ChatIcon className="w-7 h-7 mr-3" />
                            <div className="flex flex-col">
                              <span className="font-bold text-sm capitalize">
                                Backchanneling Enabled
                              </span>
                              <span className="text-xs">
                                Make the bot say words like 'mhmm', 'ya' etc.
                                while listening to make the conversation sounds
                                natural. Default disabled
                              </span>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                          />
                          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </div>
                        <hr />
                        <div className=" flex justify-between items-center py-3">
                          <div className="flex justify-start items-center">
                            <SpeakerIcon className="w-7 h-7 mr-3" />
                            <div className="flex flex-col">
                              <span className="font-bold text-sm capitalize">
                                Background Denoising Enabled
                              </span>
                              <span className="text-xs">
                                Filter background noise while the user is
                                talking.
                              </span>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                          />
                          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </div>
                      </div>
                    </CCardBody>
                  </CCard>
                </CTabPane>
              )}
              {activeKey == "functions" && (
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="functions-tab"
                  visible={activeKey === "functions"}
                >
                  <CCard>
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">Tools</h1>
                      <p>
                        Tools are a way you can enable your voicebots to perform
                        certain actions and tasks during the call. Add your
                        tools From the Tools Library page to your voicebots to
                        connect with Make.com or GHL workflows. You can also
                        have custom tools with your own backend.
                      </p>
                      <div
                        class="p-2 my-3 text-xs text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
                        role="alert"
                      >
                        Note: Tools have different Request and Response format
                        as compared to Functions. Check our{" "}
                        <a href="/" className="font-semibold underline">
                          tools guide
                        </a>{" "}
                        for more details
                      </div>
                      <CFormSelect class="text-sm rounded-lg block w-full p-2.5 mb-2">
                        <option>Select Tool</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3" disabled>
                          Three
                        </option>
                      </CFormSelect>
                    </CCardBody>
                  </CCard>
                  <CCard className="mt-5">
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">Predefined functions</h1>
                      <p>
                        We've pre-built functions for common use cases. You can
                        enable them and configure them below.
                      </p>
                      <div className="rounded-xl p-3 border bg-gray-200 dark:bg-[#1A1C1F] border-[#1A1C1F] dark:border-bg-gray-300 shadow mt-3">
                        <div className=" flex justify-between items-center py-3">
                          <div className="flex justify-start items-center">
                            <PhoneXIcon className="w-7 h-7 mr-3" />
                            <div className="flex flex-col">
                              <span className="font-bold text-sm capitalize">
                                Enable End Call Function
                              </span>
                              <span className="text-xs">
                                This will allow the assistant to end the call
                                from its side. (Best for gpt-4 and bigger
                                models.)
                              </span>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                          />
                          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </div>
                        <hr />
                        <div className=" flex justify-between items-center py-3">
                          <div className="flex justify-start items-center">
                            <BiDialpad className="w-7 h-7 mr-3" />
                            <div className="flex flex-col">
                              <span className="font-bold text-sm capitalize">
                                Dial keypad
                              </span>
                              <span className="text-xs">
                                This sets whether the assistant can dial digits
                                on the keypad.
                              </span>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                          />
                          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </div>
                        <hr />
                        <div className="py-3">
                          <label class="mb-2 text-sm font-medium text-gray-900 dark:text-white flex justify-start items-center capitalize">
                            end call phrases{" "}
                            <CTooltip
                              content="Enter phrases, separated by commas, that will trigger the bot to end the call when spoken. (End Call Phrases work well with gpt-3.5-turbo and smaller models.)"
                              placement="top"
                              className="bg-black w-[200px] rounded-xl p-2 text-wrap"
                            >
                              <ExclamationICon className="w-4 h-4 text-yellow-500 ml-4" />
                            </CTooltip>
                          </label>
                          <CFormInput
                            placeholder="Phrases that if spoken by the bot will end the call.Eg: goodbye"
                            className="text-sm rounded-lg block w-full p-2.5 mb-2"
                            type="text"
                          />
                        </div>
                        <hr />
                      </div>
                    </CCardBody>
                  </CCard>
                  <CCard>
                    <CCardBody className="bg-background/80">
                      <h1 className="font-extrabold">Custom Functions</h1>
                      <p>
                        Define your custom functions here to enhance your
                        assistant's capabilities. You can use your own code or
                        tools like Pipedream or Make for the setup.
                      </p>
                      <div
                        class="p-2 my-3 text-xs text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-100 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800"
                        role="alert"
                      >
                        Note: Functions are the same as tools, except they
                        follow older syntax as per the OpenAI Spec. Check our{" "}
                        <a href="/" className="font-semibold underline">
                          functions guide
                        </a>{" "}
                        for more details
                      </div>
                      <button
                        type="button"
                        onClick={() => openNotification()}
                        disabled
                        // className="w-full border-3 border-dashed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        class="group text-text w-full flex items-center justify-center gap-2 bg-icon/30 border-2 border-dashed border-icon/50 rounded-xl p-3 hover:bg-icon/50 transition-all duration-150 ease-in-out active:border-2 active:border-dashed opacity-25 cursor-not-allowed border-black dark:border-gray-300"
                      >
                        Create a new function
                        <PlusICon className="w-5 h-5 ml-3" />
                      </button>
                    </CCardBody>
                  </CCard>
                </CTabPane>
              )}
              {activeKey == "advanced" && (
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="advanced-tab"
                  visible={activeKey === "advanced"}
                >
                  advanced tab content
                </CTabPane>
              )}
              {activeKey == "analysis" && (
                <CTabPane
                  role="tabpanel"
                  aria-labelledby="analysis-tab"
                  visible={activeKey === "analysis"}
                >
                  analysis tab content
                </CTabPane>
              )}
            </CTabContent>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistants;
