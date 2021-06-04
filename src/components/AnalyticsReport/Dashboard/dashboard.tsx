import React, { useState } from "react";

import { LastRow } from "./styles";
import DayVisitsReport from "./AnalyticsReports/dayVisitsReport";
import CountriesReport from "./AnalyticsReports/countriesReport";
import PageviewsReport from "./AnalyticsReports/pageviewReport";
import SourceReport from "./AnalyticsReports/sourceReport";
import BrowsersReport from "./AnalyticsReports/browsersReport";
import DevicesReport from "./AnalyticsReports/devicesReport";
import DayVisitsReport_realtime from "./AnalyticsReports/dayVisitsReport_realtime";
import OtherReports from "./AnalyticsReports/otherReports";
import UserdataReports from "./AnalyticsReports/userdataReports";
import DevicedataReports from "./AnalyticsReports/devicedataReports";
import WebPerformanceReport from "./AnalyticsReports/webPerformanceReport";
import TrafficAnalysisReport from "./AnalyticsReports/trafficAnalysisReport";
import './style.css'

const DashBoard = () => {
  const [activetab, setactivetab] = useState(true)

  const [active, setActive] = useState(0);
  const handleClick = (e: any) => {
    const index = parseInt(e.target.id);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <>

      <div className="results_container">
        <div className="Tab_day_night_container">

          <div className="tab_day_night">
            <div onClick={() => {
              setactivetab(true)
            }} className={activetab ? "tab_active" : "tab_inactive"}>REAL-TIME REPORT</div>
            <div onClick={() => {
              setactivetab(false)
            }} className={activetab ? "tab_inactive" : "tab_active"}>GENERATED REPORT</div>
          </div>

        </div>

        {activetab ?
          <div className="result_tab">
            <DayVisitsReport_realtime title={"Users"} />
          </div>
          :
          <div className="result_tab">

            <div className="tab_day_night2">

              <div onClick={(e) => { handleClick(e) }} className={active === 0 ? "tab_active2" : "tab_inactive2"}
                active={active === 0} id={0}
              >
                User Data</div>

              <div onClick={(e) => { handleClick(e) }} className={active === 1 ? "tab_inactive2" : "tab_active2"}
                active={active === 1} id={1}
              >
                Device Data</div>

              <div onClick={(e) => { handleClick(e) }} className={active === 2 ? "tab_inactive2" : "tab_active2"}
                active={active === 2} id={2}
              >
                Website/Webapp/App Performance</div>

              <div onClick={(e) => { handleClick(e) }} className={active === 3 ? "tab_inactive2" : "tab_active2"}
                active={active === 3} id={3}
              >
                Traffic Analysis</div>

            </div>



            {(active === 0) &&
              <UserdataReports viewID={"241653669"} />
            }

            {(active === 1) &&
              <DevicedataReports viewID={"241653669"} />
            }

            {(active === 2) &&
              <WebPerformanceReport viewID={"241653669"} />
            }

            {(active === 3) &&
              <TrafficAnalysisReport viewID={"241653669"} />
            }

          </div>
        }
      </div>








      {/* <OtherReports viewID={"241653669"} /> */}

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

  );
};

export default DashBoard;