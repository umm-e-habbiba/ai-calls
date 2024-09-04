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
import { useState } from "react";
import { CRow, CCol } from "@coreui/react";

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
