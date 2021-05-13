import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { PieChartWrapper, colors } from "../styles";
import { addDays } from "date-fns";
import CustomDatePicker from "../datepicker";
import { ChartTitle, ReportWrapper, Subtitle, DatepickerRow } from "../styles";
import { queryReport } from "../AnalyticsReportingApi/queryReport";
import { queryReport2 } from "../AnalyticsReportingApi/queryReport2";
import { queryReport3 } from "../AnalyticsReportingApi/queryReport3";
import '../../App.css'
import '../../../../components/app.css'
import Card from '../../../Common/Card';

const TrafficAnalysisReport = (props) => {
    const [startDate, setStartDate] = useState(addDays(new Date(), -30));
    const [endDate, setEndDate] = useState(new Date());

    const [metriheaders, setmetriheaders] = useState([])
    const [dimensionheaders, setdimensionheaders] = useState([])
    const [data, setData] = useState([]);

    const [metriheaders2, setmetriheaders2] = useState([])
    const [dimensionheaders2, setdimensionheaders2] = useState([])
    const [data2, setData2] = useState([]);

    const [metriheaders3, setmetriheaders3] = useState([])
    const [dimensionheaders3, setdimensionheaders3] = useState([])
    const [data3, setData3] = useState([]);

    const [metriheaders4, setmetriheaders4] = useState([])
    const [dimensionheaders4, setdimensionheaders4] = useState([])
    const [data4, setData4] = useState([]);

    const [metriheaders5, setmetriheaders5] = useState([])
    const [dimensionheaders5, setdimensionheaders5] = useState([])
    const [data5, setData5] = useState([]);

    const [metriheaders6, setmetriheaders6] = useState([])
    const [dimensionheaders6, setdimensionheaders6] = useState([])
    const [data6, setData6] = useState([]);

    const [metriheaders7, setmetriheaders7] = useState([])
    const [dimensionheaders7, setdimensionheaders7] = useState([])
    const [data7, setData7] = useState([]);

    const [metriheaders8, setmetriheaders8] = useState([])
    const [dimensionheaders8, setdimensionheaders8] = useState([])
    const [data8, setData8] = useState([]);






    const displayResults = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData(response.result.reports[0].data.rows)
    };

    const displayResults2 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders2(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders2(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData2(response.result.reports[0].data.rows)
    };

    const displayResults3 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders3(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders3(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData3(response.result.reports[0].data.rows)
    };

    const displayResults4 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders4(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders4(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData4(response.result.reports[0].data.rows)
    };

    const displayResults5 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders5(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders5(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData5(response.result.reports[0].data.rows)
    };

    const displayResults6 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders6(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders6(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData6(response.result.reports[0].data.rows)
    };

    const displayResults7 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders7(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders7(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData7(response.result.reports[0].data.rows)
    };

    const displayResults8 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders8(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders8(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData8(response.result.reports[0].data.rows)
    };







    useEffect(() => {

        const request = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:users" },
                { expression: "ga:newUsers" },
                { expression: "ga:sessions" },
            ],
            dimensions: ["ga:date"]
        };
        setTimeout(
            () =>
                queryReport(request)
                    .then((resp) => displayResults(resp))
                    .catch((error) => console.error(error)),
            3500
        );


        const request2 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:sessionsPerUser" },
                { expression: "ga:pageviews" },
                { expression: "ga:pageviewsPerSession" },
                { expression: "ga:uniquePageviews" },
                { expression: "ga:avgSessionDuration" },
                { expression: "ga:bounceRate" },
            ],
            dimensions: ["ga:date"]
        };
        setTimeout(
            () =>
                queryReport(request2)
                    .then((resp) => displayResults2(resp))
                    .catch((error) => console.error(error)),
            3500
        );

        const request3 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:sessions" },
                { expression: "ga:newUsers" },
                { expression: "ga:percentNewSessions" }
            ],
            dimensions: ["ga:campaign", "ga:source", "ga:medium", "ga:sourceMedium"]
        };
        setTimeout(
            () =>
                queryReport(request3)
                    .then((resp) => displayResults3(resp))
                    .catch((error) => console.error(error)),
            3500
        );

        const request4 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:newUsers" },
                { expression: "ga:sessions" },
            ],
            dimensions: ["ga:hostname", "ga:pagePath", "ga:landingPagePath", "ga:pageTitle"]
        };
        setTimeout(
            () =>
                queryReport(request4)
                    .then((resp) => displayResults4(resp))
                    .catch((error) => console.error(error)),
            3500
        );

        const request5 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:sessions" },
                { expression: "ga:sessionDuration" },
                { expression: "ga:avgSessionDuration" },
            ],
            dimensions: ["ga:userType"]
        };
        setTimeout(
            () =>
                queryReport(request5)
                    .then((resp) => displayResults5(resp))
                    .catch((error) => console.error(error)),
            3500
        );

        const request6 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:pageviews" },
                { expression: "ga:uniquePageviews" },
                { expression: "ga:avgTimeOnPage" },
                { expression: "ga:bounceRate" },
                { expression: "ga:exitRate" },
            ],
            dimensions: ["ga:date"]
        };
        setTimeout(
            () =>
                queryReport(request6)
                    .then((resp) => displayResults6(resp))
                    .catch((error) => console.error(error)),
            3500
        );

        const request7 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:pageviews" },
                { expression: "ga:entranceRate" },
                { expression: "ga:avgTimeOnPage" },
                { expression: "ga:avgTimeOnPage" },
                { expression: "ga:exitRate" },
            ],
            dimensions: ["ga:date"]
        };
        setTimeout(
            () =>
                queryReport(request7)
                    .then((resp) => displayResults7(resp))
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
                card_title="User Acquisition"
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


            <Card
                card_title="User engagement"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders2?.map(renderHeader2)} {metriheaders2?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data2?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Traffic Acquisition"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders3?.map(renderHeader2)} {metriheaders3?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data3?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Landing Pages"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders4?.map(renderHeader2)} {metriheaders4?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data4?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="User Behavior"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders5?.map(renderHeader2)} {metriheaders5?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data5?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="User Flow report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders6?.map(renderHeader2)} {metriheaders6?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data6?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Page visited"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders7?.map(renderHeader2)} {metriheaders7?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data7?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

        </>
    );

};
export default TrafficAnalysisReport;
