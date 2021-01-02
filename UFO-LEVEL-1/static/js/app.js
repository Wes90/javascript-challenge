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


var inputfield = d3.select('#datetime');
var button = d3.select('#filter-btn');

function filterreport() {
    var inputvalue = inputfield.property('value');
    
    console.log("A button was clicked!");
    console.log(d3.event.target);
    console.log(inputvalue);

    var x = tableData.filter(report => report.datetime == inputvalue);
    console.log(x);
    tbody.html("");
    
    x.forEach(function(UFOreport) {
        var row = tbody.append('tr');
        Object.entries(UFOreport).forEach(function([key, value]) {
            row.append('td').text(value);
        });
    });
};

button.on('click', filterreport);