import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    { duration: "2m", target: 400 }, // ramp up to 400 users
    { duration: "3h", target: 400 }, // stay at 400 for 3 hours
    { duration: "2m", target: 0 }, // scale down
  ],
};

export default () => {
  const urlRes = http.get("https://test-api.k6.io");
  sleep(1);
};