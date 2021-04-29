import React, { useState } from "react";
import DayVisitsReport from "./dayVisitsReport";
import PageviewsReport from "./pageviewReport";
import { LastRow } from "./styles";
import InputField from "../Components/input";
import DayVisitsReport_realtime from "./dayVisitsReport_realtime";

const DashBoard = () => {
  const [viewID, setViewID] = useState(null);

  return (
    <>

      {/* <DayVisitsReport_realtime
        metric={"rt:activeUsers"}
        title={"Users"}
        viewID={viewID}
      /> */}

      {viewID ? (
        <>
          <DayVisitsReport_realtime
          />

          <DayVisitsReport
            metric={"ga:users"}
            title={"Users"}
            viewID={viewID}
          />
          <PageviewsReport viewID={viewID} />
        </>
      ) : (
        <InputField submitViewId={(id) => setViewID(id)} />
      )}

    </>
  );
};

export default DashBoard;
