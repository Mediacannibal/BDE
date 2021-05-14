import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import '../../App.css'
import { queryReport } from "../AnalyticsReportingApi/queryReport";
import Card from '../../../Common/Card';

const DevicedataReports = (props: any) => {
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




    useEffect(() => {

        const request = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:users" },
            ],
            dimensions: ["ga:deviceCategory"]
        };
        setTimeout(
            () =>
                queryReport(request)
                    .then((resp: any) => displayResults(resp))
                    .catch((error: any) => console.error(error)),
            4500
        );


        const request2 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:users" },
            ],
            dimensions: ["ga:browser", "ga:browserVersion", "ga:operatingSystem", "ga:operatingSystemVersion", "ga:browserSize"]
        };
        setTimeout(
            () =>
                queryReport(request2)
                    .then((resp: any) => displayResults2(resp))
                    .catch((error: any) => console.error(error)),
            4500
        );

        const request3 = {
            viewID: props.viewID,
            startDate,
            endDate,
            metrics: [
                { expression: "ga:users" },
            ],
            dimensions: ["ga:mobileDeviceBranding", "ga:mobileDeviceModel", "ga:mobileInputSelector", "ga:mobileDeviceInfo", "ga:mobileDeviceMarketingName"]
        };
        setTimeout(
            () =>
                queryReport(request3)
                    .then((resp: any) => displayResults3(resp))
                    .catch((error: any) => console.error(error)),
            4500
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
                card_title="Type of devices"
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
                card_title="Browser info"
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
                card_title="Mobile info"
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

        </>
    );

};
export default DevicedataReports;
