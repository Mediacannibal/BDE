import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import '../../App.css'
import { queryReport3 } from "../AnalyticsReportingApi/queryReport3";
import '../../../../components/app.css'
import Card from '../../../Common/Card';
import Visual_usertype_report from "./visual_usertype_report";
import Visual_daysince_lastsession from "./visual_daysince_lastsession";
import Visual_users_location from "./visual_users_location";

const UserdataReports = (props: any) => {
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






    const displayResults = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData(response.result.reports[0].data.rows)
    };

    const displayResults2 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders2(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders2(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData2(response.result.reports[0].data.rows)
    };

    const displayResults3 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders3(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders3(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData3(response.result.reports[0].data.rows)
    };

    const displayResults4 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders4(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders4(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData4(response.result.reports[0].data.rows)
    };

    const displayResults5 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders5(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders5(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData5(response.result.reports[0].data.rows)
    };

    const displayResults6 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders6(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders6(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData6(response.result.reports[0].data.rows)
    };

    const displayResults7 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders7(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders7(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData7(response.result.reports[0].data.rows)
    };

    const displayResults8 = (response: any) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders8(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders8(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData8(response.result.reports[0].data.rows)
    };







    useEffect(() => {

        // const request = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:users"
        //         },
        //         {
        //             expression: "ga:newUsers"
        //         },
        //         {
        //             expression: "ga:sessionsPerUser"
        //         },
        //     ],
        //     dimensions: ["ga:date", "ga:hour", "ga:minute", "ga:userType"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request)
        //             .then((resp: any) => displayResults(resp))
        //             .catch((error: any) => console.error(error)),
        //     1500
        // );


        // const request2 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:users"
        //         },
        //     ],
        //     dimensions: ["ga:date", "ga:daysSinceLastSession"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request2)
        //             .then((resp: any) => displayResults2(resp))
        //             .catch((error: any) => console.error(error)),
        //     1500
        // );

        // const request3 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:30dayUsers"
        //         },
        //     ],
        //     dimensions: ["ga:date", "ga:day"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request3)
        //             .then((resp: any) => displayResults3(resp))
        //             .catch((error: any) => console.error(error)),
        //     1500
        // );

        const request4 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:users" },
                { expression: "ga:bounceRate" },
                { expression: "ga:sessionDuration" },
            ],
            dimensions: ["ga:date"]
        };
        setTimeout(
            () =>
                queryReport3(request4)
                    .then((resp: any) => displayResults4(resp))
                    .catch((error: any) => console.error(error)),
            1500
        );

        // const request5 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         { expression: "ga:sessions" },
        //         { expression: "ga:sessionDuration" },
        //         { expression: "ga:avgSessionDuration" },
        //     ],
        //     dimensions: ["ga:userType"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request5)
        //             .then((resp: any) => displayResults5(resp))
        //             .catch((error: any) => console.error(error)),
        //     1500
        // );

        const request6 = {
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
                queryReport3(request6)
                    .then((resp: any) => displayResults6(resp))
                    .catch((error: any) => console.error(error)),
            1500
        );

        // const request7 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         { expression: "ga:users" },
        //         { expression: "ga:newUsers" },
        //         { expression: "ga:sessions" },
        //     ],
        //     dimensions: ["ga:continent", "ga:subContinent", "ga:country", "ga:region", "ga:metro", "ga:city", "ga:longitude", "ga:latitude"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request7)
        //             .then((resp: any) => displayResults7(resp))
        //             .catch((error: any) => console.error(error)),
        //     1500
        // );

        const request8 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:users" },
            ],
            dimensions: ["ga:userAgeBracket", "ga:userGender"]
        };
        setTimeout(
            () =>
                queryReport3(request8)
                    .then((resp: any) => displayResults8(resp))
                    .catch((error: any) => console.error(error)),
            1500
        );

    }, [startDate, endDate]);




    const renderHeader2 = (element: any) => {
        // console.log("element=====222", element);
        return (
            <>
                <th>{element}</th>
            </>
        )
    }


    const renderHeader3 = (element: any) => {
        // console.log("element=====222", element);
        return (
            <>
                <th>{element.name}</th>
            </>
        )
    }

    const renderBody3 = (element: any) => {
        // console.log("element=====", element);
        return (
            <tr>
                {element.dimensions?.map((obj: any) => <td>{obj}</td>)}
                {element.metrics[0].values.map((obj: any) => <td>{obj}</td>)}
            </tr >
        )
    }


    return (
        <>
            <Card
                card_title="User Type"
                card_body={
                    <>
                        <Visual_usertype_report
                            title={"Total type of User's"}
                            metric={[
                                { expression: "ga:users" }
                            ]}
                            dimension={["ga:userType", "ga:date"]}
                        />

                        {/* <div className="internal_table">
                            <table id='internal_table'>
                                <thead>
                                    <tr>{dimensionheaders?.map(renderHeader2)} {metriheaders?.map(renderHeader3)} </tr>
                                </thead>
                                <tbody>{data?.map(renderBody3)} </tbody>
                            </table>
                        </div> */}
                    </>
                }
            />


            <Card
                card_title="Days Since Last Session"
                card_body={
                    <>
                        <Visual_daysince_lastsession
                            title={"User Since Last Session"}
                            metric={[
                                { expression: "ga:users" }
                            ]}
                            dimension={["ga:date", "ga:daysSinceLastSession"]}
                        />

                        {/* <div className="internal_table">
                            <table id='internal_table'>
                                <thead>
                                    <tr>{dimensionheaders2?.map(renderHeader2)} {metriheaders2?.map(renderHeader3)} </tr>
                                </thead>
                                <tbody>{data2?.map(renderBody3)} </tbody>
                            </table>
                        </div> */}
                    </>
                }
            />

            <Card
                card_title="30dayUsers"
                card_body={
                    <>

                        <Visual_daysince_lastsession
                            title={" 30dayUsers"}
                            metric={[
                                { expression: "ga:30dayUsers" }
                            ]}
                            dimension={["ga:date", "ga:day"]}
                        />

                        {/* <div className="internal_table">
                            <table id='internal_table'>
                                <thead>
                                    <tr>{dimensionheaders3?.map(renderHeader2)} {metriheaders3?.map(renderHeader3)} </tr>
                                </thead>
                                <tbody>{data3?.map(renderBody3)} </tbody>
                            </table>
                        </div> */}
                    </>
                }
            />

            <Card
                card_title="User Bounce rate on the site"
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
                card_title="User's average Bounce rate on the site"
                card_body={
                    <>
                        <Visual_usertype_report
                            title={"Total type of average users Bounce rate"}
                            metric={[
                                { expression: "ga:sessionDuration" },
                            ]}
                            dimension={["ga:userType", "ga:date"]}
                        />


                        {/* <div className="internal_table">
                            <table id='internal_table'>
                                <thead>
                                    <tr>{dimensionheaders5?.map(renderHeader2)} {metriheaders5?.map(renderHeader3)} </tr>
                                </thead>
                                <tbody>{data5?.map(renderBody3)} </tbody>
                            </table>
                        </div> */}
                    </>
                }
            />

            <Card
                card_title="User Acquisition"
                card_body={
                    <>
                        <div className="internal_table">
                            <table id='internal_table'>
                                <thead>
                                    <tr>{dimensionheaders6?.map(renderHeader2)} {metriheaders6?.map(renderHeader3)} </tr>
                                </thead>
                                <tbody>{data6?.map(renderBody3)} </tbody>
                            </table>
                        </div>
                    </>
                }
            />

            <Card
                card_title="User's Locations"
                card_body={
                    <>
                        <Visual_users_location
                            title={"User's Locations"}
                            metric={[
                                { expression: "ga:users" },
                            ]}
                            dimension={["ga:subContinent"]}
                        />
                        <Visual_users_location
                            title={"User's Locations"}
                            metric={[
                                { expression: "ga:users" },
                            ]}
                            dimension={["ga:region"]} />

                        <Visual_users_location
                            title={"User's Locations"}
                            metric={[
                                { expression: "ga:users" },
                            ]}
                            dimension={["ga:city"]} />

                        <div className="internal_table">
                            <table id='internal_table'>
                                <thead>
                                    <tr>{dimensionheaders7?.map(renderHeader2)} {metriheaders7?.map(renderHeader3)} </tr>
                                </thead>
                                <tbody>{data7?.map(renderBody3)} </tbody>
                            </table>
                        </div>
                    </>
                }
            />

            <Card
                card_title="Demographic Report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders8?.map(renderHeader2)} {metriheaders8?.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data8?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

        </>
    );

};
export default UserdataReports;
