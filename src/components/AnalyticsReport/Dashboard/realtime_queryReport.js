import { format } from "date-fns";

export const realtime_queryReport = (props) => {

  const {
    metrics,
    dimensions,
  } = props;

  const requestDimensions = (dimensions) => {
    let result = [];
    dimensions.forEach((item) => {
      result.push({
        name: item,
      });
    });
    return result;
  };
  return window.gapi.client.request({

    path: "/v1beta/properties/269126937:runRealtimeReport",
    root: "https://analyticsdata.googleapis.com/",
    method: "POST",
    headers: {
      'Authorization': `Bearer ${JSON.parse(String(localStorage.getItem("Bearer")))}`,
    },
    body: {
      "metrics": [
        {
          "name": metrics
        }
      ],
      "dimensions": [
        {
          "name": dimensions
        },
      ],
    }
  });
};
