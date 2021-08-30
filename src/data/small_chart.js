const users_chart = {

    chart: {
        type: 'column',
        margin: [0, 0, 0, 0],
        backgroundColor: '#26A69A',
        
    },
    credits: {
        enabled: false
    },
    title: {
        text: null
    },
    
    legend: {
        enabled: false
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    
    
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
            groupPadding: 0.1
        },
        series : {
            color : '#93D2CC'
        }
    },
    series: null
}

const mobile_views_count_chart = {

    chart: {
        type: 'column',
        margin: [0, 0, 0, 0],
        backgroundColor: '#26A69A',
        
    },
    credits: {
        enabled: false
    },
    title: {
        text: null
    },
    
    legend: {
        enabled: false
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
            groupPadding: 0.1
        },
        series : {
            color : '#93D2CC'
        }
    },
    series: null

}

// Mobile Views Styles
mobile_views_count_chart.chart.backgroundColor = "#fff";
mobile_views_count_chart.plotOptions.series.color = "#5c6bc0";

const daily_visits_chart = {

    chart: {
        type: 'column',
        margin: [0, 0, 0, 0],
        backgroundColor: '#26A69A',
        
    },
    credits: {
        enabled: false
    },
    title: {
        text: null
    },
    
    legend: {
        enabled: false
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
            groupPadding: 0.1
        },
        series : {
            color : '#93D2CC'
        }
    },
    series: null

}

// Daily Visits Styles
daily_visits_chart.chart.backgroundColor = "#fff";
daily_visits_chart.plotOptions.series.color = "#EC407A";

const total_paid = {
    title: {
        text: null
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            
        }
    },

    series: [{
        name : "Total Paid ",
        data: null,
        date : null
    }]
}


export {users_chart,mobile_views_count_chart,daily_visits_chart,total_paid};
