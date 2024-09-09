import { useEffect } from "react";
import TitleCard from "../../../components/Cards/TitleCard";

function UserChannels({ data }) {
  useEffect(() => {
    console.log("data", data);
  }, []);

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
            {data && data.length > 0 ? (
              data.map((u, k) => {
                return (
                  <tr key={k}>
                    {/* <td>{getAssistantName(u.assistantId)}</td> */}
                    <td>{u.assistantId}</td>
                    <td>
                      remaining
                      {/* {
                        calls.filter((x) => x.assistantId == u.assistantId)[0]
                          .countId
                      } */}
                    </td>
                    <td>
                      {parseInt(u.avgDuration)}
                      <span className="opacity-50"> min</span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3} className="text-center">
                  No Call aggregated by assistants.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
}

export default UserChannels;
