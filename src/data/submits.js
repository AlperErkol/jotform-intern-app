const submits = {
    chart: {
    type: 'column'
},
title: {
    text: 'Submits'
},

accessibility: {
    announceNewData: {
        enabled: true
    }
},
xAxis: {
    type: 'Submit Types'
},
yAxis: {
    title: {
        text: 'Total percent submit share'
    }

},
legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y}'
        }
    }
},

series: [
    {
        name: "# of submits",
        colorByPoint: true,
        data: [
            {
                name: "submit1",
                y: null,
            },
            {
                name: "submit5",
                y: null,
            },
            {
                name: "submit10",
                y: null,
            },
            {
                name: "submit100",
                y: null,
            },
            {
                name: "submit1000",
                y: null,
            }
        ]
    }
]
}

export default submits;