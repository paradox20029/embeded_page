const temperatureData = {
    x: [1, 2, 3, 4, 5],
    y: [10, 12, 8, 14, 11],
    mode: 'lines',
    name: 'Temperature',
    type: 'scatter'
};

const heartRateData = {
    x: [1, 2, 3, 4, 5],
    y: [10, 12, 8, 14, 11],
    mode: 'lines',
    name: 'Heart Rate',
    type: 'scatter'
};

const oxygenData = {
    x: [10, 12, 8, 14, 11],
    y: [1, 2, 3, 4, 5],
    mode: 'lines',
    name: 'Oxygen Level',
    type: 'scatter'
};
const layout = {
    title: 'Sensor Data Monitoring',
    xaxis: {
        title: 'Timestamp'
    },
    yaxis: {
        title: 'Value'
    }
};
