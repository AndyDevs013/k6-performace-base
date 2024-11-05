import http from "k6/http";
import { sleep } from "k6";

// Get the load option name from the environment variable or default to "mediumLoad"
const loadOptionName = __ENV.LOAD_OPTION || "mediumLoad";

// Dynamically import the load option
const loadOptions = require(`../loadTypes/${loadOptionName}.js`);

// Use the imported options
export const options = loadOptions.options;

export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}
