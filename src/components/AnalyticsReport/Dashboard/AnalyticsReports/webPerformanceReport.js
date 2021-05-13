import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { PieChartWrapper, colors } from "../styles";
import { addDays } from "date-fns";
import CustomDatePicker from "../datepicker";
import { ChartTitle, ReportWrapper, Subtitle, DatepickerRow } from "../styles";
import '../../App.css'
import { queryReport } from "../AnalyticsReportingApi/queryReport";
import { queryReport2 } from "../AnalyticsReportingApi/queryReport2";
import { queryReport3 } from "../AnalyticsReportingApi/queryReport3";
import '../../../../components/app.css'
import Card from '../../../Common/Card';

const WebPerformanceReport = (props) => {
    const [startDate, setStartDate] = useState(addDays(new Date(), -30));
    const [endDate, setEndDate] = useState(new Date());

    const [metriheaders, setmetriheaders] = useState([])
    const [dimensionheaders, setdimensionheaders] = useState([])
    const [data, setData] = useState([]);



    const displayResults = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData(response.result.reports[0].data.rows)
    };


    useEffect(() => {

        const request = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:searchResultViews" },
                { expression: "ga:searchRefinements" },
                { expression: "ga:percentSearchRefinements" },
                { expression: "ga:searchDuration" },
                { expression: "ga:avgSearchDuration" },
            ],
            dimensions: ["ga:searchKeyword"]
        };
        setTimeout(
            () =>
                queryReport(request)
                    .then((resp) => displayResults(resp))
                    .catch((error) => console.error(error)),
            3500
        );


    }, [startDate, endDate]);




    const renderHeader2 = (element) => {
        // console.log("element=====222", element);
        return (
            <>
                <th>{element}</th>
            </>
        )
    }

    const renderHeader3 = (element) => {
        // console.log("element=====222", element);
        return (
            <>
                <th>{element.name}</th>
            </>
        )
    }

    const renderBody3 = (element) => {
        // console.log("element=====", element);
        return (
            <tr>
                {element.dimensions?.map((obj) => <td>{obj}</td>)}
                {element.metrics[0].values.map((obj) => <td>{obj}</td>)}
            </tr >
        )
    }


    return (
        <>
            <Card
                card_title="Site Performance"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders?.map(renderHeader2)} {metriheaders?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

        </>
    );

};
export default WebPerformanceReport;
