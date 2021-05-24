import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { addDays } from "date-fns";
import {
  ChartWrapper,
  ReportWrapper,
  ChartTitle,
  Subtitle,
  DatepickerRow,
} from "../styles";
import CustomDatePicker from "../datepicker";
import { realtime_queryReport } from "../AnalyticsReportingApi/realtime_queryReport";
import { formatDate } from "../utils";
import '../../../../components/app.css'
import Card from '../../../Common/Card';

const DayVisitsReport_realtime = (props) => {
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());

  const [metriheaders, setmetriheaders] = useState([])
  const [dimensionheaders, setdimensionheaders] = useState([])
  const [listItems, setlistItems] = useState([])

  const [metriheaders2, setmetriheaders2] = useState([])
  const [dimensionheaders2, setdimensionheaders2] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [metriheaders3, setmetriheaders3] = useState([])
  const [dimensionheaders3, setdimensionheaders3] = useState([])
  const [listItems3, setlistItems3] = useState([])


  const displayResults = (response) => {
    // console.log("><>????????????", response.result.dimensionHeaders);

    setdimensionheaders(response.result.dimensionHeaders)
    setmetriheaders(response.result.metricHeaders)
    setlistItems(response.result.rows)
  };

  const displayResults2 = (response) => {
    // console.log("><>????????????", response.result.dimensionHeaders);

    setdimensionheaders2(response.result.dimensionHeaders)
    setmetriheaders2(response.result.metricHeaders)
    setlistItems2(response.result.rows)
  };

  const displayResults3 = (response) => {
    // console.log("><>????????????", response.result.dimensionHeaders);

    setdimensionheaders3(response.result.dimensionHeaders)
    setmetriheaders3(response.result.metricHeaders)
    setlistItems3(response.result.rows)
  };



  useEffect(() => {

    const request = {
      startDate,
      endDate,
      metrics: [
        {
          "name": "activeUsers"
        },
        {
          "name": "conversions"
        },
        {
          "name": "eventCount"
        },
        {
          "name": "screenPageViews"
        },
      ],
      dimensions: [
        {
          "name": "city"
        },
        {
          "name": "cityId"
        },
        {
          "name": "country"
        },
        {
          "name": "countryId"
        },

      ],
    };
    realtime_queryReport(request)
      .then((resp) => displayResults(resp))
      .catch((error) => console.error(error));


    const request2 = {
      startDate,
      endDate,
      metrics: [
        {
          "name": "activeUsers"
        },
        {
          "name": "conversions"
        },
        {
          "name": "screenPageViews"
        },
      ],
      dimensions: [
        {
          "name": "appVersion"
        },
        {
          "name": "audienceId"
        },
        {
          "name": "audienceName"
        },
        {
          "name": "deviceCategory"
        },
      ],
    };
    realtime_queryReport(request2)
      .then((resp) => displayResults2(resp))
      .catch((error) => console.error(error));


    const request3 = {
      startDate,
      endDate,
      metrics: [
        {
          "name": "activeUsers"
        },
        {
          "name": "conversions"
        },
        {
          "name": "eventCount"
        },
        {
          "name": "screenPageViews"
        },
      ],
      dimensions: [
        {
          "name": "platform"
        },
        {
          "name": "streamName"
        },
        {
          "name": "unifiedScreenName"
        }
      ],
    };
    realtime_queryReport(request3)
      .then((resp) => displayResults3(resp))
      .catch((error) => console.error(error));


  }, [startDate, endDate]);


  const renderHeader = (element) => {
    // console.log("element=====222", element);
    return (
      <>
        <th>{element.name}</th>
      </>
    )
  }

  const renderBody = (element) => {
    // console.log("element=====", element);
    return (
      <tr>
        {element.dimensionValues.map((obj) => <td>{obj.value}</td>)}
        {element.metricValues.map((obj) => <td>{obj.value}</td>)}
      </tr >
    )
  }


  const renderBody2 = (element) => {
    // console.log("element=====", element);
    return (
      <tr>
        {element.dimensionValues.map((obj) => <td>{obj.value}</td>)}
      </tr >
    )
  }




  return (
    <>
      <Card
        card_title="Active RealTime Users"
        card_body={
          <div className="internal_table" onClick={() => { console.log("hiiiiiiiihelloooo"); }}>
            <table id='internal_table'>
              <thead>
                <tr>{dimensionheaders?.map(renderHeader)} {metriheaders?.map(renderHeader)} </tr>
              </thead>
              <tbody> {listItems?.map(renderBody)}</tbody>
            </table>

            <table id='internal_table'>
              <thead>
                <tr>{dimensionheaders2?.map(renderHeader)}</tr>
              </thead>
              <tbody>{listItems2?.map(renderBody2)} </tbody>
            </table>

            <table id='internal_table'>
              <thead>
                <tr>{dimensionheaders3?.map(renderHeader)}</tr>
              </thead>
              <tbody>{listItems3?.map(renderBody2)} </tbody>
            </table>
          </div>
        }
      />

    </>
  );
};

export default DayVisitsReport_realtime;