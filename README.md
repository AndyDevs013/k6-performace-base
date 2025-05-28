# k6 Performance Testing Template

This is a template repository for setting up performance and load testing with [k6](https://k6.io/). Use this project as a foundation for writing and running performance tests for your applications and services.

## Available Test Types

1. **Low Load Test**: Gradual ramp-up to simulate normal traffic conditions
   ```bash
   npm run lowLoad
   ```

2. **Medium Load Test**: Moderate traffic simulation for 30 seconds
   ```bash
   npm run mediumLoad
   ```

3. **High Load Test**: High traffic simulation with 50 virtual users
   ```bash
   npm run highLoad
   ```

4. **Stress Test**: Gradually increasing load to find breaking points
   ```bash
   npm run stress
   ```

5. **Spike Test**: Sudden surge of users to test system resilience
   ```bash
   npm run spike
   ```

6. **Soak Test**: Long-duration test to find memory leaks and performance degradation
   ```bash
   npm run soak
   ```

## Setup

1. **Install k6:**
   
   macOS:
   ```bash
   brew install k6
   ```
   
   Windows:
   ```bash
   choco install k6
   ```
   
   [Other installation methods](https://k6.io/docs/getting-started/installation/)

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Project Structure

```
k6-performance-tests/
│
├── loadTypes/
│   ├── lowLoad.js      # Gradual ramp-up test
│   ├── mediumLoad.js   # Moderate load test
│   ├── highLoad.js     # High traffic test
│   ├── stressTest.js   # System stress test
│   ├── spikeTest.js    # Traffic spike test
│   └── soakTest.js     # Long-duration test
│
├── tests/
│   └── script.js       # Main test script
│
├── package.json
└── README.md
```

## Usage in Other Projects

1. Copy the `loadTypes` directory and `tests/script.js` to your project
2. Add the npm scripts to your package.json:
   ```json
   {
     "scripts": {
       "lowLoad": "LOAD_OPTION=lowLoad k6 run tests/script.js",
       "mediumLoad": "LOAD_OPTION=mediumLoad k6 run tests/script.js",
       "highLoad": "LOAD_OPTION=highLoad k6 run tests/script.js",
       "stress": "LOAD_OPTION=stressTest k6 run tests/script.js",
       "spike": "LOAD_OPTION=spikeTest k6 run tests/script.js",
       "soak": "LOAD_OPTION=soakTest k6 run tests/script.js"
     }
   }
   ```

## Customizing Tests

Modify the test scenarios in the `loadTypes` directory to match your requirements. Each file exports an `options` object that defines the test parameters:

```javascript
export const options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 10 },
    { duration: "20s", target: 0 },
  ],
};
```

## Metrics and Thresholds

Add custom metrics and thresholds in your test scripts:

```javascript
export const options = {
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests must complete below 500ms
    http_req_failed: ["rate<0.01"],   // http errors should be less than 1%
  },
};
```