import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { Doughnut } from "react-chartjs-2";
import CustomDatePicker from "../datepicker";
import { queryReport } from "../AnalyticsReportingApi/queryReport";
import { ChartTitle, Subtitle, PieChartWrapper, colors } from "../styles";
import { queryReport2 } from "../AnalyticsReportingApi/queryReport2";
import { queryReport3 } from "../AnalyticsReportingApi/queryReport3";

const Visual_devicedata_report = (props) => {
  const INITIAL_STATE = {
    labels: [],
    values: [],
    colors: [],
  };
  const [reportData, setReportData] = useState(INITIAL_STATE);
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());
  const [totalUsers, setTotalUsers] = useState(0);

  const displayResults = (response) => {
    const queryResult = response.result.reports[0].data.rows;
    const total = response.result.reports[0].data.totals[0].values[0];
    setTotalUsers(total);
    let labels = [];
    let values = [];
    let bgColors = [];
    queryResult.forEach((row, id) => {
      labels.push(row.dimensions[0]);
      values.push(row.metrics[0].values[0]);
      bgColors.push(colors[id + 4]);
    });
    setReportData({
      ...reportData,
      labels,
      values,
      colors: bgColors,
    });
  };

  const data = {
    labels: reportData.labels,
    datasets: [
      {
        data: reportData.values,
        backgroundColor: reportData.colors,
      },
    ],
  };

  const options = {
    legend: { position: "bottom" },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const request = {
      viewID: "241653669",
      startDate,
      endDate,
      metrics: props.metric,
      dimensions: props.dimension
    };
    setTimeout(
      () =>
        queryReport3(request)
          .then((resp) => displayResults(resp))
          .catch((error) => console.error(error)),
      4500
    );
  }, [startDate, endDate]);

  return (
    <div>
      <ChartTitle>{`${props.title}`}</ChartTitle>
      <Subtitle>{`Total Users - ${totalUsers}`}</Subtitle>
      <CustomDatePicker
        placeholder={"Start date"}
        date={startDate}
        handleDateChange={(date) => setStartDate(date)}
      />
      <CustomDatePicker
        placeholder={"End date"}
        date={endDate}
        handleDateChange={(date) => setEndDate(date)}
      />
      {reportData && (
        <PieChartWrapper>
          <Doughnut data={data} options={options} width={300} height={300} />
        </PieChartWrapper>
      )}
    </div>
  );
};

export default Visual_devicedata_report;
