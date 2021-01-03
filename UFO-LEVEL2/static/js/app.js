// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(UFOreport) {
    var row = tbody.append('tr');
    Object.entries(UFOreport).forEach(function([key, value]) {
        row.append('td').text(value);
    });
});


var dateinput = d3.select('#datetime');
var cityname = d3.select('#city');
var statename = d3.select('#state');
var countryname = d3.select('#country');
var ufoshape = d3.select('#shape');

var button = d3.select('#filter-btn');

function filterreport() {
    var datevalue = dateinput.property('value');
    var cityvalue = cityname.property('value');
    var statevalue = statename.property('value');
    var countryvalue = countryname.property('value');
    var ufovalue = ufoshape.property('value');

    console.log("A button was clicked!");
    console.log(d3.event.target);
    console.log(datevalue);
    console.log(cityvalue);
    console.log(statevalue);
    console.log(countryvalue);
    console.log(ufovalue);


    filterlist = []
    
    var datefilter = tableData.filter(report => report.datetime == datevalue).push(filterlist);
    var cityfilter = tableData.filter(report => report.city == cityvalue).push(filterlist);
    var statefilter = tableData.filter(report => report.state == statevalue).push(filterlist);
    var countryfilter = tableData.filter(report => report.country == countryvalue).push(filterlist);
    var ufofilter = tableData.filter(report => report.shape == ufovalue).push(filterlist);

    console.log(filterlist);
    tbody.html("");

    
    filterlist.forEach(function(UFOreport) {
        var row = tbody.append('tr');
        Object.entries(UFOreport).forEach(function([key, value]) {
            row.append('td').text(value);
        });
    });
};

button.on('click', filterreport);