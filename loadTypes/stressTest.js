import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "2m", target: 100 }, // below normal load
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 }, // normal load
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 }, // around breaking point
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 }, // beyond breaking point
    { duration: "5m", target: 400 },
    { duration: "10m", target: 0 }, // scale down. Recovery stage.
  ],
};

export default () => {
  const urlRes = http.get("https://test-api.k6.io");
  sleep(1);
};