const thirty_days = {

    chart: {
        type: 'column'
    },
    title: {
        text: 'Some Info'
    },
    
    xAxis: {
        categories: [
            'Free',
            'Users',
            'Paid'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Received Sub',
        // birinci, ikinci, üçüncü
        data: [100, 71.5, 106.4]

    }, {
        name: 'Created Form',
        data: [83.6, 78.8, 98.5]

    }, {
        name: 'Edited Form',
        data: [48.9, 38.8, 39.3]

    }]

}

export default thirty_days;