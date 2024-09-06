import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import TitleCard from "../../components/Cards/TitleCard";
import {
  MdOutlineTimer,
  MdPhoneForwarded,
  MdMoney,
  MdAttachMoney,
  MdOutlinePhoneInTalk,
} from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { VAPI_API_URL } from "../../store";
import { queries } from "@testing-library/react";
import { jwtDecode } from "jwt-decode";

const statsData = [
  {
    title: "Total Call Minutes",
    value: "2",
    icon: <MdOutlineTimer className="w-8 h-8" />,
    description: "↙ -92.50%",
    // description: "↗︎ -92.50%",
  },
  {
    title: "Number of Calls",
    value: "12",
    icon: <MdPhoneForwarded className="w-8 h-8" />,
    description: "↙ -83.33%",
  },
  {
    title: "Total Spent",
    value: "$0.15",
    icon: <MdMoney className="w-8 h-8" />,
    description: "↙ -95.81%",
  },
  {
    title: "Average Cost per Call",
    value: "$0.04",
    icon: <MdAttachMoney className="w-8 h-8" />,
    description: "↙ -74.87%",
  },
];

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);
function Dashboard() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };
  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  const labels = [
    "Electronics",
    "Home Applicances",
    "Beauty",
    "Furniture",
    "Watches",
    "Apparel",
  ];

  const reasonData = {
    labels,
    datasets: [
      {
        label: "# of Orders",
        data: [122, 219, 30, 51, 82, 13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const averageCallData = {
    labels,
    datasets: [
      {
        label: "# of Orders",
        data: [230, 120, 80, 11, 32, 31],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
      analytics();
    }
  }, []);

  const analytics = () => {
    const myHeaders = new Headers();
    const decodedToken = jwtDecode(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjFmOWY4ODg3LWIzNmQtNDQ4Ny1hMjQyLTM2ZDA2OTZhZWVjZCIsImlhdCI6MTcyNTYzNjEzMywiZXhwIjoxNzI1NjM5MTMzfQ.IQ6zpgOc_O-efJMUBYbQfAE_ojKfqotunBZSbmTAlIk"
    );
    console.log("decode token", decodedToken);
    // myHeaders.append("Authorization", `Bearer ${decodedToken}`);
    // myHeaders.append("Content-Type", "application/json");

    // const raw = JSON.stringify({
    //   // "queries": [
    //   //   {
    //   //     "table": "call",
    //   //     "groupBy": [
    //   //       "type"
    //   //     ],
    //   //     "name": "<string>",
    //   //     "timeRange": {
    //   //       "step": "minute",
    //   //       "start": "2023-11-07T05:31:56Z",
    //   //       "end": "2023-11-07T05:31:56Z",
    //   //       "timezone": "<string>"
    //   //     },
    //   //     "operations": [
    //   //       {
    //   //         "operation": "sum",
    //   //         "column": "id",
    //   //         "alias": "<string>"
    //   //       }
    //   //     ]
    //   //   }
    //   // ]
    //   queries: [
    //     {
    //       name: "LLM, STT, TTS, VAPI Costs",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "sum",
    //           column: "costBreakdown.llm",
    //         },
    //         {
    //           operation: "sum",
    //           column: "costBreakdown.stt",
    //         },
    //         {
    //           operation: "sum",
    //           column: "costBreakdown.tts",
    //         },
    //         {
    //           operation: "sum",
    //           column: "costBreakdown.vapi",
    //         },
    //       ],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Total Call Duration",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "sum",
    //           column: "duration",
    //         },
    //       ],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Average Call Cost",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "avg",
    //           column: "cost",
    //         },
    //       ],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Number of Calls by Type",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "count",
    //           column: "id",
    //         },
    //       ],
    //       groupBy: ["type"],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Number of Failed Calls",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "count",
    //           column: "id",
    //         },
    //       ],
    //       groupBy: ["endedReason"],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Number of Calls by Assistant",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "count",
    //           column: "id",
    //         },
    //       ],
    //       groupBy: ["assistantId"],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Average Call Duration by Assistant",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "avg",
    //           column: "duration",
    //         },
    //       ],
    //       groupBy: ["assistantId"],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Total Minutes",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "sum",
    //           column: "duration",
    //         },
    //       ],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //     {
    //       name: "Total Spent",
    //       table: "call",
    //       operations: [
    //         {
    //           operation: "sum",
    //           column: "cost",
    //         },
    //       ],
    //       timeRange: {
    //         start: "2024-08-07T11:21:46.677Z",
    //         end: "2024-09-06T11:21:46.677Z",
    //         step: "day",
    //         timezone: "UTC",
    //       },
    //     },
    //   ],
    // });

    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch(VAPI_API_URL + "analytics", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
  };

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div> */}

      {/** ---------------------- User source channels table  ------------------------- */}
      <div className="grid lg:grid-cols-3 mt-4 grid-cols-1 gap-6 mb-0">
        <div className="flex justify-start items-center col-span-2 mb-0">
          <MdOutlinePhoneInTalk className="w-9 h-9 mr-3" />
          <div className="flex flex-col">
            <p className="text-lg font-bold mt-0">Call Analysis</p>
            <p className="text-xs mt-0 mb-4">
              Here you can get a quick overview of how your calls are going
              within organization.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center mb-0">
          <FaUsersBetweenLines className="w-9 h-9 mr-3 -mt-2" />
          <div className="flex flex-col">
            <p className="text-lg font-bold mt-0">Assistants Table</p>
            <p className="text-xs mt-0 mb-4">
              Total and average call duration aggregated by assistants.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 col-span-2">
          <TitleCard topMargin="mt-0">
            <p className="text-lg font-bold mt-0">Call Ended Reason</p>
            <p className="text-xs mt-0 mb-4">
              Call aggregated by the reason of why the call ended.
            </p>
            <Doughnut options={options} data={reasonData} />
          </TitleCard>
          <TitleCard topMargin="mt-0">
            <p className="text-lg font-bold mt-0">
              Average Call Duration by Assistance
            </p>
            <p className="text-xs mt-0 mb-4">
              Average call duration by assistance in minutes.
            </p>
            <Doughnut options={options} data={averageCallData} />
          </TitleCard>
        </div>
        <UserChannels />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        {/* <PageStats /> */}
      </div>
    </>
  );
}

export default Dashboard;
