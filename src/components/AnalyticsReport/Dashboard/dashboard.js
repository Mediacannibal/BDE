import React, { useState } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import { LastRow } from "./styles";
import DayVisitsReport_realtime from "./dayVisitsReport_realtime";

const DashBoard = () => {
  const [viewID, setViewID] = useState();

  return (
    <>
      <>
        <DayVisitsReport_realtime title={"Users"} />

        <DayVisitsReport
          metric={"ga:users"}
          title={"Users"}
          viewID={"241653669"}
        />
        <DayVisitsReport
          metric={"ga:sessions"}
          title={"Sessions"}
          viewID={"241653669"}
        />
        <CountriesReport viewID={"241653669"} />
        <PageviewsReport viewID={"241653669"} />
        <SourceReport viewID={"241653669"} />
        <LastRow>
          <BrowsersReport viewID={"241653669"} />
          <DevicesReport viewID={"241653669"} />
        </LastRow>
      </>

    </>
  );
};

export default DashBoard;