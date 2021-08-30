const guests = {
    chart: {
        type: 'bar',
        
    },
    title: {
        text: 'Guests'
    },

    xAxis: {
        categories: ['Guest Type'],
        title: {
            text: null
        }
    },
    yAxis: {
        visible : false
    },
    
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Guest with E-Mail',
        data: []
    }, {
        name: 'Guest without E-Mail',
        data: []
    }]
}

export default guests;