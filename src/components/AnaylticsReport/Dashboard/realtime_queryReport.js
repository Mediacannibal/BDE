import { format } from "date-fns";

export const realtime_queryReport = (props) => {

  return window.gapi.client.request({
    path: "/v1beta/properties/269126937:runRealtimeReport",
    root: "https://analyticsdata.googleapis.com/",
    method: "POST",
    body: {
      "dimensions": [
        {
          "name": "country"
        },
        {
          "name": "city"
        }
      ],
      "metrics": [{ "name": "activeUsers" }]
    }
  });
};
