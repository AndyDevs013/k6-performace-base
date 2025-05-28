import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "2m", target: 2000 }, // spike to 2000 users
    { duration: "1m", target: 2000 }, // stay at 2000 for 1 minute
    { duration: "2m", target: 0 }, // scale down
  ],
};

export default () => {
  const urlRes = http.get("https://test-api.k6.io");
  sleep(1);
};