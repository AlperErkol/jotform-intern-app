const plans = {
    chart: {
        type: 'area',
        
    },
    title: {
        text: 'Plans'
    },
    
    xAxis: {
        categories: ['2 Months Ago', '1 Month Ago', 'Present'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: '# of users by plans'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        
    },
    plotOptions: {
        area: {
            
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Bronze',
        data: [null]
    }, {
        name: 'Silver',
        data: [null]
    }, {
        name: 'Gold',
        data: [null]
    }]
}

export default plans;