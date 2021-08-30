const form_views_chart = {
    chart: {
        type: 'pie',
        
    },
    title: {
        text: 'Form Views'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.x}</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Form View Share',
        data: [
            {
                name : 'Direct',
                x : 0,
                y : 45,
                
            },
            {
                name : 'Embed',
                x : 0,
                y : 23
            },

            {
                name: 'Mobile',
                x : 0,
                y: 11
            },

            
        ]
    }]
}

export default form_views_chart;