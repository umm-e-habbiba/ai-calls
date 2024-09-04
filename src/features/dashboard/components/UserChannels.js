import TitleCard from "../../../components/Cards/TitleCard";

const userSourceData = [
  { name: "Ark Team", count: "26", duration: 1.05 },
  { name: "Mary", count: "21", duration: 5.48 },
  { name: "Ark Team", count: "26", duration: 1.05 },
  { name: "Mary", count: "21", duration: 5.48 },
  { name: "Ark Team", count: "26", duration: 1.05 },
  { name: "Mary", count: "21", duration: 5.48 },
  { name: "Ark Team", count: "26", duration: 1.05 },
  { name: "Mary", count: "21", duration: 5.48 },
];

function UserChannels() {
  return (
    <TitleCard topMargin="mt-0">
      {/** Table Data */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="normal-case">Assistant Name</th>
              <th className="normal-case">Call Count</th>
              <th className="normal-case">Avg Duration</th>
            </tr>
          </thead>
          <tbody>
            {userSourceData.map((u, k) => {
              return (
                <tr key={k}>
                  <td>{u.name}</td>
                  <td>{u.count}</td>
                  {/* <td>{`${u.duration}%`}</td> */}
                  <td>
                    {u.duration}
                    <span className="opacity-50"> min</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
}

export default UserChannels;
