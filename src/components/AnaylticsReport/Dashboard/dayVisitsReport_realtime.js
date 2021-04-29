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

const DayVisitsReport_realtime = (props) => {

  const { auth } = useAuth();

  const INITIAL_STATE = {
    labels: [],
    values: [],
  };
  const [reportData, setReportData] = useState(INITIAL_STATE);
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());
  const [average, setAverage] = useState(0);

  const displayResults = (response) => {
    console.log(response, "><>????????????");
    const queryResult = response.result.reports[0].data.rows;
    const total = response.result.reports[0].data.totals[0].values[0];
    setAverage(parseInt(total / response.result.reports[0].data.rowCount));
    let labels = [];
    let values = [];
    queryResult.forEach((row) => {
      values.push(row.metrics[0].values[0]);
    });
    setReportData({
      ...reportData,
      labels,
      values,
    });
  };

  const data = {
    labels: reportData.labels,
    datasets: [
      {
        label: `${props.title} per day`,
        fill: false,
        lineTension: 0.3,
        borderColor: "#35213d",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#375751",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: reportData.values,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 7,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        font: {
          size: 0,
        },
      },
    },
  };

  useEffect(() => {
    const request = {
      data: [
        {
      "dimensions": [
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
          "name": "city"
        },
      ],
      "metrics": [
          { 
              "name": "activeUsers" 
              },
          {
        "name": "screenPageViews"
      },
      {
        "name": "conversions"
      }
          ]
    }
      ],
    };
    realtime_queryReport(request)
      .then((resp) => console.log(resp))
      .catch((error) => console.error(error));
    console.log("<><><><><><>", displayResults)

    // realtime(async (data: any) => {
    //   console.log("++++++++++++",data)
    // }, auth)
  });

  return (
    <ReportWrapper>
      <ChartTitle>{`${props.title} per day`}</ChartTitle>
      <Subtitle>{`Average - ${average} ${props.title}`}</Subtitle>
      {reportData && (
        <ChartWrapper>
          <Line data={data} options={options} width={100} height={250} />
        </ChartWrapper>
      )}
    </ReportWrapper>
  );
};

export default DayVisitsReport_realtime;
