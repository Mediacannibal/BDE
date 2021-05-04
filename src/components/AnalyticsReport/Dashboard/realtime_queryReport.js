import { format } from "date-fns";

export const realtime_queryReport = (props) => {

  const {
    metrics,
    dimensions,
  } = props;

  return window.gapi.client.request({

    path: "/v1beta/properties/269126937:runRealtimeReport",
    root: "https://analyticsdata.googleapis.com/",
    method: "POST",
    headers: {
      'Authorization': `Bearer ${JSON.parse(String(localStorage.getItem("Bearer")))}`,
    },
    body: {
      "metrics": metrics,
      "dimensions": dimensions
    }
  });
};
