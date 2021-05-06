import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { PieChartWrapper, colors } from "./styles";
import { addDays } from "date-fns";
import CustomDatePicker from "./datepicker";
import { ChartTitle, ReportWrapper, Subtitle, DatepickerRow } from "./styles";
import '../App.css'
import { queryReport } from "./queryReport";
import { queryReport2 } from "./queryReport2";
import { queryReport3 } from "./queryReport3";
import Card from 'components/Common/Card';

const OtherReports = (props) => {
    const [startDate, setStartDate] = useState(addDays(new Date(), -30));
    const [endDate, setEndDate] = useState(new Date());


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

    const [metriheaders51, setmetriheaders51] = useState([])
    const [dimensionheaders51, setdimensionheaders51] = useState([])
    const [data51, setData51] = useState([]);

    const [metriheaders6, setmetriheaders6] = useState([])
    const [dimensionheaders6, setdimensionheaders6] = useState([])
    const [data6, setData6] = useState([]);

    const [metriheaders7, setmetriheaders7] = useState([])
    const [dimensionheaders7, setdimensionheaders7] = useState([])
    const [data7, setData7] = useState([]);

    const [metriheaders71, setmetriheaders71] = useState([])
    const [dimensionheaders71, setdimensionheaders71] = useState([])
    const [data71, setData71] = useState([]);

    const [metriheaders8, setmetriheaders8] = useState([])
    const [dimensionheaders8, setdimensionheaders8] = useState([])
    const [data8, setData8] = useState([]);

    const [metriheaders9, setmetriheaders9] = useState([])
    const [dimensionheaders9, setdimensionheaders9] = useState([])
    const [data9, setData9] = useState([]);

    const [metriheaders10, setmetriheaders10] = useState([])
    const [dimensionheaders10, setdimensionheaders10] = useState([])
    const [data10, setData10] = useState([]);

    const [metriheaders11, setmetriheaders11] = useState([])
    const [dimensionheaders11, setdimensionheaders11] = useState([])
    const [data11, setData11] = useState([]);

    const [metriheaders12, setmetriheaders12] = useState([])
    const [dimensionheaders12, setdimensionheaders12] = useState([])
    const [data12, setData12] = useState([]);

    const [metriheaders13, setmetriheaders13] = useState([])
    const [dimensionheaders13, setdimensionheaders13] = useState([])
    const [data13, setData13] = useState([]);

    const [metriheaders14, setmetriheaders14] = useState([])
    const [dimensionheaders14, setdimensionheaders14] = useState([])
    const [data14, setData14] = useState([]);

    const [metriheaders15, setmetriheaders15] = useState([])
    const [dimensionheaders15, setdimensionheaders15] = useState([])
    const [data15, setData15] = useState([]);

    const [metriheaders16, setmetriheaders16] = useState([])
    const [dimensionheaders16, setdimensionheaders16] = useState([])
    const [data16, setData16] = useState([]);

    const [metriheaders17, setmetriheaders17] = useState([])
    const [dimensionheaders17, setdimensionheaders17] = useState([])
    const [data17, setData17] = useState([]);

    const [metriheaders18, setmetriheaders18] = useState([])
    const [dimensionheaders18, setdimensionheaders18] = useState([])
    const [data18, setData18] = useState([]);



    const displayResults = (response) => {
        // console.log("><>?other1111 ===", response);
        const queryResult = response.result.reports[0].data.rows;
        const result = queryResult.map((row) => {
            const dateSting = row.dimensions[0];
            const formattedDate = `${dateSting.substring(0, 4)}
            -${dateSting.substring(4, 6)}-${dateSting.substring(6, 8)}`;
            return {
                date: formattedDate,
                visits: row.metrics[0].values[0],
            };
        });
        setData(result);
    };

    const displayResults2 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders2(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData2(response.result.reports[0].data.rows)
    };

    const displayResults3 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders3(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData3(response.result.reports[0].data.rows)
    };

    const displayResults4 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders4(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData4(response.result.reports[0].data.rows)
    };

    const displayResults5 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders5(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData5(response.result.reports[0].data.rows)
    };

    const displayResults51 = (response) => {
        // console.log("><>?other1111 ===", response.result.reports[0].data.rows);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders51(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData51(response.result.reports[0].data.rows)
    };

    const displayResults6 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders6(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData6(response.result.reports[0].data.rows)
    };

    const displayResults7 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders7(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData7(response.result.reports[0].data.rows)
    };

    const displayResults71 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders71(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData71(response.result.reports[0].data.rows)
    };

    const displayResults8 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders8(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData8(response.result.reports[0].data.rows)
    };

    const displayResults9 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders9(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData9(response.result.reports[0].data.rows)
    };

    const displayResults10 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders10(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData10(response.result.reports[0].data.rows)
    };

    const displayResults11 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader, response.result.reports[0].metricHeader);
        setdimensionheaders11(response.result.reports[0].columnHeader.dimensions)
        // setmetriheaders2(response.result.reports[0].metricHeader.metricHeaderEntries[0].name)
        setData11(response.result.reports[0].data.rows)
    };

    const displayResults12 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders12(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders12(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData12(response.result.reports[0].data.rows)
    };

    const displayResults13 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders13(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders13(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData13(response.result.reports[0].data.rows)
    };

    const displayResults14 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders14(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders14(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData14(response.result.reports[0].data.rows)
    };

    const displayResults15 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders15(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders15(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData15(response.result.reports[0].data.rows)
    };

    const displayResults16 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders16(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders16(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData16(response.result.reports[0].data.rows)
    };

    const displayResults17 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders17(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders17(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData17(response.result.reports[0].data.rows)
    };

    const displayResults18 = (response) => {
        // console.log("><>?other1111 ===", response.result);
        // console.log("1111columnHeader ===", response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries);
        setdimensionheaders18(response.result.reports[0].columnHeader.dimensions)
        setmetriheaders18(response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries)
        setData18(response.result.reports[0].data.rows)
    };



    useEffect(() => {
        // const request = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:30dayUsers",
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request)
        //             .then((resp) => displayResults(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request2 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:browser", "ga:browserVersion", "ga:operatingSystem", "ga:operatingSystemVersion",
        //         "ga:mobileDeviceBranding", "ga:mobileDeviceModel", "ga:mobileDeviceInfo",
        //         "ga:mobileDeviceMarketingName", "ga:deviceCategory",
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request2)
        //             .then((resp) => displayResults2(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );


        // const request3 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:userType", "ga:sessionCount", "ga:daysSinceLastSession", "ga:userDefinedValue",
        //         "ga:userBucket", "ga:sessionDurationBucket", "ga:mobileDeviceModel", "ga:mobileDeviceInfo",
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request3)
        //             .then((resp) => displayResults3(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );


        // const request4 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:referralPath", "ga:fullReferrer", "ga:campaign", "ga:source", "ga:medium",
        //         "ga:sourceMedium", "ga:keyword", "ga:socialNetwork", "ga:hasSocialSourceReferral"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request4)
        //             .then((resp) => displayResults4(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request5 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:continent", "ga:subContinent", "ga:country", "ga:region", "ga:metro",
        //         "ga:city", "ga:latitude", "ga:longitude", "ga:networkDomain"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request5)
        //             .then((resp) => displayResults5(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request51 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:networkLocation", "ga:cityId", "ga:continentId", "ga:countryIsoCode", "ga:metroId",
        //         "ga:regionId", "ga:regionIsoCode", "ga:subContinentCode"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request51)
        //             .then((resp) => displayResults51(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request6 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:flashVersion", "ga:javaEnabled", "ga:language", "ga:screenColors", "ga:sourcePropertyDisplayName",
        //         "ga:sourcePropertyTrackingId", "ga:screenResolution"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request6)
        //             .then((resp) => displayResults6(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request7 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:hostname", "ga:pagePath", "ga:pagePathLevel1", "ga:pagePathLevel2", "ga:pagePathLevel3",
        //         "ga:pagePathLevel4"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request7)
        //             .then((resp) => displayResults7(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request71 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:pageTitle", "ga:landingPagePath", "ga:secondPagePath", "ga:exitPagePath", "ga:previousPagePath",
        //         "ga:pageDepth"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request71)
        //             .then((resp) => displayResults71(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request8 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:searchUsed", "ga:searchKeyword", "ga:searchKeywordRefinement", "ga:searchCategory", "ga:searchStartPage",
        //         "ga:searchDestinationPage", "ga:searchAfterDestinationPage"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport(request8)
        //             .then((resp) => displayResults8(resp))
        //             .catch((error) => console.error(error)),
        //     1500
        // );

        // const request9 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:appInstallerId", "ga:appVersion", "ga:appName", "ga:appId", "ga:screenName",
        //         "ga:screenDepth", "ga:landingScreenName", "ga:exitScreenName"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport2(request9)
        //             .then((resp) => displayResults9(resp))
        //             .catch((error) => console.error(error)),
        //     3500
        // );

        // const request10 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:eventCategory", "ga:eventAction", "ga:eventLabel",
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport2(request10)
        //             .then((resp) => displayResults10(resp))
        //             .catch((error) => console.error(error)),
        //     3500
        // );

        // const request11 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: "ga:users",
        //     dimensions: [
        //         "ga:socialInteractionNetwork", "ga:socialInteractionAction", "ga:socialInteractionNetworkAction",
        //         "ga:socialInteractionTarget", "ga:socialEngagementType"
        //     ]
        // };
        // setTimeout(
        //     () =>
        //         queryReport2(request11)
        //             .then((resp) => displayResults11(resp))
        //             .catch((error) => console.error(error)),
        //     3500
        // );





        // const request12 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:newUsers"
        //         },
        //         {
        //             expression: "ga:30dayUsers"
        //         },
        //         {
        //             expression: "ga:percentNewSessions"
        //         },
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request12)
        //             .then((resp) => displayResults12(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );

        // const request13 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:30dayUsers"
        //         },
        //         {
        //             expression: "ga:sessions"
        //         },
        //         {
        //             expression: "ga:sessionDuration"
        //         },
        //         {
        //             expression: "ga:avgSessionDuration"
        //         },
        //         {
        //             expression: "ga:uniqueDimensionCombinations"
        //         },
        //         {
        //             expression: "ga:hits"
        //         },
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request13)
        //             .then((resp) => displayResults13(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );

        // const request14 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:30dayUsers"
        //         },
        //         {
        //             expression: "ga:pageValue"
        //         },
        //         {
        //             expression: "ga:entrances"
        //         },
        //         {
        //             expression: "ga:entranceRate"
        //         },
        //         {
        //             expression: "ga:pageviewsPerSession"
        //         },
        //         {
        //             expression: "ga:uniquePageviews"
        //         },
        //         {
        //             expression: "ga:timeOnPage"
        //         },
        //         {
        //             expression: "ga:avgTimeOnPage"
        //         },
        //         {
        //             expression: "ga:exits"
        //         },
        //         {
        //             expression: "ga:exitRate"
        //         }
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request14)
        //             .then((resp) => displayResults14(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );

        // const request15 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:searchResultViews"
        //         },
        //         {
        //             expression: "ga:searchUniques"
        //         },
        //         {
        //             expression: "ga:avgSearchResultViews"
        //         },
        //         {
        //             expression: "ga:searchSessions"
        //         },
        //         {
        //             expression: "ga:percentSessionsWithSearch"
        //         },
        //         {
        //             expression: "ga:searchDepth"
        //         },
        //         {
        //             expression: "ga:avgSearchDepth"
        //         },
        //         {
        //             expression: "ga:searchDuration"
        //         },
        //         {
        //             expression: "ga:avgSearchDuration"
        //         },
        //         {
        //             expression: "ga:searchExits"
        //         },
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request15)
        //             .then((resp) => displayResults15(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );

        // const request16 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:pageLoadTime"
        //         },
        //         {
        //             expression: "ga:pageLoadSample"
        //         },
        //         {
        //             expression: "ga:avgPageLoadTime"
        //         },
        //         {
        //             expression: "ga:domainLookupTime"
        //         },
        //         {
        //             expression: "ga:pageDownloadTime"
        //         },
        //         {
        //             expression: "ga:redirectionTime"
        //         },
        //         {
        //             expression: "ga:serverConnectionTime"
        //         },
        //         {
        //             expression: "ga:speedMetricsSample"
        //         },
        //         {
        //             expression: "ga:domInteractiveTime"
        //         },
        //         {
        //             expression: "ga:searchExits"
        //         },
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request16)
        //             .then((resp) => displayResults16(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );

        // const request17 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:screenviews"
        //         },
        //         {
        //             expression: "ga:uniqueScreenviews"
        //         },
        //         {
        //             expression: "ga:screenviewsPerSession"
        //         },
        //         {
        //             expression: "ga:timeOnScreen"
        //         },
        //         {
        //             expression: "ga:avgScreenviewDuration"
        //         },
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request17)
        //             .then((resp) => displayResults17(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );


        // const request18 = {
        //     viewID: props.viewID,
        //     startDate,
        //     endDate,
        //     metrics: [
        //         {
        //             expression: "ga:totalEvents"
        //         },
        //         {
        //             expression: "ga:uniqueEvents"
        //         },
        //         {
        //             expression: "ga:eventValue"
        //         },
        //         {
        //             expression: "ga:avgEventValue"
        //         },
        //         {
        //             expression: "ga:sessionsWithEvent"
        //         },
        //         {
        //             expression: "ga:eventsPerSessionWithEvent"
        //         },
        //     ],
        //     dimensions: ["ga:date"]
        // };
        // setTimeout(
        //     () =>
        //         queryReport3(request18)
        //             .then((resp) => displayResults18(resp))
        //             .catch((error) => console.error(error)),
        //     7500
        // );


    }, [startDate, endDate]);





    const dailyvisitreport = (element) => {
        // console.log("element=====other", element);
        return data.map((row) => (
            <div key={row.date}>{`${row.date}: ${row.visits} visits`}</div>
        ));
    };




    const renderHeader2 = (element) => {
        // console.log("element=====222", element);
        return (
            <>
                <th>{element}</th>
            </>
        )
    }

    const renderBody2 = (element) => {
        // console.log("element=====", element);
        return (
            <tr>
                {element.dimensions.map((obj) => <td>{obj}</td>)}
            </tr >
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
                {element.dimensions.map((obj) => <td>{obj}</td>)}
                {element.metrics[0].values.map((obj) => <td>{obj}</td>)}
            </tr >
        )
    }


    return (
        <>
            <Card
                card_title="Daily visits Report for the last 30 days"
                card_body={
                    <div>{dailyvisitreport()}</div>
                }
            />

            <Card
                card_title="Platform or Device"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders2.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data2?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="User and Session"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders3.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data3?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Traffic Sources"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders4.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data4?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Geo Network"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders5.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data5?.map(renderBody2)} </tbody>
                        </table>
                        <table id='internal_table'>
                            <thead>
                                <tr> {dimensionheaders51.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data51?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="System info"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders6.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data6?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Page Tracking"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders7.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data7?.map(renderBody2)} </tbody>
                        </table>
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders71.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data71?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Internal Search"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders8.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data8?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="App Tracking"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders9.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data9?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Event Tracking"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders10.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data10?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Social Interactions"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders11.map(renderHeader2)}</tr>
                            </thead>
                            <tbody>{data11?.map(renderBody2)} </tbody>
                        </table>
                    </div>
                }
            />


            <Card
                card_title="Users Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders12.map(renderHeader2)} {metriheaders12.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data12?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Session Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders13.map(renderHeader2)} {metriheaders13.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data13?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Page Tracking Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders14.map(renderHeader2)} {metriheaders14.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data14?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Internal Search Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders15.map(renderHeader2)} {metriheaders15.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data15?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Site Speed Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders16.map(renderHeader2)} {metriheaders16.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data16?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="App Tracking Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders17.map(renderHeader2)} {metriheaders17.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data17?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />

            <Card
                card_title="Event Tracking Metrics report"
                card_body={
                    <div className="internal_table">
                        <table id='internal_table'>
                            <thead>
                                <tr>{dimensionheaders18.map(renderHeader2)} {metriheaders18.map(renderHeader3)} </tr>
                            </thead>
                            <tbody>{data18?.map(renderBody3)} </tbody>
                        </table>
                    </div>
                }
            />
        </>
    );

};
export default OtherReports;
