    // Map
    import worldMap from "@highcharts/map-collection/custom/world.geo.json";

    
    const mapOptions = {
    chart: {
        map: worldMap,
        margin: [25, 0, 0, 0],
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
        alignTo: "spacingBox",
        },
    },
    title: {
        text: "Users by countries"
    },
    colorAxis: {
        min: 0,
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [
        {
        name: "# of users",
        states: {
            hover: {
            color: "#BADA55",
            },
        },
        dataLabels: {
            enabled: true,
            format: "{point.name}",
        },
        allAreas: false,
        data: [
            ["FO", 0],
            ["UM", 1],
            ["US", 2],
            ["JP", 3],
            ["SC", 4],
            ["IN", 5],
            ["FR", 6],
            ["FM", 7],
            ["CN", 8],
        ],
        },
    ],
    };

    export default mapOptions;
