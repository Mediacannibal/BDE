import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { addDays } from "date-fns";
import {
  ChartWrapper,
  ReportWrapper,
  ChartTitle,
  Subtitle,
  DatepickerRow,
} from "./styles";
import CustomDatePicker from "./datepicker";
import { realtime_queryReport } from "./realtime_queryReport";
import { formatDate } from "./utils";
import { useAuth } from 'store/authStore';
import { realtime } from 'utils/api';
import '../../../components/app.css'

const DayVisitsReport_realtime = (props) => {
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());

  const [activeuserfrom, setactiveuserfrom] = useState('')

  const [listItems, setlistItems] = useState([])

  const displayResults = (response) => {
    console.log("><>????????????", response);
    setactiveuserfrom(response.result.rows[0].metricValues[0].value)

    setlistItems(response.result.rows)
  };

  // useEffect(() => {
  //   let token = JSON.parse(String(localStorage.getItem("Bearer")))
  //   realtime(async (data) => {
  //     console.log("++++++++++++", data)
  //   }, token)
  // });

  useEffect(() => {
    const request = {
      startDate,
      endDate,
      metrics: props.metric,
      dimensions: props.dimensions,
    };
    realtime_queryReport(request)
      .then((resp) => displayResults(resp))
      .catch((error) => console.error(error));
  }, [startDate, endDate]);

  const renderHeader = () => {
    let headerElement = ['Country', 'Users']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element) => {
    console.log(element);
    return (
      <tr>
        <td>{element.dimensionValues[0].value}</td>
        <td>{element.metricValues[0].value}</td>
      </tr >
    )
  }


  return (
    <>
      <div>
        Active User from:{activeuserfrom}
      </div>

      <div className="internal_table">
        <table id='internal_table'>
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>
            {listItems.map(renderBody)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DayVisitsReport_realtime;