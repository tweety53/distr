/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

var Chart = require('chart.js');
var ctx = document.getElementById("myChart");

var gaussian = require('gaussian');

var mean1, mean2, mean3, variance1, variance2, variance3, alpha1, alpha2, alpha3;

var result1 = [];
var result2 = [];
var result3 = [];
var result4 = [];
var result5 = [];
var result6 = [];
var result = [];
var resultCumulative = [];
var labels = [];

var myChart;

$('#build-chart').on('click', function () {
    myChart = null;
    result1 = [];
    result2 = [];
    result3 = [];
    result = [];
    labels = [];
    resultCumulative = [];
    mean1 = $('#mean1').val();
    mean2 = $('#mean2').val();
    mean3 = $('#mean3').val();
    alpha1 = $('#alpha1').val();
    alpha2 = $('#alpha2').val();
    alpha3 = $('#alpha3').val();
    variance1 = $('#variance1').val();
    variance2 = $('#variance2').val();
    variance3 = $('#variance3').val();

    var mx = parseInt(mean1) + parseInt(mean2) + parseInt(mean3);
    var dx = parseInt(variance1) + parseInt(variance2) + parseInt(variance3);


    $('.mx').html("M(x) = " + mx);
    $('.dx').html("D(x) = " + dx);



    console.log(alpha1);
    console.log(alpha2);
    console.log(alpha3);

    var distribution1 = gaussian(mean1, variance1);
    var distribution2 = gaussian(mean2, variance2);
    var distribution3 = gaussian(mean3, variance3);

    for (var i = -10; i <= 10; i++) {
        var sample1 = distribution1.pdf(i);
        result1.push(sample1);
        var sample2 = distribution2.pdf(i);
        result2.push(sample2);
        var sample3 = distribution3.pdf(i);
        result3.push(sample3);
        var sample4 = distribution1.cdf(i);
        result4.push(sample4);
        var sample5 = distribution2.cdf(i);
        result5.push(sample5);
        var sample6 = distribution3.cdf(i);
        result6.push(sample6);

        var sample = alpha1 * sample1 + alpha2 * sample2 + alpha3 * sample3;
        var sampleCDF = alpha1 * sample4 + alpha2 * sample5 + alpha3 * sample6;
        result.push(sample);
        resultCumulative.push(sampleCDF);

        labels.push(i);
    }

    console.log(result);






    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'X 1',
                data: result1,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hidden: true
            },
                {
                    label: 'X 2',
                    data: result2,
                    backgroundColor: 'rgba(0, 255, 0, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    hidden: true
                },
                {
                    label: 'X 3',
                    data: result3,
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    hidden: true
                },
                {
                    label: 'f(x)',
                    data: result,
                    backgroundColor: 'rgba(132, 0, 0, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'F(x)',
                    data: resultCumulative,
                    backgroundColor: 'rgba(0, 255, 0, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }

            ]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


});




