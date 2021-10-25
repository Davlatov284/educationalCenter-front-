
// Dashboard 1 Morris-chart
Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            student: 0,
            teacher: 0,
            courses: 0
        }, {
            period: '2011',
            student: 75,
            teacher: 65,
            courses: 30
        }, {
            period: '2012',
            student: 32,
            teacher: 22,
            courses: 12
        }, {
            period: '2013',
            student: 75,
            teacher: 65,
            courses: 30
        }, {
            period: '2014',
            student: 32,
            teacher: 22,
            courses: 12
        }, {
            period: '2015',
            student: 75,
            teacher: 65,
            courses: 30
        },
         {
            period: '2016',
            student: 0,
            teacher: 0,
            courses: 0
        }],
        xkey: 'period',
        ykeys: ['student', 'teacher', 'courses'],
        labels: ['student', 'teacher', 'Courses'],
        pointSize: 0,
        fillOpacity: 0.9,
        pointStrokeColors:['#e7e8ef', '#51e4ff', '#16198d'],
        behaveLikeLine: true,
        gridLineColor: '#eef0f2',
        lineWidth: 0,
        hideHover: 'auto',
        lineColors: ['#e7e8ef', '#51e4ff', '#16198d'],
        resize: true
        
    });

 $('.vcarousel').carousel({
            interval: 3000
         })

let a= 5;
let b = 1;
let c = a>2 && b<=3;